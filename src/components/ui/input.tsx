import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const isNumber = React.useMemo(() => type === 'number', [type])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexp = /^\d+$/

    const value = e.target.value
    if (isNumber && value.length > 0 && regexp && !regexp.test(value)) {
      e.preventDefault()
      return
    }
    props.onChange?.(e)
  }

  return (
    <input
      type={isNumber ? 'text' : type}
      inputMode={isNumber ? 'numeric' : 'text'}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
      onChange={handleInputChange}
    />
  )
})
Input.displayName = 'Input'

export { Input }
