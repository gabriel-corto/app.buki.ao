import Link from 'next/link'

import { Home01Icon, BoardMathIcon, BubbleChatIcon, Store01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export function Navbar() {
  return (
    <nav className="flex flex-col gap-y-6">
      <Link
        href=""
        className="flex items-center hover:bg-neutral-800 duration-150 transition-all rounded-md gap-2 p-2"
      >
        <HugeiconsIcon icon={Home01Icon} />
        <span>Explorar</span>
      </Link>

      <Link
        href=""
        className="flex items-center hover:bg-neutral-800 duration-150 transition-all rounded-md gap-2 p-2"
      >
        <HugeiconsIcon icon={BoardMathIcon} />
        <span>Bukis</span>
      </Link>

      <Link
        href=""
        className="flex items-center hover:bg-neutral-800 duration-150 transition-all rounded-md gap-2 p-2"
      >
        <HugeiconsIcon icon={BubbleChatIcon} />
        <span>Falaki</span>
      </Link>

      <Link
        href=""
        className="flex items-center hover:bg-neutral-800 duration-150 transition-all rounded-md gap-2 p-2"
      >
        <HugeiconsIcon icon={Store01Icon} />
        <span>Vitrine</span>
      </Link>
    </nav>
  )
}
