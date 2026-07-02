import { Globe2 } from 'lucide-react'
import { USER_PROFILES } from '../lib/profiles'
import { useAuthStore } from '../stores/authStore'
import { Button } from './ui'

export function ProfileScreen() {
  const chooseProfile = useAuthStore((state) => state.chooseProfile)

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
