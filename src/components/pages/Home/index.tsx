import { MdxProjects } from 'src/@types/types'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'

type Props = {
  projects: MdxProjects[]
}

export default function Home({ projects }: Props) {
  return (
    <div className="relative">
      <Header />

      <Projects projects={projects} />

      <Footer />
    </div>
  )
}
