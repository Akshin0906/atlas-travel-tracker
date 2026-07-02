import { FormEvent, useState } from 'react'
import { LockKeyhole } from 'lucide-react'
import { PIN_LENGTH, verifyPin } from '../lib/pin'
import { useAuthStore } from '../stores/authStore'
import { Button } from './ui'
import { cn } from '../lib/utils'

export function PinScreen() {
  const unlock = useAuthStore((state) => state.unlock)
  const clearProfile = useAuthStore((state) => state.clearProfile)
  const selectedProfile = useAuthStore((state) => state.selectedProfile)
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    if (!selectedProfile) return
    setBusy(true)
    const ok = await verifyPin(pin, selectedProfile.pinHash)
    setBusy(false)
    if (ok) {
      unlock()
      return
    }
    setError(true)
    setPin('')
    window.setTimeout(() => setError(false), 420)
  }

  return (
    <main className="grid min-h-screen place-items-center px-6">
      <form
        onSubmit={submit}
        className={cn(
          'glass w-full max-w-sm rounded-2xl p-6 text-center animate-pop-in',
          error && 'animate-shake',
        )}
      >
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
          <LockKeyhole aria-hidden className="h-6 w-6 text-blue-200" />
        </div>
        <h1 className="text-2xl font-semibold tracking-normal text-white">{selectedProfile?.name ?? 'Atlas'}</h1>
        <p className="mt-2 text-sm text-slate-400">Enter your 4-digit PIN.</p>
        <input
          autoFocus
          inputMode="numeric"
          pattern="[0-9]*"
          type="password"
          value={pin}
          maxLength={PIN_LENGTH}
          aria-label="4 digit PIN"
          onChange={(event) => setPin(event.target.value.replace(/\D/g, '').slice(0, PIN_LENGTH))}
          className="mt-6 h-14 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-center text-3xl tracking-[0.6em] text-white"
        />
        {error ? <p className="mt-3 text-sm text-red-300">Wrong PIN.</p> : null}
        <Button type="submit" disabled={pin.length !== PIN_LENGTH || busy} className="mt-6 w-full">
          {busy ? 'Checking...' : 'Unlock'}
        </Button>
        <button
          type="button"
          onClick={clearProfile}
          className="mt-4 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          Switch user
        </button>
      </form>
    </main>
  )
}
