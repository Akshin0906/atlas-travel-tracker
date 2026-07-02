import { create } from 'zustand'
import { isUnlocked, setUnlocked } from '../lib/pin'

interface AuthState {
  unlocked: boolean
  unlock: () => void
  lock: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  unlocked: isUnlocked(),
  unlock: () => {
    setUnlocked(true)
    set({ unlocked: true })
  },
  lock: () => {
    setUnlocked(false)
    set({ unlocked: false })
  },
}))
