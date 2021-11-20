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
      <>
        {/* Destkop */}
        <div className="hidden lg:block">
          <div className="mt-4 text-left mb-28 hover:opacity-100">
            {imageCompo}
            <button
              className="grid gap-2 mt-5 text-left grid-cols-14"
              onClick={toggleOpen}
            >
              <div className="col-span-4">
                <MDXRemote compiledSource={compiledSource} />
              </div>
              <div className="hidden lg:block">{/* empty column */}</div>
              <div className="col-span-2">
                <h2 className="mt-[-2px]">{addBreak(title)}</h2>
              </div>
              <div className="col-span-3">
                <Credits credits={credits} isOpen={isOpen} />
              </div>
              <div>{/* empty column */}</div>
              <div className="col-span-3">
                <MDXRemote compiledSource={extraInfo} />
              </div>
            </button>
          </div>
        </div>
        {/* Mobile */}
        <div className="lg:hidden">
          <div className="mt-4 text-left mb-28 hover:opacity-100">
            {imageCompo}
            <button className="text-left" onClick={toggleOpen}>
              <div className="pr-4 mt-8">
                <h2 className="mt-[-2px]">{title}</h2>
              </div>
              <div className="pr-4 mt-8">
                <MDXRemote compiledSource={compiledSource} />
              </div>
              <div className="pr-4 mt-8">
                <Credits credits={credits} isOpen={isOpen} />
                <div className="pr-4 mt-8">
                  <MDXRemote compiledSource={extraInfo} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <button
      className="block w-full pr-4 my-4 text-left cursor-pointer hover:opacity-95"
      onClick={toggleOpen}
    >
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-14">
        <div className="md:col-span-2 lg:col-span-4">{imageCompo}</div>
        <div className="hidden xl:block ">{/* empty column */}</div>
        <div className="col-span-1 lg:col-span-3 xl:col-span-2">
          <h2 className="mt-[-2px]">{addBreak(title)}</h2>
        </div>
        <div className="hidden col-span-3 lg:block">
          <Credits credits={credits} isOpen={isOpen} />
        </div>
        <div className="hidden xl:block">{/* empty column */}</div>
        <div className="hidden col-span-3 lg:block">
          <MDXRemote compiledSource={excerpt} />
        </div>
      </div>
    </button>
  )
}
