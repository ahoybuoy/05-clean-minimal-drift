import { type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export function Kbd({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        'inline-flex h-5 items-center justify-center rounded border border-gray-200 bg-gray-100 px-1.5 font-mono text-xs font-medium text-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  )
}
