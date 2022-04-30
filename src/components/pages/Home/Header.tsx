import LangSwitcher from '@components/LangSwitcher'
import { useLocaleContext } from '@components/LocaleContext/LocaleContext'
import Image from 'next/image'
import logo from 'public/images/app/logo.svg'

type Props = {
  handleToggleAbout: () => void
  showTitle: boolean
}

const text = {
  'en-US': {
    Artist: 'Artist',
    Musician: 'Musician',
    'Multimedia Developer': 'Multimedia Developer',
    'Creative Technologist': 'Creative Technologist',
    About: 'About',
    Comissioned: 'Comissioned',
    Artistic: 'Artistic',
  },
  'pt-BR': {
    Artist: 'Artista',
    Musician: 'Músico',
    'Multimedia Developer': 'Desenvolvedor Multimídia',
    'Creative Technologist': 'Creative Technologist',
    About: 'Sobre',
    Comissioned: 'Comissionados',
    Artistic: 'Autorais',
  },
}

export default function Header({ handleToggleAbout, showTitle }: Props) {
  const { locale } = useLocaleContext()
  const data = text[locale]

  const scroll = (to: string) => {
    const section = document.getElementById(to)
    if (section) {
      section.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center',
      })
    }
  }

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative z-10 flex flex-col items-center justify-between h-screen text-white">
          <div className="flex items-start justify-between w-full px-10 pt-6">
            <div>
              <p>
                {data.Artist}, {data.Musician},
                <br />
                {data['Multimedia Developer']},<br />
                {data['Creative Technologist']}
              </p>
              <p className="mt-4">
                m@leston.studio <br />
                @matheusleston
              </p>
            </div>
            <button className="times hover" onClick={() => scroll('artistic')}>
              {data.Artistic}
            </button>
            <button
              className="times hover"
              onClick={() => scroll('comissioned')}
            >
              {data.Comissioned}
            </button>
            <button className="times hover" onClick={handleToggleAbout}>
              {data.About}
            </button>
            <LangSwitcher />
          </div>
          <div className="fixed bottom-0 left-0 z-10 w-full px-10 mb-12 full-img">
            {showTitle && <Image src={logo} alt="LESTON" className="w-full" />}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <div className="relative z-10 flex flex-col items-center justify-between h-screen p-2 text-white">
          <div className="w-full">
            <p>
              {data.Artist}, {data.Musician},
              <br />
              {data['Multimedia Developer']},<br />
              {data['Creative Technologist']}
            </p>
            <p className="mt-4 break-words">
              m@leston.studio <br />
              @matheusleston
            </p>
            <button className="mt-4 times" onClick={handleToggleAbout}>
              {data.About}
            </button>
          </div>
          <div
            className={`fixed bottom-0 left-0 z-10 mb-6 sm:bg-transparent px-2`}
          >
            {showTitle && <Image src={logo} alt="LESTON" />}
          </div>
        </div>
      </div>
    </>
  )
}
