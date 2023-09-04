import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { StyledAnimatedGif } from '@/components/AnimatedGif/AnimatedGif.styled'

export function AnimatedGif({
  gifUrl,
  imgUrl,
  alt,
  className,
  gifWidth,
  imgWidth,
  gitHeight,
  imgHeight,
}) {
  // eslint-disable-next-line no-use-before-define
  const { isPlaying } = useAnimationGif({ timer: 3500 })

  return (
    <StyledAnimatedGif>
      <Image
        className={clsx(className, 'img-1', {
          ['play']: isPlaying,
          ['pause']: !isPlaying,
        })}
        width={gifWidth}
        height={gitHeight}
        src={gifUrl}
        alt={alt}
      />
      <Image
        className={clsx(className, 'img-2', {
          ['pause']: !isPlaying,
        })}
        width={imgWidth}
        height={imgHeight}
        src={imgUrl}
        alt={alt}
      />
    </StyledAnimatedGif>
  )
}

const useAnimationGif = ({ timer }) => {
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsPlaying(false)
    }, [timer])
  }, [])

  return {
    isPlaying,
  }
}
