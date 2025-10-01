import { Logo } from './logo'
import { Navbar } from './navbar'
import { FooterBar } from './footerbar'

export function Sidebar() {
  return (
    <aside className="bg-neutral-900/40 flex justify-between flex-col min-w-[200px] border-r border-r-neutral-900">
      <div className="flex flex-col gap-20 p-8">
        <Logo />
        <Navbar />
      </div>

      <FooterBar />
    </aside>
  )
}
