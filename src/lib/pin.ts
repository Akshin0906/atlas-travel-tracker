// 4-digit PIN gate. This is a casual privacy screen, NOT real security:
// the salted hash ships in the client bundle, so anyone determined can
// brute-force 10,000 combinations. Never protect sensitive data with it.
import type { UserProfileId } from '../types'

export const DEFAULT_PIN_SALT = 'atlas-pin-v1'

/** Salted SHA-256 of "0906" with the fallback salt — Akshin's default PIN. */
export const DEFAULT_PIN_HASH =
  '316d66e2858a2717018609f7cb11efce04f9ebf76129b774143c58a0db57e96a'

export const PIN_LENGTH = 4

export function isValidPinFormat(pin: string): boolean {
  return /^\d{4}$/.test(pin)
}

export async function hashPin(pin: string, salt: string = DEFAULT_PIN_SALT): Promise<string> {
  const data = new TextEncoder().encode(`${salt}:${pin}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function verifyPin(
  pin: string,
  expectedHash: string,
  salt: string = DEFAULT_PIN_SALT,
): Promise<boolean> {
  if (!isValidPinFormat(pin)) return false
  return (await hashPin(pin, salt)) === expectedHash
}

const SELECTED_PROFILE_KEY = 'atlas.profile'
const UNLOCK_KEY_PREFIX = 'atlas.unlocked.'

export function getStoredProfileId(): UserProfileId | null {
  try {
    const value = localStorage.getItem(SELECTED_PROFILE_KEY)
    return value === 'akshin' || value === 'neha' ? value : null
  } catch {
    return null
  }
}

export function setStoredProfileId(profileId: UserProfileId | null): void {
  try {
    if (profileId) localStorage.setItem(SELECTED_PROFILE_KEY, profileId)
    else localStorage.removeItem(SELECTED_PROFILE_KEY)
  } catch {
    // storage unavailable (private mode) — the session just won't persist
  }
}

export function isUnlocked(profileId: UserProfileId): boolean {
  try {
    return localStorage.getItem(`${UNLOCK_KEY_PREFIX}${profileId}`) === '1'
  } catch {
    return false
  }
}

export function setUnlocked(profileId: UserProfileId, unlocked: boolean): void {
  try {
    const key = `${UNLOCK_KEY_PREFIX}${profileId}`
    if (unlocked) localStorage.setItem(key, '1')
    else localStorage.removeItem(key)
  } catch {
    // storage unavailable (private mode) — the session just won't persist
  }
}
