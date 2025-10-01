import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'

interface FormButtonProps {
  icon: IconSvgElement
  label: string
}
export function FormButton({ icon, label }: FormButtonProps) {
  return (
    <button
      type="submit"
      className="bg-brand/80 cursor-pointer hover:duration-150 hover:bg-brand flex items-center justify-center gap-1 rounded-md text-white font-semibold w-full p-3"
    >
      <HugeiconsIcon icon={icon} />
      <span>{label}</span>
    </button>
  )
}
