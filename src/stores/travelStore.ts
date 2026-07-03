import { create } from 'zustand'
import type { TravelEntity, TravelEntry, UserProfileId, VisitRecord } from '../types'
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

  init: (profileId: UserProfileId) => Promise<void>
  reset: () => void
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
let storageProfileId: UserProfileId | null = null
const saveQueues = new Map<string, Promise<void>>()

function getStorage(profileId?: UserProfileId): TravelStorage {
  if (profileId && storageProfileId !== profileId) {
    storage = createStorage(profileId)
    storageProfileId = profileId
  }
  if (!storage) throw new Error('Choose a profile before loading travel data.')
  return storage
}

let savedResetTimer: ReturnType<typeof setTimeout> | undefined

function enqueueSave(key: string, task: () => Promise<void>): Promise<void> {
  const previous = saveQueues.get(key) ?? Promise.resolve()
  const next = previous.catch(() => undefined).then(task)
  saveQueues.set(key, next)
  next
    .finally(() => {
      if (saveQueues.get(key) === next) saveQueues.delete(key)
    })
    .catch(() => undefined)
  return next
}

export const useTravelStore = create<TravelState>((set, get) => ({
  entries: {},
  status: 'idle',
  backend: 'local',
  saveState: 'idle',
  error: null,

  init: async (profileId) => {
    if (storageProfileId !== profileId) {
      storage = null
      set({ entries: {}, status: 'idle', saveState: 'idle', error: null })
    }
    if (get().status === 'loading' || get().status === 'ready') return
    set({ status: 'loading' })
    try {
      const store = getStorage(profileId)
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

  reset: () => {
    storage = null
    storageProfileId = null
    saveQueues.clear()
    clearTimeout(savedResetTimer)
    set({ entries: {}, status: 'idle', backend: 'local', saveState: 'idle', error: null })
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
      const store = getStorage()
      await enqueueSave(entity.key, () => (shouldDelete ? store.remove(entity.key) : store.save(next)))
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
