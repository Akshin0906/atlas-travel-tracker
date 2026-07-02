import { FormEvent, useEffect, useMemo, useState } from 'react'
import { CalendarPlus, Minus, Plus, Star, Trash2, type LucideIcon } from 'lucide-react'
import { tourismByIso2 } from '../../data/tourismCountries'
import { SEASON_LABELS } from '../../data/tags'
import { entityFromKey } from '../../lib/entities'
import { flagEmoji, formatDate } from '../../lib/utils'
import { useTravelStore } from '../../stores/travelStore'
import { useUIStore } from '../../stores/uiStore'
import type { VisitRecord } from '../../types'
import { Button, IconButton, Tag, ToggleSwitch } from '../ui'
import { PanelShell } from './PanelShell'

export function DetailPanel() {
  const { filters, selectedKey } = useUIStore()
  const {
    addCity,
    addVisit,
    entries,
    removeCity,
    removeVisit,
    saveState,
    setNotes,
    toggleFavorite,
    toggleVisited,
    updateVisit,
  } = useTravelStore()
  const entity = selectedKey ? entityFromKey(selectedKey) : null
  const entry = entity ? entries[entity.key] : undefined
  const tourism = entity?.type === 'country' ? tourismByIso2.get(entity.countryCode) : undefined
  const [city, setCity] = useState('')
  const [notes, setLocalNotes] = useState(entry?.notes ?? '')
  const [prosOpen, setProsOpen] = useState(true)
  const [consOpen, setConsOpen] = useState(false)

  useEffect(() => {
    setLocalNotes(entry?.notes ?? '')
  }, [entry?.notes, selectedKey])

  const seasonNote = useMemo(() => {
    if (!tourism) return null
    return filters.season === 'overall'
      ? tourism.bestTime.summary
      : tourism.seasonalNotes[filters.season]
  }, [filters.season, tourism])

  if (!entity) {
    return (
      <PanelShell title="No selection">
        <p className="text-sm text-slate-400">Search or click the map to open a country or state.</p>
      </PanelShell>
    )
  }

  function submitCity(event: FormEvent) {
    event.preventDefault()
    if (!entity || !city.trim()) return
    void addCity(entity, city)
    setCity('')
  }

  function changeVisit(visit: VisitRecord, patch: Partial<VisitRecord>) {
    if (!entity) return
    void updateVisit(entity, { ...visit, ...patch })
  }

  return (
    <PanelShell
      title={`${entity.type === 'country' ? flagEmoji(entity.countryCode) : ''} ${entity.name}`.trim()}
      subtitle={entity.type === 'us_state' ? 'US state' : tourism ? `${tourism.region} · ${tourism.tier} tourism` : 'Country'}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <ToggleSwitch
            checked={entry?.visited ?? false}
            label="Visited"
            onChange={() => void toggleVisited(entity)}
          />
          <ToggleSwitch
            checked={entry?.favorite ?? false}
            label="Favorite"
            onChange={() => void toggleFavorite(entity)}
          />
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Cities visited</h3>
            <span className="text-xs text-slate-500">{saveState === 'saving' ? 'Saving...' : saveState === 'saved' ? 'Saved' : ''}</span>
          </div>
          <form onSubmit={submitCity} className="flex gap-2">
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Add city"
              className="h-10 min-w-0 flex-1 rounded-lg border border-white/10 bg-black/25 px-3 text-sm text-white placeholder:text-slate-500"
            />
            <IconButton icon={Plus} label="Add city" type="submit" />
          </form>
          <div className="mt-3 flex flex-wrap gap-2">
            {(entry?.cities ?? []).length === 0 ? (
              <p className="text-sm text-slate-500">No city tags yet.</p>
            ) : (
              entry?.cities.map((name) => (
                <button
                  key={name}
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-2 py-1 text-xs text-slate-200"
                  onClick={() => void removeCity(entity, name)}
                >
                  {name}
                  <Trash2 aria-hidden className="h-3 w-3 text-slate-500" />
                </button>
              ))
            )}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Visit dates</h3>
            <Button icon={CalendarPlus} onClick={() => void addVisit(entity)} className="h-8 px-2 text-xs">
              Add
            </Button>
          </div>
          <div className="space-y-3">
            {(entry?.visits ?? []).length === 0 ? <p className="text-sm text-slate-500">No visit records yet.</p> : null}
            {(entry?.visits ?? []).map((visit) => (
              <div key={visit.id} className="rounded-lg border border-white/10 bg-black/20 p-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    aria-label="Visit start date"
                    value={visit.startDate ?? ''}
                    onChange={(event) => changeVisit(visit, { startDate: event.target.value })}
                    className="h-9 rounded-lg border border-white/10 bg-black/25 px-2 text-sm text-white"
                  />
                  <input
                    type="date"
                    aria-label="Visit end date"
                    value={visit.endDate ?? ''}
                    onChange={(event) => changeVisit(visit, { endDate: event.target.value })}
                    className="h-9 rounded-lg border border-white/10 bg-black/25 px-2 text-sm text-white"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-500">
                    {visit.startDate ? formatDate(visit.startDate) : 'Optional dates'}
                  </span>
                  <IconButton icon={Trash2} label="Remove visit" onClick={() => void removeVisit(entity, visit.id)} className="h-8 w-8" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <h3 className="mb-3 text-sm font-semibold text-white">Personal notes</h3>
          <textarea
            value={notes}
            onChange={(event) => setLocalNotes(event.target.value)}
            onBlur={() => void setNotes(entity, notes)}
            placeholder="Add notes"
            rows={4}
            className="w-full resize-none rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-white placeholder:text-slate-500"
          />
        </section>

        {tourism ? (
          <section className="space-y-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">Vacation style</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {tourism.vacationStyle.map((line) => (
                  <li key={line} className="flex gap-2">
                    <Star aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-favorite" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Best time</div>
              <p className="mt-1 text-sm text-white">{tourism.bestTime.months.join(', ')}</p>
              <p className="mt-2 text-sm text-slate-300">
                <span className="text-blue-200">{SEASON_LABELS[filters.season]}:</span> {seasonNote}
              </p>
            </div>

            <Expandable title="Pros" icon={Plus} open={prosOpen} onToggle={() => setProsOpen(!prosOpen)}>
              <ul className="space-y-1 text-sm text-slate-300">
                {tourism.pros.map((item) => <li key={item}>+ {item}</li>)}
              </ul>
            </Expandable>

            <Expandable title="Cons" icon={Minus} open={consOpen} onToggle={() => setConsOpen(!consOpen)}>
              <ul className="space-y-1 text-sm text-slate-300">
                {tourism.cons.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </Expandable>

            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">Points of interest</h3>
              <div className="space-y-3">
                {tourism.cities.map((cityItem) => (
                  <div key={cityItem.name} className="rounded-lg border border-white/10 bg-black/20 p-3">
                    <div className="text-sm font-medium text-white">{cityItem.name}</div>
                    <div className="mt-2 space-y-2">
                      {cityItem.pois.map((poi) => (
                        <div key={poi.name}>
                          <div className="text-sm text-blue-100">{poi.name}</div>
                          <p className="text-xs leading-5 text-slate-400">{poi.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tourism.styles.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              {tourism.climate.map((tag) => <Tag key={tag} tone="blue">{tag}</Tag>)}
            </div>
          </section>
        ) : (
          <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <h3 className="text-sm font-semibold text-white">Tourism info</h3>
            <p className="mt-2 text-sm text-slate-400">Personal tracking is ready; no static tourism seed exists for this entry yet.</p>
          </section>
        )}
      </div>
    </PanelShell>
  )
}

interface ExpandableProps {
  title: string
  icon: LucideIcon
  open: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Expandable({ title, icon: Icon, open, onToggle, children }: ExpandableProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-white">
        {title}
        <Icon aria-hidden className="h-4 w-4 text-slate-400" />
      </button>
      {open ? <div className="border-t border-white/10 px-3 py-3">{children}</div> : null}
    </div>
  )
}
