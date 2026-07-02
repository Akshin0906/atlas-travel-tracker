import { describe, expect, it } from 'vitest'
import { COUNTRY_TOTAL, US_STATE_TOTAL } from '../data/counts'
import { citiesByIso2 } from '../data/metroCities'
import { tourismCountries } from '../data/tourismCountries'
import { countries } from '../data/countries'
import { usStates } from '../data/usStates'
import { cityOptionsForCountry } from '../lib/cities'
import { searchEntitiesWithCities } from '../lib/citySearch'
import { cityPinCandidates } from '../lib/cityPins'
import { defaultFilters, filterCountries } from '../lib/filters'
import { repeatedWorldOffsets, wrapHorizontalPan } from '../lib/mapWrap'
import { DEFAULT_PIN_HASH, hashPin, isValidPinFormat, verifyPin } from '../lib/pin'
import { randomIndex, randomTourismCountry } from '../lib/randomDestination'
import { searchEntities } from '../lib/search'
import { computeStats } from '../lib/stats'
import { profileStatsFromEntries } from '../lib/profileStats'
import { entryToRow, rowToEntry } from '../lib/storage'
import { normalizeText } from '../lib/text'
import { addCityTag, countryEntity, createEntry, mergeEntry } from '../lib/travel'
import type { TourismCountry, TravelEntry } from '../types'

describe('PIN helpers', () => {
  it('validates format and hashes Akshin default PIN', async () => {
    expect(isValidPinFormat('0906')).toBe(true)
    expect(isValidPinFormat('12a4')).toBe(false)
    expect(await hashPin('0906', 'atlas-pin-v1')).toBe(DEFAULT_PIN_HASH)
    expect(await verifyPin('0906', DEFAULT_PIN_HASH, 'atlas-pin-v1')).toBe(true)
    expect(await verifyPin('1234', DEFAULT_PIN_HASH, 'atlas-pin-v1')).toBe(false)
  })
})

describe('summary data', () => {
  it('keeps lightweight app-shell counts in sync with source data', () => {
    expect(COUNTRY_TOTAL).toBe(countries.length)
    expect(US_STATE_TOTAL).toBe(usStates.length)
  })
})

describe('travel entry helpers', () => {
  it('creates, patches, and deduplicates city tags', () => {
    const france = countries.find((country) => country.iso2 === 'FR')!
    const entity = countryEntity(france)
    const entry = createEntry(entity, '2026-01-01T00:00:00.000Z')
    const patched = mergeEntry(entry, entity, { visited: true, cities: addCityTag(['Paris'], 'paris') }, '2026-01-02T00:00:00.000Z')

    expect(patched.visited).toBe(true)
    expect(patched.cities).toEqual(['Paris'])
    expect(patched.updatedAt).toBe('2026-01-02T00:00:00.000Z')
  })

  it('scopes persisted rows by selected profile', () => {
    const row = entryToRow(entry('country:FR', 'country', 'FR', undefined, 'France', true, false), 'neha')
    expect(row.key).toBe('neha:country:FR')
    expect(rowToEntry(row, 'neha').key).toBe('country:FR')
  })
})

describe('city pins', () => {
  it('builds geocoding candidates from city tags', () => {
    const entries: Record<string, TravelEntry> = {
      'country:JP': {
        ...entry('country:JP', 'country', 'JP', undefined, 'Japan', true, false),
        cities: ['Tokyo'],
      },
      'us_state:US-CA': {
        ...entry('us_state:US-CA', 'us_state', 'US', 'CA', 'California', true, false),
        cities: ['San Francisco'],
      },
    }

    expect(cityPinCandidates(entries)).toEqual([
      {
        id: 'country:JP:tokyo',
        entryKey: 'country:JP',
        city: 'Tokyo',
        label: 'Tokyo, Japan',
        query: 'Tokyo, Japan',
        countryCode: 'jp',
      },
      {
        id: 'us_state:US-CA:san francisco',
        entryKey: 'us_state:US-CA',
        city: 'San Francisco',
        label: 'San Francisco, California',
        query: 'San Francisco, California, United States',
        countryCode: 'us',
      },
    ])
  })
})

describe('map wrapping', () => {
  it('normalizes horizontal pan into one screen period', () => {
    expect(wrapHorizontalPan(1250, 1000)).toBe(250)
    expect(wrapHorizontalPan(-1250, 1000)).toBe(-250)
    expect(wrapHorizontalPan(0, 0)).toBe(0)
  })

  it('renders enough repeated worlds to cover the viewport', () => {
    expect(repeatedWorldOffsets(500, 1200, 1)).toEqual([-2000, -1500, -1000, -500, 0, 500, 1000, 1500, 2000])
    expect(repeatedWorldOffsets(500, 0, 1)).toEqual([0])
  })
})

describe('search', () => {
  it('finds countries and US states by name or code', () => {
    expect(searchEntities('japan')[0]?.entity.countryCode).toBe('JP')
    expect(searchEntities('CA').some((result) => result.entity.key === 'us_state:US-CA')).toBe(true)
  })

  it('finds seeded tourism cities in the main search', () => {
    const tokyo = searchEntitiesWithCities('Tokyo')[0]
    expect(tokyo).toMatchObject({
      kind: 'city',
      city: 'Tokyo',
      entity: { key: 'country:JP' },
      sub: 'City in Japan',
    })
  })

  it('finds generated metro cities without surfacing city districts', () => {
    const ahmedabad = searchEntitiesWithCities('Ahmedabad')[0]
    expect(ahmedabad).toMatchObject({
      kind: 'city',
      city: 'Ahmedabad',
      entity: { key: 'country:IN' },
      sub: 'City in India',
    })

    expect(searchEntitiesWithCities('Brooklyn').some((result) => result.kind === 'city' && result.entity.key === 'country:US' && result.city === 'Brooklyn')).toBe(false)
  })
})

