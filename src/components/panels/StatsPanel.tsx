import { BarChart3, Globe2, Heart, MapPinned } from 'lucide-react'
import { countries } from '../../data/countries'
import { tourismCountries } from '../../data/tourismCountries'
import { computeStats } from '../../lib/stats'
import { useTravelStore } from '../../stores/travelStore'
import { Tag } from '../ui'
import { PanelShell } from './PanelShell'

export function StatsPanel() {
  const entries = useTravelStore((state) => Object.values(state.entries))
  const stats = computeStats(entries, { countries, tourism: tourismCountries })

  return (
    <PanelShell title="Stats" subtitle="Your personal travel snapshot">
      <div className="grid grid-cols-2 gap-3">
        <Stat icon={Globe2} label="Countries visited" value={`${stats.countriesVisited}/${stats.countriesTotal}`} detail={`${stats.countriesPct}%`} />
        <Stat icon={MapPinned} label="US states visited" value={`${stats.statesVisited}/${stats.statesTotal}`} detail={`${stats.statesPct}%`} />
        <Stat icon={Heart} label="Favorites" value={`${stats.favoriteCountries + stats.favoriteStates}`} detail="countries + states" />
        <Stat icon={BarChart3} label="Continents" value={`${stats.continentsVisited.length}`} detail={stats.continentsVisited.join(', ') || 'None yet'} />
      </div>

      <section className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <h3 className="mb-3 text-sm font-semibold text-white">Top travel styles</h3>
        <div className="flex flex-wrap gap-2">
          {stats.topStyles.length === 0 ? (
            <p className="text-sm text-slate-500">Mark visited or favorite countries to build this.</p>
          ) : (
            stats.topStyles.map((item) => <Tag key={item.tag}>{item.tag} · {item.count}</Tag>)
          )}
        </div>
      </section>
    </PanelShell>
  )
}

function Stat({ detail, icon: Icon, label, value }: { detail: string; icon: typeof Globe2; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <Icon aria-hidden className="mb-3 h-5 w-5 text-blue-200" />
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 min-h-5 text-xs text-slate-400">{detail}</div>
    </div>
  )
}
