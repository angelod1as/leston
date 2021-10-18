import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'

export default function Stone() {
  const [image, setImage] = useState<StaticImageData>({} as StaticImageData)
  const ref = useRef(null)

  const getImage = async () => {
    const number = Math.floor(Math.random() * 19) + 1
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
      <Draggable defaultPosition={{ x: 0, y: 0 }} scale={1} nodeRef={ref}>
        <div className="fixed z-50 cursor-move w-[70%] ">
          <Image src={image} alt="" className="pointer-events-none" />
        </div>
      </Draggable>
    )
  }

  return null
}
