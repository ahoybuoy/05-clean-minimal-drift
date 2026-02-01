import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export const ButtonGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex rounded-md shadow-sm',
          '[&>button:first-child]:rounded-l-md [&>button:first-child]:rounded-r-none',
          '[&>button:last-child]:rounded-l-none [&>button:last-child]:rounded-r-md',
          '[&>button:not(:first-child):not(:last-child)]:rounded-none',
          '[&>button:not(:first-child)]:-ml-px',
          className
        )}
        {...props}
      />
    )
  }
)

ButtonGroup.displayName = 'ButtonGroup'
