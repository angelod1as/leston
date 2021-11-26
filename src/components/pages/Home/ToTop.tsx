import { useLocaleContext } from '@components/LocaleContext/LocaleContext'
import { Locale } from 'src/@types/types'

export default function ToTop() {
  const { locale } = useLocaleContext()

  const handleClick = () => {
    const archive = document.getElementById('top')
    if (archive) {
      archive.scrollIntoView({
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
