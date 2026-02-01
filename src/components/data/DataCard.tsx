import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface DataCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  title: string
  subtitle?: string
  value?: string | number
  footer?: ReactNode
}

export const DataCard = forwardRef<HTMLDivElement, DataCardProps>(
  ({ className, icon, title, subtitle, value, footer, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col rounded-lg border border-gray-200 bg-white p-6',
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                {icon}
              </div>
            )}
            <div>
              <h3 className="font-medium text-gray-900">{title}</h3>
              {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
            </div>
          </div>
          {value !== undefined && (
            <div className="text-2xl font-semibold text-gray-900">{value}</div>
          )}
        </div>
        {footer && (
          <div className="mt-4 border-t border-gray-100 pt-4">{footer}</div>
        )}
      </div>
    )
  }
)

DataCard.displayName = 'DataCard'
