import { cn } from '@/lib/utils'
import { ParentElementProps } from '@/types/components'

export function FormGroup({ className, children }: ParentElementProps) {
  return <div className={cn('space-y-6', className)}>{children}</div>
}
