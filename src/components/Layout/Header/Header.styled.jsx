import styled from '@emotion/styled'
import {rem} from '@/utils/rem';
import {responsive} from '@/utils/response';

export const StyledHeaderWrapper = styled.header`
  padding: 23px 0;
  max-width: 1920px;
  margin: 0 auto;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  transform: translate3d(0, 0, 0);
  /* height: -webkit-fill-available; */

  .containerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${responsive.xl`
    padding: ${rem(18)} 0;
  `};
  ${responsive.sm`
    padding: ${rem(8)} 0;
    height: ${rem(60)};
  `};

  .logoSection {
    display: flex;
    align-items: center;
    gap: ${rem(47)};

    .logo {
      width: ${rem(155.001)};
      height: ${rem(50)};
    }

    ${responsive.xl`
      gap: ${rem(27)};
    `};
    ${responsive.sm`
      gap: ${rem(16)};

      .logo {
        display: none;
      }
    `};

    .logo-mobile {
      display: none;
      width: ${rem(99.555)};
      height: ${rem(32)};
      flex-shrink: 0;
      ${responsive.sm`
        display: block;
      `};
    }

    .tabs {
      ${responsive.sm`
        display: none;
      `};
      display: flex;
      align-items: center;
      gap: ${rem(2)};

      button {
        padding: 0 ${rem(14)};
      }

      .secondaryButton {
        height: ${rem(40)};
        border-radius: ${rem(72)};
        outline: ${rem(1)} solid transparent;
        background: var(--clarity-white, #fff);

        transition: 0.3s ease-in-out;

        p {
          color: var(--independent-grey, #517185);
          font-weight: 400;
        }
      }

      .activeButton {
        height: ${rem(40)};
      }
    }

    .mobile-tabs {
      display: none;
      ${responsive.sm`
        display: ${(props) => (props.active ? 'none' : 'block')};
      `};

      .mobile-tabs-button {
        .mobile-tabs-button-text {
          color: #077453;
        }
      }
    }
  }

  .navSection {
    ul {
      display: flex;
      align-items: center;
      gap: ${rem(40)};
      color: var(--directness-black, #2d3439);

      font-size: ${rem(18)};
      font-weight: 700;
      line-height: normal;

      li {
        z-index: 1;
        transition: 0.3s ease-in-out;

        a {
          padding: ${rem(10)};
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
    ${responsive.xs`
      display: ${(props) => (props.active ? 'block' : 'none')};
    `};
  }

  .userSection {
    display: flex;
    align-items: center;
    gap: ${rem(96)};

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

      & {
      }

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
        `};
      }

      & span:nth-child(even) {
        left: ${rem(25)};
        border-radius: 0 ${rem(9)} ${rem(9)} 0;
        ${responsive.sm`
          left: ${rem(15)};
        `};
      }

      & span:nth-child(odd) {
        left: ${rem(10)};
        border-radius: ${rem(9)} 0 0 ${rem(9)};
        ${responsive.sm`
          left: ${rem(7)};
        `};
      }

      & span:nth-child(1),
      & span:nth-child(2) {
        top: ${rem(15.63)};
        ${responsive.sm`
          top: ${rem(10)} ;
        `};
      }

      & span:nth-child(3),
      & span:nth-child(4) {
        top: ${rem(23.44)};
        ${responsive.sm`
          top: ${rem(15)};
        `};
      }

      & span:nth-child(5),
      & span:nth-child(6) {
        top: ${rem(31.25)};
        ${responsive.sm`
          top: ${rem(20)};
        `};
      }

      &.open span:nth-child(1),
      &.open span:nth-child(6) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &.open span:nth-child(2),
      &.open span:nth-child(5) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      &.open span:nth-child(1) {
        left: ${rem(13)};
        top: ${rem(18)};
        ${responsive.sm`
          left: ${rem(8)};
          top: ${rem(11)};
        `};
      }

      &.open span:nth-child(2) {
        left: calc(50% - ${rem(2)});
        top: ${rem(18)};
        ${responsive.sm`
          left: calc(50% - ${rem(1)});
          top: ${rem(11)};
        `};
      }

      &.open span:nth-child(3) {
        left: -50%;
        opacity: 0;
      }

      &.open span:nth-child(4) {
        left: 100%;
        opacity: 0;
      }

      &.open span:nth-child(5) {
        left: ${rem(13)};
        top: ${rem(28)};
        ${responsive.sm`
          left: ${rem(8)};
          top: ${rem(18)};
        `};
      }

      &.open span:nth-child(6) {
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
