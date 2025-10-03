import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import type { WidgetCardProps } from '@/types/components'
import { HugeiconsIcon } from '@hugeicons/react'

export function WidgetCard({ children, label, icon, ...props }: WidgetCardProps) {
  return (
    <Card className={cn('p-8', props.className)} {...props}>
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        {icon && <HugeiconsIcon icon={icon} className="w-6 h-6 text-emerald-600" />}
        {label}
      </h2>
      {children}
    </Card>
  )
}
