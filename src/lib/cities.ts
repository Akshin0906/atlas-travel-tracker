import { citiesByIso2 } from '../data/metroCities'
import type { TourismCity, TourismCountry } from '../types'
import { normalizeText } from './text'

export interface CountryCityOption {
  name: string
  normalizedName: string
  highlightCount: number
  source: 'guide' | 'metro'
}

const EMPTY_GUIDE_CITIES: readonly TourismCity[] = []
const metroOptionsByIso2 = new Map<string, CountryCityOption[]>()
const optionsByGuideCities = new WeakMap<readonly TourismCity[], Map<string, CountryCityOption[]>>()

export function cityOptionsForCountry(country: TourismCountry): CountryCityOption[] {
  return cityOptionsForCountryCode(country.iso2, country.cities)
}

export function cityOptionsForCountryCode(
  iso2: string,
  guideCities: readonly TourismCity[] = EMPTY_GUIDE_CITIES,
): CountryCityOption[] {
  if (guideCities.length === 0) return metroOptionsForCountry(iso2)

  let optionsByIso2 = optionsByGuideCities.get(guideCities)
  if (!optionsByIso2) {
    optionsByIso2 = new Map()
    optionsByGuideCities.set(guideCities, optionsByIso2)
  }

  const cached = optionsByIso2.get(iso2)
  if (cached) return cached

  const options = new Map<string, CountryCityOption>()

  for (const option of metroOptionsForCountry(iso2)) {
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

export function citiesForCountry(iso2: string): readonly string[] {
  if (iso2 in citiesByIso2) return citiesByIso2[iso2]
  return []
}

function metroOptionsForCountry(iso2: string): CountryCityOption[] {
  const cached = metroOptionsByIso2.get(iso2)
  if (cached) return cached

  const options = citiesForCountry(iso2).map((name) => ({
    name,
    normalizedName: normalizeText(name),
    highlightCount: 0,
    source: 'metro' as const,
  }))
  metroOptionsByIso2.set(iso2, options)
  return options
}
