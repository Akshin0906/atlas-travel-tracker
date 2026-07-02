import { citiesByIso2 } from '../data/metroCities'
import type { TourismCity, TourismCountry } from '../types'
import { normalizeText } from './text'

export interface CountryCityOption {
  name: string
  highlightCount: number
  source: 'guide' | 'metro'
}

export function cityOptionsForCountry(country: TourismCountry): CountryCityOption[] {
  return cityOptionsForCountryCode(country.iso2, country.cities)
}

export function cityOptionsForCountryCode(iso2: string, guideCities: readonly TourismCity[] = []): CountryCityOption[] {
  const options = new Map<string, CountryCityOption>()

  for (const name of citiesForCountry(iso2)) {
    options.set(normalizeText(name), { name, highlightCount: 0, source: 'metro' })
  }

  for (const city of guideCities) {
    options.set(normalizeText(city.name), {
      name: city.name,
      highlightCount: city.pois.length,
      source: 'guide',
    })
  }

  return [...options.values()]
}

export function citiesForCountry(iso2: string): readonly string[] {
  if (iso2 in citiesByIso2) return citiesByIso2[iso2]
  return []
}
