import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import { MapPin, Search, X } from 'lucide-react'
import { searchEntities } from '../lib/search'
import { useEscape } from '../hooks/useEscape'
import { useTravelStore } from '../stores/travelStore'
import { useUIStore } from '../stores/uiStore'
import { IconButton } from './ui'
import { cn } from '../lib/utils'

export function SearchOverlay() {
  const { closeSearch, searchMode, searchOpen, selectEntity, showToast } = useUIStore()
  const update = useTravelStore((state) => state.update)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const results = useMemo(() => searchEntities(query), [query])

  useEscape(closeSearch, searchOpen)

  useEffect(() => {
    if (!searchOpen) return
    setQuery('')
    setActive(0)
    requestAnimationFrame(() => inputRef.current?.focus())
  }, [searchOpen, searchMode])

  if (!searchOpen) return null

  async function choose(index: number) {
    const result = results[index]
    if (!result) return
    if (searchMode === 'add-visited') {
      await update(result.entity, { visited: true })
      showToast(`${result.entity.name} marked visited`)
    }
    if (searchMode === 'add-favorite') {
      await update(result.entity, { favorite: true })
      showToast(`${result.entity.name} added to favorites`)
    }
    selectEntity(result.entity.key, { focus: true })
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((value) => Math.min(value + 1, Math.max(results.length - 1, 0)))
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((value) => Math.max(value - 1, 0))
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      void choose(active)
    }
  }

  const title =
    searchMode === 'add-visited'
      ? 'Add visited country or state'
      : searchMode === 'add-favorite'
        ? 'Add favorite country or state'
        : 'Search countries and states'

  return (
    <div className="fixed inset-0 z-40 bg-black/45 px-4 pt-24 animate-fade-in" onMouseDown={closeSearch}>
      <div className="glass mx-auto w-full max-w-2xl rounded-2xl p-3" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-white/10 px-2 pb-3">
          <Search aria-hidden className="h-5 w-5 text-slate-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActive(0)
            }}
            onKeyDown={onKeyDown}
            aria-label={title}
            placeholder={title}
            className="h-11 flex-1 bg-transparent text-lg text-white placeholder:text-slate-500 focus:outline-none"
          />
          <IconButton icon={X} label="Close search" onClick={closeSearch} className="border-0 bg-white/[0.05]" />
        </div>
        <div className="max-h-[55vh] overflow-y-auto py-2 scrollbar-thin">
          {results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-slate-400">
              {query ? 'No matches.' : 'Type a country, US state, or code.'}
            </p>
          ) : (
            results.map((result, index) => (
              <button
                key={result.entity.key}
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => void choose(index)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition',
                  active === index ? 'bg-white/[0.10]' : 'hover:bg-white/[0.06]',
                )}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] text-blue-100">
                  <MapPin aria-hidden className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-white">{result.entity.name}</span>
                  <span className="block text-xs text-slate-400">{result.sub}</span>
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
