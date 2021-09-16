import React from 'react'
import { Span } from './style'

export default function Arrow() {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <Span onClick={handleScroll}></Span>
}
