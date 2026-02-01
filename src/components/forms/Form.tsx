import { forwardRef, type FormHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export const Form = forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
  ({ className, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn('space-y-6', className)}
        {...props}
      />
    )
  }
)

Form.displayName = 'Form'
