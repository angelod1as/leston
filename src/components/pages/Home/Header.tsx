import { useLocaleContext } from '@components/LocaleContext/LocaleContext'

type Props = {
  handleToggleAbout: () => void
}

const text = {
  'en-US': {
    Artist: 'Artist',
    Musician: 'Musician',
    'Multimedia Developer': 'Multimedia Developer',
    'Creative Technologist': 'Creative Technologist',
    About: 'About',
    Archive: 'Archive',
  },
  'pt-BR': {
    Artist: 'Artista',
    Musician: 'Musicista',
    'Multimedia Developer': 'Desenvolvedor Multimídia',
    'Creative Technologist': 'Creative Technologist',
    About: 'Sobre',
    Archive: 'Arquivo',
  },
}

export default function Header({ handleToggleAbout }: Props) {
  const { locale } = useLocaleContext()
  const data = text[locale]

  const scroll = () => {
    const archive = document.getElementById('projects')
    if (archive) {
      archive.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center',
      })
    }
  }

  return (
    <div className="relative z-10 flex flex-col items-center justify-between h-screen text-white">
      <div className="flex items-start justify-between w-full py-6 px-14">
        <p>
          <span className="times">{data.Artist}</span>, {data.Musician},
          <br />
          <span className="times">{data['Multimedia Developer']}</span>,<br />
          {data['Creative Technologist']}
        </p>
        <button className="times" onClick={handleToggleAbout}>
          {data.About}
        </button>
        <button onClick={scroll}> {data.Archive}</button>
        <p>
          hello@matheusleston.com <br />
          @matheusleston
        </p>
      </div>
      <div className="mb-10">
        <h1 className="union text-center !text-[24vw] !leading-[24rem] contents">
          LESTON
        </h1>
      </div>
    </div>
  )
}
