import LangSwitcher from '@components/LangSwitcher'
import { useLocaleContext } from '@components/LocaleContext/LocaleContext'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import logo from 'public/images/app/logo.svg'
import { useState } from 'react'
import { About } from 'src/@types/types'

type Props = {
  showTitle: boolean
  about: About
}

const text = {
  'en-US': {
    Artist: 'Artist',
    Musician: 'Musician',
    'Multimedia Developer': 'Multimedia Developer',
    'Creative Technologist': 'Creative Technologist',
    About: 'About',
    CloseAbout: 'Close About',
    Comissioned: 'Comissioned',
    Artistic: 'Artistic',
  },
  'pt-BR': {
    Artist: 'Artista',
    Musician: 'Músico',
    'Multimedia Developer': 'Desenvolvedor Multimídia',
    'Creative Technologist': 'Creative Technologist',
    CloseAbout: 'Fechar Sobre',
    About: 'Sobre',
    Comissioned: 'Comissionados',
    Artistic: 'Autorais',
  },
}

export default function Header({ showTitle, about }: Props) {
  const { locale } = useLocaleContext()
  const data = text[locale]
  const [aboutOpen, setAboutOpen] = useState(false)

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

  const handleToggleAbout = () => {
    setAboutOpen(state => !state)
  }

  const Description = () => (
    <>
      <p>
        {data.Artist}, {data.Musician},
        <br />
        {data['Multimedia Developer']},<br />
        {data['Creative Technologist']}
      </p>
      <p>
        m@leston.studio <br />
        @matheusleston
      </p>
    </>
  )

  const ArtisticLink = () => (
    <button
      className="hidden times hover md:block"
      onClick={() => scroll('artistic')}
    >
      {data.Artistic}
    </button>
  )

  const ComissinedLink = () => (
    <button
      className="hidden times hover md:block"
      onClick={() => scroll('comissioned')}
    >
      {data.Comissioned}
    </button>
  )

  const AboutLink = () => (
    <button className="hidden times hover md:block" onClick={handleToggleAbout}>
      {aboutOpen ? data.CloseAbout : data.About}
    </button>
  )

  const About1 = () => (
    <div>
      <MDXRemote compiledSource={about.about.compiledSource} />
    </div>
  )
  const About2 = () => (
    <div>
      <MDXRemote compiledSource={about.about2.compiledSource} />
    </div>
  )
  const Contact = () => (
    <div>
      <MDXRemote compiledSource={about.contact.compiledSource} />
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <div className="relative z-10 flex flex-col items-center justify-between h-screen p-2 text-white">
        <div className="flex flex-col items-start justify-between w-full md:flex-row md:px-10 md:pt-6">
          {aboutOpen ? (
            <>
              <About1 />
              <About2 />
              <AboutLink />
              <Contact />
              <LangSwitcher />
            </>
          ) : (
            <>
              <div className="flex flex-col mb-4 gap-y-4">
                <Description />
              </div>
              <ArtisticLink />
              <ComissinedLink />
              <AboutLink />
              <LangSwitcher />
            </>
          )}
        </div>
        <div className="fixed bottom-0 left-0 z-10 px-2 mb-6 md:w-full md:px-10 md:mb-12 md:full-img sm:bg-transparent ">
          {showTitle && <Image src={logo} alt="LESTON" className="w-full" />}
        </div>
      </div>
    </>
  )
}
