import { SearchBar } from './searchbar'
import { AccountMenu } from './account-menu'

import { ArrowsNavigation } from './arrows-navigation'
import { HeaderButton } from '../shared/buttons/header-button'

import { Notification01Icon } from '@hugeicons/core-free-icons'

export function Header() {
  return (
    <header className="bg-neutral-900/80 z-50 sticky backdrop-blur-sm top-0 flex left-[200px] items-center justify-between py-4 px-24 h-22 w-full border-b border-b-neutral-800">
      <ArrowsNavigation />
      <SearchBar />

      <div className="flex items-center gap-7">
        <HeaderButton icon={Notification01Icon} />
        <AccountMenu />
      </div>
    </header>
  )
}
