import { useState, useRef, useEffect, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface MenuProps {
  trigger: ReactNode
  children: ReactNode
  className?: string
}

export function Menu({ trigger, children, className }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={menuRef} className={cn('relative inline-block', className)}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export interface MenuItemProps {
  onClick?: () => void
  disabled?: boolean
  children: ReactNode
}

export function MenuItem({ onClick, disabled, children }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex w-full items-center px-4 py-2 text-sm text-gray-700',
        'hover:bg-gray-100 hover:text-gray-900',
        'disabled:cursor-not-allowed disabled:opacity-50'
      )}
      role="menuitem"
    >
      {children}
    </button>
  )
}

export function MenuDivider() {
  return <div className="my-1 border-t border-gray-100" role="separator" />
}
