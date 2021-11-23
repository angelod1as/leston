import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import { About as AboutType } from 'src/@types/types'
import leston from 'public/images/app/leston.png'

type Props = {
  about: AboutType
}

export default function About({ about: { about, contact } }: Props) {
  return (
    <div
      id="about"
      className="relative mx-10 my-8 md:grid md:grid-cols-4 md:gap-4"
    >
      <MDXRemote compiledSource={about.compiledSource} />
      <div className="col-start-3 my-8 md:m-0">
        <Image src={leston} alt="" className="z-50" />
      </div>
      <div className="col-start-4">
        <MDXRemote compiledSource={contact.compiledSource} />
      </div>
    </div>
  )
}
