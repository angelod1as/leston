import ImageCarousel from '@components/ImageCarousel'
import { MDXRemote } from 'next-mdx-remote'
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
  const { images, credits, extraInfo, excerpt, title, open } = scope
  const [isOpen, setIsOpen] = useState(open)

  const toggleOpen = () => {
    setIsOpen(state => !state)
  }

  const imageCompo = <ImageCarousel images={images} isOpen={isOpen} />

  if (isOpen) {
    return (
      <div className="mt-4 text-left mb-28 hover:opacity-100">
        {imageCompo}
        <button
          className="grid gap-2 mt-5 text-left grid-cols-14"
          onClick={toggleOpen}
        >
          <div className="col-span-4">
            <MDXRemote compiledSource={compiledSource} />
          </div>
          <div>{/* empty column */}</div>
          <div className="col-span-2">
            <h2 className="mt-[-2px]">{addBreak(title)}</h2>
          </div>
          <div className="col-span-3">
            <Credits credits={credits} isOpen={isOpen} />
          </div>
          <div>{/* empty column */}</div>
          <div className="col-span-3">
            <p>{isOpen ? extraInfo : excerpt}</p>
          </div>
        </button>
      </div>
    )
  }

  return (
    <button
      className="block my-4 text-left transition-opacity cursor-pointer hover:opacity-90"
      onClick={toggleOpen}
    >
      <div className="grid gap-2 grid-cols-14">
        <div className="col-span-4">{imageCompo}</div>
        <div>{/* empty column */}</div>
        <div className="col-span-2">
          <h2 className="mt-[-2px]">{addBreak(title)}</h2>
        </div>
        <div className="col-span-3">
          <Credits credits={credits} isOpen={isOpen} />
        </div>
        <div>{/* empty column */}</div>
        <div className="col-span-3">
          <p>{isOpen ? extraInfo : excerpt}</p>
        </div>
      </div>
    </button>
  )
}
