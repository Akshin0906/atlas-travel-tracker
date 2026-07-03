// Generates the salted SHA-256 hash for a profile PIN.
// Usage: npm run pin:hash -- 0000 [salt]
import { createHash } from 'node:crypto'

const pin = process.argv[2]
const salt = process.argv[3] || 'atlas-pin-v1'

if (!/^\d{4}$/.test(pin ?? '')) {
  console.error('Usage: npm run pin:hash -- <4-digit-pin> [salt]')
  process.exit(1)
}

const hash = createHash('sha256').update(`${salt}:${pin}`).digest('hex')
console.log(hash)
