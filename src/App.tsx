import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { AlertTriangle, CheckCircle2, CircleUserRound, Settings } from 'lucide-react'
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
  const backend = useTravelStore((state) => state.backend)
  const init = useTravelStore((state) => state.init)
  const reset = useTravelStore((state) => state.reset)
  const status = useTravelStore((state) => state.status)
  const saveState = useTravelStore((state) => state.saveState)
  const error = useTravelStore((state) => state.error)
  const { dismissToast, filters, openPanel, openSearch, selectEntity, setViewMode, showToast, toast, viewMode } = useUIStore()
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
    if ((status === 'error' || saveState === 'error') && error) showToast(error, { tone: 'error' })
  }, [error, saveState, showToast, status])

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
      const [{ tourismCountries }, { usStates }, { countries }] = await Promise.all([
        import('./data/tourismCountries'),
        import('./data/usStates'),
        import('./data/countries'),
      ])
      if (cancelled) return

      const keys = new Set(filterCountries(tourismCountries, entries, filters).map((tc) => entityKey('country', tc.iso2)))
      // Styles, weather, regions, and seasons only exist in the tourism
      // dataset (100 countries). When just the personal flags are active,
      // every country and US state can be matched from entries alone, so a
      // visited country outside the guide data isn't dimmed as a non-match.
      const entryFlagsOnly =
        filters.styles.length === 0 &&
        filters.weather.length === 0 &&
        filters.regions.length === 0 &&
        filters.season === 'overall'
      if (entryFlagsOnly) {
        const matchesEntryFlags = (key: string): boolean => {
          const entry = entries[key]
          if (filters.visited === 'visited' && !entry?.visited) return false
          if (filters.visited === 'unvisited' && entry?.visited) return false
          if (filters.favoritesOnly && !entry?.favorite) return false
          return true
        }
        for (const country of countries) {
          const key = entityKey('country', country.iso2)
          if (matchesEntryFlags(key)) keys.add(key)
        }
        for (const state of usStates) {
          const key = entityKey('us_state', 'US', state.code)
          if (matchesEntryFlags(key)) keys.add(key)
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
      selectEntity(key, { detailTab: 'guide' })
    },
    [selectEntity],
  )

  if (!selectedProfile) return <ProfileScreen />
  if (!unlocked) return <PinScreen />

  const storageError = (status === 'error' || saveState === 'error') && error
  const storageMessage = storageError
    ? error
    : status === 'ready'
      ? backend === 'supabase' ? 'Synced to cloud' : 'Saved on this device'
      : 'Loading storage...'
  const ToastIcon = toast?.tone === 'error' ? AlertTriangle : CheckCircle2

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

      <div className="pointer-events-none fixed bottom-20 left-4 z-20 max-w-[calc(100vw-12rem)] rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-xs text-slate-300 backdrop-blur-xl sm:bottom-4 sm:max-w-sm">
        <div className="font-medium text-white">{COUNTRY_TOTAL} countries/territories, {US_STATE_TOTAL} states</div>
        <div className={storageError ? 'text-red-200' : undefined}>{storageMessage}</div>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
          <LegendDot className="bg-visited/80" label="Visited" />
          <LegendDot className="bg-favorite/80" label="Favorite" />
          <LegendDot className="bg-accent/80" label="Match" />
          <LegendDot className="bg-slate-950/70 ring-1 ring-white/15" label="Dimmed" />
        </div>
      </div>

      <div className="fixed bottom-40 left-4 z-30 flex flex-col gap-2 sm:bottom-24">
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
        <div
          role={toast.tone === 'error' ? 'alert' : 'status'}
          className={`glass fixed bottom-20 right-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-xl px-4 py-3 text-sm text-white animate-pop-in sm:bottom-4 ${toast.tone === 'error' ? 'border-red-300/25' : ''}`}
        >
          <ToastIcon aria-hidden className={`h-4 w-4 shrink-0 ${toast.tone === 'error' ? 'text-red-300' : 'text-green-300'}`} />
          <span className="min-w-0">{toast.message}</span>
          {toast.action ? (
            <button
              type="button"
              className="ml-2 rounded-lg border border-white/10 bg-white/[0.08] px-2 py-1 text-xs font-medium text-white hover:bg-white/[0.14]"
              onClick={() => {
                toast.action?.onClick()
                dismissToast(toast.id)
              }}
            >
              {toast.action.label}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

function LegendDot({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span aria-hidden className={`h-2 w-2 rounded-full ${className}`} />
      {label}
    </span>
  )
}
