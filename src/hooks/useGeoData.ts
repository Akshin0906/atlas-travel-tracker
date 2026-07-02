import { useEffect, useState } from 'react'
import { loadGeoData, type GeoData } from '../lib/geo'

export function useGeoData(): { data: GeoData | null; error: string | null } {
  const [data, setData] = useState<GeoData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    loadGeoData()
      .then((d) => active && setData(d))
      .catch((e) => active && setError(e instanceof Error ? e.message : String(e)))
    return () => {
      active = false
    }
  }, [])

  return { data, error }
}
