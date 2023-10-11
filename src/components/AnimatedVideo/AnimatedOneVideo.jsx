'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedOneVideo({
  className,
  urlFirstVideo,
  width,
  height,
  timeRepeat,
}) {
  const [firstVideoIsEnd, setFirstVideoIsEnd] = useState(false)
  const videoRef1 = useRef(null)

  const handleEnd = () => {
    setFirstVideoIsEnd(true)
  }

  useEffect(() => {
    let timer

    if (firstVideoIsEnd) {
      setInterval(() => {
        videoRef1.current.play()
        setFirstVideoIsEnd(false)
      }, timeRepeat)
    }

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [firstVideoIsEnd])

  return (
    <video
      autoPlay
      muted
      ref={videoRef1}
      onEnded={handleEnd}
      width={width}
      height={height}
      src={urlFirstVideo}
      className={className}
    />
  )
}
