import { memo, useState } from 'react'
import { About, MdxProjects } from 'src/@types/types'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'
import Sidebar from './Sidebar'
import Stone from './Stone'

type Props = {
  projects: MdxProjects[]
  about: About
}

export default memo(function Home({ projects, about }: Props) {
  const [aboutOpen, setAboutOpen] = useState(false)

  const handleToggleAbout = () => {
    setAboutOpen(state => !state)
  }

  return (
    <div className="relative" id="top">
      {/* TODO: Take this back */}
      {/* <Stone /> */}

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
})
