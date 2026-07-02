import { useEffect, useState } from 'react'
import { Globe2 } from 'lucide-react'
import { EMPTY_PROFILE_STATS_BY_ID, loadProfileStats, type ProfileStatsById } from '../lib/profileStats'
import { USER_PROFILES } from '../lib/profiles'
import { useAuthStore } from '../stores/authStore'
import { Button } from './ui'

export function ProfileScreen() {
  const chooseProfile = useAuthStore((state) => state.chooseProfile)
  const [stats, setStats] = useState<ProfileStatsById>(EMPTY_PROFILE_STATS_BY_ID)
  const [statsFailed, setStatsFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadProfileStats()
      .then((nextStats) => {
        if (!cancelled) {
          setStats(nextStats)
          setStatsFailed(false)
        }
      })
      .catch(() => {
        if (!cancelled) setStatsFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  function profileTint(profileId: string): string {
    return profileId === 'akshin'
      ? '!border-blue-300/20 !bg-blue-400/[0.08] !text-blue-50 hover:!bg-blue-400/[0.12]'
      : '!border-pink-300/20 !bg-pink-400/[0.08] !text-pink-50 hover:!bg-pink-400/[0.12]'
  }

  return (
    <main className="grid min-h-screen place-items-center px-6">
      <section className="glass w-full max-w-sm rounded-2xl p-6 text-center animate-pop-in">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-blue-200/15 bg-blue-400/[0.08] shadow-[0_0_28px_rgba(10,132,255,0.16)]">
          <Globe2 aria-hidden className="h-7 w-7 text-blue-100" />
        </div>
        <h1 className="font-display text-3xl font-semibold tracking-normal text-white">Welcome to Atlas</h1>
        <p className="mt-2 text-sm text-slate-400">Choose whose travel map to open.</p>
        <section className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase text-slate-500">
            <span className="text-blue-100">Akshin</span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] text-slate-400">&amp;</span>
            <span className="text-pink-100">Neha</span>
          </div>
          <StatRow label="Countries" akshin={stats.akshin.countries} neha={stats.neha.countries} />
          <div className="my-3 border-t border-white/10" />
          <StatRow label="U.S. States" akshin={stats.akshin.states} neha={stats.neha.states} />
          {statsFailed ? <p className="mt-3 text-xs text-slate-500">Stats unavailable right now.</p> : null}
        </section>
        <div className="mt-6 grid gap-3">
          {USER_PROFILES.map((profile) => (
            <Button key={profile.id} type="button" onClick={() => chooseProfile(profile.id)} className={`w-full ${profileTint(profile.id)}`}>
              {profile.name}
            </Button>
          ))}
        </div>
      </section>
    </main>
  )
}

function StatRow({ akshin, label, neha }: { akshin: number; label: string; neha: number }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
      <div className="text-right">
        <div className="text-3xl font-semibold leading-none text-blue-200">{akshin}</div>
      </div>
      <div className="min-w-20 pb-1 text-center text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-left">
        <div className="text-3xl font-semibold leading-none text-pink-200">{neha}</div>
      </div>
    </div>
  )
}
