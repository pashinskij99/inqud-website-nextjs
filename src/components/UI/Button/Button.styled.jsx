import styled from '@emotion/styled'

export const StyledButtonGhost = styled.button`
  height: 4.8rem;
  border-radius: 10rem;
  outline: 1px solid var(--ambitious-green-20, rgba(7, 116, 83, 0.2));

  color: var(--ambitious-green, #077453);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.7rem;
  padding: 0 2.4rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ccffd3;
    outline-color: #ccffd3;
  }
`

export const StyledButtonSecondary = styled.button`
  border-radius: 54px;
  background: var(--ambitious-green, #077453);
  height: 4.8rem;

  color: var(--clarity-white, #fff);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.7rem;
  transition: all 0.3s ease-in-out;
  padding: 0 2.4rem;

  &:hover {
    background: #1f8264;
  }
`

export const StyledButtonSecondaryLight = styled(StyledButtonSecondary)`
  color: #077453;
  background: #bfffc8;

  &:hover {
    background: #caffd1;
  }

  &:active {
    background: #b7ffc1;
  }
`

export const StyledButtonGetStarted = styled.button`
  border-radius: 5.4rem;
  background: var(--ambitious-green, #077453);
  padding-right: 0.4rem;
  padding-left: 1.6rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  .text {
    color: var(--clarity-white, #fff);
  }

  &,
  svg,
  path,
  .text {
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    svg {
      transform: rotate(45deg);
    }
  }

  &:active {
    svg {
      path {
        transform: translate(30%, -30%);
      }
    }
    .text {
      color: #bfffc8;
    }
  }

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    position: relative;
    svg {
      position: absolute;
      right: 0.4rem;
    }
  }
`

export const StyledButtonLearnMore = styled(StyledButtonGetStarted)`
  background: transparent;
  .text {
    color: #077453;
  }
  &:active {
    .text {
      color: #077453;
    }
  }

  @media (max-width: 576px) {
    svg {
      position: relative;
    }
  }
`

export const StyledButtonGetStartedLight = styled(StyledButtonGetStarted)`
  background-color: #bfffc8;
  .text {
    color: #077453;
  }
  &:active {
    .text {
      color: #077453;
    }
  }

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    position: relative;
    svg {
      position: absolute;
      right: 0.4rem;
    }
  }
`

export const StyledButtonGhostCrypto = styled(StyledButtonGhost)`
  outline: 1px solid var(--exciting-lime, #bfffc8);
  .text {
    color: #bfffc8;
    transition: all 0.3s ease-in-out;
  }

  path,
  rect {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: var(--exciting-lime, #bfffc8);
    .text {
      color: #077453;
    }
  }
  &:active {
    background-color: var(--exciting-lime, #bfffc8);
    .text {
      color: #077453;
    }
  }
`
