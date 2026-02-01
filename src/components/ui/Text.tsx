import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'default' | 'muted' | 'error'
  as?: 'p' | 'span' | 'div'
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size = 'md', variant = 'default', as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn(
          {
            'text-xs': size === 'xs',
            'text-sm': size === 'sm',
            'text-base': size === 'md',
            'text-lg': size === 'lg',
          },
          {
            'text-gray-900': variant === 'default',
            'text-gray-500': variant === 'muted',
            'text-red-600': variant === 'error',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Text.displayName = 'Text'
