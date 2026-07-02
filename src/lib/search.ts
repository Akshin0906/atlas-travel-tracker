// Country / US-state / tourism-city search with diacritic folding and prefix ranking.
import type { Country, TravelEntity, USState } from '../types'
import { countries as allCountries } from '../data/countries'
import { tourismCountries as allTourismCountries } from '../data/tourismCountries'
import { usStates as allStates } from '../data/usStates'
import { cityOptionsForCountry } from './cities'
import { normalizeText } from './text'
import { countryEntity, stateEntity } from './travel'

export { normalizeText } from './text'

export interface SearchResult {
  id: string
  entity: TravelEntity
  kind: 'entity' | 'city'
  city?: string
  /** Higher is better; results are sorted by score, then name length. */
  score: number
  /** Secondary label shown in the dropdown, e.g. region or "US state". */
  sub: string
}

function scoreCandidate(
  query: string,
  name: string,
  aliases: readonly string[] = [],
  code?: string,
): number {
  const n = normalizeText(name)
  if (n === query) return 120
  if (code && query === code.toLowerCase()) return 110
  if (n.startsWith(query)) return 100
  if (n.split(/[\s,()-]+/).some((w) => w.startsWith(query))) return 80
  if (n.includes(query)) return 60
  let best = 0
  for (const alias of aliases) {
    const a = normalizeText(alias)
    if (a === query) best = Math.max(best, 95)
    else if (a.startsWith(query)) best = Math.max(best, 70)
    else if (a.includes(query)) best = Math.max(best, 50)
  }
  return best
}

export interface SearchOptions {
  countries?: Country[]
  states?: USState[]
  tourismCountries?: typeof allTourismCountries
  limit?: number
}

export function searchEntities(query: string, options: SearchOptions = {}): SearchResult[] {
  const { countries = allCountries, states = allStates, tourismCountries = allTourismCountries, limit = 12 } = options
  const q = normalizeText(query)
  if (!q) return []

  const results: SearchResult[] = []
  const countriesByIso2 = new Map(countries.map((country) => [country.iso2, country]))

  for (const c of countries) {
    const score = scoreCandidate(q, c.name, c.aliases, c.iso2)
    if (score > 0) results.push({ id: countryEntity(c).key, entity: countryEntity(c), kind: 'entity', score, sub: c.region })
  }
  for (const s of states) {
    const score = scoreCandidate(q, s.name, [], s.code)
    if (score > 0) results.push({ id: stateEntity(s).key, entity: stateEntity(s), kind: 'entity', score, sub: 'US state' })
  }
  for (const tourismCountry of tourismCountries) {
    const country = countriesByIso2.get(tourismCountry.iso2)
    if (!country) continue
    const entity = countryEntity(country)
    for (const city of cityOptionsForCountry(tourismCountry)) {
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

  return results
    .sort(
      (a, b) =>
        b.score - a.score ||
        resultName(a).length - resultName(b).length ||
        resultName(a).localeCompare(resultName(b)),
    )
    .slice(0, limit)
}

function resultName(result: SearchResult): string {
  return result.city ?? result.entity.name
}
