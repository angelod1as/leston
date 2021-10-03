import { useState } from 'react'
import { About, MdxProjects } from 'src/@types/types'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'
import Sidebar from './Sidebar'

type Props = {
  projects: MdxProjects[]
  about: About
}

export default function Home({ projects, about }: Props) {
  const [aboutOpen, setAboutOpen] = useState(false)

  const handleToggleAbout = () => {
    setAboutOpen(state => !state)
  }

  return (
    <div className="relative" id="top">
      <Sidebar />

      <Header handleToggleAbout={handleToggleAbout} />

      <Projects projects={projects} />

      <Footer
        about={about}
        aboutOpen={aboutOpen}
        handleToggleAbout={handleToggleAbout}
      />
    </div>
  )
}
