import Link from 'next/link'

import { Logout02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export function FooterBar() {
  return (
    <footer className="border-t border-neutral-900 px-4 py-2">
      <Link
        href=""
        className="flex items-center hover:bg-rose-500/10 font-semibold text-rose-400 rounded-md gap-2 p-2"
      >
        <HugeiconsIcon icon={Logout02Icon} />
        <span>Sair</span>
      </Link>
    </footer>
  )
}
