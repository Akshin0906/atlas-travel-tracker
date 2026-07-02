import { Suspense, lazy, useEffect, useMemo } from 'react'
import { CheckCircle2, CircleUserRound } from 'lucide-react'
import { countries } from './data/countries'
import { tourismCountries } from './data/tourismCountries'
import { usStates } from './data/usStates'
import { filterCountries, isFilterActive } from './lib/filters'
import { entityKey } from './lib/travel'
import { PinScreen } from './components/PinScreen'
import { ProfileScreen } from './components/ProfileScreen'
import { TopBar } from './components/TopBar'
import { SearchOverlay } from './components/SearchOverlay'
import { useAuthStore } from './stores/authStore'
import { useTravelStore } from './stores/travelStore'
import { useUIStore } from './stores/uiStore'

const GlobeView = lazy(() => import('./components/GlobeView').then((module) => ({ default: module.GlobeView })))
const MapView = lazy(() => import('./components/MapView').then((module) => ({ default: module.MapView })))
const PanelRouter = lazy(() => import('./components/panels/PanelRouter').then((module) => ({ default: module.PanelRouter })))

export function App() {
  const clearProfile = useAuthStore((state) => state.clearProfile)
  const unlocked = useAuthStore((state) => state.unlocked)
  const selectedProfile = useAuthStore((state) => state.selectedProfile)
  const entries = useTravelStore((state) => state.entries)
  const init = useTravelStore((state) => state.init)
  const reset = useTravelStore((state) => state.reset)
  const status = useTravelStore((state) => state.status)
  const error = useTravelStore((state) => state.error)
  const { dismissToast, filters, openSearch, toast, viewMode } = useUIStore()

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

  const matchedKeys = useMemo(() => {
    if (!isFilterActive(filters)) return null
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
    return keys
  }, [entries, filters])

  if (!selectedProfile) return <ProfileScreen />
  if (!unlocked) return <PinScreen />

  return (
    <div className="relative h-screen overflow-hidden">
      <TopBar />
      <main className="absolute inset-0">
        <Suspense fallback={<div className="grid h-full place-items-center text-sm text-slate-400">Loading Atlas...</div>}>
          {viewMode === 'globe' ? <GlobeView matchedKeys={matchedKeys} /> : <MapView matchedKeys={matchedKeys} />}
        </Suspense>
      </main>

      <div className="pointer-events-none fixed bottom-4 left-4 z-20 max-w-sm rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-xs text-slate-300 backdrop-blur-xl">
        <div className="font-medium text-white">{countries.length} countries, 50 states</div>
        <div>{status === 'error' ? error : status === 'ready' ? 'Autosaves to your configured storage.' : 'Loading storage...'}</div>
      </div>

      <button
        type="button"
        aria-label="Switch user"
        title="Switch user"
        onClick={clearProfile}
        className="fixed bottom-24 left-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/35 text-slate-300 backdrop-blur-xl transition hover:bg-white/[0.08] hover:text-white"
      >
        <CircleUserRound aria-hidden className="h-5 w-5" />
      </button>

      <SearchOverlay />
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
