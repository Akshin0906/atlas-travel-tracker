import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { FilterState, ViewMode } from '../types'
import { defaultFilters } from '../lib/filters'

export type PanelId = 'detail' | 'filters' | 'stats' | 'favorites' | 'settings'
export type SearchMode = 'select' | 'add-visited' | 'add-favorite'
export type DetailTab = 'track' | 'guide'

interface ToastAction {
  label: string
  onClick: () => void
}

interface Toast {
  id: number
  message: string
  tone?: 'success' | 'error'
  action?: ToastAction
}

interface UIState {
  viewMode: ViewMode
  panel: PanelId | null
  selectedKey: string | null
  detailTab: DetailTab
  /** Bumping nonce asks the active view to fly to the entity. */
  focus: { key: string; nonce: number } | null
  searchOpen: boolean
  searchMode: SearchMode
  showVisited: boolean
  showFavorites: boolean
  showUSStates: boolean
  filters: FilterState
  toast: Toast | null

  setViewMode: (mode: ViewMode) => void
  openPanel: (panel: PanelId) => void
  closePanel: () => void
  setDetailTab: (tab: DetailTab) => void
  selectEntity: (key: string, options?: { focus?: boolean; detailTab?: DetailTab }) => void
  clearSelection: () => void
  openSearch: (mode?: SearchMode) => void
  closeSearch: () => void
  setShowVisited: (v: boolean) => void
  setShowFavorites: (v: boolean) => void
  setShowUSStates: (v: boolean) => void
  setFilters: (patch: Partial<FilterState>) => void
  resetFilters: () => void
  showToast: (message: string, options?: Omit<Toast, 'id' | 'message'>) => void
  dismissToast: (id: number) => void
}

let toastId = 0
let toastTimer: ReturnType<typeof setTimeout> | undefined
const TOAST_DURATION_MS = 4000

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      viewMode: 'globe',
      panel: null,
      selectedKey: null,
      detailTab: 'track',
      focus: null,
      searchOpen: false,
      searchMode: 'select',
      showVisited: true,
      showFavorites: true,
      showUSStates: true,
      filters: defaultFilters,
      toast: null,

      setViewMode: (viewMode) => set({ viewMode }),

      openPanel: (panel) => set({ panel: get().panel === panel ? null : panel, searchOpen: false }),

      closePanel: () =>
        set((state) => ({
          panel: null,
          // Closing the detail panel also deselects, so the entity's own
          // visited/favorite colors show instead of a stale selection blue.
          selectedKey: state.panel === 'detail' ? null : state.selectedKey,
        })),

      setDetailTab: (detailTab) => set({ detailTab }),

      selectEntity: (key, options) =>
        set((state) => ({
          selectedKey: key,
          panel: 'detail',
          detailTab: options?.detailTab ?? state.detailTab,
          searchOpen: false,
          focus: options?.focus ? { key, nonce: (state.focus?.nonce ?? 0) + 1 } : state.focus,
        })),

      clearSelection: () =>
        set((state) => ({
          selectedKey: null,
          panel: state.panel === 'detail' ? null : state.panel,
        })),

      openSearch: (mode = 'select') => set({ searchOpen: true, searchMode: mode }),

      closeSearch: () => set({ searchOpen: false }),

      setShowVisited: (showVisited) => set({ showVisited }),
      setShowFavorites: (showFavorites) => set({ showFavorites }),
      setShowUSStates: (showUSStates) => set({ showUSStates }),

      setFilters: (patch) => set((state) => ({ filters: { ...state.filters, ...patch } })),

      resetFilters: () => set({ filters: defaultFilters }),

      showToast: (message, options) => {
        const id = ++toastId
        clearTimeout(toastTimer)
        set({ toast: { id, message, ...options } })
        toastTimer = setTimeout(() => {
          set((state) => (state.toast?.id === id ? { toast: null } : state))
        }, TOAST_DURATION_MS)
      },

      dismissToast: (id) => set((state) => (state.toast?.id === id ? { toast: null } : state)),
    }),
    {
      name: 'atlas.ui.v1',
      partialize: (state) => ({
        viewMode: state.viewMode,
        detailTab: state.detailTab,
        showVisited: state.showVisited,
        showFavorites: state.showFavorites,
        showUSStates: state.showUSStates,
      }),
    },
  ),
)
