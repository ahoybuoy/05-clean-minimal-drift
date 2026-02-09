import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  removable?: boolean
  onRemove?: () => void
}

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  ({ className, variant = 'default', size = 'md', removable, onRemove, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 rounded-full font-medium',
          {
            'bg-gray-100 text-gray-700': variant === 'default',
            'bg-green-100 text-green-700': variant === 'success',
            'bg-yellow-100 text-yellow-700': variant === 'warning',
            'bg-red-100 text-red-700': variant === 'error',
          },
          {
            'px-2 py-0.5 text-xs': size === 'sm',
            'px-3 py-1 text-sm': size === 'md',
          },
          className
        )}
        {...props}
      >
        {children}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1 inline-flex items-center justify-center rounded-full hover:bg-black/10 focus:outline-none"
            aria-label="Remove"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </span>
    )
  }
)

Chip.displayName = 'Chip'
