import '@testing-library/jest-dom/vitest'

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
let metroCitiesJson: string | null = null

Object.defineProperty(globalThis, 'fetch', {
  configurable: true,
  value: async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
    if (url.endsWith('/data/metro-cities.json') || url.endsWith('data/metro-cities.json')) {
      metroCitiesJson ??= await readTextFile('public/data/metro-cities.json')
      return new Response(metroCitiesJson, {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      })
    }
    if (originalFetch) return originalFetch(input, init)
    throw new Error(`Unhandled fetch in test: ${url}`)
  },
})

async function readTextFile(path: string): Promise<string> {
  const importer = new Function('specifier', 'return import(specifier)') as (specifier: string) => Promise<any>
  const { readFile } = await importer('node:fs/promises')
  const cwd = new Function('return process.cwd()') as () => string
  return readFile(`${cwd()}/${path}`, 'utf8') as Promise<string>
}
