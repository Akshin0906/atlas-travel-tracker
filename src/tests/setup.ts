import '@testing-library/jest-dom/vitest'
import metroCitiesByIso2 from '../../public/data/metro-cities.json'

class MemoryStorage implements Storage {
  private values = new Map<string, string>()

  get length(): number {
    return this.values.size
  }

  clear(): void {
    this.values.clear()
  }

  getItem(key: string): string | null {
    return this.values.get(key) ?? null
  }

  key(index: number): string | null {
    return [...this.values.keys()][index] ?? null
  }

  removeItem(key: string): void {
    this.values.delete(key)
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value)
  }
}

const localStorageShim = new MemoryStorage()

Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: localStorageShim,
})

Object.defineProperty(window, 'localStorage', {
  configurable: true,
  value: localStorageShim,
})

const originalFetch = globalThis.fetch?.bind(globalThis)
const metroCitiesJson = JSON.stringify(metroCitiesByIso2)

Object.defineProperty(globalThis, 'fetch', {
  configurable: true,
  value: async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
    if (url.endsWith('/data/metro-cities.json') || url.endsWith('data/metro-cities.json')) {
      return new Response(metroCitiesJson, {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      })
    }
    if (originalFetch) return originalFetch(input, init)
    throw new Error(`Unhandled fetch in test: ${url}`)
  },
})
