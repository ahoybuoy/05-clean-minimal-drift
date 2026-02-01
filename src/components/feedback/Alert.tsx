import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error'
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'rounded-lg border p-4',
          {
            'border-blue-200 bg-blue-50 text-blue-800': variant === 'info',
            'border-green-200 bg-green-50 text-green-800': variant === 'success',
            'border-yellow-200 bg-yellow-50 text-yellow-800': variant === 'warning',
            'border-red-200 bg-red-50 text-red-800': variant === 'error',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export const AlertTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        className={cn('mb-1 font-medium leading-none tracking-tight', className)}
        {...props}
      />
    )
  }
)

AlertTitle.displayName = 'AlertTitle'

export const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm opacity-90', className)}
        {...props}
      />
    )
  }
)

AlertDescription.displayName = 'AlertDescription'
