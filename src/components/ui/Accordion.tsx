import { useState, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface AccordionItem {
  id: string
  trigger: ReactNode
  content: ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  type?: 'single' | 'multiple'
  className?: string
}

export function Accordion({ items, type = 'single', className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        if (type === 'single') {
          next.clear()
        }
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className={cn('divide-y divide-gray-200 border-b border-t border-gray-200', className)}>
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => toggleItem(item.id)}
            className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 hover:text-gray-700"
          >
            {item.trigger}
            <ChevronIcon
              className={cn(
                'h-5 w-5 text-gray-400 transition-transform',
                openItems.has(item.id) && 'rotate-180'
              )}
            />
          </button>
          {openItems.has(item.id) && (
            <div className="pb-4 text-gray-600">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}
