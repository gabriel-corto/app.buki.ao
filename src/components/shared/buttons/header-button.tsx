import { HeaderButtonProps } from '@/types/components'
import { HugeiconsIcon } from '@hugeicons/react'

export function HeaderButton({ icon, ...props }: HeaderButtonProps) {
  return (
    <button
      {...props}
      className="bg-neutral-800/80 p-1.5 border hover:bg-neutral-800 duration-200 border-neutral-700/50 rounded-md cursor-pointer"
    >
      <HugeiconsIcon icon={icon} className="w-5 h-5" />
    </button>
  )
}
