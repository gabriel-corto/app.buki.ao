import { cn } from '@/lib/utils'
import { InputProps } from '@/types/components'
import { HugeiconsIcon } from '@hugeicons/react'

export function FormInput({ icon, className, ...props }: InputProps) {
  return (
    <div className="relative">
      {icon && <HugeiconsIcon icon={icon} className="absolute top-3 left-2.5 text-neutral-600" />}

      <input
        className={cn(
          'w-full pl-10 pt-3 pb-3 pr-3 rounded-xl placeholder:text-neutral-500 bg-neutral-900 focus:border-brand border border-neutral-800 focus:outline-0',
          className
        )}
        {...props}
      />
    </div>
  )
}
