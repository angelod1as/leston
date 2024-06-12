import isMobile from 'is-mobile'
import Project from './Project'
import { useLocaleContext } from '@/components/LocaleContext/LocaleContext'
import { MdxProject } from '@/@types/types'
import { translation } from '@/lib/translation'

type Props = {
  projects: MdxProject[]
}

export default function Projects({ projects: allProjects }: Props) {
  const { locale } = useLocaleContext()
  const data = translation[locale]

  const projects = allProjects
    .map(proj => {
      const newProj = proj as unknown as MdxProject & { open: boolean }
      if (newProj.scope?.highlight) {
        newProj.open = true
      }
      if (isMobile()) {
        newProj.open = false
      }
      return newProj
    })
    .sort((a, b) => {
      const orderA = a.scope?.order
      const orderB = b.scope?.order
      if (orderA && orderB) {
        if (orderA < orderB) {
          return -1
        }
        if (orderA > orderB) {
          return 1
        }
      }
      return 0
    })

  const highlightProjects = projects.filter(({ scope }) => {
    return scope?.highlight
  })

  const otherProjects = projects.filter(({ scope }) => {
    return !scope?.highlight
  })

  return (
    <div className="gap-2 mx-4 my-16 transition-opacity lg:mx-10 ">
      <div id="artistic">
        {highlightProjects.length > 0 && (
          <h2 className="relative z-30 mb-4 text-3xl md:hidden times">
            {data.Artistic}
          </h2>
        )}
        {highlightProjects.map(({ compiledSource, scope, open }, idx) => {
          if (!scope) {
            return null
          }

          return (
            <Project
              open={open}
              scope={scope}
              compiledSource={compiledSource}
              key={'project' + idx}
            />
          )
        })}
      </div>
      <div id="comissioned">
        {otherProjects.length > 0 && (
          <h2 className="relative z-30 mt-16 mb-4 text-3xl md:hidden times">
            {data.Comissioned}
          </h2>
        )}
        {otherProjects.map(({ compiledSource, scope, open }, idx) => {
          if (!scope) {
            return null
          }

          return (
            <Project
              open={open}
              scope={scope}
              compiledSource={compiledSource}
              key={'project' + idx}
            />
          )
        })}
      </div>
    </div>
  )
}
