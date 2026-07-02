import { create } from 'zustand'
import type { TravelEntity, TravelEntry, VisitRecord } from '../types'
import { createStorage, type TravelStorage } from '../lib/storage'
import { addCityTag, isEmptyEntry, mergeEntry, removeCityTag, type EntryPatch } from '../lib/travel'
import { uid } from '../lib/utils'

type LoadStatus = 'idle' | 'loading' | 'ready' | 'error'
type SaveState = 'idle' | 'saving' | 'saved' | 'error'

interface TravelState {
  entries: Record<string, TravelEntry>
  status: LoadStatus
  backend: 'supabase' | 'local'
  saveState: SaveState
  error: string | null

  init: () => Promise<void>
  update: (entity: TravelEntity, patch: EntryPatch) => Promise<void>
  toggleVisited: (entity: TravelEntity) => Promise<void>
  toggleFavorite: (entity: TravelEntity) => Promise<void>
  setNotes: (entity: TravelEntity, notes: string) => Promise<void>
  addCity: (entity: TravelEntity, city: string) => Promise<void>
  removeCity: (entity: TravelEntity, city: string) => Promise<void>
  addVisit: (entity: TravelEntity) => Promise<void>
  updateVisit: (entity: TravelEntity, visit: VisitRecord) => Promise<void>
  removeVisit: (entity: TravelEntity, visitId: string) => Promise<void>
}

let storage: TravelStorage | null = null
function getStorage(): TravelStorage {
  if (!storage) storage = createStorage()
  return storage
}

let savedResetTimer: ReturnType<typeof setTimeout> | undefined

export const useTravelStore = create<TravelState>((set, get) => ({
  entries: {},
  status: 'idle',
  backend: 'local',
  saveState: 'idle',
  error: null,

  init: async () => {
    if (get().status === 'loading' || get().status === 'ready') return
    set({ status: 'loading' })
    try {
      const store = getStorage()
      const list = await store.list()
      set({
        entries: Object.fromEntries(list.map((e) => [e.key, e])),
        status: 'ready',
        backend: store.kind,
        error: null,
      })
    } catch (err) {
      set({ status: 'error', error: err instanceof Error ? err.message : String(err) })
    }
  },

  update: async (entity, patch) => {
    const { entries } = get()
    const next = mergeEntry(entries[entity.key], entity, patch)
    const shouldDelete = isEmptyEntry(next)

    // Optimistic local update; persistence status surfaces via saveState.
    set((state) => {
      const updated = { ...state.entries }
      if (shouldDelete) delete updated[entity.key]
      else updated[entity.key] = next
      return { entries: updated, saveState: 'saving', error: null }
    })

    try {
      if (shouldDelete) await getStorage().remove(entity.key)
      else await getStorage().save(next)
      set({ saveState: 'saved' })
      clearTimeout(savedResetTimer)
      savedResetTimer = setTimeout(() => {
        if (useTravelStore.getState().saveState === 'saved') set({ saveState: 'idle' })
      }, 2000)
    } catch (err) {
      set({ saveState: 'error', error: err instanceof Error ? err.message : String(err) })
    }
  },

  toggleVisited: (entity) =>
    get().update(entity, { visited: !get().entries[entity.key]?.visited }),

  toggleFavorite: (entity) =>
    get().update(entity, { favorite: !get().entries[entity.key]?.favorite }),

  setNotes: (entity, notes) => get().update(entity, { notes }),

  addCity: (entity, city) =>
    get().update(entity, { cities: addCityTag(get().entries[entity.key]?.cities ?? [], city) }),

  removeCity: (entity, city) =>
    get().update(entity, { cities: removeCityTag(get().entries[entity.key]?.cities ?? [], city) }),

  addVisit: (entity) =>
    get().update(entity, {
      visits: [...(get().entries[entity.key]?.visits ?? []), { id: uid() }],
    }),

  updateVisit: (entity, visit) =>
    get().update(entity, {
      visits: (get().entries[entity.key]?.visits ?? []).map((v) => (v.id === visit.id ? visit : v)),
    }),

  removeVisit: (entity, visitId) =>
    get().update(entity, {
      visits: (get().entries[entity.key]?.visits ?? []).filter((v) => v.id !== visitId),
    }),
}))
