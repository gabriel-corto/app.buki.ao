import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { ParentElementProps } from '@/types/components'

import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'
import { PageContainer } from '@/components/layout/page-container'

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
        <main className="w-screen h-screen flex">
          <Sidebar />

          <div className="flex-1 flex flex-col gap-10">
            <Header />

            <PageContainer>{children}</PageContainer>
          </div>
        </main>
      </body>
    </html>
  )
}
