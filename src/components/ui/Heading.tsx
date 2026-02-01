import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as: Component = 'h2', size = 'md', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'font-semibold tracking-tight text-gray-900',
          {
            'text-sm': size === 'xs',
            'text-base': size === 'sm',
            'text-lg': size === 'md',
            'text-xl': size === 'lg',
            'text-2xl': size === 'xl',
            'text-3xl': size === '2xl',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Heading.displayName = 'Heading'
