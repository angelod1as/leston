import { Locale } from '@/@types/types'
import { useLocaleContext } from '@/components/LocaleContext/LocaleContext'

export default function ToTop() {
  const { locale } = useLocaleContext()

  const handleClick = () => {
    const comissioned = document.getElementById('top')
    if (comissioned) {
      comissioned.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center',
      })
    }
  }

  const text: Record<Locale, string> = {
    'pt-BR': 'Voltar ao topo',
    'en-US': 'Back to top',
  }

  return (
    <button onClick={handleClick} className="text-left w-28">
      {text[locale]}
    </button>
  )
}
