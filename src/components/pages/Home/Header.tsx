type Props = {
  handleToggleAbout: () => void
}

export default function Header({ handleToggleAbout }: Props) {
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
    <div className="text-white bg-black h-screen flex flex-col justify-between items-center z-10 relative">
      <div className="flex justify-between items-start py-6 px-14 w-full">
        <p>
          <span className="times">Artist</span>, Musician,
          <br />
          <span className="times">Multimedia Developer</span>,<br />
          Creative Technologist
        </p>
        <button className="times" onClick={handleToggleAbout}>
          About
        </button>
        {/* <button onClick={handleToggleAbout}>Archive</button> */}
        <button onClick={scroll}>Archive</button>
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
