import isMobile from 'is-mobile'
import { MdxProjects } from 'src/@types/types'
import Project from './Project'

type Props = {
  projects: MdxProjects[]
}

export default function Projects({ projects: allProjects }: Props) {
  const projects = allProjects.map(proj => {
    const newProj = proj
    if (isMobile()) {
      if (newProj.scope) {
        newProj.scope.open = false
      }
    }
    return newProj
  })

  const openProjects = projects.filter(({ scope }) => {
    return scope?.open
  })

  const closedProjects = projects.filter(({ scope }) => {
    return !scope?.open
  })

  return (
    <div className="gap-2 mx-4 my-16 transition-opacity lg:mx-10 ">
      <div id="highlights">
        {openProjects.map(({ compiledSource, scope }, idx) => {
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
        {closedProjects.map(({ compiledSource, scope }, idx) => {
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
