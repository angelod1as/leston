import { memo, useEffect, useState } from 'react'
import { About, MdxProject } from 'src/@types/types'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'
import Stone from './Stone'

type Props = {
  projects: MdxProject[]
  about: About
  showTitle: boolean
  stoneNumber: number
}

export default memo(function Home({
  projects,
  about,
  showTitle,
  stoneNumber,
}: Props) {
  const [image, setImage] = useState<StaticImageData>({} as StaticImageData)

  const getImage = async () => {
    const number = Math.floor(Math.random() * stoneNumber) + 1
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

  return (
    <div className="relative text-black" id="top">
      <Stone image={image} />

      <Header showTitle={showTitle} about={about} />

      <Projects projects={projects} />

      <Footer />
    </div>
  )
})
