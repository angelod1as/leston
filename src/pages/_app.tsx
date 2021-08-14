import { AppProps } from 'next/app'
import Head from 'next/head'
// import { useState } from 'react'

function App({ Component, pageProps }: AppProps) {
  // const [loading, setLoading] = useState(false)

  return (
    <>
      <FirstHead />
      {/* {loading && <Loading />}
      <BottomBar {...{ setLoading }} /> */}
      <Component {...pageProps} />
    </>
  )
}

// TODO: favicons & head
function FirstHead() {
  return (
    <Head>
      {/* FAVICON */}
      {/* <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      <link rel="apple-touch-icon" href="/apple.png" />
      <link rel="manifest" href="/manifest.webmanifest"></link> */}

      {/* META */}
      {/* Primary Meta Tags */}
      <title key="title">LESTON</title>
      <meta name="title" key="meta-title" content="LESTON" />
      <meta name="description" key="meta-description" content="LESTON" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://leston.com.br" />
      <meta property="og:title" key="og:title" content="LESTON" />
      <meta property="og:description" key="og:description" content="LESTON" />
      {/* <meta
        property="og:image"
        content="ABSOLUTE PATH OF SOCIAL IMAGE"
      /> */}
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://leston.com.br" />
      <meta property="twitter:title" key="tw:title" content="LESTON" />
      <meta
        property="twitter:description"
        key="tw:description"
        content="LESTON"
      />
      {/* <meta
        property="twitter:image"
        content="ABSOLUTE PATH OF SOCIAL IMAGE"
      /> */}
      <meta name="keywords" content="LESTON" />
      <meta name="author" content="Angelo Dias <oiangelodias@gmail.com>" />
      <meta name="url" content="https://leston.com.br" />
    </Head>
  )
}

export default App
