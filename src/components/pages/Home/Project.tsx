import Images from '@components/Images'
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

  const imageCompo = <Images images={images} isOpen={isOpen} />

  if (isOpen) {
    return (
      <div className="mt-4 text-left mb-28 hover:opacity-100">
        {imageCompo}
        <button className="grid grid-cols-4 gap-8 mt-5" onClick={toggleOpen}>
          <MDXRemote compiledSource={compiledSource} />
          <div className="flex justify-end">
            <h2 className="mt-[-4px]">{addBreak(title)}</h2>
          </div>
          <div>
            <Credits credits={credits} isOpen={isOpen} />
          </div>
          <p>{isOpen ? extraInfo : excerpt}</p>
        </button>
      </div>
    )
  }

  return (
    <button
      className="block my-4 text-left transition-opacity cursor-pointer hover:opacity-90"
      onClick={toggleOpen}
    >
      <div className="grid grid-cols-5 gap-8">
        {imageCompo}
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
