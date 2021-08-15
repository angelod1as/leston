import { MdxProjects } from 'src/@types/types'
import Project from './Project'

type Props = {
  projects: MdxProjects[]
}

export default function Projects({ projects }: Props) {
  return (
    <div className="my-16 mx-10">
      {projects.map(({ compiledSource, scope }, idx) => {
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
