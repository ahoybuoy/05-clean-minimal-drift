import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export const List = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn('divide-y divide-gray-200', className)}
        {...props}
      />
    )
  }
)

List.displayName = 'List'

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  leading?: ReactNode
  trailing?: ReactNode
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, leading, trailing, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn('flex items-center gap-4 py-4', className)}
        {...props}
      >
        {leading && <div className="flex-shrink-0">{leading}</div>}
        <div className="min-w-0 flex-1">{children}</div>
        {trailing && <div className="flex-shrink-0">{trailing}</div>}
      </li>
    )
  }
)

ListItem.displayName = 'ListItem'
