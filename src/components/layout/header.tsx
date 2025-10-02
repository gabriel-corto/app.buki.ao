import { SearchBar } from './searchbar'
import { AccountMenu } from './account-menu'
import { ArrowLeft01Icon, ArrowRight01Icon, Notification01Icon } from '@hugeicons/core-free-icons'
import { HeaderButton } from '../shared/buttons/header-button'

export function Header() {
  return (
    <header className="bg-neutral-900/80 flex items-center justify-between py-4 px-16 h-22 min-w-full border-b border-b-neutral-800">
      <div className="flex items-center gap-4">
        <HeaderButton icon={ArrowLeft01Icon} />
        <HeaderButton icon={ArrowRight01Icon} />
      </div>

      <SearchBar />

      <div className="flex items-center gap-7">
        <HeaderButton icon={Notification01Icon} />
        <AccountMenu />
      </div>
    </header>
  )
}
