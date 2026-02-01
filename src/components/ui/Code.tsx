import { type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export function Code({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        'rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800',
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
}

export function CodeBlock({ className, children, ...props }: HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={cn(
        'overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm text-gray-100',
        className
      )}
      {...props}
    >
      <code>{children}</code>
    </pre>
  )
}
