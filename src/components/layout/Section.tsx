import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, padding = 'lg', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          {
            'py-0': padding === 'none',
            'py-8': padding === 'sm',
            'py-12': padding === 'md',
            'py-16': padding === 'lg',
            'py-24': padding === 'xl',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'
