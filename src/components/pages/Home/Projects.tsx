import isMobile from 'is-mobile'
import { MdxProjects } from 'src/@types/types'
import Project from './Project'

type Props = {
  projects: MdxProjects[]
}

export default function Projects({ projects: allProjects }: Props) {
  const projects = allProjects
    .map(proj => {
      const newProj = proj
      if (isMobile()) {
        if (newProj.scope) {
          newProj.scope.highlight = false
        }
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
      <div id="highlights">
        {highlightProjects.map(({ compiledSource, scope }, idx) => {
          if (!scope) {
            return null
          }

          return (
            <Project
              scope={scope}
              compiledSource={compiledSource}
              key={'project' + idx}
            />
          )
        })}
      </div>
      <div id="archives">
        {otherProjects.map(({ compiledSource, scope }, idx) => {
          if (!scope) {
            return null
          }

          return (
            <Project
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
