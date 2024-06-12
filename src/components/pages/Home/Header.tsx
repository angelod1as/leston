import Image from "next/image"
import logoWhite from '../../../../public/images/app/logo.svg'
import logoBlack from '../../../../public/images/app/logo-black.svg'
import leston from '../../../../public/images/app/leston.png'
import * as Dialog from '@radix-ui/react-dialog'
import { About, FCC } from '@/@types/types'
import { useLocaleContext } from '@/components/LocaleContext/LocaleContext'
import { translation } from '@/lib/translation'
import { MDX } from '@/components/MDX'
import LangSwitcher from '@/components/LangSwitcher'

type Props = {
  showTitle: boolean
  about: About
}

export default function Header({ showTitle, about }: Props) {
  const { locale } = useLocaleContext()
  const data = translation[locale]

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

  const ComissionedLink = () => (
    <button
      className="hidden times hover md:block"
      onClick={() => scroll('comissioned')}
    >
      {data.Comissioned}
    </button>
  )

  const AboutLink = () => (
    <Dialog.Trigger className="text-right times hover md:text-center">
      {data.About}
    </Dialog.Trigger>
  )

  const CloseAbout = () => (
    <Dialog.Trigger className="text-right times hover md:text-center">
      {data.CloseAbout}
    </Dialog.Trigger>
  )

  const About1 = () => (
    <div>
      <MDX compiledSource={about.about.compiledSource} />
    </div>
  )
  const About2 = () => (
    <div>
      <MDX compiledSource={about.about2.compiledSource} />
    </div>
  )
  const Contact = () => (
    <div>
      <MDX compiledSource={about.contact.compiledSource} />
    </div>
  )

  const Locale = () => (
    <div className="flex flex-col justify-center gap-y-4">
      <LangSwitcher />
    </div>
  )

  const LestonWrapper: FCC = ({ children }) => (
    <div className="fixed bottom-0 left-0 z-10 w-full px-4 mb-6 md:px-10 full-img sm:bg-transparent ">
      {children}
    </div>
  )

  const LestonWhite = () => (
    <LestonWrapper>
      {showTitle && <Image
        src={logoWhite}
        alt="LESTON"
        className="w-full"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />}
    </LestonWrapper>
  )

  const LestonBlack = () => (
    <LestonWrapper>
      {showTitle && <Image
        src={logoBlack}
        alt="LESTON"
        className="w-full"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />}
    </LestonWrapper>
  )

  return <>
    <div className="relative z-10 flex flex-col items-start justify-between h-screen p-4 text-white md:items-center">
      {/* Desktop */}
      <div className="items-start hidden w-full grid-cols-5 gap-4 px-10 pt-6 mb-0 md:grid ">
        <div className="flex flex-col mb-4 gap-y-4">
          <Description />
        </div>
        <ArtisticLink />
        <ComissionedLink />
        <AboutLink />
        <Locale />
      </div>
      {/* Mobile */}
      <div className="flex justify-between w-full gap-4 md:hidden">
        <div className="flex flex-col mb-4 gap-y-4">
          <Description />
        </div>
        <div className="flex flex-col align-end gap-y-4">
          <AboutLink />
          <Locale />
        </div>
      </div>
      <LestonWhite />
    </div>

    <Dialog.Overlay className="fixed top-0 left-0 right-0 z-50 flex flex-col items-start justify-between h-full overflow-y-auto bg-white md:items-center">
      <Dialog.Content className="md:h-full">
        <div className="flex flex-col w-full gap-4 p-2 mb-5 bg-white md:mb-0 md:h-full md:grid md:items-start md:grid-cols-5 md:px-10 md:pt-8 pb-14">
          <div className="flex flex-col justify-end md:hidden">
            <CloseAbout />
          </div>
          <About1 />
          <About2 />
          <Image
            src={leston}
            alt="Leston picture"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <div className="flex-col hidden md:flex">
            <CloseAbout />
          </div>
          <Contact />
        </div>
        <div className="hidden md:block">
          <LestonBlack />
        </div>
      </Dialog.Content>
    </Dialog.Overlay>
  </>;
}
