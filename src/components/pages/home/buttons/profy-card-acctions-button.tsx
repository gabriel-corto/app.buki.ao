import Link from 'next/link'

import { CardFooter } from '@/components/ui/card'
import { ArrowRight02Icon, Calendar02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export function ProfyCardACtionsButton() {
  return (
    <CardFooter>
      <button className="px-4 py-2 rounded-xl bg-emerald-600 flex items-center gap-2 hover:bg-emerald-500 cursor-pointer text-white font-medium transition">
        <HugeiconsIcon icon={Calendar02Icon} /> Marcar aula
      </button>

      <Link
        href="/profy/jonas-silva-asn"
        className="px-4 py-2 flex items-center font-semibold rounded-xl bg-neutral-700 hover:bg-neutral-500 cursor-pointer text-white transition"
      >
        <HugeiconsIcon icon={ArrowRight02Icon} />
        Ver Perfil
      </Link>
    </CardFooter>
  )
}