describe('filters', () => {
  it('matches style, weather, region, season, and personal flags', () => {
    const entries: Record<string, TravelEntry> = {
      'country:FR': {
        key: 'country:FR',
        entityType: 'country',
        countryCode: 'FR',
        name: 'France',
        visited: true,
        favorite: true,
        visits: [],
        cities: [],
        notes: '',
        createdAt: '',
        updatedAt: '',
      },
    }
    const result = filterCountries(tourismCountries, entries, {
      ...defaultFilters,
      styles: ['food'],
      weather: ['mediterranean'],
      regions: ['Europe'],
      visited: 'visited',
      favoritesOnly: true,
      season: 'spring',
    })
    expect(result.map((country) => country.iso2)).toContain('FR')
  })
})

describe('stats', () => {
  it('counts visited countries, states, favorites, continents, and top styles', () => {
    const entries: TravelEntry[] = [
      entry('country:FR', 'country', 'FR', undefined, 'France', true, true),
      entry('us_state:US-CA', 'us_state', 'US', 'CA', 'California', true, true),
    ]
    const stats = computeStats(entries, { countries, tourism: tourismCountries })

    expect(stats.countriesVisited).toBe(1)
    expect(stats.statesVisited).toBe(1)
    expect(stats.favoriteCountries).toBe(1)
    expect(stats.favoriteStates).toBe(1)
    expect(stats.continentsVisited).toContain('Europe')
    expect(stats.topStyles[0]?.count).toBeGreaterThan(0)
  })

  it('counts visited countries and states for profile comparison', () => {
    const stats = profileStatsFromEntries([
      entry('country:FR', 'country', 'FR', undefined, 'France', true, false),
      entry('country:JP', 'country', 'JP', undefined, 'Japan', false, false),
      entry('us_state:US-CA', 'us_state', 'US', 'CA', 'California', true, false),
    ])

    expect(stats).toEqual({ countries: 1, states: 1 })
  })
})

describe('tourism data', () => {
  it('has 100 unique countries with the expected tier shape', () => {
    expect(tourismCountries).toHaveLength(100)
    expect(new Set(tourismCountries.map((country) => country.iso2)).size).toBe(100)
    for (const country of tourismCountries) {
      expect(country.vacationStyle).toHaveLength(3)
      expect(country.pros.length).toBeGreaterThan(0)
      expect(country.cons.length).toBeGreaterThan(0)
      expect(country.cities).toHaveLength(expectedCities(country))
      for (const city of country.cities) expect(city.pois).toHaveLength(expectedPois(country))
    }
  })

  it('has deduplicated city autocomplete coverage for every country', () => {
    const expectedCodes = countries.map((country) => country.iso2).sort()
    expect(Object.keys(citiesByIso2).sort()).toEqual(expectedCodes)

    const emptyCityCountries = new Set(['IO', 'UM'])
    const districtLikeName = /\b(central business district|commune d'arrondissement|arrondissement|borough|county|delegation|district|distrito|municipality|prefecture|subdistrict|township|ward|woleswali|woluswali|wuleswali|sector\s+\d+|zone\s+\d+)\b/i
    for (const country of countries) {
      const cityNames = citiesByIso2[country.iso2]
      if (!emptyCityCountries.has(country.iso2)) expect(cityNames.length).toBeGreaterThan(0)

      const normalizedNames = cityNames.map(normalizeText)
      expect(new Set(normalizedNames).size).toBe(normalizedNames.length)
      expect(cityNames.find((name) => districtLikeName.test(name))).toBeUndefined()
    }

    expect(citiesByIso2.FR).toContain('Paris')
    expect(citiesByIso2.FR).not.toContain('Paris 15 Vaugirard')
    expect(citiesByIso2.US).toContain('New York City')
    expect(citiesByIso2.US).not.toContain('Brooklyn')
    expect(citiesByIso2.AF).not.toContain('Wuleswali Bihsud')
  })

  it('keeps curated tourism towns in country city suggestions', () => {
    const slovenia = tourismCountries.find((country) => country.iso2 === 'SI')!
    expect(cityOptionsForCountry(slovenia).map((city) => city.name)).toContain('Bled')
  })
})

describe('random destination picker', () => {
  it('rejects the biased Uint32 tail before mapping to a tourism country', () => {
    const source = fixedRandomValues(0xffffffff, 42)

    expect(randomIndex(100, source)).toBe(42)
  })

  it('picks from the tourism data list', () => {
    const source = fixedRandomValues(99)

    expect(randomTourismCountry(tourismCountries, source)).toBe(tourismCountries[99])
  })
})

function expectedCities(country: TourismCountry): number {
  if (country.tier === 'major') return 5
  if (country.tier === 'mid') return 3
  return 1
}

function expectedPois(country: TourismCountry): number {
  if (country.tier === 'major') return 5
  if (country.tier === 'mid') return 3
  return 1
}

function entry(
  key: TravelEntry['key'],
  entityType: TravelEntry['entityType'],
  countryCode: TravelEntry['countryCode'],
  stateCode: TravelEntry['stateCode'],
  name: TravelEntry['name'],
  visited: TravelEntry['visited'],
  favorite: TravelEntry['favorite'],
): TravelEntry {
  return {
    key,
    entityType,
    countryCode,
    stateCode,
    name,
    visited,
    favorite,
    visits: [],
    cities: [],
    notes: '',
    createdAt: '',
    updatedAt: '',
  }
}

function fixedRandomValues(...values: number[]) {
  let index = 0
  return {
    getRandomValues<T extends ArrayBufferView | null>(array: T): T {
      if (array instanceof Uint32Array) array[0] = values[index++]
      return array
    },
  }
}
