import { cn } from '@/lib/utils'
import type { FilterGroupHeaderProps, ParentElementProps } from '@/types/components'
import { HugeiconsIcon } from '@hugeicons/react'

export function FilterGroupSeparator({ children, className, ...props }: ParentElementProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {children}
    </div>
  )
}

export function FilterGroupHeader({ className, label, icon, ...props }: FilterGroupHeaderProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} {...props}>
      {icon && <HugeiconsIcon icon={icon} className="w-5 h-5" />}
      <p>{label}</p>
    </div>
  )
}
