import { MdxProjects } from 'src/@types/types'
import Header from './Header'
import Projects from './Projects'

type Props = {
  projects: MdxProjects[]
}

export default function Home({ projects }: Props) {
  return (
    <div>
      <Header />

      <Projects projects={projects} />
    </div>
  )
}
