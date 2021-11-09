import Image from 'next/image'
import { useRef } from 'react'
import Draggable from 'react-draggable'

type Props = {
  image: StaticImageData
  draggable?: boolean
}

export default function Stone({ image, draggable = true }: Props) {
  const ref = useRef(null)

  if (image?.src) {
    if (draggable) {
      return (
        <div className="absolute flex items-center justify-center w-full h-screen overflow-hidden">
          <Draggable nodeRef={ref}>
            <div className="fixed z-50 cursor-move ">
              <div className="pointer-events-none">
                <Image src={image} alt="" className="pointer-events-none" />
              </div>
            </div>
          </Draggable>
        </div>
      )
    }

    return (
      <div className="absolute flex items-center justify-center w-full h-screen overflow-hidden">
        <div className="fixed z-50">
          <Image src={image} alt="" className="pointer-events-none" />
        </div>
      </div>
    )
  }

  return null
}
