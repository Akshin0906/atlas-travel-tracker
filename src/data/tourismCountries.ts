import type { TourismCountry } from '../types'
import { tourismMajorA } from './tourism/majorA'
import { tourismMajorB } from './tourism/majorB'
import { tourismMidA } from './tourism/midA'
import { tourismMidB } from './tourism/midB'
import { tourismSmall } from './tourism/small'

export const tourismCountries: TourismCountry[] = [
  ...tourismMajorA,
  ...tourismMajorB,
  ...tourismMidA,
  ...tourismMidB,
  ...tourismSmall,
]

export const tourismByIso2 = new Map(tourismCountries.map((country) => [country.iso2, country]))
