import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import { About } from 'src/@types/types'
import leston from 'public/images/app/leston.png'
import { Collapse } from 'react-collapse'

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
      className={`fixed bottom-0 left-0 w-full z-[100] max-h-[50%] bg-white overflow-y-scroll `}
    >
      <button
        onClick={handleToggleAbout}
        className={`w-full h-5`}
        style={{
          background:
            'linear-gradient(270deg, #58585B -51.04%, #F0F0F0 -23.96%, #929EA7 63.54%, #0B0C0F 93.75%)',
        }}
      />
      <Collapse isOpened={aboutOpen}>
        <div className="mx-10 my-8 md:grid md:grid-cols-4 md:gap-4">
          <MDXRemote compiledSource={about.compiledSource} />
          <div className="col-start-3 my-8 md:m-0">
            <Image src={leston} alt="" className="z-[-1]" />
          </div>
          <div className="col-start-4">
            <MDXRemote compiledSource={contact.compiledSource} />
          </div>
        </div>
      </Collapse>
    </div>
  )

  // return (
  //   <div
  //     className={`footer fixed bottom-0 left-0 w-full z-[100] max-h-[50%] bg-white ${
  //       aboutOpen ? 'h-full overflow-scroll' : 'h-5'
  //     }`}
  //   >
  // <button
  //   onClick={handleToggleAbout}
  //   className={`w-full h-5 ${aboutOpen && 'fixed top-1/2 left-0'}`}
  //   style={{
  //     background:
  //       'linear-gradient(270deg, #58585B -51.04%, #F0F0F0 -23.96%, #929EA7 63.54%, #0B0C0F 93.75%)',
  //   }}
  // />
  //   <div className="mx-10 my-8 md:grid md:grid-cols-4 md:gap-4">
  //     <MDXRemote compiledSource={about.compiledSource} />
  //     <div className="col-start-3 my-8 md:m-0">
  //       <Image src={leston} alt="" className="z-[-1]" />
  //     </div>
  //     <div className="col-start-4">
  //       <MDXRemote compiledSource={contact.compiledSource} />
  //     </div>
  //   </div>
  // </div>
  // )
}
