import ImageCarousel from '@components/ImageCarousel'
import { MDXRemote } from 'next-mdx-remote'
import { useState } from 'react'
import { UnmountClosed } from 'react-collapse'
import { FrontMatter } from 'src/@types/types'
import { Credits } from './Credits'

type Props = {
  scope: FrontMatter
  compiledSource: string
  open: boolean
}

type Element = {
  target: {
    nodeName: string
    className: string
  }
}

export default function Project({ scope, compiledSource, open }: Props) {
  const { images, credits, extraInfo, excerpt, title } = scope
  const [isOpen, setIsOpen] = useState(open)

  const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nodes = ['span', 'a']

    const element = e as unknown as Element
    const target = element.target

    const noNode = !nodes.includes(target.nodeName.toLowerCase())
    const noClass = !target.className.includes('url')

    if (noNode && noClass) {
      setIsOpen(state => !state)
    }
  }

  const imageCompo = <ImageCarousel images={images} isOpen={isOpen} />

  if (isOpen) {
    return (
      <UnmountClosed isOpened={isOpen} theme={{ collapse: `collapse-summary` }}>
        {/* Destkop */}
        <div className="hidden lg:block">
          <div className="relative pt-4 text-left mb-28">
            {imageCompo}
            <button
              className="relative z-30 grid gap-2 pt-5 text-left grid-cols-18"
              onClick={toggleOpen}
            >
              <div className="col-span-5">
                <MDXRemote compiledSource={compiledSource} />
              </div>
              <div className="hidden lg:block">{/* empty column */}</div>
              <div className="col-span-3">
                <h2 className="pt-[-2px] break-words">{title}</h2>
              </div>
              <div className="col-span-4">
                <MDXRemote compiledSource={extraInfo} />
              </div>
              <div>{/* empty column */}</div>
              <div className="col-span-4">
                <Credits credits={credits} isOpen={isOpen} />
              </div>
            </button>
          </div>
        </div>
        {/* Mobile */}
        <div className="lg:hidden">
          <div className="relative pt-4 text-left mb-28">
            {imageCompo}
            <button className="relative z-30 text-left" onClick={toggleOpen}>
              <div className="pt-8 pr-4">
                <h2 className="pt-[-2px]">{title}</h2>
              </div>
              <div className="pt-8 pr-4">
                <MDXRemote compiledSource={compiledSource} />
              </div>
              <div className="pt-8 pr-4">
                <MDXRemote compiledSource={extraInfo} />

                <div className="pt-8 pr-4">
                  <Credits credits={credits} isOpen={isOpen} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </UnmountClosed>
    )
  }

  return (
    <UnmountClosed isOpened={!isOpen} theme={{ collapse: `collapse-summary` }}>
      <button
        className="relative block w-full py-4 pr-4 text-left cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="relative grid grid-cols-2 gap-2 lg:grid-cols-14">
          <div className="relative z-30 md:col-span-2 lg:col-span-4">
            {imageCompo}
          </div>
          <div className="relative z-30 hidden hover:z-30 xl:block ">
            {/* empty column */}
          </div>
          <div className="relative z-30 col-span-1 lg:col-span-3 xl:col-span-2">
            <h2 className="pt-[-2px]">{title}</h2>
          </div>
          <div className="relative z-30 hidden col-span-3 hover:z-30 lg:block">
            <Credits credits={credits} isOpen={isOpen} />
          </div>
          <div className="relative z-30 hidden hover:z-30 xl:block">
            {/* empty column */}
          </div>
          <div className="relative z-30 hidden col-span-3 hover:z-30 lg:block">
            <MDXRemote compiledSource={excerpt} />
          </div>
        </div>
      </button>
    </UnmountClosed>
  )
}
