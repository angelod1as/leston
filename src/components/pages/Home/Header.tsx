import LangSwitcher from '@components/LangSwitcher'
import { useLocaleContext } from '@components/LocaleContext/LocaleContext'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import logo from 'public/images/app/logo.svg'
import { useState } from 'react'
import { About } from 'src/@types/types'
import leston from 'public/images/app/leston.png'
import * as Dialog from '@radix-ui/react-dialog'

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
    <Dialog.Trigger className="text-left times hover md:text-center">
      {data.About}
    </Dialog.Trigger>
  )

  const CloseAbout = () => (
    <Dialog.Trigger className="absolute grid w-5 text-black bg-white rounded-full top-2 right-2 place-items-center h-5w-5">
      &#xd7;
    </Dialog.Trigger>
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

  const Locale = () => (
    <div className="flex flex-col justify-center gap-y-4">
      <LangSwitcher />
    </div>
  )

  return (
    <>
      <div className="relative z-10 flex flex-col items-start justify-between h-screen p-2 overflow-scroll text-white md:items-center">
        <div className="flex flex-col w-full gap-4 md:grid md:items-start md:grid-cols-5 md:px-10 md:pt-6 md:mb-0 ">
          <div className="flex flex-col mb-4 gap-y-4">
            <Description />
          </div>
          <ArtisticLink />
          <ComissinedLink />
          <AboutLink />
          <Locale />
        </div>
        <div className="fixed bottom-0 left-0 z-10 px-2 mb-6 md:w-full md:px-10 md:full-img sm:bg-transparent ">
          {showTitle && <Image src={logo} alt="LESTON" className="w-full" />}
        </div>
      </div>

      <Dialog.Overlay className="fixed top-0 left-0 right-0 z-50 flex flex-col items-start justify-between h-full p-4 overflow-scroll overflow-y-auto bg-black md:items-center bg-opacity-90">
        <Dialog.Content className="flex flex-col w-full gap-4 p-2 mb-5 bg-white md:h-full md:grid md:items-start md:grid-cols-4 md:px-10 md:pt-6 ">
          <CloseAbout />
          <About1 />
          <About2 />
          <Image src={leston} alt="Leston picture" />
          <Contact />
        </Dialog.Content>
      </Dialog.Overlay>
    </>
  )
}
