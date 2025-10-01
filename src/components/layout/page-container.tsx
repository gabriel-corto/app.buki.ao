import { ParentElementProps } from '@/types/components'

export function PageContainer({ children }: ParentElementProps) {
  return <div className="py-4 px-16 w-full h-full">{children}</div>
}
