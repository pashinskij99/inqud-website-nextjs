import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { InView } from 'react-intersection-observer'
import {
  StyledAnimatedVideo,
  StyledAnimatedVideoWrapper,
} from './AnimatedVideo.styled'

function AnimatedFirstScreenVideo({
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

function AnimatedOneVideo({
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

function AnimatedVideoOnScroll({
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
      rootMargin='-30% 0px -30% 0px'
      onChange={(inView) => {
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

export { AnimatedFirstScreenVideo, AnimatedOneVideo, AnimatedVideoOnScroll }
