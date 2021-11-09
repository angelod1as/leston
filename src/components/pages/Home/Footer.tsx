import { MDXRemote } from 'next-mdx-remote'
import { About } from 'src/@types/types'

type Props = {
  about: About
  handleToggleAbout: () => void
  aboutOpen: boolean
}

export default function Footer({
  about: { about, contact },
  aboutOpen,
  handleToggleAbout,
}: Props) {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-[100] max-h-[50%] bg-white ${
        aboutOpen ? 'h-full overflow-scroll' : 'h-5'
      }`}
    >
      <button
        onClick={handleToggleAbout}
        className={`w-full h-5 ${aboutOpen && 'fixed top-1/2 left-0'}`}
        style={{
          background:
            'linear-gradient(270deg, #58585B -51.04%, #F0F0F0 -23.96%, #929EA7 63.54%, #0B0C0F 93.75%)',
        }}
      />
      <div className="grid grid-cols-3 gap-4 mx-10 my-8">
        <MDXRemote compiledSource={about.compiledSource} />
        <div className="col-start-3">
          <MDXRemote compiledSource={contact.compiledSource} />
        </div>
      </div>
    </div>
  )
}
