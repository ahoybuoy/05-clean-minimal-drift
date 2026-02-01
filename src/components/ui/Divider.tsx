import { type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  withText?: string
}

export function Divider({ className, orientation = 'horizontal', withText, ...props }: DividerProps) {
  if (withText) {
    return (
      <div className={cn('relative flex items-center', className)} {...props}>
        <div className="flex-grow border-t border-gray-200" />
        <span className="mx-4 flex-shrink text-sm text-gray-500">{withText}</span>
        <div className="flex-grow border-t border-gray-200" />
      </div>
    )
  }

  return (
    <div
      role="separator"
      className={cn(
        'bg-gray-200',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
}
