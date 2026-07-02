import { DetailPanel } from './DetailPanel'
import { FavoritesPanel } from './FavoritesPanel'
import { FiltersPanel } from './FiltersPanel'
import { SettingsPanel } from './SettingsPanel'
import { StatsPanel } from './StatsPanel'
import { useUIStore } from '../../stores/uiStore'

export function PanelRouter() {
  const panel = useUIStore((state) => state.panel)
  if (panel === 'detail') return <DetailPanel />
  if (panel === 'filters') return <FiltersPanel />
  if (panel === 'stats') return <StatsPanel />
  if (panel === 'favorites') return <FavoritesPanel />
  if (panel === 'settings') return <SettingsPanel />
  return null
}
