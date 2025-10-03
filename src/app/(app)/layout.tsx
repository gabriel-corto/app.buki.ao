import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { ParentElementProps } from '@/types/components'

import { Sidebar } from '@/components/general/sidebar'
import { Header } from '@/components/general/header'

import NextTopLoader from 'nextjs-toploader'

import '@/app/globals.css'

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Buki',
}

export default function AppLayout({ children }: ParentElementProps) {
  return (
    <html lang="pt">
      <body className={`${montserratSans.variable} antialiased bg-neutral-950 text-neutral-100`}>
        <NextTopLoader color="#10B981" />

        <main className="h-screen flex">
          <Sidebar />

          <div className="flex-1 ml-[200px] flex flex-col gap-10">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
