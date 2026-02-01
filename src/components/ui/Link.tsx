import { forwardRef, type AnchorHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'muted' | 'underline'
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'transition-colors',
          {
            'text-blue-600 hover:text-blue-700': variant === 'default',
            'text-gray-500 hover:text-gray-700': variant === 'muted',
            'text-blue-600 underline underline-offset-4 hover:text-blue-700': variant === 'underline',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Link.displayName = 'Link'
