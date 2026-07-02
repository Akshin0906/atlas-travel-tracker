import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from '../components/SearchOverlay'
import { useTravelStore } from '../stores/travelStore'
import { useUIStore } from '../stores/uiStore'

const initialUIState = useUIStore.getState()
const initialTravelState = useTravelStore.getState()
const cityResultWait = { timeout: 5000 }

beforeEach(() => {
  useUIStore.setState(initialUIState, true)
  useTravelStore.setState(initialTravelState, true)
})

describe('SearchOverlay', () => {
  it('selects a city result and focuses its country', async () => {
    const user = userEvent.setup()
    useUIStore.setState({ searchOpen: true, searchMode: 'select' })

    render(<SearchOverlay />)

    await user.type(screen.getByRole('textbox', { name: /search countries/i }), 'Tokyo')
    await user.click(await screen.findByRole('button', { name: /^Tokyo City in Japan Open$/i }, cityResultWait))

    await waitFor(() => {
      expect(useUIStore.getState().selectedKey).toBe('country:JP')
      expect(useUIStore.getState().searchOpen).toBe(false)
    })
  })

  it('marks a searched city as visited through the travel store', async () => {
    const user = userEvent.setup()
    const update = vi.fn(async () => undefined)
    const addCity = vi.fn(async () => undefined)
    useTravelStore.setState({ update, addCity })
    useUIStore.setState({ searchOpen: true, searchMode: 'add-visited' })

    render(<SearchOverlay />)

    await user.type(screen.getByRole('textbox', { name: /add visited/i }), 'Tokyo')
    await user.click(await screen.findByRole('button', { name: /^Tokyo City in Japan Mark visited$/i }, cityResultWait))

    await waitFor(() => {
      expect(update).toHaveBeenCalledWith(expect.objectContaining({ key: 'country:JP' }), { visited: true })
      expect(addCity).toHaveBeenCalledWith(expect.objectContaining({ key: 'country:JP' }), 'Tokyo')
      expect(useUIStore.getState().toast?.message).toBe('Tokyo added to Japan')
    })
  })
})
