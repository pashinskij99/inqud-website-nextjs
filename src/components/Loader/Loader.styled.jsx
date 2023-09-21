import styled from '@emotion/styled'

export const StyledLoader = styled.div`
  background: linear-gradient(90deg, rgb(7, 116, 83), rgb(97, 184, 140));
  mask: radial-gradient(farthest-side, #0000 calc(100% - 5px), #fff 0);
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: rot 2s linear infinite;

  @keyframes rot {
    100% {
      transform: rotate(360deg);
    }
  }
`
