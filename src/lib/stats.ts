import type { Country, Region, TourismCountry, TravelEntry, TravelStyleTag } from '../types'

export interface TravelStats {
  countriesVisited: number
  countriesTotal: number
  countriesPct: number
  statesVisited: number
  statesTotal: number
  statesPct: number
  favoriteCountries: number
  favoriteStates: number
  continentsVisited: Region[]
  topStyles: Array<{ tag: TravelStyleTag; count: number }>
}

export interface StatsInput {
  countries: Country[]
  tourism: readonly TourismCountry[]
  totalStates?: number
}

function pct(n: number, total: number): number {
  if (total <= 0) return 0
  return Math.round((n / total) * 1000) / 10
}

export function computeStats(entries: TravelEntry[], input: StatsInput): TravelStats {
  const { countries, tourism, totalStates = 50 } = input
  const byIso2 = new Map(countries.map((c) => [c.iso2, c]))
  const tourismByIso2 = new Map(tourism.map((t) => [t.iso2, t]))

  const countryEntries = entries.filter((e) => e.entityType === 'country')
  const stateEntries = entries.filter((e) => e.entityType === 'us_state')

  const visitedCountries = countryEntries.filter((e) => e.visited)
  const visitedStates = stateEntries.filter((e) => e.visited)

  const countriesTotal = countries.filter((c) => c.independent).length

  const continents = new Set<Region>()
  for (const e of visitedCountries) {
    const c = byIso2.get(e.countryCode)
    if (c) continents.add(c.region)
  }

  // Style tags aggregated from visited or favorited countries with tourism data.
  const styleCounts = new Map<TravelStyleTag, number>()
  for (const e of countryEntries) {
    if (!e.visited && !e.favorite) continue
    const tc = tourismByIso2.get(e.countryCode)
    if (!tc) continue
    for (const tag of tc.styles) {
      styleCounts.set(tag, (styleCounts.get(tag) ?? 0) + 1)
    }
  }
  const topStyles = [...styleCounts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
    .slice(0, 6)

  return {
    countriesVisited: visitedCountries.length,
    countriesTotal,
    countriesPct: pct(visitedCountries.length, countriesTotal),
    statesVisited: visitedStates.length,
    statesTotal: totalStates,
    statesPct: pct(visitedStates.length, totalStates),
    favoriteCountries: countryEntries.filter((e) => e.favorite).length,
    favoriteStates: stateEntries.filter((e) => e.favorite).length,
    continentsVisited: [...continents].sort(),
    topStyles,
  }
}
