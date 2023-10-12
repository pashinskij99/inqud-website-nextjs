'use client'

import { useEffect, useRef, useState } from 'react'
import InView from '@/components/InView'

export default function AnimatedVideoOnScroll({
  className,
  urlFirstVideo,
  width,
  height,
  timeRepeat,
}) {
  const [firstVideoIsEnd, setFirstVideoIsEnd] = useState(false)
  const [videoInView, setVideoInView] = useState(false)
  const videoRef1 = useRef(null)

  const handleEnd = () => {
    setFirstVideoIsEnd(true)
  }

  useEffect(() => {
    if (videoRef1.current) {
      if (videoInView) {
        videoRef1.current.play()
      } else {
        videoRef1.current.pause()
        videoRef1.current.currentTime = 0
      }
    }
  }, [videoInView])

  useEffect(() => {
    let timer

    if (firstVideoIsEnd) {
      setTimeout(() => {
        videoRef1.current.play()
        setFirstVideoIsEnd(false)
      }, timeRepeat)
    }

    if (!videoInView && timer) {
      clearInterval(timer)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [firstVideoIsEnd, videoInView])

  return (
    <InView
      as='div'
      options={{
        rootMargin: '-30% 0px -30% 0px',
      }}
      onView={(inView) => {
        setVideoInView(inView)
      }}
    >
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
    </InView>
  )
}
