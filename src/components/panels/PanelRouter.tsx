import { Suspense, lazy } from 'react'
import { useUIStore } from '../../stores/uiStore'

const DetailPanel = lazy(() => import('./DetailPanel').then((module) => ({ default: module.DetailPanel })))
const FavoritesPanel = lazy(() => import('./FavoritesPanel').then((module) => ({ default: module.FavoritesPanel })))
const FiltersPanel = lazy(() => import('./FiltersPanel').then((module) => ({ default: module.FiltersPanel })))
const SettingsPanel = lazy(() => import('./SettingsPanel').then((module) => ({ default: module.SettingsPanel })))
const StatsPanel = lazy(() => import('./StatsPanel').then((module) => ({ default: module.StatsPanel })))

export function PanelRouter() {
  const panel = useUIStore((state) => state.panel)
  const Panel =
    panel === 'detail' ? DetailPanel :
      panel === 'filters' ? FiltersPanel :
        panel === 'stats' ? StatsPanel :
          panel === 'favorites' ? FavoritesPanel :
            panel === 'settings' ? SettingsPanel :
              null

  return Panel ? (
    <Suspense fallback={null}>
      <Panel />
    </Suspense>
  ) : null
}
