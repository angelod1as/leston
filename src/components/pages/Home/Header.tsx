export default function Header() {
  return (
    <div className="text-white bg-black h-screen flex flex-col justify-between items-center">
      <div className="flex justify-between py-6 px-14 w-full">
        <p>
          <span className="times">Artist</span>, Musician,
          <br />
          <span className="times">Multimedia Developer</span>,<br />
          Creative Technologist
        </p>
        <p className="times">About</p>
        <p>Archive</p>
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
