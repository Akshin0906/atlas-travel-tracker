import { useMemo, useRef, useState, type PointerEvent, type WheelEvent } from 'react'
import { geoMercator, geoPath } from 'd3-geo'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import type { FeatureCollection, Geometry } from 'geojson'
import { useContainerSize } from '../hooks/useContainerSize'
import { useGeoData } from '../hooks/useGeoData'
import { repeatedWorldOffsets, wrapHorizontalPan } from '../lib/mapWrap'
import { clamp } from '../lib/utils'
import { entityColors, visualStateFor } from '../lib/visuals'
import { useTravelStore } from '../stores/travelStore'
import { useUIStore } from '../stores/uiStore'
import type { CityPin } from '../lib/cityPins'
import type { EntityFeature, EntityGeoFeature } from '../lib/geo'
import { IconButton } from './ui'

interface MapViewProps {
  cityPins: CityPin[]
  matchedKeys: Set<string> | null
}

const MIN_ZOOM = 0.7
const MAX_ZOOM = 8

export function MapView({ cityPins, matchedKeys }: MapViewProps) {
  const { data, error } = useGeoData()
  const { ref, width, height } = useContainerSize<HTMLDivElement>()
  const dragRef = useRef<{
    x: number
    y: number
    pan: { x: number; y: number }
    key: string | null
    moved: boolean
  } | null>(null)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [userZoom, setUserZoom] = useState(1)
  const entries = useTravelStore((state) => state.entries)
  const { clearSelection, selectedKey, selectEntity, showFavorites, showUSStates, showVisited } = useUIStore()

  const features = useMemo(() => {
    if (!data) return []
    return showUSStates ? [...data.countryFeatures, ...data.stateFeatures] : data.countryFeatures
  }, [data, showUSStates])

  const projection = useMemo(() => {
    if (!data || width < 1 || height < 1) return null
    const collection: FeatureCollection<Geometry> = {
      type: 'FeatureCollection',
      features: data.countryFeatures.map((item) => item.feature),
    }
    return geoMercator().fitExtent(
      [
        [Math.max(72, width * 0.08), Math.max(132, height * 0.16)],
        [width - Math.max(72, width * 0.08), height - Math.max(80, height * 0.1)],
      ],
      collection,
    )
  }, [data, height, width])

  const path = useMemo(() => (projection ? geoPath(projection) : null), [projection])
  const selected = selectedKey && data ? data.byKey.get(selectedKey) : null
  const selectedPoint = selected && projection ? projection(selected.centroid) : null
  const zoom = clamp((selected ? clamp(selected.zoom, 1, 5.5) : 1) * userZoom, MIN_ZOOM, MAX_ZOOM)
  const worldWidth = projection ? Math.PI * 2 * projection.scale() : 0
  const worldScreenWidth = worldWidth * zoom
  const panX = wrapHorizontalPan(pan.x, worldScreenWidth)
  const worldOffsets = useMemo(() => repeatedWorldOffsets(worldWidth, width, zoom), [width, worldWidth, zoom])
  const transform = selectedPoint
    ? `translate(${width / 2 + panX} ${height / 2 + pan.y}) scale(${zoom}) translate(${-selectedPoint[0]} ${-selectedPoint[1]})`
    : `translate(${width / 2 + panX} ${height / 2 + pan.y}) scale(${zoom}) translate(${-width / 2} ${-height / 2})`

  function colorsFor(item: EntityFeature) {
    return entityColors(
      visualStateFor(item.entity.key, entries[item.entity.key], {
        matchedKeys,
        selectedKey,
        showFavorites,
        showVisited,
      }),
      'map',
    )
  }

  function setZoom(next: number | ((current: number) => number)) {
    setUserZoom((current) => clamp(typeof next === 'function' ? next(current) : next, MIN_ZOOM, MAX_ZOOM))
  }

  function resetMap() {
    setPan({ x: 0, y: 0 })
    setUserZoom(1)
    clearSelection()
  }

  function entityKeyFromTarget(target: EventTarget | null): string | null {
    return target instanceof Element
      ? target.closest<SVGPathElement>('[data-entity-key]')?.dataset.entityKey ?? null
      : null
  }

  function startPan(event: PointerEvent<SVGSVGElement>) {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      pan: { x: panX, y: pan.y },
      key: entityKeyFromTarget(event.target),
      moved: false,
    }
  }

  function dragMap(event: PointerEvent<SVGSVGElement>) {
    const start = dragRef.current
    if (!start) return
    const x = event.clientX - start.x
    const y = event.clientY - start.y
    if (Math.abs(x) > 3 || Math.abs(y) > 3) start.moved = true
    setPan({ x: wrapHorizontalPan(start.pan.x + x, worldScreenWidth), y: start.pan.y + y })
  }

  function releasePointer(event: PointerEvent<SVGSVGElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }

  function endPan(event: PointerEvent<SVGSVGElement>) {
    const clickedKey = dragRef.current?.moved === false ? dragRef.current.key : null
    releasePointer(event)
    dragRef.current = null
    if (clickedKey) selectEntity(clickedKey, { focus: true })
  }

  function cancelPan(event: PointerEvent<SVGSVGElement>) {
    releasePointer(event)
    dragRef.current = null
  }

  function wheelZoom(event: WheelEvent<SVGSVGElement>) {
    event.preventDefault()
    const horizontalDelta = event.shiftKey && event.deltaX === 0 ? event.deltaY : event.deltaX
    if (Math.abs(horizontalDelta) > Math.abs(event.deltaY) || event.shiftKey) {
      setPan((current) => ({
        x: wrapHorizontalPan(current.x - horizontalDelta, worldScreenWidth),
        y: current.y,
      }))
      return
    }
    setZoom((current) => current * (event.deltaY > 0 ? 0.9 : 1.1))
  }

  return (
    <div ref={ref} className="absolute inset-0">
      {!data || !path || !projection ? (
        <div className="grid h-full place-items-center text-sm text-slate-400">{error ?? 'Loading map...'}</div>
      ) : (
        <>
        <svg
          className="h-full w-full cursor-grab active:cursor-grabbing"
          role="img"
          aria-label="Interactive travel map"
          onPointerDown={startPan}
          onPointerMove={dragMap}
          onPointerUp={endPan}
          onPointerCancel={cancelPan}
          onWheel={wheelZoom}
        >
          <defs>
            <linearGradient id="ocean" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#06111f" />
              <stop offset="100%" stopColor="#0a1020" />
            </linearGradient>
          </defs>
          <rect width={width} height={height} fill="url(#ocean)" />
          <g transform={transform}>
            {worldOffsets.map((offset) => (
              <g key={offset} transform={offset === 0 ? undefined : `translate(${offset} 0)`}>
                {data.backgroundFeatures.map((feature: EntityGeoFeature, index) => (
                  <path
                    key={`background-${offset}-${index}`}
                    d={path(feature) ?? undefined}
                    fill="rgba(148,163,184,0.05)"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={0.5 / zoom}
                  />
                ))}
                {features.map((item, index) => {
                  const colors = colorsFor(item)
                  return (
                    <path
                      key={`${item.entity.key}-${offset}-${index}`}
                      d={path(item.feature) ?? undefined}
                      fill={colors.fill}
                      stroke={colors.stroke}
                      strokeWidth={(item.entity.key === selectedKey ? 1.5 : 0.7) / zoom}
                      vectorEffect="non-scaling-stroke"
                      data-entity-key={item.entity.key}
                      className="cursor-pointer transition-colors duration-200 hover:fill-blue-400/40"
                    />
                  )
                })}
                {cityPins.map((pin) => {
                  const point = projection(pin.coordinates)
                  if (!point) return null
                  return (
                    <g key={`${pin.id}-${offset}`} className="pointer-events-none" data-city-pin={pin.id}>
                      <circle
                        cx={point[0]}
                        cy={point[1]}
                        r={7 / zoom}
                        fill="rgba(56, 189, 248, 0.16)"
                        stroke="rgba(125, 211, 252, 0.28)"
                        strokeWidth={1 / zoom}
                      />
                      <circle
                        cx={point[0]}
                        cy={point[1]}
                        r={3.5 / zoom}
                        fill="#38bdf8"
                        stroke="rgba(240, 249, 255, 0.9)"
                        strokeWidth={1.2 / zoom}
                      />
                    </g>
                  )
                })}
              </g>
            ))}
          </g>
        </svg>
        <div className="glass absolute bottom-6 right-6 z-20 flex rounded-xl p-1">
          <IconButton icon={Plus} label="Zoom in" onClick={() => setZoom((current) => current * 1.25)} className="h-9 w-9 border-0 bg-transparent" />
          <IconButton icon={Minus} label="Zoom out" onClick={() => setZoom((current) => current / 1.25)} className="h-9 w-9 border-0 bg-transparent" />
          <IconButton icon={RotateCcw} label="Reset map view" onClick={resetMap} className="h-9 w-9 border-0 bg-transparent" />
        </div>
        </>
      )}
    </div>
  )
}
