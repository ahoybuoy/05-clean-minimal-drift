import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'sm' | 'md'
  onRemove?: () => void
}

export function Tag({
  className,
  variant = 'default',
  size = 'md',
  onRemove,
  children,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-medium',
        {
          'bg-gray-100 text-gray-700': variant === 'default',
          'bg-blue-100 text-blue-700': variant === 'primary',
          'bg-purple-100 text-purple-700': variant === 'secondary',
        },
        {
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-3 py-1 text-sm': size === 'md',
        },
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 rounded-full p-0.5 hover:bg-black/10"
        >
          <CloseIcon className="h-3 w-3" />
        </button>
      )}
    </span>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
