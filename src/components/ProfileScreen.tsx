import { UserRound } from 'lucide-react'
import { USER_PROFILES } from '../lib/profiles'
import { useAuthStore } from '../stores/authStore'
import { Button } from './ui'

export function ProfileScreen() {
  const chooseProfile = useAuthStore((state) => state.chooseProfile)

  return (
    <main className="grid min-h-screen place-items-center px-6">
      <section className="glass w-full max-w-sm rounded-2xl p-6 text-center animate-pop-in">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
          <UserRound aria-hidden className="h-6 w-6 text-blue-200" />
        </div>
        <h1 className="text-2xl font-semibold tracking-normal text-white">welcome</h1>
        <div className="mt-6 grid gap-3">
          {USER_PROFILES.map((profile) => (
            <Button key={profile.id} type="button" onClick={() => chooseProfile(profile.id)} className="w-full">
              {profile.name}
            </Button>
          ))}
        </div>
      </section>
    </main>
  )
}
