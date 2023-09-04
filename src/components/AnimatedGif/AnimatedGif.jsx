import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { StyledAnimatedGif } from '@/components/AnimatedGif/AnimatedGif.styled';

export function AnimatedGif({ gifUrl, alt, className, width, height }) {
  // eslint-disable-next-line no-use-before-define
  const { isPlaying } = useAnimationGif();

  return (
    <StyledAnimatedGif
      className={clsx(className, {
        ['play']: isPlaying,
        ['pause']: !isPlaying,
      })}
      width={width}
      height={height}
      src={gifUrl}
      alt={alt}
    />
  );
}

const useAnimationGif = () => {
  const [isPlaying] = useState(true);

  // useEffect(() => {
  //   setIsPlaying(true)
  // }, []);

  return {
    isPlaying,
  };
};
