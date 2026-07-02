import { useMemo, useState } from 'react'
import { Heart, Search } from 'lucide-react'
import { entityFromKey } from '../../lib/entities'
import { normalizeText } from '../../lib/text'
import { flagEmoji } from '../../lib/utils'
import { useTravelStore } from '../../stores/travelStore'
import { useUIStore } from '../../stores/uiStore'
import { Tag } from '../ui'
import { PanelShell } from './PanelShell'

export function FavoritesPanel() {
  const [query, setQuery] = useState('')
  const entries = useTravelStore((state) => Object.values(state.entries))
  const selectEntity = useUIStore((state) => state.selectEntity)
  const favorites = useMemo(() => {
    const q = normalizeText(query)
    return entries
      .filter((entry) => entry.favorite)
      .filter((entry) => !q || normalizeText(entry.name).includes(q))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [entries, query])

  return (
    <PanelShell title="Favorites" subtitle={`${favorites.length} saved`}>
      <label className="mb-4 flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3">
        <Search aria-hidden className="h-4 w-4 text-slate-500" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter favorites"
          className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
        />
      </label>
      <div className="space-y-2">
        {favorites.length === 0 ? <p className="py-8 text-center text-sm text-slate-500">No favorites yet.</p> : null}
        {favorites.map((entry) => {
          const entity = entityFromKey(entry.key)
          return (
            <button
              key={entry.key}
              type="button"
              onClick={() => entity && selectEntity(entity.key, { focus: true })}
              className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-left transition hover:bg-white/[0.08]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-favorite/15 text-lg">
                {entry.entityType === 'country' ? flagEmoji(entry.countryCode) : <Heart aria-hidden className="h-4 w-4 text-favorite" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-white">{entry.name}</span>
                <span className="block text-xs text-slate-400">{entry.entityType === 'country' ? 'Country' : 'US state'}</span>
              </span>
              {entry.visited ? <Tag tone="green">visited</Tag> : null}
            </button>
          )
        })}
      </div>
    </PanelShell>
  )
}
