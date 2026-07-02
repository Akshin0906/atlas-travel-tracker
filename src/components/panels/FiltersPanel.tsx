import { RotateCcw } from 'lucide-react'
import { REGIONS, SEASON_FILTERS, SEASON_LABELS, TRAVEL_STYLE_TAGS, WEATHER_TAGS } from '../../data/tags'
import { countActiveFilters } from '../../lib/filters'
import { cn } from '../../lib/utils'
import { useUIStore } from '../../stores/uiStore'
import { Button, ToggleSwitch } from '../ui'
import { PanelShell } from './PanelShell'

export function FiltersPanel() {
  const { filters, resetFilters, setFilters } = useUIStore()
  return (
    <PanelShell title="Filters" subtitle={`${countActiveFilters(filters)} active`}>
      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-2">
          {(['all', 'visited', 'unvisited'] as const).map((value) => (
            <FilterButton
              key={value}
              active={filters.visited === value}
              onClick={() => setFilters({ visited: value })}
            >
              {value}
            </FilterButton>
          ))}
        </div>

        <ToggleSwitch
          checked={filters.favoritesOnly}
          onChange={(favoritesOnly) => setFilters({ favoritesOnly })}
          label="Favorites only"
        />

        <FilterGroup title="Season">
          {SEASON_FILTERS.map((season) => (
            <FilterButton
              key={season}
              active={filters.season === season}
              onClick={() => setFilters({ season })}
            >
              {SEASON_LABELS[season]}
            </FilterButton>
          ))}
        </FilterGroup>

        <FilterGroup title="Travel style">
          {TRAVEL_STYLE_TAGS.map((tag) => (
            <FilterButton
              key={tag}
              active={filters.styles.includes(tag)}
              onClick={() => setFilters({ styles: toggle(filters.styles, tag) })}
            >
              {tag}
            </FilterButton>
          ))}
        </FilterGroup>

        <FilterGroup title="Weather">
          {WEATHER_TAGS.map((tag) => (
            <FilterButton
              key={tag}
              active={filters.weather.includes(tag)}
              onClick={() => setFilters({ weather: toggle(filters.weather, tag) })}
            >
              {tag}
            </FilterButton>
          ))}
        </FilterGroup>

        <FilterGroup title="Region">
          {REGIONS.map((region) => (
            <FilterButton
              key={region}
              active={filters.regions.includes(region)}
              onClick={() => setFilters({ regions: toggle(filters.regions, region) })}
            >
              {region}
            </FilterButton>
          ))}
        </FilterGroup>

        <Button icon={RotateCcw} onClick={resetFilters} className="w-full">
          Reset filters
        </Button>
      </div>
    </PanelShell>
  )
}

function toggle<T>(items: readonly T[], value: T): T[] {
  return items.includes(value) ? items.filter((item) => item !== value) : [...items, value]
}

function FilterGroup({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section>
      <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </section>
  )
}

function FilterButton({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border px-3 py-1.5 text-xs capitalize transition',
        active ? 'border-accent/50 bg-accent/20 text-white' : 'border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.09]',
      )}
    >
      {children}
    </button>
  )
}
