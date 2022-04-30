import { useLocaleContext } from '@components/LocaleContext/LocaleContext'
import { Locale } from 'src/@types/types'

export default function LangSwitcher() {
  const { locale, changeLocale } = useLocaleContext()

  const getClassName = (lang: string): string => {
    if (locale === lang) return 'union'
    return 'times'
  }

  const handleClick = (lang: Locale) => {
    changeLocale(lang)
  }

  return (
    <div className="flex items-center gap-x-2">
      <button
        onClick={() => handleClick('en-US')}
        className={getClassName('en-US')}
      >
        EN
      </button>
      <span>/</span>
      <button
        onClick={() => handleClick('pt-BR')}
        className={getClassName('pt-BR')}
      >
        PT
      </button>
    </div>
  )
}
