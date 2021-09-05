import { MdxProjects } from 'src/@types/types'
import Project from './Project'

type Props = {
  projects: MdxProjects[]
}

export default function Projects({ projects }: Props) {
  const openProjects = projects.filter(({ scope }) => {
    return scope?.open
  })

  const closedProjects = projects.filter(({ scope }) => {
    return !scope?.open
  })

  return (
    <div className="mx-10 my-16" id="projects">
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
  )
}
