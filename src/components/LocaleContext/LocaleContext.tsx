import { createContext, useContext } from 'react'
import { Locale } from 'src/@types/types'

type ContextType = {
  changeLocale: (locale: Locale) => void
  locale: Locale
}

const initialValues = {} as ContextType

const LocaleContext = createContext<ContextType>(initialValues)
LocaleContext.displayName = 'LocaleContext'

export default LocaleContext

export const useLocaleContext = () => useContext(LocaleContext)
