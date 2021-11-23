import { memo, useEffect, useState } from 'react'
import type { About as AboutType, MdxProjects } from 'src/@types/types'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'
import Sidebar from './Sidebar'
import Stone from './Stone'

type Props = {
  projects: MdxProjects[]
  about: AboutType
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

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (aboutOpen === false) {
          setAboutOpen(true)
        }
      }
    })
  })

  return (
    <div className="relative text-black" id="top">
      <Stone image={image} />

      <Sidebar changeImage={changeImage} />

      <Header handleToggleAbout={handleToggleAbout} />

      <Projects projects={projects} />

      <About about={about} />

      <Footer />
    </div>
  )
})
