import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type="range"
          id={id}
          className={cn(
            'h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200',
            'accent-blue-600'
          )}
          {...props}
        />
      </div>
    )
  }
)

Slider.displayName = 'Slider'
