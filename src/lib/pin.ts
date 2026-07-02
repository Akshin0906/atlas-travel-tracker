// 4-digit PIN gate. This is a casual privacy screen, NOT real security:
// the salted hash ships in the client bundle, so anyone determined can
// brute-force 10,000 combinations. Never protect sensitive data with it.

const FALLBACK_SALT = 'atlas-pin-v1'

/** Salted SHA-256 of "1234" with the fallback salt — the default PIN when VITE_PIN_HASH is unset. */
export const DEFAULT_PIN_HASH =
  '359e93b95ed98e98da83f065f7d6bc8c2dbe2864dcb721486dee87223b18e92a'

export const PIN_LENGTH = 4

export function isValidPinFormat(pin: string): boolean {
  return /^\d{4}$/.test(pin)
}

export function getPinSalt(): string {
  return import.meta.env.VITE_PIN_SALT || FALLBACK_SALT
}

export function getExpectedPinHash(): string {
  return import.meta.env.VITE_PIN_HASH || DEFAULT_PIN_HASH
}

export function isUsingDefaultPin(): boolean {
  return !import.meta.env.VITE_PIN_HASH
}

export async function hashPin(pin: string, salt: string = getPinSalt()): Promise<string> {
  const data = new TextEncoder().encode(`${salt}:${pin}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function verifyPin(
  pin: string,
  expectedHash: string = getExpectedPinHash(),
  salt: string = getPinSalt(),
): Promise<boolean> {
  if (!isValidPinFormat(pin)) return false
  return (await hashPin(pin, salt)) === expectedHash
}

const UNLOCK_KEY = 'atlas.unlocked'

export function isUnlocked(): boolean {
  try {
    return localStorage.getItem(UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function setUnlocked(unlocked: boolean): void {
  try {
    if (unlocked) localStorage.setItem(UNLOCK_KEY, '1')
    else localStorage.removeItem(UNLOCK_KEY)
  } catch {
    // storage unavailable (private mode) — the session just won't persist
  }
}
