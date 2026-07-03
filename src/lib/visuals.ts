// Shared color logic for globe polygons and flat-map shapes so both views
// present identical visited / favorite / selected / filtered states.
import type { TravelEntry } from '../types'

export interface EntityVisualState {
  selected: boolean
  visited: boolean
  favorite: boolean
  /** null → no filters active; true/false → matches the active filter set. */
  matched: boolean | null
}

export interface VisualFlags {
  showVisited: boolean
  showFavorites: boolean
  selectedKey: string | null
  /** Set of matching entity keys when filters are active, else null. */
  matchedKeys: Set<string> | null
}

export function visualStateFor(
  key: string,
  entry: TravelEntry | undefined,
  flags: VisualFlags,
): EntityVisualState {
  return {
    selected: flags.selectedKey === key,
    visited: flags.showVisited && entry?.visited === true,
    favorite: flags.showFavorites && entry?.favorite === true,
    matched: flags.matchedKeys ? flags.matchedKeys.has(key) : null,
  }
}

export interface EntityColors {
  fill: string
  stroke: string
  hoverFill: string
}

export const PALETTE = {
  selected: 'rgba(10, 132, 255, 0.80)',
  selectedStroke: 'rgba(235, 245, 255, 0.95)',
  visited: 'rgba(48, 209, 88, 0.55)',
  visitedStroke: 'rgba(134, 239, 172, 0.75)',
  favorite: 'rgba(255, 214, 10, 0.42)',
  favoriteStroke: 'rgba(255, 214, 10, 0.95)',
  matched: 'rgba(10, 132, 255, 0.52)',
  matchedStroke: 'rgba(147, 197, 253, 0.95)',
  dimmed: 'rgba(6, 9, 16, 0.55)',
  dimmedStroke: 'rgba(255, 255, 255, 0.08)',
  hover: 'rgba(96, 165, 250, 0.40)',
} as const

/**
 * Priority: selected > dimmed-by-filter > visited > favorite > filter match > base.
 * A visited favorite keeps the visited fill but takes the gold favorite stroke.
 */
export function entityColors(vs: EntityVisualState, variant: 'globe' | 'map'): EntityColors {
  const base =
    variant === 'globe'
      ? { fill: 'rgba(96, 165, 250, 0.18)', stroke: 'rgba(226, 232, 240, 0.52)' }
      : { fill: '#161e30', stroke: 'rgba(255, 255, 255, 0.13)' }

  if (vs.selected) {
    return { fill: PALETTE.selected, stroke: PALETTE.selectedStroke, hoverFill: PALETTE.selected }
  }
  if (vs.matched === false) {
    return { fill: PALETTE.dimmed, stroke: PALETTE.dimmedStroke, hoverFill: PALETTE.hover }
  }
  if (vs.visited) {
    return {
      fill: PALETTE.visited,
      stroke: vs.favorite ? PALETTE.favoriteStroke : PALETTE.visitedStroke,
      hoverFill: 'rgba(48, 209, 88, 0.70)',
    }
  }
  if (vs.favorite) {
    return { fill: PALETTE.favorite, stroke: PALETTE.favoriteStroke, hoverFill: 'rgba(255, 214, 10, 0.60)' }
  }
  if (vs.matched === true) {
    return { fill: PALETTE.matched, stroke: PALETTE.matchedStroke, hoverFill: PALETTE.hover }
  }
  return { fill: base.fill, stroke: base.stroke, hoverFill: PALETTE.hover }
}

export const BACKGROUND_COLORS: EntityColors = {
  fill: 'rgba(148, 163, 184, 0.06)',
  stroke: 'rgba(255, 255, 255, 0.12)',
  hoverFill: 'rgba(148, 163, 184, 0.06)',
}
