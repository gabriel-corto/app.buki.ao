import Link from 'next/link'

import { Home01Icon, BoardMathIcon, UserSearch01FreeIcons } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export function Navbar() {
  return (
    <nav className="flex flex-col gap-y-6">
      <Link href="" className="flex items-center hover:bg-neutral-900 rounded-md gap-2 p-2">
        <HugeiconsIcon icon={Home01Icon} />
        <span>Início</span>
      </Link>

      <Link href="" className="flex items-center hover:bg-neutral-900 rounded-md gap-2 p-2">
        <HugeiconsIcon icon={BoardMathIcon} />
        <span>Bukis</span>
      </Link>

      <Link href="" className="flex items-center hover:bg-neutral-900 rounded-md gap-2 p-2">
        <HugeiconsIcon icon={UserSearch01FreeIcons} />
        <span>Início</span>
      </Link>
    </nav>
  )
}
