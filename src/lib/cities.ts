import type { TourismCity, TourismCountry } from '../types'
import { normalizeText } from './text'

export interface CountryCityOption {
  name: string
  normalizedName: string
  highlightCount: number
  source: 'guide' | 'metro'
}

const EMPTY_GUIDE_CITIES: readonly TourismCity[] = []
const METRO_CITIES_PATH = 'data/metro-cities.json'
const metroOptionsByIso2 = new Map<string, CountryCityOption[]>()
const optionsByGuideCities = new WeakMap<readonly TourismCity[], Map<string, CountryCityOption[]>>()
let metroCitiesCache: Promise<MetroCitiesByIso2> | null = null

export type MetroCitiesByIso2 = Record<string, string[]>

export function loadMetroCities(): Promise<MetroCitiesByIso2> {
  if (!metroCitiesCache) metroCitiesCache = fetchMetroCities()
  return metroCitiesCache
}

export async function cityOptionsForCountry(country: TourismCountry): Promise<CountryCityOption[]> {
  return cityOptionsForCountryCode(country.iso2, country.cities)
}

export async function cityOptionsForCountryCode(
  iso2: string,
  guideCities: readonly TourismCity[] = EMPTY_GUIDE_CITIES,
): Promise<CountryCityOption[]> {
  if (guideCities.length === 0) return metroOptionsForCountry(iso2)

  let optionsByIso2 = optionsByGuideCities.get(guideCities)
  if (!optionsByIso2) {
    optionsByIso2 = new Map()
    optionsByGuideCities.set(guideCities, optionsByIso2)
  }

  const cached = optionsByIso2.get(iso2)
  if (cached) return cached

  const options = new Map<string, CountryCityOption>()

  for (const option of await metroOptionsForCountry(iso2)) {
    options.set(option.normalizedName, option)
  }

  for (const city of guideCities) {
    const normalizedName = normalizeText(city.name)
    options.set(normalizedName, {
      name: city.name,
      normalizedName,
      highlightCount: city.pois.length,
      source: 'guide',
    })
  }

  const mergedOptions = [...options.values()]
  optionsByIso2.set(iso2, mergedOptions)
  return mergedOptions
}

export async function citiesForCountry(iso2: string): Promise<readonly string[]> {
  const citiesByIso2 = await loadMetroCities()
  return citiesByIso2[iso2] ?? []
}

async function metroOptionsForCountry(iso2: string): Promise<CountryCityOption[]> {
  const cached = metroOptionsByIso2.get(iso2)
  if (cached) return cached

  const citiesByIso2 = await loadMetroCities()
  const options = (citiesByIso2[iso2] ?? []).map((name) => ({
    name,
    normalizedName: normalizeText(name),
    highlightCount: 0,
    source: 'metro' as const,
  }))
  metroOptionsByIso2.set(iso2, options)
  return options
}

async function fetchMetroCities(): Promise<MetroCitiesByIso2> {
  const response = await fetch(`${import.meta.env.BASE_URL}${METRO_CITIES_PATH}`)
  if (!response.ok) throw new Error(`Failed to load ${METRO_CITIES_PATH}: ${response.status}`)

  const data = await response.json()
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error(`Invalid ${METRO_CITIES_PATH}`)
  }
  return data as MetroCitiesByIso2
}
