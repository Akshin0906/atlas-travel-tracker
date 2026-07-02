import { create } from 'zustand'
import { getProfile, type UserProfile } from '../lib/profiles'
import { getStoredProfileId, isUnlocked, setStoredProfileId, setUnlocked } from '../lib/pin'
import type { UserProfileId } from '../types'

interface AuthState {
  unlocked: boolean
  selectedProfile: UserProfile | null
  chooseProfile: (profileId: UserProfileId) => void
  clearProfile: () => void
  unlock: () => void
  lock: () => void
}

const storedProfile = getProfile(getStoredProfileId())

export const useAuthStore = create<AuthState>((set) => ({
  unlocked: storedProfile ? isUnlocked(storedProfile.id) : false,
  selectedProfile: storedProfile,
  chooseProfile: (profileId) => {
    const profile = getProfile(profileId)
    if (!profile) return
    setStoredProfileId(profile.id)
    setUnlocked(profile.id, false)
    set({ selectedProfile: profile, unlocked: false })
  },
  clearProfile: () => {
    set((state) => {
      if (state.selectedProfile) setUnlocked(state.selectedProfile.id, false)
      return { selectedProfile: null, unlocked: false }
    })
    setStoredProfileId(null)
  },
  unlock: () => {
    set((state) => {
      if (!state.selectedProfile) return state
      setUnlocked(state.selectedProfile.id, true)
      return { unlocked: true }
    })
  },
  lock: () => {
    set((state) => {
      if (state.selectedProfile) setUnlocked(state.selectedProfile.id, false)
      return { unlocked: false }
    })
  },
}))
