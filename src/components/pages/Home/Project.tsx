import { FC, useState } from 'react'
import { UnmountClosed } from 'react-collapse'
import { Credits } from './Credits'
import { FrontMatter } from '@/@types/types'
import { useLocaleContext } from '@/components/LocaleContext/LocaleContext'
import { translation } from '@/lib/translation'
import ImageCarousel from '@/components/ImageCarousel'
import { MDX } from '@/components/MDX'

type Props = {
  scope: FrontMatter
  compiledSource: string
  open: boolean
}

export default function Project({ scope, compiledSource, open }: Props) {
  const { images, credits, extraInfo, excerpt, title } = scope
  const { locale } = useLocaleContext()
  const data = translation[locale]
  const [isOpen, setIsOpen] = useState(open)

  const toggleOpen = () => {
    setIsOpen(state => !state)
  }

  const imageCompo = <ImageCarousel images={images} isOpen={isOpen} />

  const ProjectToggle: FC<{ noClick?: boolean }> = ({ noClick = false }) =>
    noClick ? (
      <div className="overflow-visible text-left times">
        {isOpen ? data.CloseProject : data.OpenProject}
      </div>
    ) : (
      <button
        onClick={toggleOpen}
        className="overflow-visible text-left times hover:opacity-50"
      >
        {isOpen ? data.CloseProject : data.OpenProject}
      </button>
    )

  if (isOpen) {
    return (
      <UnmountClosed isOpened={isOpen} theme={{ collapse: `collapse-summary` }}>
        {/* Destkop */}
        <div className="hidden lg:block hover:z-20">
          <div className="relative pt-4 text-left mb-28">
            {imageCompo}
            <div className="relative z-30 grid gap-2 pt-5 text-left grid-cols-18">
              <div className="col-span-5">
                <MDX compiledSource={compiledSource} />
              </div>
              <div className="hidden lg:block">{/* empty column */}</div>
              <div className="col-span-3">
                <h2 className="pt-[-2px] break-words">{title}</h2>
                <div className="mt-4">
                  <ProjectToggle />
                </div>
              </div>
              <div className="col-span-4">
                <MDX compiledSource={extraInfo} />
              </div>
              <div>{/* empty column */}</div>
              <div className="col-span-4">
                <Credits credits={credits} isOpen={isOpen} />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="lg:hidden">
          <div className="relative pt-4 text-left mb-28">
            {imageCompo}
            <div className="relative z-30 text-left">
              <div className="pt-8 pr-4">
                <h2 className="pt-[-2px]">{title}</h2>
                <div className="mt-4">
                  <ProjectToggle />
                </div>
              </div>
              <div className="pt-8 pr-4">
                <MDX compiledSource={compiledSource} />
              </div>
              <div className="pt-8 pr-4">
                <MDX compiledSource={extraInfo} />

                <div className="pt-8 pr-4">
                  <Credits credits={credits} isOpen={isOpen} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </UnmountClosed>
    )
  }

  return (
    <UnmountClosed isOpened={!isOpen} theme={{ collapse: `collapse-summary` }}>
      <button
        className="relative block w-full py-4 pr-4 text-left hover:opacity-80 hover:z-20"
        onClick={toggleOpen}
      >
        <div className="relative grid grid-cols-2 gap-2 lg:grid-cols-18">
          <div className="relative z-30 md:col-span-2 lg:col-span-5">
            {imageCompo}
          </div>
          <div className="relative z-30 hidden hover:z-30 lg:block">
            {/* empty column */}
          </div>
          <div className="relative z-30 col-span-1 lg:col-span-3">
            <h2 className="pt-[-2px]">{title}</h2>
            <div className="hidden mt-4 md:block">
              <ProjectToggle noClick />
            </div>
          </div>
          <div className="relative z-30 hidden col-span-4 hover:z-30 lg:block">
            <Credits credits={credits} isOpen={isOpen} />
          </div>
          <div className="relative z-30 hidden hover:z-30 lg:block">
            {/* empty column */}
          </div>
          <div className="relative z-30 hidden col-span-4 hover:z-30 lg:block">
            <MDX compiledSource={excerpt} />
          </div>
        </div>
      </button>
    </UnmountClosed>
  )
}
