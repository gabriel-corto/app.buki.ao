import { ParentElementProps } from '@/types/components'

export function FormGroup({ children }: ParentElementProps) {
  return <div className="space-y-6">{children}</div>
}
