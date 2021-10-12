import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Images } from 'src/@types/types'
import Image from 'next/image'
import Script from 'next/script'

type Props = {
  images: Images[]
  isOpen: boolean
}

const videoOptions: { [i: string]: string | boolean | number } = {
  badge: 0,
  autopause: 0,
  player_id: 0,
  app_id: 58479,
  byline: 0,
  loop: 1,
  muted: 1,
  autoplay: 1,
  title: 0,
}

const optionStrings = Object.keys(videoOptions)
  .map(key => {
    const value = videoOptions[key]
    return `${key}=${value}`
  })
  .join('&')

export default function ImageCarousel({ images, isOpen }: Props) {
  const Video = ({ video, alt }: { video: string; alt: string }) => {
    return (
      <>
        <div style={{ padding: '37.5% 0 0 0', position: 'relative' }}>
          <iframe
            src={`https://player.vimeo.com/video/${video}?${optionStrings}`}
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              margin: 0,
            }}
            title={alt}
            frameBorder={0}
          />
        </div>
        <Script src="https://player.vimeo.com/api/player.js"></Script>
      </>
    )
  }

  if (isOpen) {
    return (
      <div className="relative">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          stopOnHover
          emulateTouch
        >
          {images.map(({ height, width, path, alt, video }, idx) => {
            if (video && alt) {
              return <Video video={video} alt={alt} />
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

  // TODO: Pegar primeira imagem do array

  const { video, height, width, path, alt } = images[0]
  return (
    <div className="relative col-span-2">
      {video ? (
        <div>{video && <Video video={video} alt={alt} />}</div>
      ) : (
        <div>
          <Image
            height={height}
            width={width}
            src={'/images' + path}
            alt={alt}
          />
        </div>
      )}
    </div>
  )
}
