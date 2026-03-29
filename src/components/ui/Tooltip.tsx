import { useState, type ReactNode, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: ReactNode
  children: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
}

export function Tooltip({ content, children, position = 'top', className, ...props }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 max-w-[280px] rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-lg',
            {
              'bottom-full left-1/2 mb-2 -translate-x-1/2': position === 'top',
              'top-full left-1/2 mt-2 -translate-x-1/2': position === 'bottom',
              'right-full top-1/2 mr-2 -translate-y-1/2': position === 'left',
              'left-full top-1/2 ml-2 -translate-y-1/2': position === 'right',
            },
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}
