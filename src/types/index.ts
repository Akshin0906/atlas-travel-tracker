// Core domain types for the Atlas travel tracker.

export type EntityType = 'country' | 'us_state'

export type Region =
  | 'Africa'
  | 'Asia'
  | 'Europe'
  | 'Middle East'
  | 'North America'
  | 'South America'
  | 'Caribbean'
  | 'Oceania'

export interface Country {
  name: string
  /** ISO 3166-1 alpha-2, e.g. "FR" */
  iso2: string
  /** ISO 3166-1 alpha-3, e.g. "FRA" */
  iso3: string
  /** ISO 3166-1 numeric, zero-padded string, e.g. "250" — matches world-atlas TopoJSON ids */
  numeric: string
  region: Region
  /** true for sovereign states; used as the denominator for "% of countries visited" */
  independent: boolean
  aliases: string[]
}

export interface USState {
  name: string
  /** USPS code, e.g. "CA" */
  code: string
  /** Census FIPS code, zero-padded, e.g. "06" — matches us-atlas TopoJSON ids */
  fips: string
}

/** A selectable thing on the globe/map: a country or a US state. */
export interface TravelEntity {
  type: EntityType
  /** Stable unique key, e.g. "country:FR" or "us_state:US-CA" */
  key: string
  name: string
  /** ISO alpha-2 of the country (always "US" for states) */
  countryCode: string
  /** USPS code, present only for us_state */
  stateCode?: string
}

export interface VisitRecord {
  id: string
  /** ISO date, e.g. "2024-06-01" */
  startDate?: string
  endDate?: string
  note?: string
}

/** Personal tracking record persisted to Supabase (or localStorage fallback). */
export interface TravelEntry {
  key: string
  entityType: EntityType
  countryCode: string
  stateCode?: string
  name: string
  visited: boolean
  favorite: boolean
  visits: VisitRecord[]
  cities: string[]
  notes: string
  createdAt: string
  updatedAt: string
}

// ---------------------------------------------------------------------------
// Static tourism dataset
// ---------------------------------------------------------------------------

export type TouristTier = 'major' | 'mid' | 'small'

export type Season = 'spring' | 'summer' | 'fall' | 'winter'
export type SeasonFilter = Season | 'overall'

export type MonthAbbr =
  | 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun'
  | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'

export type TravelStyleTag =
  | 'food'
  | 'nightlife'
  | 'beaches'
  | 'nature'
  | 'history'
  | 'culture'
  | 'adventure'
  | 'luxury'
  | 'budget'
  | 'romance'
  | 'family'
  | 'shopping'
  | 'museums'
  | 'road trip'
  | 'skiing'
  | 'wine'
  | 'relaxation'

export type WeatherTag =
  | 'hot'
  | 'humid'
  | 'cold'
  | 'dry'
  | 'rainy'
  | 'sunny'
  | 'tropical'
  | 'snowy'
  | 'mediterranean'
  | 'desert'
  | 'temperate'
  | 'alpine'

export interface CityPOI {
  name: string
  /** One-sentence description of a broad tourist highlight. */
  description: string
}

export interface TourismCity {
  name: string
  pois: CityPOI[]
}

export interface TourismCountry {
  name: string
  iso2: string
  tier: TouristTier
  region: Region
  climate: WeatherTag[]
  styles: TravelStyleTag[]
  bestTime: {
    months: MonthAbbr[]
    summary: string
  }
  /** One short note per season (northern-hemisphere season names, local reality described). */
  seasonalNotes: Record<Season, string>
  /** Exactly three bullets describing the generic type of vacation on offer. */
  vacationStyle: [string, string, string]
  pros: string[]
  cons: string[]
  /** major: 5 cities × 5 POIs, mid: 3 × 3, small: 1 × 1 */
  cities: TourismCity[]
}

// ---------------------------------------------------------------------------
// UI state
// ---------------------------------------------------------------------------

export type ViewMode = 'globe' | 'map'

export type VisitedFilter = 'all' | 'visited' | 'unvisited'

export interface FilterState {
  styles: TravelStyleTag[]
  weather: WeatherTag[]
  visited: VisitedFilter
  favoritesOnly: boolean
  regions: Region[]
  season: SeasonFilter
}
