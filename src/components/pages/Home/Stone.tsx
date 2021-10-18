import Image from 'next/image'
import { useRef } from 'react'
import Draggable from 'react-draggable'

type Props = {
  image: StaticImageData
}

export default function Stone({ image }: Props) {
  const ref = useRef(null)

  if (image?.src) {
    return (
      <div className="absolute flex items-center justify-center w-screen h-screen overflow-hidden">
        <Draggable nodeRef={ref}>
          <div className="fixed z-50 cursor-move w-[70%]">
            <Image src={image} alt="" className="pointer-events-none" />
          </div>
        </Draggable>
      </div>
    )
  }

  return null
}
