// Loads local TopoJSON (world countries + US states), converts to GeoJSON
// features and links each feature to a selectable TravelEntity. Focus targets
// (centroid, globe altitude, map zoom) are precomputed per feature.
import { feature as topoFeature } from 'topojson-client'
import type { Topology, GeometryCollection } from 'topojson-specification'
import { geoArea, geoCentroid } from 'd3-geo'
import type { Feature, FeatureCollection, Geometry } from 'geojson'
import type { TravelEntity } from '../types'
import { countriesByNumeric } from '../data/countries'
import { usStatesByFips } from '../data/usStates'
import { countryEntity, stateEntity } from './travel'
import { clamp } from './utils'

export type GeoProps = Record<string, unknown>
export type EntityGeoFeature = Feature<Geometry, GeoProps>

export interface EntityFeature {
  feature: EntityGeoFeature
  entity: TravelEntity
  /** [lon, lat] */
  centroid: [number, number]
  /** Globe camera altitude used when flying to this entity. */
  altitude: number
  /** Flat-map zoom used when flying to this entity. */
  zoom: number
}

export interface GeoData {
  countryFeatures: EntityFeature[]
  stateFeatures: EntityFeature[]
  /** Unmatched polygons (disputed territories etc.) rendered muted, non-interactive. */
  backgroundFeatures: EntityGeoFeature[]
  byKey: Map<string, EntityFeature>
}

const ANTARCTICA_ID = '010'

function buildEntityFeature(feature: EntityGeoFeature, entity: TravelEntity): EntityFeature {
  const area = geoArea(feature) // steradians on the unit sphere
  const sqrt = Math.sqrt(Math.max(area, 1e-7))
  const [lon, lat] = geoCentroid(feature)
  // Mark the feature so map components can resolve clicks back to entities.
  feature.properties = { ...feature.properties, entityKey: entity.key }
  return {
    feature,
    entity,
    centroid: [lon, lat],
    altitude: clamp(sqrt * 4.5, 0.35, 2.2),
    zoom: clamp(0.45 / sqrt, 2.2, 16),
  }
}

async function fetchTopo(path: string): Promise<Topology> {
  const res = await fetch(`${import.meta.env.BASE_URL}${path}`)
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`)
  return (await res.json()) as Topology
}

async function fetchGeoData(): Promise<GeoData> {
  const [world, us] = await Promise.all([
    fetchTopo('geo/countries-50m.json'),
    fetchTopo('geo/us-states-10m.json'),
  ])

  const worldFc = topoFeature(
    world,
    world.objects.countries as GeometryCollection<GeoProps>,
  ) as FeatureCollection<Geometry, GeoProps>
  const usFc = topoFeature(
    us,
    us.objects.states as GeometryCollection<GeoProps>,
  ) as FeatureCollection<Geometry, GeoProps>

  const countryFeatures: EntityFeature[] = []
  const backgroundFeatures: EntityGeoFeature[] = []

  for (const f of worldFc.features) {
    const id = String(f.id ?? '').padStart(3, '0')
    if (id === ANTARCTICA_ID) continue
    const country = countriesByNumeric.get(id)
    if (!country) {
      backgroundFeatures.push(f)
      continue
    }
    countryFeatures.push(buildEntityFeature(f, countryEntity(country)))
  }

  const stateFeatures: EntityFeature[] = []
  for (const f of usFc.features) {
    const state = usStatesByFips.get(String(f.id ?? ''))
    if (!state) continue // DC / territories in us-atlas are skipped
    stateFeatures.push(buildEntityFeature(f, stateEntity(state)))
  }

  const byKey = new Map<string, EntityFeature>()
  for (const ef of [...countryFeatures, ...stateFeatures]) byKey.set(ef.entity.key, ef)

  return { countryFeatures, stateFeatures, backgroundFeatures, byKey }
}

let cache: Promise<GeoData> | null = null

/** Cached — the TopoJSON is fetched and processed once per session. */
export function loadGeoData(): Promise<GeoData> {
  if (!cache) cache = fetchGeoData()
  return cache
}
