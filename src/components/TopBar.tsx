import {
  BarChart3,
  Dice5,
  Eye,
  Globe2,
  Heart,
  Map,
  Plus,
  Search,
  SlidersHorizontal,
  Star,
} from 'lucide-react'
import { useUIStore } from '../stores/uiStore'
import { Button, IconButton } from './ui'

interface TopBarProps {
  randomDestinationPending: boolean
  onRandomDestination: () => void
}

export function TopBar({ randomDestinationPending, onRandomDestination }: TopBarProps) {
  const {
    openSearch,
    openPanel,
    setViewMode,
    setShowFavorites,
    setShowVisited,
    showFavorites,
    showVisited,
    viewMode,
  } = useUIStore()

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-30 px-4 pt-4">
      <div className="glass pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl px-3 py-3">
        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06]">
            <Globe2 aria-hidden className="h-5 w-5 text-blue-200" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-white">Atlas</div>
            <div className="text-xs text-slate-400">Personal travel tracker</div>
          </div>
        </div>

        <nav aria-label="Atlas toolbar" className="flex min-w-0 flex-1 items-center justify-center gap-2 overflow-x-auto px-2">
          <div className="flex shrink-0 items-center gap-1 rounded-xl border border-white/10 bg-black/20 p-1">
            <Button icon={Plus} onClick={() => openSearch('add-visited')} className="h-9 shrink-0 border-0 bg-white/[0.05] px-3">
              Add visited
            </Button>
            <Button icon={Heart} onClick={() => openSearch('add-favorite')} className="h-9 shrink-0 border-0 bg-white/[0.05] px-3">
              Add favorite
            </Button>
          </div>

          <div className="flex shrink-0 items-center gap-1 rounded-xl border border-white/10 bg-black/20 p-1">
            <IconButton icon={Search} label="Search" onClick={() => openSearch('select')} className="h-9 w-9 border-0 bg-transparent" />
            <IconButton icon={SlidersHorizontal} label="Filters" onClick={() => openPanel('filters')} className="h-9 w-9 border-0 bg-transparent" />
            <IconButton icon={BarChart3} label="Stats" onClick={() => openPanel('stats')} className="h-9 w-9 border-0 bg-transparent" />
            <IconButton icon={Star} label="Favorites" onClick={() => openPanel('favorites')} className="h-9 w-9 border-0 bg-transparent" />
            <IconButton
              icon={Dice5}
              label="Random country"
              active={randomDestinationPending}
              disabled={randomDestinationPending}
              onClick={onRandomDestination}
              className="h-9 w-9 border-0 bg-transparent"
            />
          </div>
        </nav>

        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 p-1">
          <IconButton
            icon={Eye}
            label={showVisited ? 'Hide visited highlighting' : 'Show visited highlighting'}
            active={showVisited}
            onClick={() => setShowVisited(!showVisited)}
            className="h-9 w-9 border-0 bg-transparent"
          />
          <IconButton
            icon={Heart}
            label={showFavorites ? 'Hide favorite highlighting' : 'Show favorite highlighting'}
            active={showFavorites}
            onClick={() => setShowFavorites(!showFavorites)}
            className="h-9 w-9 border-0 bg-transparent"
          />
          <div className="flex rounded-lg border border-white/10 bg-white/[0.04] p-0.5">
            <IconButton
              icon={Globe2}
              label="Globe view"
              active={viewMode === 'globe'}
              onClick={() => setViewMode('globe')}
              className="h-8 w-8 border-0 bg-transparent"
            />
            <IconButton
              icon={Map}
              label="Flat map view"
              active={viewMode === 'map'}
              onClick={() => setViewMode('map')}
              className="h-8 w-8 border-0 bg-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
