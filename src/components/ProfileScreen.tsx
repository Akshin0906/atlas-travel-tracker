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
        <section className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">
          <div className="mx-auto grid w-full max-w-[19rem] grid-cols-[minmax(3rem,1fr)_minmax(5.75rem,1.15fr)_minmax(3rem,1fr)] items-center gap-x-2 sm:gap-x-3">
            <span className="text-center text-xs font-semibold uppercase tracking-wide text-blue-100">Akshin</span>
            <span className="justify-self-center rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] font-semibold text-slate-400">&amp;</span>
            <span className="text-center text-xs font-semibold uppercase tracking-wide text-pink-100">Neha</span>
            <StatRow label="Countries" akshin={stats.akshin.countries} neha={stats.neha.countries} />
            <div className="col-span-3 my-3 border-t border-white/10" />
            <StatRow label="U.S. States" akshin={stats.akshin.states} neha={stats.neha.states} />
          </div>
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
    <>
      <div className="pt-4 text-center text-2xl font-semibold leading-none text-blue-200 tabular-nums sm:text-3xl">{akshin}</div>
      <div className="pt-4 text-center text-[11px] font-medium uppercase leading-tight tracking-wide text-slate-500 sm:text-xs">{label}</div>
      <div className="pt-4 text-center text-2xl font-semibold leading-none text-pink-200 tabular-nums sm:text-3xl">{neha}</div>
    </>
  )
}
