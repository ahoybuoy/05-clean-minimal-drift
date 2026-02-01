import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error'
  onDismiss?: () => void
}

export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({ className, variant = 'info', onDismiss, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-between px-4 py-3',
          {
            'bg-blue-600 text-white': variant === 'info',
            'bg-green-600 text-white': variant === 'success',
            'bg-yellow-500 text-gray-900': variant === 'warning',
            'bg-red-600 text-white': variant === 'error',
          },
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3 text-sm font-medium">
          {children}
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="rounded-md p-1 transition-colors hover:bg-white/20"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  }
)

Banner.displayName = 'Banner'

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
