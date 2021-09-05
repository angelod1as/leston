import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Images } from 'src/@types/types'
import Image from 'next/image'
import ResponsiveEmbed from 'react-responsive-embed'

type Props = {
  images: Images[]
  isOpen: boolean
}

export default function ImageCarousel({ images, isOpen }: Props) {
  if (isOpen) {
    return (
      <div className="relative">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {images.map(({ height, width, path, alt, video }, idx) => {
            if (video && alt) {
              return (
                <ResponsiveEmbed key={alt + idx} src={video} ratio="1317:484" />
              )
            } else if (height && width && path && alt) {
              return (
                <div key={alt + idx}>
                  <Image
                    height={height}
                    width={width}
                    src={'/images' + path}
                    alt={alt}
                  />
                </div>
              )
            }
            return (
              <div key={'missing' + idx}>
                this image needs an "alt" description
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  }

  const { height, width, path, alt } = images[0]
  return (
    <div className="relative col-span-2">
      <div>
        <Image height={height} width={width} src={'/images' + path} alt={alt} />
      </div>
    </div>
  )
}
