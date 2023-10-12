'use client'

import { useEffect, useRef, useState } from 'react'
import GifPlayer from 'react-gif-player'
import clsx from 'clsx'
import InView from '@/components/InView'
import { StyledAnimatedGifWrapper } from '@/components/AnimatedVideo/AnimatedVideo.styled'

export default function Animated2GifOnView({
  className,
  urlSecondVideo,
  stillSecondVideo,
  width,
  height,
  timeRepeat,
  timeSecondAnimate,
}) {
  const [videoInView, setVideoInView] = useState(false)
  const element = useRef()
  const element2 = useRef()
  const pauseFirstGif = useRef()
  const pauseSecondGif = useRef()
  const intervalId = useRef()
  const timer1 = useRef()
  const timer2 = useRef()

  useEffect(() => {
    if (videoInView) {
      element2.current.firstChild.firstChild.click()
      timer1.current = setTimeout(() => {
        pauseSecondGif.current()
      }, timeSecondAnimate + 2000)

      intervalId.current = setInterval(() => {
        timer2.current = setTimeout(() => {
          pauseSecondGif.current()
        }, timeSecondAnimate + 2000)
        element2.current.firstChild.firstChild.click()
      }, timeRepeat + timeSecondAnimate)
    } else {
      pauseSecondGif.current()
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [intervalId, timer1, timer2, videoInView])

  useEffect(() => {
    if (!videoInView) {
      clearInterval(intervalId.current)
      clearTimeout(timer1.current)
      clearTimeout(timer2.current)
    }
  }, [videoInView])

  return (
    <InView
      as='div'
      options={{ rootMargin: '-30% 0px -30% 0px' }}
      onView={(inView) => {
        setVideoInView(inView)
      }}
    >
      <StyledAnimatedGifWrapper gif1={urlSecondVideo} gif2={urlSecondVideo}>
        <div ref={element} className='content'>
          <GifPlayer
            loading='lazy'
            className={clsx('image image-1 hide', className)}
            autoplay={false}
            gif={urlSecondVideo}
            still={stillSecondVideo || urlSecondVideo}
            width={width}
            height={height}
            pauseRef={(pause) => {
              pauseFirstGif.current = pause
            }}
          />
        </div>
        <div ref={element2} className='content'>
          <GifPlayer
            loading='lazy'
            className={clsx('image image-2', className)}
            autoplay={false}
            gif={urlSecondVideo}
            still={stillSecondVideo || urlSecondVideo}
            width={width}
            height={height}
            pauseRef={(pause) => {
              pauseSecondGif.current = pause
            }}
          />
        </div>
      </StyledAnimatedGifWrapper>
    </InView>
  )
}
