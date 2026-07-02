import { useEffect, useMemo, useRef, useState, type PointerEvent, type WheelEvent } from 'react'
import { geoGraticule, geoOrthographic, geoPath } from 'd3-geo'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import { useContainerSize } from '../hooks/useContainerSize'
import { useGeoData } from '../hooks/useGeoData'
import { clamp } from '../lib/utils'
import { entityColors, visualStateFor } from '../lib/visuals'
import { useTravelStore } from '../stores/travelStore'
import { useUIStore } from '../stores/uiStore'
import type { CityPin } from '../lib/cityPins'
import type { EntityFeature } from '../lib/geo'
import { IconButton } from './ui'

interface GlobeViewProps {
  cityPins: CityPin[]
  matchedKeys: Set<string> | null
}

const MIN_GLOBE_ZOOM = 0.75
const MAX_GLOBE_ZOOM = 2.8

export function GlobeView({ cityPins, matchedKeys }: GlobeViewProps) {
  const { data, error } = useGeoData()
  const { ref, width, height } = useContainerSize<HTMLDivElement>()
  const dragRef = useRef<{
    x: number
    y: number
    rotation: [number, number]
    key: string | null
    moved: boolean
  } | null>(null)
  const frameRef = useRef<number | null>(null)
  const nextRotationRef = useRef<[number, number] | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [rotation, setRotation] = useState<[number, number]>([-22, -12])
  const [zoom, setZoom] = useState(1)
  const entries = useTravelStore((state) => state.entries)
  const { focus, selectedKey, selectEntity, showFavorites, showUSStates, showVisited } = useUIStore()

  const polygons = useMemo(() => {
    if (!data) return []
    return showUSStates ? [...data.countryFeatures, ...data.stateFeatures] : data.countryFeatures
  }, [data, showUSStates])

  const projection = useMemo(() => {
    if (width < 1 || height < 1) return null
    return geoOrthographic()
      .scale(Math.min(width, height) * 0.36 * zoom)
      .translate([width / 2, height / 2])
      .rotate(rotation)
      .clipAngle(90)
  }, [height, rotation, width, zoom])

  const path = useMemo(() => (projection ? geoPath(projection) : null), [projection])
  const pinHaloPath = useMemo(() => (projection ? geoPath(projection).pointRadius(8) : null), [projection])
  const pinDotPath = useMemo(() => (projection ? geoPath(projection).pointRadius(4) : null), [projection])
  const graticule = useMemo(() => geoGraticule().step([20, 20])(), [])

  useEffect(() => {
    if (!data || !focus) return
    const target = data.byKey.get(focus.key)
    if (!target) return
    const [lng, lat] = target.centroid
    setRotation([-lng, -lat])
  }, [data, focus])

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  function colorsFor(item: EntityFeature) {
    if (hovered === item.entity.key) return { fill: 'rgba(96, 165, 250, 0.48)', stroke: 'rgba(191, 219, 254, 0.95)' }
    return entityColors(
      visualStateFor(item.entity.key, entries[item.entity.key], {
        matchedKeys,
        selectedKey,
        showFavorites,
        showVisited,
      }),
      'globe',
    )
  }

  function queueRotation(next: [number, number]) {
    nextRotationRef.current = next
    if (frameRef.current !== null) return
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      if (nextRotationRef.current) setRotation(nextRotationRef.current)
      nextRotationRef.current = null
    })
  }

  function updateZoom(next: number | ((current: number) => number)) {
    setZoom((current) => clamp(typeof next === 'function' ? next(current) : next, MIN_GLOBE_ZOOM, MAX_GLOBE_ZOOM))
  }

  function entityKeyFromTarget(target: EventTarget | null): string | null {
    return target instanceof Element
      ? target.closest<SVGPathElement>('[data-entity-key]')?.dataset.entityKey ?? null
      : null
  }

  function startDrag(event: PointerEvent<SVGSVGElement>) {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      rotation,
      key: entityKeyFromTarget(event.target),
      moved: false,
    }
  }

  function drag(event: PointerEvent<SVGSVGElement>) {
    const start = dragRef.current
    if (!start) return
    const x = event.clientX - start.x
    const y = event.clientY - start.y
    if (Math.abs(x) > 3 || Math.abs(y) > 3) start.moved = true
    const nextLng = start.rotation[0] + x / 3
    const nextLat = Math.max(-65, Math.min(65, start.rotation[1] - y / 3))
    queueRotation([nextLng, nextLat])
  }

  function releasePointer(event: PointerEvent<SVGSVGElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }

  function endDrag(event: PointerEvent<SVGSVGElement>) {
    const clickedKey = dragRef.current?.moved === false ? dragRef.current.key : null
    releasePointer(event)
    dragRef.current = null
    if (clickedKey) selectEntity(clickedKey, { focus: true })
  }

  function cancelDrag(event: PointerEvent<SVGSVGElement>) {
    releasePointer(event)
    dragRef.current = null
  }

  function wheelZoom(event: WheelEvent<SVGSVGElement>) {
    event.preventDefault()
    updateZoom((current) => current * (event.deltaY > 0 ? 0.9 : 1.1))
  }

  return (
    <div ref={ref} className="absolute inset-0">
      {!data || width === 0 ? (
        <div className="grid h-full place-items-center text-sm text-slate-400">{error ?? 'Loading globe...'}</div>
      ) : path && projection ? (
        <>
        <svg
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label="Interactive 3D-style globe"
          onPointerDown={startDrag}
          onPointerMove={drag}
          onPointerUp={endDrag}
          onPointerCancel={cancelDrag}
          onWheel={wheelZoom}
        >
          <defs>
            <radialGradient id="globeWater" cx="42%" cy="36%" r="64%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="58%" stopColor="#0b2340" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
          </defs>
          <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="url(#globeWater)" stroke="rgba(147,197,253,0.45)" strokeWidth="1.2" />
          <path d={path(graticule) ?? undefined} fill="none" stroke="rgba(226,232,240,0.08)" strokeWidth="0.7" />
          {polygons.map((item, index) => {
            const colors = colorsFor(item)
            return (
              <path
                key={`svg-${item.entity.key}-${index}`}
                d={path(item.feature) ?? undefined}
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth={item.entity.key === selectedKey ? 1.5 : 0.55}
                data-entity-key={item.entity.key}
                className="transition-colors duration-150"
                onPointerEnter={() => setHovered(item.entity.key)}
                onPointerLeave={() => setHovered(null)}
              />
            )
          })}
          {cityPins.map((pin) => {
            const point = { type: 'Point', coordinates: pin.coordinates } as const
            const halo = pinHaloPath?.(point) ?? undefined
            const dot = pinDotPath?.(point) ?? undefined
            if (!halo || !dot) return null
            return (
              <g key={pin.id} className="pointer-events-none" data-city-pin={pin.id}>
                <path d={halo} fill="rgba(56, 189, 248, 0.16)" stroke="rgba(125, 211, 252, 0.28)" strokeWidth="1" />
                <path d={dot} fill="#38bdf8" stroke="rgba(240, 249, 255, 0.9)" strokeWidth="1.2" />
              </g>
            )
          })}
          <circle cx={width / 2} cy={height / 2} r={projection.scale()} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" />
        </svg>
        <div className="glass absolute bottom-6 right-6 z-20 flex rounded-xl p-1">
          <IconButton icon={Plus} label="Zoom in" onClick={() => updateZoom((current) => current * 1.25)} className="h-9 w-9 border-0 bg-transparent" />
          <IconButton icon={Minus} label="Zoom out" onClick={() => updateZoom((current) => current / 1.25)} className="h-9 w-9 border-0 bg-transparent" />
          <IconButton icon={RotateCcw} label="Reset globe zoom" onClick={() => setZoom(1)} className="h-9 w-9 border-0 bg-transparent" />
        </div>
        </>
      ) : null}
    </div>
  )
}
