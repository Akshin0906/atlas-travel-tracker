import { Download, Lock, MapPinned, UserRound } from 'lucide-react'
import { downloadJson } from '../../lib/utils'
import { useAuthStore } from '../../stores/authStore'
import { useTravelStore } from '../../stores/travelStore'
import { useUIStore } from '../../stores/uiStore'
import { Button, ToggleSwitch } from '../ui'
import { PanelShell } from './PanelShell'

export function SettingsPanel() {
  const clearProfile = useAuthStore((state) => state.clearProfile)
  const lock = useAuthStore((state) => state.lock)
  const selectedProfile = useAuthStore((state) => state.selectedProfile)
  const { backend, entries } = useTravelStore()
  const { setShowFavorites, setShowUSStates, setShowVisited, showFavorites, showUSStates, showVisited } = useUIStore()

  return (
    <PanelShell title="Settings" subtitle={`Storage: ${backend}`}>
      <div className="space-y-3">
        <ToggleSwitch checked={showVisited} onChange={setShowVisited} label="Visited highlighting" />
        <ToggleSwitch checked={showFavorites} onChange={setShowFavorites} label="Favorite highlighting" />
        <ToggleSwitch checked={showUSStates} onChange={setShowUSStates} label="US state layer" description="Show all 50 states as selectable regions." />

        <Button icon={Download} onClick={() => downloadJson('atlas-travel-entries.json', Object.values(entries))} className="w-full">
          Export entries JSON
        </Button>
        <Button icon={MapPinned} onClick={() => window.location.reload()} className="w-full">
          Reload map data
        </Button>
        <Button icon={UserRound} onClick={clearProfile} className="w-full">
          Switch user{selectedProfile ? ` (${selectedProfile.name})` : ''}
        </Button>
        <Button icon={Lock} onClick={lock} className="w-full border-red-400/30 bg-red-500/10 text-red-100 hover:bg-red-500/15">
          Lock Atlas
        </Button>
      </div>
    </PanelShell>
  )
}
