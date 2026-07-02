export function wrapHorizontalPan(value: number, screenPeriod: number): number {
  if (!Number.isFinite(screenPeriod) || screenPeriod <= 0) return value
  const halfPeriod = screenPeriod / 2
  return ((((value + halfPeriod) % screenPeriod) + screenPeriod) % screenPeriod) - halfPeriod
}

export function repeatedWorldOffsets(worldWidth: number, viewportWidth: number, zoom: number): number[] {
  const screenPeriod = worldWidth * zoom
  if (!Number.isFinite(screenPeriod) || screenPeriod <= 0 || viewportWidth <= 0) return [0]

  const radius = Math.max(1, Math.ceil(viewportWidth / screenPeriod) + 1)
  return Array.from({ length: radius * 2 + 1 }, (_, index) => (index - radius) * worldWidth)
}
