// Resolves entity keys back to full TravelEntity objects using the static data.
import type { TravelEntity } from '../types'
import { countriesByIso2 } from '../data/countries'
import { usStatesByCode } from '../data/usStates'
import { countryEntity, stateEntity } from './travel'

const COUNTRY_PREFIX = 'country:'
const STATE_PREFIX = 'us_state:US-'

export function entityFromKey(key: string): TravelEntity | null {
  if (key.startsWith(COUNTRY_PREFIX)) {
    const country = countriesByIso2.get(key.slice(COUNTRY_PREFIX.length))
    return country ? countryEntity(country) : null
  }
  if (key.startsWith(STATE_PREFIX)) {
    const state = usStatesByCode.get(key.slice(STATE_PREFIX.length))
    return state ? stateEntity(state) : null
  }
  return null
}
