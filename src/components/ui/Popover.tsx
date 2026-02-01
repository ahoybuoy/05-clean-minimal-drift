import { useState, useRef, useEffect, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface PopoverProps {
  trigger: ReactNode
  content: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export function Popover({ trigger, content, position = 'bottom', className }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={popoverRef} className={cn('relative inline-block', className)}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div
          className={cn(
            'absolute z-50 w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-lg',
            {
              'bottom-full left-1/2 mb-2 -translate-x-1/2': position === 'top',
              'top-full left-1/2 mt-2 -translate-x-1/2': position === 'bottom',
              'right-full top-1/2 mr-2 -translate-y-1/2': position === 'left',
              'left-full top-1/2 ml-2 -translate-y-1/2': position === 'right',
            }
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}
