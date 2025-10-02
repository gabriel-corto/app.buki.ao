import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

import { Logout02Icon, Settings01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="bg-neutral-950 w-12 h-12 border border-neutral-900 cursor-pointer">
          <AvatarImage src="/avatar.jpeg" />
          <AvatarFallback className="bg-neutral-950 font-bold">GF</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-neutral-900 border shadow-xl border-neutral-800"
        align="end"
      >
        <DropdownMenuItem className="hover:bg-neutral-800 text-neutral-100 hover:text-neutral-100">
          <HugeiconsIcon icon={Settings01Icon} />
          <span>Configurações</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-neutral-800" />

        <DropdownMenuItem className="hover:bg-neutral-800 text-rose-400 hover:text-rose-400">
          <HugeiconsIcon icon={Logout02Icon} className="text-rose-400" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
