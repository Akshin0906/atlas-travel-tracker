// Generates the salted SHA-256 hash for the 4-digit PIN gate.
// Usage: npm run pin:hash -- 0000 [salt]
import { createHash } from 'node:crypto'

const pin = process.argv[2]
const salt = process.argv[3] || process.env.VITE_PIN_SALT || 'atlas-pin-v1'

if (!/^\d{4}$/.test(pin ?? '')) {
  console.error('Usage: npm run pin:hash -- <4-digit-pin> [salt]')
  process.exit(1)
}

const hash = createHash('sha256').update(`${salt}:${pin}`).digest('hex')
console.log('Add these to your .env (and GitHub Actions secrets):')
console.log(`VITE_PIN_HASH=${hash}`)
console.log(`VITE_PIN_SALT=${salt}`)
