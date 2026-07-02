// Pure helpers for building and mutating TravelEntry records.
import type { Country, EntityType, TravelEntity, TravelEntry, USState } from '../types'
import { nowIso } from './utils'

export function entityKey(type: EntityType, countryCode: string, stateCode?: string): string {
  return type === 'us_state' ? `us_state:US-${stateCode}` : `country:${countryCode}`
}

export function countryEntity(c: Country): TravelEntity {
  return { type: 'country', key: entityKey('country', c.iso2), name: c.name, countryCode: c.iso2 }
}

export function stateEntity(s: USState): TravelEntity {
  return {
    type: 'us_state',
    key: entityKey('us_state', 'US', s.code),
    name: s.name,
    countryCode: 'US',
    stateCode: s.code,
  }
}

export type EntryPatch = Partial<
  Pick<TravelEntry, 'visited' | 'favorite' | 'visits' | 'cities' | 'notes'>
>

export function createEntry(entity: TravelEntity, now: string = nowIso()): TravelEntry {
  return {
    key: entity.key,
    entityType: entity.type,
    countryCode: entity.countryCode,
    stateCode: entity.stateCode,
    name: entity.name,
    visited: false,
    favorite: false,
    visits: [],
    cities: [],
    notes: '',
    createdAt: now,
    updatedAt: now,
  }
}

/** Apply a patch to an existing entry, or to a fresh one if none exists yet. */
export function mergeEntry(
  existing: TravelEntry | undefined,
  entity: TravelEntity,
  patch: EntryPatch,
  now: string = nowIso(),
): TravelEntry {
  const base = existing ?? createEntry(entity, now)
  return { ...base, ...patch, updatedAt: now }
}

/** True when the entry carries no personal data and can be deleted from storage. */
export function isEmptyEntry(e: TravelEntry): boolean {
  return (
    !e.visited &&
    !e.favorite &&
    e.visits.length === 0 &&
    e.cities.length === 0 &&
    e.notes.trim() === ''
  )
}

export function addCityTag(cities: string[], city: string): string[] {
  const trimmed = city.trim()
  if (!trimmed) return cities
  if (cities.some((c) => c.toLowerCase() === trimmed.toLowerCase())) return cities
  return [...cities, trimmed]
}

export function removeCityTag(cities: string[], city: string): string[] {
  return cities.filter((c) => c !== city)
}
