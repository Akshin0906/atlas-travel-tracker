import type { Country, TourismCountry, USState } from '../types'
import { countries as allCountries } from '../data/countries'
import { tourismCountries as allTourismCountries } from '../data/tourismCountries'
import { cityOptionsForCountryCode } from './cities'
import { normalizeText } from './text'
import { countryEntity } from './travel'
import { scoreCandidate, searchEntities, sortSearchResults, type SearchResult } from './search'

export interface CitySearchOptions {
  countries?: Country[]
  states?: USState[]
  tourismCountries?: readonly TourismCountry[]
  limit?: number
}

export function searchCityEntities(query: string, options: CitySearchOptions = {}): SearchResult[] {
  const { countries = allCountries, tourismCountries = allTourismCountries, limit = 12 } = options
  const q = normalizeText(query)
  if (q.length < 2) return []

  const results: SearchResult[] = []
  const tourismByIso2 = new Map(tourismCountries.map((country) => [country.iso2, country]))

  for (const country of countries) {
    const tourismCountry = tourismByIso2.get(country.iso2)
    const entity = countryEntity(country)
    for (const city of cityOptionsForCountryCode(country.iso2, tourismCountry?.cities ?? [])) {
      const score = scoreCandidate(q, city.name)
      if (score <= 0) continue
      results.push({
        id: `${entity.key}:city:${normalizeText(city.name)}`,
        entity,
        kind: 'city',
        city: city.name,
        score: score - 5,
        sub: `City in ${country.name}`,
      })
    }
  }

  return sortSearchResults(results).slice(0, limit)
}

export function searchEntitiesWithCities(query: string, options: CitySearchOptions = {}): SearchResult[] {
  const limit = options.limit ?? 12
  return sortSearchResults([
    ...searchEntities(query, { countries: options.countries, states: options.states, limit }),
    ...searchCityEntities(query, { countries: options.countries, tourismCountries: options.tourismCountries, limit }),
  ]).slice(0, limit)
}
