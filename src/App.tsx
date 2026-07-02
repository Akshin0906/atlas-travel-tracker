import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { CheckCircle2, CircleUserRound, Settings } from 'lucide-react'
import { COUNTRY_TOTAL, US_STATE_TOTAL } from './data/counts'
import { filterCountries, isFilterActive } from './lib/filters'
import { entityKey } from './lib/travel'
import { useCityPins } from './hooks/useCityPins'
import { PinScreen } from './components/PinScreen'
import { ProfileScreen } from './components/ProfileScreen'
import { TopBar } from './components/TopBar'
import { IconButton } from './components/ui'
import { useAuthStore } from './stores/authStore'
import { useTravelStore } from './stores/travelStore'
import { useUIStore } from './stores/uiStore'

const GlobeView = lazy(() => import('./components/GlobeView').then((module) => ({ default: module.GlobeView })))
const MapView = lazy(() => import('./components/MapView').then((module) => ({ default: module.MapView })))
const PanelRouter = lazy(() => import('./components/panels/PanelRouter').then((module) => ({ default: module.PanelRouter })))
const SearchOverlay = lazy(() => import('./components/SearchOverlay').then((module) => ({ default: module.SearchOverlay })))

interface RandomDestinationRequest {
  key: string
  nonce: number
}

export function App() {
  const clearProfile = useAuthStore((state) => state.clearProfile)
  const unlocked = useAuthStore((state) => state.unlocked)
  const selectedProfile = useAuthStore((state) => state.selectedProfile)
  const entries = useTravelStore((state) => state.entries)
  const init = useTravelStore((state) => state.init)
  const reset = useTravelStore((state) => state.reset)
  const status = useTravelStore((state) => state.status)
  const error = useTravelStore((state) => state.error)
  const { dismissToast, filters, openPanel, openSearch, selectEntity, setViewMode, toast, viewMode } = useUIStore()
  const cityPins = useCityPins(entries)
  const [matchedKeys, setMatchedKeys] = useState<Set<string> | null>(null)
  const [randomDestinationRequest, setRandomDestinationRequest] = useState<RandomDestinationRequest | null>(null)
  const [randomDestinationPending, setRandomDestinationPending] = useState(false)

  useEffect(() => {
    if (unlocked && selectedProfile) void init(selectedProfile.id)
    else reset()
  }, [init, reset, selectedProfile, unlocked])

  useEffect(() => {
    if (!unlocked) return
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        openSearch('select')
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openSearch, unlocked])

  useEffect(() => {
    if (viewMode === 'globe' || !randomDestinationPending) return
    setRandomDestinationPending(false)
    setRandomDestinationRequest(null)
  }, [randomDestinationPending, viewMode])

  useEffect(() => {
    if (!isFilterActive(filters)) {
      setMatchedKeys(null)
      return
    }

    let cancelled = false

    async function loadFilteredKeys() {
      const [{ tourismCountries }, { usStates }] = await Promise.all([
        import('./data/tourismCountries'),
        import('./data/usStates'),
      ])
      if (cancelled) return

      const keys = new Set(filterCountries(tourismCountries, entries, filters).map((tc) => entityKey('country', tc.iso2)))
      const stateFriendly =
        filters.styles.length === 0 &&
        filters.weather.length === 0 &&
        filters.regions.length === 0 &&
        filters.season === 'overall'
      if (stateFriendly) {
        for (const state of usStates) {
          const key = entityKey('us_state', 'US', state.code)
          const entry = entries[key]
          if (filters.visited === 'visited' && !entry?.visited) continue
          if (filters.visited === 'unvisited' && entry?.visited) continue
          if (filters.favoritesOnly && !entry?.favorite) continue
          keys.add(key)
        }
      }
      setMatchedKeys(keys)
    }

    void loadFilteredKeys().catch(() => {
      if (!cancelled) setMatchedKeys(null)
    })

    return () => {
      cancelled = true
    }
  }, [entries, filters])

  const chooseRandomDestination = useCallback(() => {
    if (randomDestinationPending) return
    setViewMode('globe')
    setRandomDestinationPending(true)

    async function loadRandomDestination() {
      const [{ tourismCountries }, { randomTourismCountry }] = await Promise.all([
        import('./data/tourismCountries'),
        import('./lib/randomDestination'),
      ])
      const country = randomTourismCountry(tourismCountries)
      const key = entityKey('country', country.iso2)
      setRandomDestinationRequest((current) => ({ key, nonce: (current?.nonce ?? 0) + 1 }))
    }

    void loadRandomDestination().catch(() => {
      setRandomDestinationPending(false)
      setRandomDestinationRequest(null)
    })
  }, [randomDestinationPending, setViewMode])

  const settleRandomDestination = useCallback(
    (key: string) => {
      setRandomDestinationPending(false)
      setRandomDestinationRequest(null)
      selectEntity(key)
    },
    [selectEntity],
  )

  if (!selectedProfile) return <ProfileScreen />
  if (!unlocked) return <PinScreen />

  return (
    <div className="relative h-screen overflow-hidden">
      <TopBar randomDestinationPending={randomDestinationPending} onRandomDestination={chooseRandomDestination} />
      <main className="absolute inset-0">
        <Suspense fallback={<div className="grid h-full place-items-center text-sm text-slate-400">Loading Atlas...</div>}>
          {viewMode === 'globe' ? (
            <GlobeView
              cityPins={cityPins}
              matchedKeys={matchedKeys}
              randomDestinationRequest={randomDestinationRequest}
              onRandomDestinationSettled={settleRandomDestination}
            />
          ) : (
            <MapView cityPins={cityPins} matchedKeys={matchedKeys} />
          )}
        </Suspense>
      </main>

      <div className="pointer-events-none fixed bottom-4 left-4 z-20 max-w-sm rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-xs text-slate-300 backdrop-blur-xl">
        <div className="font-medium text-white">{COUNTRY_TOTAL} countries, {US_STATE_TOTAL} states</div>
        <div>{status === 'error' ? error : status === 'ready' ? 'Autosaves to your configured storage.' : 'Loading storage...'}</div>
      </div>

      <div className="fixed bottom-24 left-4 z-30 flex flex-col gap-2">
        <IconButton
          icon={CircleUserRound}
          label="Switch user"
          onClick={clearProfile}
          className="h-10 w-10 rounded-full border-white/10 bg-black/35 text-slate-300 backdrop-blur-xl hover:bg-white/[0.08] hover:text-white"
        />
        <IconButton
          icon={Settings}
          label="Settings"
          onClick={() => openPanel('settings')}
          className="h-10 w-10 rounded-full border-white/10 bg-black/35 text-slate-300 backdrop-blur-xl hover:bg-white/[0.08] hover:text-white"
        />
      </div>

      <Suspense fallback={null}>
        <SearchOverlay />
      </Suspense>
      <Suspense fallback={null}>
        <PanelRouter />
      </Suspense>

      {toast ? (
        <button
          className="glass fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-white animate-pop-in"
          onClick={() => dismissToast(toast.id)}
        >
          <CheckCircle2 aria-hidden className="h-4 w-4 text-green-300" />
          {toast.message}
        </button>
      ) : null}
    </div>
  )
}
