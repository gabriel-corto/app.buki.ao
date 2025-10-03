'use client'

import Link from 'next/link'
import { CardFooter } from '@/components/ui/card'
import { ArrowRight02Icon, Calendar02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { SchedulingModal } from '../modals/scheduling-modal'
import { Dialog } from '@/components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'

export function ProfyCardActionsButton() {
  return (
    <CardFooter>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 rounded-xl bg-emerald-600 flex items-center gap-2 hover:bg-emerald-500 cursor-pointer text-white font-medium transition">
            <HugeiconsIcon icon={Calendar02Icon} /> Marcar aula
          </button>
        </DialogTrigger>

        <SchedulingModal />
      </Dialog>

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
