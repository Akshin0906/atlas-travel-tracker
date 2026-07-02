import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'
import { IconButton } from '../ui'

interface PanelShellProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export function PanelShell({ title, subtitle, children }: PanelShellProps) {
  const closePanel = useUIStore((state) => state.closePanel)
  return (
    <aside className="glass fixed bottom-4 right-4 top-20 z-30 flex w-[min(440px,calc(100vw-2rem))] flex-col rounded-2xl animate-slide-in-right">
      <header className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm text-slate-400">{subtitle}</p> : null}
        </div>
        <IconButton icon={X} label="Close panel" onClick={closePanel} className="shrink-0 border-0 bg-white/[0.05]" />
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 scrollbar-thin">{children}</div>
    </aside>
  )
}
