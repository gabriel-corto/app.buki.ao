import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'

interface FormInputpProps {
  icon?: IconSvgElement
}
export function FormInput({ icon }: FormInputpProps) {
  return (
    <div className="relative">
      {icon && <HugeiconsIcon icon={icon} className="absolute top-3 left-2.5 text-neutral-600" />}

      <input
        type="text"
        placeholder="Digite o seu e-mail"
        className="w-full pl-12 p-3 rounded-md bg-neutral-900 focus:border-amber-400 border border-neutral-800 focus:outline-0"
      />
    </div>
  )
}
