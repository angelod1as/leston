import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { FrontMatter } from 'src/@types/types'
import { Credits } from './Credits'

const addBreak = (string: string) => {
  return string.split(' ').map((word, idx, arr) => {
    if (idx === arr.length - 1) {
      return <Fragment key={idx}>{word}</Fragment>
    }
    return (
      <Fragment key={idx}>
        {word}
        <br />
      </Fragment>
    )
  })
}

type Props = {
  scope: FrontMatter
  compiledSource: string
}

export default function Project({ scope, compiledSource }: Props) {
  const { image, credits, extraInfo, excerpt, title, open } = scope
  const [isOpen, setIsOpen] = useState(open)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const imageCompo = (
    <div className={isOpen ? 'relative' : 'relative col-span-2'}>
      <Image
        src={'/images' + image.path}
        alt=""
        width={image.width}
        height={image.height}
        layout="responsive"
      />
    </div>
  )

  return (
    <button
      className={
        isOpen
          ? 'mt-4 mb-28 text-left'
          : 'my-4 text-left cursor-pointer block hover:opacity-90 transition-opacity'
      }
      onClick={toggleOpen}
    >
      {isOpen && imageCompo}
      <div
        className={`grid mt-5 gap-8 ${isOpen ? 'grid-cols-4' : 'grid-cols-5'}`}
      >
        {isOpen ? <MDXRemote compiledSource={compiledSource} /> : imageCompo}

        <div className="flex justify-end">
          <h2 className="mt-[-4px]">{addBreak(title)}</h2>
        </div>
        <div>
          <Credits credits={credits} isOpen={isOpen} />
        </div>
        <p>{isOpen ? extraInfo : excerpt}</p>
      </div>
    </button>
  )
}
