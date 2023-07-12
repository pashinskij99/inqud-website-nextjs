import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledButtonGhost = styled.button`
  height: ${rem(48)};
  border-radius: ${rem(100)};
  border: 1px solid var(--ambitious-green-20, rgba(7, 116, 83, 0.2));

  color: var(--ambitious-green, #077453);
  text-align: center;
  font-size: ${rem(18)};
  font-weight: 700;
  line-height: ${rem(27)};
  padding: 0 ${rem(24)};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ccffd3;
    border-color: #ccffd3;
  }
`

export const StyledButtonSecondary = styled.button`
  border-radius: ${rem(54)};
  background: var(--ambitious-green, #077453);
  height: ${rem(48)};

  color: var(--clarity-white, #fff);
  font-size: ${rem(18)};
  font-weight: 700;
  line-height: ${rem(27)};
  transition: all 0.3s ease-in-out;
  padding: 0 ${rem(24)};

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
  border-radius: ${rem(54)};
  background: var(--ambitious-green, #077453);
  padding-right: ${rem(4)};
  padding-left: ${rem(16)};
  height: ${rem(48)};
  display: flex;
  align-items: center;
  gap: ${rem(16)};

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
      right: ${rem(4)};
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
      right: ${rem(4)};
    }
  }
`

export const StyledButtonGhostCrypto = styled(StyledButtonGhost)`
  border: 1px solid var(--exciting-lime, #bfffc8);

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

export const StyledLoadMoreLarge = styled.button`

  border-radius: ${rem(16)};
  background: #F6F7F8;
  height: ${rem(80)};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;

  p {
    color: rgba(81, 113, 133, 1);
    transition: 0.3s ease-in-out;
  }

  &:hover {
    background-color: rgba(191, 255, 200, 1);

    p {
      color: rgba(7, 116, 83, 1);
    }
  }

  &:active {
    background-color: rgba(172, 242, 189, 1);

    p {
      color: rgba(7, 116, 83, 1);
    }
  }
`
