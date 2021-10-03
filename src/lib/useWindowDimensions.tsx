import { useState, useEffect } from 'react'

function getWindowDimensions() {
  if (process.browser) {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }
  return {
    width: 0,
    height: 0,
  }
}

function getScrollPosition() {
  if (process.browser) {
    const { scrollY: scroll } = window
    return {
      scroll,
    }
  }
  return {
    scroll: 0,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    function handleScroll() {
      setScrollPosition(getScrollPosition())
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { ...windowDimensions, ...scrollPosition }
}
