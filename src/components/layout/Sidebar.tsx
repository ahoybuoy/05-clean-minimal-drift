import { type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface SidebarProps {
  children: ReactNode
  className?: string
  collapsed?: boolean
}

export function Sidebar({ children, className, collapsed = false }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col bg-gray-50 transition-all duration-300',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {children}
    </aside>
  )
}

export interface SidebarItemProps {
  icon?: ReactNode
  label: string
  active?: boolean
  collapsed?: boolean
  onClick?: () => void
}

export function SidebarItem({ icon, label, active, collapsed, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors',
        'hover:bg-gray-100',
        active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {!collapsed && <span>{label}</span>}
    </button>
  )
}
