import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Common')
  return (
    <footer>
      <Container>
        <nav className="py-8 text-sm flex items-center justify-between" aria-label="quick links">
          {/* <div className="flex justify-start gap-x-6">
            <NavLink href="https://socialimagesize.com/">{'Home'}</NavLink>
          </div> */}
          <div className="flex gap-x-4">
            {/* <NavLink className='!text-gray-300 !text-sm' href="https://socialimagesize.com/privacy-policy">{'Policy'}</NavLink>
            <NavLink className='!text-gray-300 !text-sm' href="https://socialimagesize.com/terms-of-service">{'Terms'}</NavLink> */}
          </div>
        </nav>
        <div className="flex flex-col items-center py-4 sm:flex-row-reverse sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            {t("Rights")}
          </p>
        </div>
      </Container>
    </footer>
  )
}
