import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Header } from '@/components/Header'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locales } from '@/components/LocaleSwitch/navigation'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

// https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
export function generateStaticParams() {
  return Locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Record<string, string>
}) {
  const { locale } = params
  unstable_setRequestLocale(locale);
  return (
    <html
      lang={locale}
      className={clsx(
        'h-full scroll-smooth relative antialiased text-main-text bg',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
