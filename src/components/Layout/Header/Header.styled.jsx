import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'
import { nunito } from '@/utils/font'

export const StyledHeaderWrapper = styled.header`
  height: var(--header-height);
  max-width: 1920px;
  margin: 0 auto;
  background-color: ${({ active }) =>
    active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.9)'};
  position: sticky;
  backdrop-filter: ${({ active }) => (active ? 'none' : 'blur(5px)')};
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease-in-out;
  transform: translate3d(0, 0, 0);

  border-bottom: ${({ isHome }) =>
    isHome ? 'none' : '1px solid rgba(0, 0, 0, 0.07)'};

  .containerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .logoSection {
    display: flex;
    align-items: center;
    gap: ${rem(47)};

    ${responsive.xxl`
      gap: ${rem(18)};
    `};
    ${responsive.xl`
      gap: ${rem(27)};
      width: 100%;
      justify-content: space-between;
    `};
    ${responsive.sm`
      gap: ${rem(16)};

      .logo {
        display: none;
      }
    `};

    .logo {
      width: ${rem(124.001)};
      height: ${rem(40)};
      flex-shrink: 0;

      ${responsive.sm`
        display: none;
      `};
    }

    .logo-mobile {
      display: none;
      width: ${rem(33)};
      height: ${rem(33)};
      flex-shrink: 0;
      ${responsive.sm`
        display: block;
      `};
    }

    .button-link-wrapper {
      margin: 0 auto;
      display: ${({ active }) => (active ? 'none' : 'flex')};
      .button-link {
        display: flex;
        align-items: center;
        border-radius: ${rem(72)};
        padding: ${rem(7)} ${rem(14.5)} !important;
        background: transparent;
        color: rgba(81, 113, 133, 1);
        min-height: auto;
        height: 100%;
        ${nunito.style};
        font-size: ${rem(18)};
        font-weight: 400;
        line-height: 1;
        text-transform: capitalize;
        height: ${rem(40)};
        ${responsive.sm`
          height: 33px;
          font-size: ${rem(14)};
        `}

        &.business-link {
          border: 1px solid #07745333;
          font-weight: 700;

          color: #077453;
        }

        ${responsive.sm`
          flex: 1;
          padding: ${rem(6)} ${rem(16)} ${rem(7)} ${rem(16)};
        `};
      }
    }
  }

  .navSection {
    height: 100%;
    display: flex;
    align-items: center;
    ${responsive.xl`
      display: none;
    `};

    ul {
      display: flex;
      align-items: center;
      gap: ${rem(40)};
      color: var(--directness-black, #2d3439);
      height: 100%;

      font-size: ${rem(18)};
      font-weight: 700;
      line-height: normal;
      ${responsive.xxl`
        column-gap: ${rem(24)};
      `};

      li {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        z-index: 1;
        transition: 0.3s ease-in-out;

        a {
          padding: ${rem(10)};

          &.active {
            color: #077453;

            &::before {
              content: '';
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 1px;
              background-color: #077453;
            }
          }
        }

        &:hover {
          color: #077453;
        }
      }
    }

    ${responsive.xl`
      display: none;
    `};
  }

  .languageMenu {
    @media (max-width: 639px) {
      display: ${({ active }) => (active ? 'flex' : 'none')};
    }
  }

  .userSection {
    display: flex;
    align-items: center;
    gap: ${rem(96)};

    ${responsive.xxl`
      gap: ${rem(75)};
    `};

    ${responsive.xl`
      gap: ${rem(75)};
    `};

    .hamburger {
      display: none;
      width: ${rem(50)};
      height: ${rem(50)};
      position: relative;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      z-index: 11;
      overflow: hidden;

      border-radius: ${rem(12.5)};
      background: rgba(129, 158, 176, 0.20000000298023224);

      & span {
        pointer-events: none;
        display: block;
        position: absolute;
        height: ${rem(3.13)};
        width: ${rem(15)};
        border-radius: ${rem(15.625)};
        background: var(--independent-grey, #517185);
        opacity: 1;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;

        ${responsive.sm`
          width: ${rem(10)};
          height: ${rem(2)};
        `};
      }

      & span:nth-of-type(even) {
        left: ${rem(25)};
        border-radius: 0 ${rem(9)} ${rem(9)} 0;
        ${responsive.sm`
          left: ${rem(15)};
        `};
      }

      & span:nth-of-type(odd) {
        left: ${rem(10)};
        border-radius: ${rem(9)} 0 0 ${rem(9)};
        ${responsive.sm`
          left: ${rem(7)};
        `};
      }

      & span:nth-of-type(1),
      & span:nth-of-type(2) {
        top: ${rem(15.63)};
        ${responsive.sm`
          top: ${rem(10)} ;
        `};
      }

      & span:nth-of-type(3),
      & span:nth-of-type(4) {
        top: ${rem(23.44)};
        ${responsive.sm`
          top: ${rem(15)};
        `};
      }

      & span:nth-of-type(5),
      & span:nth-of-type(6) {
        top: ${rem(31.25)};
        ${responsive.sm`
          top: ${rem(20)};
        `};
      }

      &.open span:nth-of-type(1),
      &.open span:nth-of-type(6) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &.open span:nth-of-type(2),
      &.open span:nth-of-type(5) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      &.open span:nth-of-type(1) {
        left: ${rem(13)};
        top: ${rem(18)};
        ${responsive.sm`
          left: ${rem(8)};
          top: ${rem(11)};
        `};
      }

      &.open span:nth-of-type(2) {
        left: calc(50% - ${rem(2)});
        top: ${rem(18)};
        ${responsive.sm`
          left: calc(50% - ${rem(1)});
          top: ${rem(11)};
        `};
      }

      &.open span:nth-of-type(3) {
        left: -50%;
        opacity: 0;
      }

      &.open span:nth-of-type(4) {
        left: 100%;
        opacity: 0;
      }

      &.open span:nth-of-type(5) {
        left: ${rem(13)};
        top: ${rem(28)};
        ${responsive.sm`
          left: ${rem(8)};
          top: ${rem(18)};
        `};
      }

      &.open span:nth-of-type(6) {
        left: calc(50% - ${rem(2)});
        top: ${rem(28)};
        ${responsive.sm`
          left: calc(50% - ${rem(1)});
          top: ${rem(18)};
        `};
      }

      ${responsive.xl`
        gap: ${rem(17)};
        display: block;
      `};

      ${responsive.sm`
        width: ${rem(32)};
        height: ${rem(32)};
        border-radius: ${rem(8)};
      `};
    }

    .sign {
      display: flex;
      align-items: center;
      gap: ${rem(16)};

      ${responsive.xxl`
        gap: ${rem(8)};
      `};
      ${responsive.xl`
        display: none;
      `};

      .signIn {
        height: ${rem(40)};
        ${responsive.xxl`
          white-space: nowrap;
        `};
      }

      .signUp {
        height: ${rem(40)};
        ${responsive.xxl`
          white-space: nowrap;
        `};
      }
    }
  }
`
