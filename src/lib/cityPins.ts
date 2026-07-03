import type { TravelEntry } from '../types'
import { normalizeText } from './text'

const CITY_PIN_CACHE_KEY = 'atlas.cityPins.v2'
const CITY_PIN_MISS_RETRY_MS = 86_400_000
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

export interface CityPinMiss {
  status: 'miss'
  retryAfter: number
}

export type CityPinCacheEntry = CityPin | CityPinMiss
export type CityPinCache = Record<string, CityPinCacheEntry>

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

export function isCachedCityPin(entry: CityPinCacheEntry | undefined): entry is CityPin {
  return Boolean(entry && 'coordinates' in entry)
}

export function shouldResolveCityPin(entry: CityPinCacheEntry | undefined, now: number = Date.now()): boolean {
  if (!entry || isCachedCityPin(entry)) return !entry
  return entry.retryAfter <= now
}

export function createCityPinMiss(now: number = Date.now()): CityPinMiss {
  return { status: 'miss', retryAfter: now + CITY_PIN_MISS_RETRY_MS }
}

export function readCityPinCache(storage: Storage = window.localStorage): CityPinCache {
  try {
    const raw = storage.getItem(CITY_PIN_CACHE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as CityPinCache
  } catch {
    return {}
  }
}

export function writeCityPinCache(pins: CityPinCache, storage: Storage = window.localStorage): void {
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
