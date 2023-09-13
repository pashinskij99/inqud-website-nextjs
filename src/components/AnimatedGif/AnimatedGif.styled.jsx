import styled from '@emotion/styled'

export const StyledAnimatedGif = styled.div`
  position: relative;

  .img-1 {
    &.pause {
      animation: hideAnimation 0s forwards;
    }
  }
  .img-2 {
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes playAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hideAnimation {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`
