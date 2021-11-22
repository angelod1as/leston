import { memo, useEffect, useState } from 'react'
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
  const [image, setImage] = useState<StaticImageData>({} as StaticImageData)

  const getImage = async () => {
    const number = Math.floor(Math.random() * 19) + 1
    const image = await import(`public/images/stone/${number}.png`)
    return image
  }

  const changeImage = () => {
    getImage().then(image => {
      setImage(image.default)
    })
  }

  useEffect(() => {
    changeImage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggleAbout = () => {
    setAboutOpen(state => !state)
  }

  return (
    <div className="relative text-black" id="top">
      {/* <Stone image={image} /> */}

      <Sidebar changeImage={changeImage} />

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
