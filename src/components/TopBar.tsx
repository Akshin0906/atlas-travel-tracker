import {
  BarChart3,
  Dice5,
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
  const mobileNavButtonClass = 'h-9 w-9 border-0 bg-transparent min-[360px]:h-10 min-[360px]:w-10'

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-30 px-4 pt-4">
        <div className="glass pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-2xl px-3 py-3 sm:gap-3">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06]">
              <Globe2 aria-hidden className="h-5 w-5 text-blue-200" />
            </div>
            <div className="hidden lg:block">
              <div className="text-sm font-semibold text-white">Atlas</div>
              <div className="text-xs text-slate-400">Personal travel tracker</div>
            </div>
          </div>

          {/* On phones these actions move to the bottom bar below. */}
          <nav aria-label="Atlas toolbar" className="hidden min-w-0 flex-1 items-center justify-center gap-2 px-2 sm:flex">
            <div className="flex shrink-0 items-center gap-1 rounded-xl border border-white/10 bg-black/20 p-1">
              <Button
                icon={Plus}
                aria-label="Add visited"
                title="Add visited"
                onClick={() => openSearch('add-visited')}
                className="h-9 shrink-0 border-0 bg-white/[0.05] px-3"
              >
                <span className="hidden lg:inline">Add visited</span>
              </Button>
              <Button
                icon={Heart}
                aria-label="Add favorite"
                title="Add favorite"
                onClick={() => openSearch('add-favorite')}
                className="h-9 shrink-0 border-0 bg-white/[0.05] px-3"
              >
                <span className="hidden lg:inline">Add favorite</span>
              </Button>
            </div>

            <div className="flex shrink-0 items-center gap-1 rounded-xl border border-white/10 bg-black/20 p-1">
              <Button
                icon={Search}
                aria-label="Search"
                title="Search"
                onClick={() => openSearch('select')}
                className="h-9 shrink-0 border-0 bg-transparent px-2"
              >
                <span className="hidden lg:inline">Search</span>
                <kbd className="hidden rounded border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-semibold text-slate-300 lg:inline-flex">
                  ⌘K
                </kbd>
              </Button>
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

      <nav aria-label="Atlas actions" className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-2 pb-3 sm:hidden">
        <div className="glass pointer-events-auto mx-auto flex max-w-md items-center justify-between gap-0 rounded-2xl p-1">
          <IconButton icon={Plus} label="Add visited" onClick={() => openSearch('add-visited')} className={mobileNavButtonClass} />
          <IconButton icon={Heart} label="Add favorite" onClick={() => openSearch('add-favorite')} className={mobileNavButtonClass} />
          <IconButton icon={Search} label="Search" onClick={() => openSearch('select')} className={mobileNavButtonClass} />
          <IconButton icon={SlidersHorizontal} label="Filters" onClick={() => openPanel('filters')} className={mobileNavButtonClass} />
          <IconButton icon={BarChart3} label="Stats" onClick={() => openPanel('stats')} className={mobileNavButtonClass} />
          <IconButton icon={Star} label="Favorites" onClick={() => openPanel('favorites')} className={mobileNavButtonClass} />
          <IconButton icon={Settings} label="Settings" onClick={() => openPanel('settings')} className={mobileNavButtonClass} />
          <IconButton
            icon={Dice5}
            label="Random country"
            active={randomDestinationPending}
            disabled={randomDestinationPending}
            onClick={onRandomDestination}
            className={mobileNavButtonClass}
          />
        </div>
      </nav>
    </>
  )
}
