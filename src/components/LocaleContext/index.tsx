import { useRouter } from 'next/router'
import { useState } from 'react'
import LocaleContext from './LocaleContext'
import { FCC, Locale } from '@/@types/types'

const Wrapper: FCC = ({ children }) => {
  const { locale: routerLocale, defaultLocale } = useRouter()

  const [locale, setLocale] = useState<Locale>(
    (routerLocale as Locale) || (defaultLocale as Locale)
  )

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
  }

  return (
    <LocaleContext.Provider value={{ changeLocale, locale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default Wrapper
