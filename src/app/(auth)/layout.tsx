import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { ParentElementProps } from '@/types/components'
import { AuthSideContent } from '@/components/shared/base/form/auth-side-content'

import NextTopLoader from 'nextjs-toploader'

import '@/app/globals.css'

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Buki',
}

export default function AuthLayout({ children }: ParentElementProps) {
  return (
    <html lang="pt">
      <body className={`${montserratSans.variable} antialiased bg-neutral-950 text-neutral-100`}>
        <NextTopLoader color="#10B981" />

        <main className="w-screen h-screen grid grid-cols-2">
          <AuthSideContent />
          <div className="flex items-center justify-center">{children}</div>
        </main>
      </body>
    </html>
  )
}
