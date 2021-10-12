import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Stone() {
  const [image, setImage] = useState<StaticImageData>({} as StaticImageData)

  const getImage = async () => {
    const number = Math.floor(Math.random() * 20)
    const image = await import(`public/images/stone/${number}.png`)
    return image
  }

  useEffect(() => {
    getImage().then(image => {
      setImage(image.default)
    })
  }, [])

  if (image?.src) {
    return (
      <div className="fixed z-50 flex items-center justify-center w-screen h-screen">
        <Image src={image} alt="" />
      </div>
    )
  }

  return null
}
