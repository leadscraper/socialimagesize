import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Header } from '@/components/Header'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locales } from '@/components/LocaleSwitch/navigation'


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
      )}
    >
      <body className="flex h-full flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
