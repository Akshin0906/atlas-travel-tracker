import { useEffect, useMemo, useRef, useState, type PointerEvent, type WheelEvent } from 'react'
import { geoGraticule, geoOrthographic, geoPath } from 'd3-geo'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import { useContainerSize } from '../hooks/useContainerSize'
import { useGeoData } from '../hooks/useGeoData'
import { visibleCenterX } from '../lib/layout'
import { pinchZoom, twoPointerDistance } from '../lib/pointers'
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
  randomDestinationRequest?: { key: string; nonce: number } | null
  onRandomDestinationSettled?: (key: string) => void
}

const MIN_GLOBE_ZOOM = 0.75
const MAX_GLOBE_ZOOM = 2.8
const RANDOM_SPIN_DURATION_MS = 2400
const RANDOM_SPIN_TURNS = 3

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function shortestLongitudeDelta(from: number, to: number): number {
  return ((((to - from) % 360) + 540) % 360) - 180
}

export function GlobeView({
  cityPins,
  matchedKeys,
  randomDestinationRequest,
  onRandomDestinationSettled,
}: GlobeViewProps) {
  const { data, error } = useGeoData()
  const { ref, width, height } = useContainerSize<HTMLDivElement>()
  const dragRef = useRef<{
    x: number
    y: number
    rotation: [number, number]
    key: string | null
    moved: boolean
  } | null>(null)
  const pointersRef = useRef(new Map<number, { x: number; y: number }>())
  const pinchRef = useRef<{ distance: number; zoom: number } | null>(null)
  const frameRef = useRef<number | null>(null)
  const spinFrameRef = useRef<number | null>(null)
  const spinningRef = useRef(false)
  const nextRotationRef = useRef<[number, number] | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [rotation, setRotationState] = useState<[number, number]>([-22, -12])
  const rotationRef = useRef<[number, number]>(rotation)
  const [spinning, setSpinning] = useState(false)
  const [zoom, setZoom] = useState(1)
  const entries = useTravelStore((state) => state.entries)
  const { clearSelection, focus, selectedKey, selectEntity, showFavorites, showUSStates, showVisited } = useUIStore()
  const layoutRef = useRef({ width, height, zoom })
  layoutRef.current = { width, height, zoom }

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
    if (spinningRef.current) return
    const target = data.byKey.get(focus.key)
    if (!target) return
    commitRotation(focusRotation(target.centroid))
  }, [data, focus])

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
      if (spinFrameRef.current !== null) cancelAnimationFrame(spinFrameRef.current)
    }
  }, [])

  useEffect(() => {
    if (!data || !randomDestinationRequest) return
    const target = data.byKey.get(randomDestinationRequest.key)
    if (!target) {
      onRandomDestinationSettled?.(randomDestinationRequest.key)
      return
    }

    if (spinFrameRef.current !== null) cancelAnimationFrame(spinFrameRef.current)
    dragRef.current = null
    pointersRef.current.clear()
    pinchRef.current = null
    spinningRef.current = true
    setSpinning(true)

    const start = rotationRef.current
    const targetKey = target.entity.key
    const end = focusRotation(target.centroid)
    const lngDelta = shortestLongitudeDelta(start[0], end[0]) + 360 * RANDOM_SPIN_TURNS
    const latDelta = end[1] - start[1]
    const startedAt = performance.now()

    function tick(now: number) {
      const progress = clamp((now - startedAt) / RANDOM_SPIN_DURATION_MS, 0, 1)
      const eased = easeOutCubic(progress)
      commitRotation([start[0] + lngDelta * eased, start[1] + latDelta * eased])

      if (progress < 1) {
        spinFrameRef.current = requestAnimationFrame(tick)
        return
      }

      spinFrameRef.current = null
      spinningRef.current = false
      commitRotation(end)
      setSpinning(false)
      onRandomDestinationSettled?.(targetKey)
    }

    spinFrameRef.current = requestAnimationFrame(tick)

    return () => {
      if (spinFrameRef.current !== null) cancelAnimationFrame(spinFrameRef.current)
      spinFrameRef.current = null
      spinningRef.current = false
    }
  }, [data, onRandomDestinationSettled, randomDestinationRequest])

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

  function commitRotation(next: [number, number]) {
    rotationRef.current = next
    setRotationState(next)
  }

  /**
   * Rotation that puts a centroid at the centre of the viewport strip left
   * visible by the detail panel (which opens with every fly-to), instead of
   * the true screen centre where the panel would cover it.
   */
  function focusRotation([lng, lat]: [number, number]): [number, number] {
    const layout = layoutRef.current
    const scale = Math.min(layout.width, layout.height) * 0.36 * layout.zoom
    const dx = layout.width / 2 - visibleCenterX(layout.width, true)
    if (dx <= 0 || scale <= 0) return [-lng, -lat]
    // Convert the pixel shift into extra longitude, capped so the target
    // never lands foreshortened near the limb of the sphere.
    const cosLat = Math.max(Math.cos((lat * Math.PI) / 180), 0.35)
    const sinArg = Math.min(dx / (scale * cosLat), 0.9)
    const offsetDeg = Math.min((Math.asin(sinArg) * 180) / Math.PI, 40)
    return [-(lng + offsetDeg), -lat]
  }

  function queueRotation(next: [number, number]) {
    nextRotationRef.current = next
    if (frameRef.current !== null) return
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      if (nextRotationRef.current) commitRotation(nextRotationRef.current)
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

  function rememberPointer(event: PointerEvent<SVGSVGElement>) {
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
  }

  function pinchDistance() {
    return twoPointerDistance(pointersRef.current.values())
  }

  function startDrag(event: PointerEvent<SVGSVGElement>) {
    if (spinningRef.current) return
    event.currentTarget.setPointerCapture(event.pointerId)
    rememberPointer(event)
    if (pointersRef.current.size >= 2) {
      pinchRef.current = { distance: pinchDistance(), zoom }
      dragRef.current = null
      return
    }
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      rotation,
      key: entityKeyFromTarget(event.target),
      moved: false,
    }
  }

  function drag(event: PointerEvent<SVGSVGElement>) {
    if (spinningRef.current) return
    if (!pointersRef.current.has(event.pointerId)) return
    rememberPointer(event)
    if (pinchRef.current && pointersRef.current.size >= 2) {
      const distance = pinchDistance()
      updateZoom(pinchZoom(pinchRef.current.zoom, pinchRef.current.distance, distance))
      return
    }
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
    if (spinningRef.current) return
    const wasPinching = pinchRef.current !== null || pointersRef.current.size > 1
    releasePointer(event)
    pointersRef.current.delete(event.pointerId)
    if (wasPinching) {
      if (pointersRef.current.size < 2) pinchRef.current = null
      dragRef.current = null
      return
    }
    const wasClick = dragRef.current?.moved === false
    const clickedKey = wasClick ? dragRef.current?.key ?? null : null
    dragRef.current = null
    if (clickedKey) selectEntity(clickedKey, { focus: true })
    else if (wasClick) clearSelection()
  }

  function cancelDrag(event: PointerEvent<SVGSVGElement>) {
    if (spinningRef.current) return
    releasePointer(event)
    pointersRef.current.delete(event.pointerId)
    if (pointersRef.current.size < 2) pinchRef.current = null
    dragRef.current = null
  }

  function wheelZoom(event: WheelEvent<SVGSVGElement>) {
    event.preventDefault()
    if (spinningRef.current) return
    updateZoom((current) => current * (event.deltaY > 0 ? 0.9 : 1.1))
  }

  return (
    <div ref={ref} className="absolute inset-0">
      {!data || width === 0 ? (
        <div className="grid h-full place-items-center text-sm text-slate-400">{error ?? 'Loading globe...'}</div>
      ) : path && projection ? (
        <>
        <svg
          className={spinning ? 'absolute inset-0 touch-none cursor-wait' : 'absolute inset-0 touch-none cursor-grab active:cursor-grabbing'}
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
        <div className="glass absolute bottom-20 right-4 z-20 flex rounded-xl p-1 sm:bottom-6 sm:right-6">
          <IconButton icon={Plus} label="Zoom in" onClick={() => updateZoom((current) => current * 1.25)} className="h-9 w-9 border-0 bg-transparent" />
          <IconButton icon={Minus} label="Zoom out" onClick={() => updateZoom((current) => current / 1.25)} className="h-9 w-9 border-0 bg-transparent" />
          <IconButton icon={RotateCcw} label="Reset globe zoom" onClick={() => setZoom(1)} className="h-9 w-9 border-0 bg-transparent" />
        </div>
        </>
      ) : null}
    </div>
  )
}
