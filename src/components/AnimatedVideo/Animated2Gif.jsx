'use client'

import { useEffect, useRef, useState } from 'react'
import GifPlayer from 'react-gif-player'
import clsx from 'clsx'
import { StyledAnimatedGifWrapper } from '@/components/AnimatedVideo/AnimatedVideo.styled'

export default function Animated2Gif({
  className,
  urlFirstVideo,
  urlSecondVideo,
  stillFirstVideo,
  stillSecondVideo,
  width,
  height,
  timeRepeat,
  timeFirstAnimate,
  timeSecondAnimate,
}) {
  const [gif2Ended, setGif2Ended] = useState(true)
  const element = useRef()
  const element2 = useRef()
  const pauseFirstGif = useRef()
  const pauseSecondGif = useRef()
  const timer1 = useRef()
  const timer2 = useRef()

  useEffect(() => {
    element.current.firstChild.firstChild.click()

    const timer = setTimeout(() => {
      setGif2Ended(false)
    }, timeFirstAnimate + timeRepeat)

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  useEffect(() => {
    let intervalId = null
    if (!gif2Ended) {
      element2.current.firstChild.firstChild.click()
      timer1.current = setTimeout(() => {
        pauseSecondGif.current()
      }, timeSecondAnimate + 2000)

      intervalId = setInterval(() => {
        timer2.current = setTimeout(() => {
          pauseSecondGif.current()
        }, timeSecondAnimate + 2000)
        element2.current.firstChild.firstChild.click()
      }, timeRepeat + timeSecondAnimate)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [gif2Ended])

  return (
    <StyledAnimatedGifWrapper>
      <div ref={element} className='content'>
        <GifPlayer
          loading='lazy'
          className={clsx('image image-1', className)}
          autoplay={false}
          gif={urlFirstVideo}
          still={stillFirstVideo || urlFirstVideo}
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
          className={clsx('image image-2', className, {
            ['hide']: gif2Ended,
          })}
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
  )
}
