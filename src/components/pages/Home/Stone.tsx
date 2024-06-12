import Image, { StaticImageData } from "next/image"
import { useRef } from 'react'
import Draggable from 'react-draggable'

type Props = {
  image: StaticImageData
  draggable?: boolean
}

export default function Stone({ image, draggable = false }: Props) {
  const ref = useRef(null)

  if (image?.src) {
    if (draggable) {
      return (
        <div className="absolute flex items-center justify-center w-full h-screen overflow-hidden">
          <Draggable nodeRef={ref}>
            <div className="fixed z-20 flex justify-center w-1/3 cursor-move">
              <div className="pointer-events-none ">
                <Image
                  src={image}
                  alt=""
                  className="pointer-events-none"
                  draggable
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            </div>
          </Draggable>
        </div>
      );
    }

    return (
      <div className="absolute flex items-center justify-center w-full h-screen overflow-hidden pointer-events-none">
        <div className="fixed z-20 w-full px-8 md:w-1/3 md:p-0">
          <Image
            src={image}
            alt=""
            placeholder="blur"
            className="pointer-events-none"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      </div>
    );
  }

  return null
}
