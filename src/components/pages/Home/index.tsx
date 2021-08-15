import { useState } from 'react'
import { About, MdxProjects } from 'src/@types/types'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'

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
    <div className="relative">
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
