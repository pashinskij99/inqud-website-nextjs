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
    //visibility: hidden;
    //display: none;
    opacity: 0;
  }
`
