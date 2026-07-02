import {
  BarChart3,
  Eye,
  Globe2,
  Heart,
  Map,
  Plus,
  Search,
  Settings,
  SlidersHorizontal,
  Star,
} from 'lucide-react'
import { useUIStore } from '../stores/uiStore'
import { Button, IconButton } from './ui'

export function TopBar() {
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

        <nav className="flex min-w-0 flex-1 items-center justify-center gap-2 overflow-x-auto px-2">
          <Button icon={Plus} onClick={() => openSearch('add-visited')} className="shrink-0">
            Visited
          </Button>
          <Button icon={Heart} onClick={() => openSearch('add-favorite')} className="shrink-0">
            Favorite
          </Button>
          <IconButton icon={Search} label="Search" onClick={() => openSearch('select')} />
          <IconButton icon={SlidersHorizontal} label="Filters" onClick={() => openPanel('filters')} />
          <IconButton icon={BarChart3} label="Stats" onClick={() => openPanel('stats')} />
          <IconButton icon={Star} label="Favorites" onClick={() => openPanel('favorites')} />
          <IconButton icon={Settings} label="Settings" onClick={() => openPanel('settings')} />
        </nav>

        <div className="flex items-center gap-2">
          <IconButton
            icon={Eye}
            label={showVisited ? 'Hide visited highlighting' : 'Show visited highlighting'}
            active={showVisited}
            onClick={() => setShowVisited(!showVisited)}
          />
          <IconButton
            icon={Heart}
            label={showFavorites ? 'Hide favorite highlighting' : 'Show favorite highlighting'}
            active={showFavorites}
            onClick={() => setShowFavorites(!showFavorites)}
          />
          <div className="flex rounded-xl border border-white/10 bg-white/[0.06] p-1">
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
