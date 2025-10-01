import { HeaderButtonProps } from '@/types/components'
import { HugeiconsIcon } from '@hugeicons/react'

export function HeaderButton({ icon }: HeaderButtonProps) {
  return (
    <button className="bg-neutral-900 p-2 border hover:bg-neutral-800 duration-200 border-neutral-900 rounded-md cursor-pointer">
      <HugeiconsIcon icon={icon} />
    </button>
  )
}
