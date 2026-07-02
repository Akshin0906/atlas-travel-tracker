import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Building2, CheckCircle2, Heart, MapPin, Search, X } from 'lucide-react'
import { searchEntities } from '../lib/search'
import { useEscape } from '../hooks/useEscape'
import { useTravelStore } from '../stores/travelStore'
import { useUIStore } from '../stores/uiStore'
import { IconButton } from './ui'
import { cn } from '../lib/utils'

export function SearchOverlay() {
  const { closeSearch, searchMode, searchOpen, selectEntity, showToast } = useUIStore()
  const addCity = useTravelStore((state) => state.addCity)
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
      if (result.city) await addCity(result.entity, result.city)
      showToast(result.city ? `${result.city} added to ${result.entity.name}` : `${result.entity.name} marked visited`)
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
      ? 'Add visited country, state, or city'
      : searchMode === 'add-favorite'
        ? 'Add favorite country, state, or city'
        : 'Search countries, states, and cities'
  const actionLabel =
    searchMode === 'add-visited' ? 'Mark visited' : searchMode === 'add-favorite' ? 'Add favorite' : 'Open'
  const ActionIcon = searchMode === 'add-visited' ? CheckCircle2 : searchMode === 'add-favorite' ? Heart : ArrowRight

  return (
    <div className="fixed inset-0 z-40 bg-black/45 px-4 pt-24 animate-fade-in" onMouseDown={closeSearch}>
      <div className="glass mx-auto w-full max-w-2xl rounded-2xl p-3 shadow-[0_30px_90px_rgba(0,0,0,0.48)]" onMouseDown={(event) => event.stopPropagation()}>
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
          <span className="hidden rounded-full border border-white/10 bg-white/[0.06] px-2 py-1 text-xs text-slate-300 sm:inline-flex">
            {actionLabel}
          </span>
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
                key={result.id}
                type="button"
                aria-selected={active === index}
                onMouseEnter={() => setActive(index)}
                onClick={() => void choose(index)}
                className={cn(
                  'group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition',
                  active === index ? 'bg-white/[0.10] ring-1 ring-white/10' : 'hover:bg-white/[0.06]',
                )}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-blue-100">
                  {result.kind === 'city' ? <Building2 aria-hidden className="h-4 w-4" /> : <MapPin aria-hidden className="h-4 w-4" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-white">{result.city ?? result.entity.name}</span>
                  <span className="block text-xs text-slate-400">{result.sub}</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-2 py-1 text-xs text-slate-300 transition group-hover:text-white">
                  {actionLabel}
                  <ActionIcon aria-hidden className="h-3.5 w-3.5" />
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
