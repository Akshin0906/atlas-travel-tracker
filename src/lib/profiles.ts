import { DEFAULT_PIN_HASH } from './pin'
import type { UserProfileId } from '../types'

export interface UserProfile {
  id: UserProfileId
  name: string
  pinHash: string
}

export const USER_PROFILES: UserProfile[] = [
  {
    id: 'akshin',
    name: 'Akshin',
    pinHash: DEFAULT_PIN_HASH,
  },
  {
    id: 'neha',
    name: 'Neha',
    pinHash: 'e4d73aee977212ddc1e3c28b0bb21101b45bfe6ce859db594b2ae543c09dc154',
  },
]

export function getProfile(profileId: UserProfileId | null): UserProfile | null {
  return USER_PROFILES.find((profile) => profile.id === profileId) ?? null
}

export function isUserProfileId(value: string | null): value is UserProfileId {
  return USER_PROFILES.some((profile) => profile.id === value)
}
