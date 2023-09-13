import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { InView } from 'react-intersection-observer'
import Image from 'next/image'
import {
  StyledAnimatedGifWrapper,
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

function Animated2Gif({
  className,
  urlFirstVideo,
  urlSecondVideo,
  width,
  height,
  timeRepeat,
  timeFirstAnimate,
  timeSecondAnimate,
}) {
  const [gif2, setGif2] = useState('')
  const [gif2Ended, setGif2Ended] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        setGif2Ended(false)
      }, 6000)
    }, timeFirstAnimate)

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  const reloadGif = () => {
    setGif2('')
    setTimeout(() => {
      setGif2(urlSecondVideo)
    }, 10)
  }

  useEffect(() => {
    let intervalId = null
    if (!gif2Ended) {
      reloadGif()
      intervalId = setInterval(reloadGif, timeRepeat + timeSecondAnimate)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [gif2Ended, gif2])

  return (
    <StyledAnimatedGifWrapper>
      <Image
        className={clsx('image image-1', className)}
        src={urlFirstVideo}
        alt='gif'
        width={width}
        height={height}
      />
      <Image
        className={clsx('image image-2', className, {
          ['hide']: !gif2,
        })}
        src={gif2}
        alt='gif'
        width={width}
        height={height}
      />
    </StyledAnimatedGifWrapper>
  )
}

function Animated2GifOnView({
  className,
  urlSecondVideo,
  width,
  height,
  timeRepeat,
  timeSecondAnimate,
}) {
  const [gif2, setGif2] = useState('')
  const [videoInView, setVideoInView] = useState()

  const reloadGif = () => {
    setGif2('')
    setTimeout(() => {
      setGif2(urlSecondVideo)
    }, 10)
  }

  useEffect(() => {
    let intervalId = null
    if (videoInView) {
      reloadGif()
      intervalId = setInterval(reloadGif, timeRepeat + timeSecondAnimate)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [gif2, videoInView])

  return (
    <InView
      as='div'
      rootMargin='-30% 0px -30% 0px'
      onChange={(inView) => {
        setVideoInView(inView)
      }}
    >
      <StyledAnimatedGifWrapper>
        <Image
          className={clsx('image image-1 hide', className)}
          src={urlSecondVideo}
          alt='gif1'
          width={width}
          height={height}
        />
        <Image
          className={clsx('image image-2', className, {
            ['hide']: !gif2,
          })}
          src={gif2}
          alt='gif2'
          width={width}
          height={height}
        />
      </StyledAnimatedGifWrapper>
    </InView>
  )
}

export {
  AnimatedFirstScreenVideo,
  AnimatedOneVideo,
  AnimatedVideoOnScroll,
  Animated2Gif,
  Animated2GifOnView,
}
