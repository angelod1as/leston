import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/styles.css'
import favicon from '../../public/favicon/favicon_v01.ico'
import favicon192 from '../../public/favicon/Favicon_v01.png'
import favicon180 from '../../public/favicon/apple-touch-icon-180x180_v01.png'
import Wrapper from '@/components/LocaleContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <FirstHead />
      <Component {...pageProps} />
    </Wrapper>
  )
}

function FirstHead() {
  const description =
    'Artist, Musician, Multimedia Developer, Creative Technologist'
  const title = 'LESTON'
  const social = 'https://leston.studio/images/app/social/1080.jpg'

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <base target="_blank" />

      {/* FAVICON */}
      <link rel="shortcut icon" href={favicon.src} />
      <link rel="icon" type="image/png" href={favicon192.src} sizes="192x192" />
      <link rel="apple-touch-icon" sizes="180x180" href={favicon180.src} />

      {/* META */}
      {/* Primary Meta Tags */}
      <title key="title">LESTON</title>
      <meta name="title" key="meta-title" content={title} />
      <meta name="description" key="meta-description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://leston.com.br" />
      <meta property="og:title" key="og:title" content={title} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta property="og:image" content={social} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://leston.com.br" />
      <meta property="twitter:title" key="tw:title" content={title} />
      <meta
        property="twitter:description"
        key="tw:description"
        content={description}
      />
      <meta property="twitter:image" content={social} />
      <meta name="keywords" content={description} />
      <meta name="url" content="https://leston.com.br" />
    </Head>
  )
}

export default App
