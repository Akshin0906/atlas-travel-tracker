// Fly-to layout: when the detail panel is open it covers the right side of
// the viewport, so focus animations aim at the centre of the strip that stays
// visible instead of the true screen centre.

/** Keep in sync with PanelShell: w-[min(440px,calc(100vw-2rem))], right-4. */
export const DETAIL_PANEL_WIDTH = 440
export const DETAIL_PANEL_MARGIN = 16

/**
 * X coordinate a focused entity should fly to. Falls back to the viewport
 * centre when the panel is closed or covers the whole map (phone layouts).
 */
export function visibleCenterX(viewportWidth: number, panelOpen: boolean): number {
  if (!panelOpen) return viewportWidth / 2
  const panelWidth = Math.min(DETAIL_PANEL_WIDTH, viewportWidth - 2 * DETAIL_PANEL_MARGIN)
  const panelLeft = viewportWidth - DETAIL_PANEL_MARGIN - panelWidth
  if (panelLeft < 220) return viewportWidth / 2
  return panelLeft / 2
}
