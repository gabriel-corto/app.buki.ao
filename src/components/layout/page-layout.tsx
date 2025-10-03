import { cn } from '@/lib/utils'
import { ParentElementProps } from '@/types/components'

export function PageLayout({ className, children }: ParentElementProps) {
  return <div className={cn('py-2 px-24 w-full  pb-20', className)}>{children}</div>
}
