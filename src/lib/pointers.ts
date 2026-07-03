export interface PointerPoint {
  x: number
  y: number
}

export function twoPointerDistance(points: Iterable<PointerPoint>): number {
  const [a, b] = [...points]
  return a && b ? Math.hypot(b.x - a.x, b.y - a.y) : 0
}

export function pinchZoom(startZoom: number, startDistance: number, currentDistance: number): number {
  return startDistance > 0 && currentDistance > 0 ? startZoom * (currentDistance / startDistance) : startZoom
}
