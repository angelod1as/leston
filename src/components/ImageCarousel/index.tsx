import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Images } from 'src/@types/types'
import Image from 'next/image'
import ResponsiveEmbed from 'react-responsive-embed'
import { useState } from 'react'
import Script from 'next/script'

type Props = {
  images: Images[]
  isOpen: boolean
}

export default function ImageCarousel({ images, isOpen }: Props) {
  const [thumbClicked, setThumbClicked] = useState(false)

  const handleClickThumb = () => {
    // console.log('thumb')
    setThumbClicked(st => !st)
  }

  // const handleClickArrow = () => {
  //   console.log('arrow')
  //   setThumbClicked(st => !st)
  // }

  const videoOptions: { [i: string]: string | boolean | number } = {
    badge: 0,
    autopause: 0,
    player_id: 0,
    app_id: 58479,
    background: 1,
    byline: 0,
    autplay: 1,
    controls: 0,
  }

  const optionStrings = Object.keys(videoOptions)
    .map(key => {
      const value = videoOptions[key]
      return `${key}=${value}`
    })
    .join('&')

  if (isOpen) {
    return (
      <div className="relative">
        <Carousel
          onClickThumb={handleClickThumb}
          showThumbs={false}
          showIndicators={false}
          stopOnHover
          emulateTouch
          // autoPlay={!thumbClicked}
          // infiniteLoop
        >
          {images.map(({ height, width, path, alt, video }, idx) => {
            if (video && alt) {
              // TODO: Video abre autoplay e mutado
              return (
                <>
                  <div style={{ padding: '37.5% 0 0 0', position: 'relative' }}>
                    <iframe
                      src={`https://player.vimeo.com/video/625886536?h=f40ba8d4cf&${optionStrings}`}
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        margin: 0,
                      }}
                      title="CLAVE teste site"
                      frameBorder={0}
                    />
                  </div>
                  <Script src="https://player.vimeo.com/api/player.js"></Script>
                </>
                // <ResponsiveEmbed
                //   key={alt + idx}
                //   src="https://player.vimeo.com/video/625886536"
                //   ratio="1920:720"
                // />
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

  // TODO: Pegar primeira imagem do array

  const { height, width, path, alt } = images[0]
  return (
    <div className="relative col-span-2">
      <div>
        <Image height={height} width={width} src={'/images' + path} alt={alt} />
      </div>
    </div>
  )
}
