import { useEffect, useMemo, useState } from 'react'
import {
  cityPinCandidates,
  createCityPinMiss,
  isCachedCityPin,
  readCityPinCache,
  resolveCityPin,
  shouldResolveCityPin,
  writeCityPinCache,
  type CityPin,
} from '../lib/cityPins'
import type { TravelEntry } from '../types'

const NOMINATIM_REQUEST_DELAY_MS = 1000
let nextNominatimRequestAt = 0

export function useCityPins(entries: Record<string, TravelEntry>): CityPin[] {
  const candidates = useMemo(() => cityPinCandidates(entries), [entries])
  const [pins, setPins] = useState<Record<string, CityPin>>({})

  useEffect(() => {
    const wantedIds = new Set(candidates.map((candidate) => candidate.id))
    const cached = readCityPinCache()
    const visible: Record<string, CityPin> = {}
    for (const [id, entry] of Object.entries(cached)) {
      if (wantedIds.has(id) && isCachedCityPin(entry)) visible[id] = entry
    }

    setPins(visible)

    const missing = candidates.filter((candidate) => shouldResolveCityPin(cached[candidate.id]))
    if (missing.length === 0) return

    const controller = new AbortController()
    let cancelled = false

    async function resolveMissing() {
      const nextCache = { ...cached }
      for (const candidate of missing) {
        if (cancelled) return
        try {
          await waitForNominatimSlot(controller.signal)
        } catch {
          return
        }
        if (cancelled) return
        try {
          const resolved = await resolveCityPin(candidate, controller.signal)
          nextCache[candidate.id] = resolved ?? createCityPinMiss()
          writeCityPinCache(nextCache)
          if (resolved) setPins((current) => ({ ...current, [resolved.id]: resolved }))
        } catch (error) {
          if (!controller.signal.aborted) {
            nextCache[candidate.id] = createCityPinMiss()
            writeCityPinCache(nextCache)
            console.warn('City geocoding failed', error)
          }
        }
      }
    }

    void resolveMissing()

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [candidates])

  return useMemo(
    () => candidates.map((candidate) => pins[candidate.id]).filter((pin): pin is CityPin => Boolean(pin)),
    [candidates, pins],
  )
}

async function waitForNominatimSlot(signal: AbortSignal): Promise<void> {
  const waitMs = Math.max(0, nextNominatimRequestAt - Date.now())
  if (waitMs > 0) await delay(waitMs, signal)
  nextNominatimRequestAt = Date.now() + NOMINATIM_REQUEST_DELAY_MS
}

function delay(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(resolve, ms)
    signal.addEventListener(
      'abort',
      () => {
        window.clearTimeout(timer)
        reject(new Error('aborted'))
      },
      { once: true },
    )
  })
}
