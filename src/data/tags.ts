import type {
  MonthAbbr,
  Region,
  Season,
  SeasonFilter,
  TravelStyleTag,
  WeatherTag,
} from '../types'

export const TRAVEL_STYLE_TAGS: readonly TravelStyleTag[] = [
  'beaches',
  'nightlife',
  'food',
  'history',
  'nature',
  'culture',
  'adventure',
  'luxury',
  'budget',
  'romance',
  'family',
  'shopping',
  'museums',
  'road trip',
  'skiing',
  'wine',
  'relaxation',
]

export const WEATHER_TAGS: readonly WeatherTag[] = [
  'hot',
  'humid',
  'cold',
  'dry',
  'rainy',
  'sunny',
  'tropical',
  'snowy',
  'mediterranean',
  'desert',
  'temperate',
  'alpine',
]

export const REGIONS: readonly Region[] = [
  'Africa',
  'Asia',
  'Europe',
  'Middle East',
  'North America',
  'South America',
  'Caribbean',
  'Oceania',
]

export const MONTHS: readonly MonthAbbr[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export const SEASONS: readonly Season[] = ['spring', 'summer', 'fall', 'winter']

export const SEASON_FILTERS: readonly SeasonFilter[] = [
  'overall',
  'spring',
  'summer',
  'fall',
  'winter',
]

/** Northern-hemisphere month buckets used by the season filter. */
export const SEASON_MONTHS: Record<Season, readonly MonthAbbr[]> = {
  spring: ['Mar', 'Apr', 'May'],
  summer: ['Jun', 'Jul', 'Aug'],
  fall: ['Sep', 'Oct', 'Nov'],
  winter: ['Dec', 'Jan', 'Feb'],
}

export const SEASON_LABELS: Record<SeasonFilter, string> = {
  overall: 'Overall',
  spring: 'Spring',
  summer: 'Summer',
  fall: 'Fall',
  winter: 'Winter',
}
