import { useEffect, useState } from 'react'
import { Globe2 } from 'lucide-react'
import { EMPTY_PROFILE_STATS_BY_ID, loadProfileStats, type ProfileStatsById } from '../lib/profileStats'
import { USER_PROFILES } from '../lib/profiles'
import { useAuthStore } from '../stores/authStore'
import { Button } from './ui'

function HomepageBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(10,132,255,0.16),transparent_30rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.05)_0,transparent_28rem),linear-gradient(240deg,rgba(59,130,246,0.08)_0,transparent_34rem)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-ink-950/55 to-ink-950" />
    </div>
  )
}

export function ProfileScreen() {
  const chooseProfile = useAuthStore((state) => state.chooseProfile)
  const [stats, setStats] = useState<ProfileStatsById>(EMPTY_PROFILE_STATS_BY_ID)
  const [statsLoaded, setStatsLoaded] = useState(false)
  const [statsFailed, setStatsFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadProfileStats()
      .then((nextStats) => {
        if (!cancelled) {
          setStats(nextStats)
          setStatsLoaded(true)
          setStatsFailed(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setStatsLoaded(true)
          setStatsFailed(true)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  function profileTint(profileId: string): string {
    return profileId === 'akshin'
      ? '!border-blue-300/30 !bg-blue-400/[0.12] !text-blue-50 hover:!bg-blue-400/[0.16]'
      : '!border-red-300/30 !bg-red-400/[0.12] !text-red-50 hover:!bg-red-400/[0.16]'
  }

  return (
    <main className="relative isolate h-dvh overflow-x-hidden overflow-y-auto px-6 py-8 sm:py-10">
      <HomepageBackground />
      <div className="relative z-10 flex min-h-full items-center justify-center">
        <section className="homepage-card w-full max-w-sm rounded-2xl p-6 text-center">
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-blue-200/25 bg-blue-400/[0.12] shadow-[0_0_28px_rgba(37,99,235,0.24)]">
            <Globe2 aria-hidden className="h-7 w-7 text-blue-50" />
          </div>
          <h1 className="font-display text-3xl font-semibold tracking-normal text-white">Welcome to Atlas</h1>
          <p className="mt-2 text-sm text-slate-400">Choose whose travel map to open.</p>
          <section className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">
            <div className="mx-auto grid w-full max-w-[19rem] grid-cols-[minmax(3rem,1fr)_minmax(5.75rem,1.15fr)_minmax(3rem,1fr)] items-center gap-x-2 sm:gap-x-3">
              <span className="text-center text-xs font-semibold uppercase tracking-wide text-blue-50">Akshin</span>
              <span className="justify-self-center rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] font-semibold text-slate-400">&amp;</span>
              <span className="text-center text-xs font-semibold uppercase tracking-wide text-red-50">Neha</span>
              <StatRow label="Countries" akshin={statsLoaded && !statsFailed ? stats.akshin.countries : null} neha={statsLoaded && !statsFailed ? stats.neha.countries : null} />
              <div className="col-span-3 my-3 border-t border-white/10" />
              <StatRow label="U.S. States" akshin={statsLoaded && !statsFailed ? stats.akshin.states : null} neha={statsLoaded && !statsFailed ? stats.neha.states : null} />
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
      </div>
    </main>
  )
}

function StatRow({ akshin, label, neha }: { akshin: number | null; label: string; neha: number | null }) {
  return (
    <>
      <div className="pt-4 text-center text-2xl font-semibold leading-none text-blue-100 tabular-nums sm:text-3xl">{akshin ?? '--'}</div>
      <div className="pt-4 text-center text-[11px] font-medium uppercase leading-tight tracking-wide text-slate-500 sm:text-xs">{label}</div>
      <div className="pt-4 text-center text-2xl font-semibold leading-none text-red-100 tabular-nums sm:text-3xl">{neha ?? '--'}</div>
    </>
  )
}
