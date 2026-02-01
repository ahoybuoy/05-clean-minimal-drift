import { type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface StatProps {
  label: string
  value: string | number
  change?: {
    value: string
    type: 'increase' | 'decrease' | 'neutral'
  }
  icon?: ReactNode
  className?: string
}

export function Stat({ label, value, change, icon, className }: StatProps) {
  return (
    <div className={cn('rounded-lg border border-gray-200 bg-white p-6', className)}>
      <div className="flex items-center gap-4">
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            {icon}
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {change && (
            <p
              className={cn('text-sm', {
                'text-green-600': change.type === 'increase',
                'text-red-600': change.type === 'decrease',
                'text-gray-500': change.type === 'neutral',
              })}
            >
              {change.value}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export interface StatsGridProps {
  children: ReactNode
  columns?: 2 | 3 | 4
  className?: string
}

export function StatsGrid({ children, columns = 4, className }: StatsGridProps) {
  return (
    <div
      className={cn(
        'grid gap-4',
        {
          'grid-cols-1 sm:grid-cols-2': columns === 2,
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': columns === 3,
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4': columns === 4,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
