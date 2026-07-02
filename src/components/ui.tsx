import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon
  active?: boolean
}

export function Button({ icon: Icon, active, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50',
        active
          ? 'border-accent/60 bg-accent/20 text-white shadow-[0_0_20px_rgba(10,132,255,0.22)]'
          : 'border-white/10 bg-white/[0.06] text-slate-200 hover:bg-white/[0.10]',
        className,
      )}
      {...props}
    >
      {Icon ? <Icon aria-hidden className="h-4 w-4" /> : null}
      {children}
    </button>
  )
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon
  label: string
  active?: boolean
}

export function IconButton({ icon: Icon, label, active, className, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-lg border transition disabled:pointer-events-none disabled:opacity-50',
        active
          ? 'border-accent/60 bg-accent/20 text-white shadow-[0_0_20px_rgba(10,132,255,0.24)]'
          : 'border-white/10 bg-white/[0.06] text-slate-300 hover:bg-white/[0.10]',
        className,
      )}
      {...props}
    >
      <Icon aria-hidden className="h-4 w-4" />
    </button>
  )
}

interface ToggleSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  description?: string
}

export function ToggleSwitch({ checked, onChange, label, description }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-left transition hover:bg-white/[0.07]"
    >
      <span>
        <span className="block text-sm font-medium text-white">{label}</span>
        {description ? <span className="block text-xs text-slate-400">{description}</span> : null}
      </span>
      <span
        className={cn(
          'relative h-6 w-11 shrink-0 rounded-full transition',
          checked ? 'bg-accent' : 'bg-slate-700',
        )}
      >
        <span
          className={cn(
            'absolute top-1 h-4 w-4 rounded-full bg-white transition',
            checked ? 'left-6' : 'left-1',
          )}
        />
      </span>
    </button>
  )
}

export function Tag({ children, tone = 'slate' }: { children: ReactNode; tone?: 'slate' | 'green' | 'gold' | 'blue' }) {
  const tones = {
    slate: 'border-white/10 bg-white/[0.06] text-slate-300',
    green: 'border-visited/30 bg-visited/15 text-green-100',
    gold: 'border-favorite/40 bg-favorite/15 text-yellow-100',
    blue: 'border-accent/35 bg-accent/15 text-blue-100',
  }
  return (
    <span className={cn('inline-flex items-center rounded-full border px-2 py-1 text-xs', tones[tone])}>
      {children}
    </span>
  )
}
