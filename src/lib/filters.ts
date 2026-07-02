// Discovery filtering over the static tourism dataset.
//
// Semantics: selected travel styles are ANDed (a country must offer all of
// them), weather tags are ORed (any climate match counts), and the remaining
// dimensions (region, visited, favorites, season) are ANDed across categories.
import type { FilterState, TourismCountry, TravelEntry } from '../types'
import { SEASON_MONTHS } from '../data/tags'
import { entityKey } from './travel'

export const defaultFilters: FilterState = {
  styles: [],
  weather: [],
  visited: 'all',
  favoritesOnly: false,
  regions: [],
  season: 'overall',
}

export function isFilterActive(f: FilterState): boolean {
  return (
    f.styles.length > 0 ||
    f.weather.length > 0 ||
    f.visited !== 'all' ||
    f.favoritesOnly ||
    f.regions.length > 0 ||
    f.season !== 'overall'
  )
}

export function countActiveFilters(f: FilterState): number {
  let n = f.styles.length + f.weather.length + f.regions.length
  if (f.visited !== 'all') n += 1
  if (f.favoritesOnly) n += 1
  if (f.season !== 'overall') n += 1
  return n
}

export function matchesFilters(
  tc: TourismCountry,
  entry: TravelEntry | undefined,
  f: FilterState,
): boolean {
  if (f.styles.length > 0 && !f.styles.every((s) => tc.styles.includes(s))) return false
  if (f.weather.length > 0 && !f.weather.some((w) => tc.climate.includes(w))) return false
  if (f.regions.length > 0 && !f.regions.includes(tc.region)) return false
  if (f.visited === 'visited' && !entry?.visited) return false
  if (f.visited === 'unvisited' && entry?.visited === true) return false
  if (f.favoritesOnly && !entry?.favorite) return false
  if (f.season !== 'overall') {
    const months = SEASON_MONTHS[f.season]
    if (!tc.bestTime.months.some((m) => months.includes(m))) return false
  }
  return true
}

export function filterCountries(
  tourism: readonly TourismCountry[],
  entries: Record<string, TravelEntry>,
  f: FilterState,
): TourismCountry[] {
  return tourism.filter((tc) => matchesFilters(tc, entries[entityKey('country', tc.iso2)], f))
}

/** Whether a season falls inside a country's best-time months. */
export function seasonFit(tc: TourismCountry, season: Exclude<FilterState['season'], 'overall'>): boolean {
  return tc.bestTime.months.some((m) => SEASON_MONTHS[season].includes(m))
}
