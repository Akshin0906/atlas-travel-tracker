import { useEffect, useState, type CSSProperties } from 'react'
import { Globe2 } from 'lucide-react'
import { EMPTY_PROFILE_STATS_BY_ID, loadProfileStats, type ProfileStatsById } from '../lib/profileStats'
import { USER_PROFILES } from '../lib/profiles'
import { useAuthStore } from '../stores/authStore'
import { Button } from './ui'

function FloatingPaths({ position }: { position: 1 | -1 }) {
  const paths = Array.from({ length: 36 }, (_, index) => {
    const offset = index * 5 * position
    return {
      id: index,
      d: `M-${380 - offset} -${189 + index * 6}C-${380 - offset} -${189 + index * 6} -${312 - offset} ${216 - index * 6} ${152 - offset} ${343 - index * 6}C${616 - offset} ${470 - index * 6} ${684 - offset} ${875 - index * 6} ${684 - offset} ${875 - index * 6}`,
      opacity: 0.07 + index * 0.01,
      width: 0.55 + index * 0.025,
      style: {
        '--path-duration': `${22 + (index % 7) * 1.2}s`,
        '--path-delay': `${-index * 0.35}s`,
      } as CSSProperties,
    }
  })

  return (
    <div className="absolute inset-0">
      <svg aria-hidden className="h-full w-full text-slate-200" viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
        {paths.map((path) => (
          <path
            key={path.id}
            className="homepage-path"
            d={path.d}
            stroke="currentColor"
            strokeLinecap="round"
            strokeOpacity={path.opacity}
            strokeWidth={path.width}
            style={path.style}
          />
        ))}
      </svg>
    </div>
  )
}

function HomepageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(10,132,255,0.16),transparent_30rem)]" />
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-ink-950/55 to-ink-950" />
    </div>
  )
}

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
      ? '!border-blue-300/30 !bg-blue-400/[0.12] !text-blue-50 hover:!bg-blue-400/[0.16]'
      : '!border-red-300/30 !bg-red-400/[0.12] !text-red-50 hover:!bg-red-400/[0.16]'
  }

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-6">
      <HomepageBackground />
      <section className="glass relative z-10 w-full max-w-sm rounded-2xl p-6 text-center animate-pop-in">
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
      <div className="pt-4 text-center text-2xl font-semibold leading-none text-blue-100 tabular-nums sm:text-3xl">{akshin}</div>
      <div className="pt-4 text-center text-[11px] font-medium uppercase leading-tight tracking-wide text-slate-500 sm:text-xs">{label}</div>
      <div className="pt-4 text-center text-2xl font-semibold leading-none text-red-100 tabular-nums sm:text-3xl">{neha}</div>
    </>
  )
}
