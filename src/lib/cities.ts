import { metroCitiesByIso2, type MetroCityCountryCode } from '../data/metroCities'
import type { TourismCountry } from '../types'
import { normalizeText } from './text'

export interface CountryCityOption {
  name: string
  highlightCount: number
  source: 'guide' | 'metro'
}

export function cityOptionsForCountry(country: TourismCountry): CountryCityOption[] {
  const options = new Map<string, CountryCityOption>()

  for (const name of metroCitiesForCountry(country.iso2)) {
    options.set(normalizeText(name), { name, highlightCount: 0, source: 'metro' })
  }

  for (const city of country.cities) {
    options.set(normalizeText(city.name), {
      name: city.name,
      highlightCount: city.pois.length,
      source: 'guide',
    })
  }

  return [...options.values()]
}

function metroCitiesForCountry(iso2: string): readonly string[] {
  if (iso2 in metroCitiesByIso2) return metroCitiesByIso2[iso2 as MetroCityCountryCode]
  return []
}
