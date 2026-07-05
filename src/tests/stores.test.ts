import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { countries } from '../data/countries'
import { countryEntity } from '../lib/travel'
import { useTravelStore } from '../stores/travelStore'
import { useUIStore } from '../stores/uiStore'

const initialUIState = useUIStore.getState()

beforeEach(() => {
  vi.restoreAllMocks()
  window.localStorage.clear()
  useTravelStore.getState().reset()
  useUIStore.setState(initialUIState, true)
})

afterEach(() => {
  vi.restoreAllMocks()
  useTravelStore.getState().reset()
  window.localStorage.clear()
  useUIStore.setState(initialUIState, true)
})

describe('UI store', () => {
  it('clears detail selection when another panel replaces the detail panel', () => {
    useUIStore.getState().selectEntity('country:FR')

    useUIStore.getState().openPanel('filters')

    expect(useUIStore.getState().panel).toBe('filters')
    expect(useUIStore.getState().selectedKey).toBeNull()
  })

  it('keeps city pins opt-in', () => {
    expect(useUIStore.getState().showCityPins).toBe(false)

    useUIStore.getState().setShowCityPins(true)

    expect(useUIStore.getState().showCityPins).toBe(true)
  })
})

describe('Travel store', () => {
  it('rolls back an optimistic entry when persistence fails', async () => {
    const france = countryEntity(countries.find((country) => country.iso2 === 'FR')!)
    await useTravelStore.getState().init('akshin')
    vi.spyOn(window.localStorage, 'setItem').mockImplementation(() => {
      throw new Error('quota full')
    })

    await useTravelStore.getState().update(france, { visited: true })

    expect(useTravelStore.getState().entries[france.key]).toBeUndefined()
    expect(useTravelStore.getState().saveState).toBe('error')
    expect(useTravelStore.getState().error).toBe('quota full')
  })
})
