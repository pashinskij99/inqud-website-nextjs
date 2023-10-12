import styled from '@emotion/styled'

export const StyledAnimatedVideoWrapper = styled.div`
  position: relative;
  .video-1 {
    position: relative;
    z-index: 2;
  }
  .video-2 {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
`

export const StyledAnimatedVideo = styled.video`
  opacity: 1;
  transition: opacity 0.1s ease;
  &.hide {
    opacity: 0;
  }
`

export const StyledAnimatedGifWrapper = styled.div`
  position: relative;
  .content {
    display: contents;
  }
  .image {
    &.hide {
      opacity: 0;
    }
    &.hide-display {
      display: none;
    }
  }
  .image-1 {
    position: relative;
  }
  .image-2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`
