import { Locale } from '@/@types/types'
import { useLocaleContext } from '../LocaleContext/LocaleContext'

export default function LangSwitcher() {
  const { locale, changeLocale } = useLocaleContext()

  const getClassName = (lang: string): string => {
    if (locale === lang) return 'union overflow-visible'
    return 'times overflow-visible'
  }

  const handleClick = (lang: Locale) => {
    changeLocale(lang)
  }

  return (
    <div className="flex items-center md:justify-center gap-x-2">
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
