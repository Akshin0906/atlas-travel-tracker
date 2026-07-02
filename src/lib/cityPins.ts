import type { TravelEntry } from '../types'
import { normalizeText } from './search'

const CITY_PIN_CACHE_KEY = 'atlas.cityPins.v1'
const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search'

export interface CityPin {
  id: string
  entryKey: string
  city: string
  label: string
  /** [lon, lat] */
  coordinates: [number, number]
}

export interface CityPinCandidate {
  id: string
  entryKey: string
  city: string
  label: string
  query: string
  countryCode: string
}

function cityPinId(entry: TravelEntry, city: string): string {
  return `${entry.key}:${normalizeText(city)}`
}

export function cityPinCandidates(entries: Record<string, TravelEntry>): CityPinCandidate[] {
  const candidates: CityPinCandidate[] = []
  for (const entry of Object.values(entries)) {
    for (const city of entry.cities) {
      const trimmed = city.trim()
      if (!trimmed) continue
      const region = entry.entityType === 'us_state' ? `${entry.name}, United States` : entry.name
      candidates.push({
        id: cityPinId(entry, trimmed),
        entryKey: entry.key,
        city: trimmed,
        label: `${trimmed}, ${entry.name}`,
        query: `${trimmed}, ${region}`,
        countryCode: entry.countryCode.toLowerCase(),
      })
    }
  }
  return candidates
}

export function readCityPinCache(storage: Storage = window.localStorage): Record<string, CityPin> {
  try {
    const raw = storage.getItem(CITY_PIN_CACHE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as Record<string, CityPin>
  } catch {
    return {}
  }
}

export function writeCityPinCache(pins: Record<string, CityPin>, storage: Storage = window.localStorage): void {
  try {
    storage.setItem(CITY_PIN_CACHE_KEY, JSON.stringify(pins))
  } catch {
    // Geocoding is a progressive enhancement; failing to cache should not block tracking.
  }
}

export async function resolveCityPin(candidate: CityPinCandidate, signal?: AbortSignal): Promise<CityPin | null> {
  const params = new URLSearchParams({
    format: 'jsonv2',
    limit: '1',
    q: candidate.query,
    countrycodes: candidate.countryCode,
  })

  const response = await fetch(`${NOMINATIM_URL}?${params.toString()}`, {
    headers: { Accept: 'application/json' },
    signal,
  })
  if (!response.ok) return null

  const results = (await response.json()) as Array<{ lat?: string; lon?: string }>
  const first = results[0]
  if (!first?.lat || !first.lon) return null

  const lat = Number(first.lat)
  const lon = Number(first.lon)
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null

  return {
    id: candidate.id,
    entryKey: candidate.entryKey,
    city: candidate.city,
    label: candidate.label,
    coordinates: [lon, lat],
  }
}
