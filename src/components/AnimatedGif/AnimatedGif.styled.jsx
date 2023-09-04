import Image from 'next/image';
import styled from '@emotion/styled';

export const StyledAnimatedGif = styled(Image)`
  &.play {
    animation: playAnimation 1s steps(24) infinite;
  }

  &.pause {
    animation-play-state: paused;
  }

  @keyframes playAnimation {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
