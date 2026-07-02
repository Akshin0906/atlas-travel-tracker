import { tourismCountries } from '../data/tourismCountries'
import type { TourismCountry } from '../types'

interface RandomValuesSource {
  getRandomValues: Crypto['getRandomValues']
}

const UINT32_RANGE = 0x100000000

export function randomIndex(length: number, source: RandomValuesSource = globalThis.crypto): number {
  if (!Number.isInteger(length) || length < 1 || length > UINT32_RANGE) {
    throw new Error(`Invalid random index length: ${length}`)
  }
  if (!source) throw new Error('Secure random source unavailable')

  const values = new Uint32Array(1)
  const maxAccepted = Math.floor(UINT32_RANGE / length) * length

  do {
    source.getRandomValues(values)
  } while (values[0] >= maxAccepted)

  return values[0] % length
}

export function randomTourismCountry(
  countries: readonly TourismCountry[] = tourismCountries,
  source?: RandomValuesSource,
): TourismCountry {
  return countries[randomIndex(countries.length, source)]
}
