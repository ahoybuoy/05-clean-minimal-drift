import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export const FormField = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      />
    )
  }
)

FormField.displayName = 'FormField'

export const FormLabel = forwardRef<HTMLLabelElement, HTMLAttributes<HTMLLabelElement> & { required?: boolean }>(
  ({ className, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn('block text-sm font-medium text-gray-700', className)}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    )
  }
)

FormLabel.displayName = 'FormLabel'

export const FormHelperText = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-gray-500', className)}
        {...props}
      />
    )
  }
)

FormHelperText.displayName = 'FormHelperText'

export const FormErrorMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-red-600', className)}
        {...props}
      />
    )
  }
)

FormErrorMessage.displayName = 'FormErrorMessage'
