import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import GifPlayer from 'react-gif-player'
import { InView } from 'react-intersection-observer'
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

function Animated2GifOnView({
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
      rootMargin='-30% 0px -30% 0px'
      onChange={(inView) => {
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

export {
  AnimatedFirstScreenVideo,
  AnimatedOneVideo,
  AnimatedVideoOnScroll,
  Animated2Gif,
  Animated2GifOnView,
}
