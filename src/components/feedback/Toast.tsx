import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'error'
  onClose?: () => void
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = 'default', onClose, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'pointer-events-auto flex w-full max-w-md items-center gap-4 rounded-lg p-4 shadow-lg',
          {
            'bg-white text-gray-900': variant === 'default',
            'bg-green-600 text-white': variant === 'success',
            'bg-red-600 text-white': variant === 'error',
          },
          className
        )}
        {...props}
      >
        <div className="flex-1">{children}</div>
        {onClose && (
          <button
            onClick={onClose}
            className={cn(
              'rounded-md p-1 transition-colors',
              variant === 'default' ? 'hover:bg-gray-100' : 'hover:bg-white/20'
            )}
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  }
)

Toast.displayName = 'Toast'

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
