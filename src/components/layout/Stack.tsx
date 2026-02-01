import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column'
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = 'column', gap = 'md', align, justify, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          {
            'flex-row': direction === 'row',
            'flex-col': direction === 'column',
          },
          {
            'gap-0': gap === 'none',
            'gap-1': gap === 'xs',
            'gap-2': gap === 'sm',
            'gap-4': gap === 'md',
            'gap-6': gap === 'lg',
            'gap-8': gap === 'xl',
          },
          {
            'items-start': align === 'start',
            'items-center': align === 'center',
            'items-end': align === 'end',
            'items-stretch': align === 'stretch',
            'items-baseline': align === 'baseline',
          },
          {
            'justify-start': justify === 'start',
            'justify-center': justify === 'center',
            'justify-end': justify === 'end',
            'justify-between': justify === 'between',
            'justify-around': justify === 'around',
            'justify-evenly': justify === 'evenly',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Stack.displayName = 'Stack'
