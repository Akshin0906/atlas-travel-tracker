import { useEffect, useMemo, useState } from 'react'
import {
  cityPinCandidates,
  readCityPinCache,
  resolveCityPin,
  writeCityPinCache,
  type CityPin,
} from '../lib/cityPins'
import type { TravelEntry } from '../types'

export function useCityPins(entries: Record<string, TravelEntry>): CityPin[] {
  const candidates = useMemo(() => cityPinCandidates(entries), [entries])
  const [pins, setPins] = useState<Record<string, CityPin>>({})

  useEffect(() => {
    const wantedIds = new Set(candidates.map((candidate) => candidate.id))
    const cached = readCityPinCache()
    const visible = Object.fromEntries(
      Object.entries(cached).filter(([id]) => wantedIds.has(id)),
    ) as Record<string, CityPin>

    setPins(visible)

    const missing = candidates.filter((candidate) => !cached[candidate.id])
    if (missing.length === 0) return

    const controller = new AbortController()
    let cancelled = false

    async function resolveMissing() {
      const nextCache = { ...cached }
      for (const candidate of missing) {
        if (cancelled) return
        try {
          const resolved = await resolveCityPin(candidate, controller.signal)
          if (!resolved) continue
          nextCache[resolved.id] = resolved
          writeCityPinCache(nextCache)
          setPins((current) => ({ ...current, [resolved.id]: resolved }))
        } catch (error) {
          if (!controller.signal.aborted) console.warn('City geocoding failed', error)
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
