import { Locale } from '@/@types/types'
import { useLocaleContext } from '../LocaleContext/LocaleContext'

type Props = {
  changeImage: () => void
}

export default function StoneChange({ changeImage }: Props) {
  const { locale } = useLocaleContext()

  const text: Record<Locale, string> = {
    'pt-BR': 'Pedra',
    'en-US': 'Stone',
  }

  return (
    <button onClick={changeImage} className="times">
      {text[locale]}
    </button>
  )
}
