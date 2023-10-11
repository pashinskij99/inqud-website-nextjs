'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  StyledAnimatedVideo,
  StyledAnimatedVideoWrapper,
} from '@/components/AnimatedVideo/AnimatedVideo.styled'

export default function AnimatedFirstScreenVideo({
  className,
  urlFirstVideo,
  urlSecondVideo,
  width,
  height,
  timeRepeat,
}) {
  const [firstVideoIsEnd, setFirstVideoIsEnd] = useState(false)
  const [secondVideoIsEnd, setSecondVideoIsEnd] = useState(false)
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)

  const handleEnd = () => {
    setFirstVideoIsEnd(true)
  }
  const handleEnd2 = () => {
    setSecondVideoIsEnd(true)
  }

  useEffect(() => {
    let timer

    if (firstVideoIsEnd) {
      timer = setTimeout(() => {
        videoRef2.current.play()
      }, timeRepeat)
    } else {
      videoRef1.current.play()
    }

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [firstVideoIsEnd])

  useEffect(() => {
    let timer
    if (secondVideoIsEnd) {
      timer = setTimeout(() => {
        videoRef2.current.play()
        setSecondVideoIsEnd(false)
      }, timeRepeat)
    }

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [secondVideoIsEnd])

  return (
    <StyledAnimatedVideoWrapper>
      <StyledAnimatedVideo
        autoPlay
        muted
        controls={false}
        playsInline
        preload='auto'
        ref={videoRef1}
        onEnded={handleEnd}
        width={width}
        height={height}
        src={urlFirstVideo}
        className={clsx('video-1', className, {
          ['hide']: firstVideoIsEnd,
        })}
      />
      <StyledAnimatedVideo
        width={width}
        muted
        height={height}
        ref={videoRef2}
        onEnded={handleEnd2}
        src={urlSecondVideo}
        className={clsx('video-2', className, {
          // ['hide']: !firstVideoIsEnd,
        })}
      />
    </StyledAnimatedVideoWrapper>
  )
}
