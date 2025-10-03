import {
  BoardMathIcon,
  BubbleChatIcon,
  Store01Icon,
  Navigation04Icon,
} from '@hugeicons/core-free-icons'
import { NavLink } from './navlink'

export function Navbar() {
  return (
    <nav className="flex flex-col gap-y-6">
      <NavLink href="/" label="Explorar" icon={Navigation04Icon} />
      <NavLink href="/bukis" label="Bukis" icon={BoardMathIcon} />

      <NavLink href="/vitrine" label="Vitrine" icon={Store01Icon} />
      <NavLink href="/falaki" label="Falaki" icon={BubbleChatIcon} />
    </nav>
  )
}
