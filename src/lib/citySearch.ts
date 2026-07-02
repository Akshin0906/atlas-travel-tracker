import type { Country, TourismCountry, USState } from '../types'
import { countries as allCountries } from '../data/countries'
import { tourismCountries as allTourismCountries } from '../data/tourismCountries'
import { cityOptionsForCountryCode } from './cities'
import { normalizeText } from './text'
import { countryEntity } from './travel'
import { searchEntities, sortSearchResults, type SearchResult } from './search'

export interface CitySearchOptions {
  countries?: readonly Country[]
  states?: readonly USState[]
  tourismCountries?: readonly TourismCountry[]
  limit?: number
}

interface CitySearchItem {
  id: string
  entity: SearchResult['entity']
  city: string
  normalizedName: string
  normalizedWords: readonly string[]
  sub: string
}

interface CitySearchIndex {
  items: CitySearchItem[]
  exact: Map<string, CitySearchItem[]>
  starts: Map<string, CitySearchItem[]>
  wordStarts: Map<string, CitySearchItem[]>
}

const tourismMapCache = new WeakMap<readonly TourismCountry[], Map<string, TourismCountry>>()
const citySearchIndexCache = new WeakMap<readonly Country[], WeakMap<readonly TourismCountry[], CitySearchIndex>>()

export function searchCityEntities(query: string, options: CitySearchOptions = {}): SearchResult[] {
  const { countries = allCountries, tourismCountries = allTourismCountries, limit = 12 } = options
  const q = normalizeText(query)
  if (q.length < 2) return []

  return searchCityIndex(citySearchIndexFor(countries, tourismCountries), q, limit)
}

export function searchEntitiesWithCities(query: string, options: CitySearchOptions = {}): SearchResult[] {
  const limit = options.limit ?? 12
  return sortSearchResults([
    ...searchEntities(query, { countries: options.countries, states: options.states, limit }),
    ...searchCityEntities(query, { countries: options.countries, tourismCountries: options.tourismCountries, limit }),
  ]).slice(0, limit)
}

function citySearchIndexFor(
  countries: readonly Country[],
  tourismCountries: readonly TourismCountry[],
): CitySearchIndex {
  let indexByTourismCountries = citySearchIndexCache.get(countries)
  if (!indexByTourismCountries) {
    indexByTourismCountries = new WeakMap()
    citySearchIndexCache.set(countries, indexByTourismCountries)
  }

  const cached = indexByTourismCountries.get(tourismCountries)
  if (cached) return cached

  const tourismByIso2 = tourismMapFor(tourismCountries)
  const index: CitySearchIndex = {
    items: [],
    exact: new Map(),
    starts: new Map(),
    wordStarts: new Map(),
  }

  for (const country of countries) {
    const tourismCountry = tourismByIso2.get(country.iso2)
    const entity = countryEntity(country)
    for (const city of cityOptionsForCountryCode(country.iso2, tourismCountry?.cities ?? [])) {
      const item: CitySearchItem = {
        id: `${entity.key}:city:${city.normalizedName}`,
        entity,
        city: city.name,
        normalizedName: city.normalizedName,
        normalizedWords: city.normalizedName.split(/[\s,()-]+/).filter(Boolean),
        sub: `City in ${country.name}`,
      }
      index.items.push(item)
      addToBucket(index.exact, item.normalizedName, item)
      addToBucket(index.starts, bucketKey(item.normalizedName), item)

      const seenWordBuckets = new Set<string>()
      for (const word of item.normalizedWords) {
        const key = bucketKey(word)
        if (!key || seenWordBuckets.has(key)) continue
        seenWordBuckets.add(key)
        addToBucket(index.wordStarts, key, item)
      }
    }
  }

  indexByTourismCountries.set(tourismCountries, index)
  return index
}

function tourismMapFor(tourismCountries: readonly TourismCountry[]): Map<string, TourismCountry> {
  const cached = tourismMapCache.get(tourismCountries)
  if (cached) return cached

  const map = new Map(tourismCountries.map((country) => [country.iso2, country]))
  tourismMapCache.set(tourismCountries, map)
  return map
}

function searchCityIndex(index: CitySearchIndex, query: string, limit: number): SearchResult[] {
  const results: SearchResult[] = []
  const seen = new Set<string>()
  const key = bucketKey(query)

  addMatches(results, seen, index.exact.get(query) ?? [], 120)
  if (results.length >= limit) return sortSearchResults(results).slice(0, limit)

  addMatches(results, seen, index.starts.get(key) ?? [], 100, (item) => item.normalizedName.startsWith(query))
  if (results.length >= limit) return sortSearchResults(results).slice(0, limit)

  addMatches(
    results,
    seen,
    index.wordStarts.get(key) ?? [],
    80,
    (item) => item.normalizedWords.some((word) => word.startsWith(query)),
  )
  if (results.length >= limit) return sortSearchResults(results).slice(0, limit)

  addMatches(results, seen, index.items, 60, (item) => item.normalizedName.includes(query))
  return sortSearchResults(results).slice(0, limit)
}

function addMatches(
  results: SearchResult[],
  seen: Set<string>,
  items: readonly CitySearchItem[],
  score: number,
  predicate?: (item: CitySearchItem) => boolean,
): void {
  for (const item of items) {
    if (seen.has(item.id) || (predicate && !predicate(item))) continue
    seen.add(item.id)
    results.push({
      id: item.id,
      entity: item.entity,
      kind: 'city',
      city: item.city,
      score: score - 5,
      sub: item.sub,
    })
  }
}

function addToBucket(
  buckets: Map<string, CitySearchItem[]>,
  key: string,
  item: CitySearchItem,
): void {
  if (!key) return
  const items = buckets.get(key)
  if (items) items.push(item)
  else buckets.set(key, [item])
}

function bucketKey(value: string): string {
  return value.slice(0, 2)
}
