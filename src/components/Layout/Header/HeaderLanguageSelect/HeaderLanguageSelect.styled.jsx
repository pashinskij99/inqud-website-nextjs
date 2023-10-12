import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledHeaderLanguageSelectWrapper = styled.div`
  position: relative;
  width: ${rem(40)};
  cursor: pointer;

  .button-select {
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) translateX(100%);
      display: flex;
      align-items: center;
      right: -${rem(7)};
      gap: ${rem(8)};
      font-size: ${rem(18)};
      font-weight: 700;
      color: rgba(45, 52, 57, 1);

      ${responsive.xl`
        right: -${rem(5)};
      `};
    }

    .planet {
      pointer-events: none;
      touch-action: none;
      ${responsive.xs`
        width: ${rem(32)};
        height: ${rem(32)};
     `}
    }

    span,
    svg,
    path {
      transition: all 0.3s ease-in-out;
    }

    &.active {
      span {
        color: #077453;

        svg {
          transform: rotate(180deg);

          path {
            fill: #077453;
          }
        }
      }
    }
  }

  .select {
    top: 20px;
    position: absolute;
    transform: translateX(-25%);
    height: 100%;
    display: none;
    .trigger {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${rem(160)};
      z-index: 0;
      display: none;
      transform: translateY(-25%);
    }

    &.show {
      display: block;
      z-index: 11111;

      .trigger {
        display: block;
      }
    }

    ul {
      padding: ${rem(10)} ${rem(8)};
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-top: ${rem(50)};
      position: relative;
      outline: 2px solid rgba(244, 245, 250, 1);
      border-radius: ${rem(16)};
      background-color: white;

      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: -${rem(10)};
        left: 50%;
        width: ${rem(24)};
        height: ${rem(24)};
        transform: translateX(-50%) rotate(-45deg);
        border-radius: ${rem(4)};
        background: #fff;
        z-index: 0;
        border-right: 2px solid rgba(244, 245, 250, 1);
        border-top: 2px solid rgba(244, 245, 250, 1);
      }

      &::after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: ${rem(16)};
        background-color: white;
        z-index: 0;
      }

      &.show {
        animation: showMenu 0.3s ease-in-out forwards;
      }

      &.hide {
        animation: hideMenu 0.3s ease-in-out forwards;
      }

      li {
        padding: ${rem(8)} ${rem(20)} ${rem(8)} ${rem(28)};
        white-space: nowrap;
        z-index: 1;

        button {
          color: var(--directness-black, #2d3439);
          font-size: ${rem(18)};
          font-weight: 400;
          line-height: normal;
          position: relative;

          img {
            position: absolute;
            left: -${rem(21.53)};
            top: 50%;
            transform: translateY(-50%);
          }
        }

        &:hover {
          background-color: #f4f5fa;
          border-radius: ${rem(8)};

          button {
            color: #077453;
          }
        }
      }
    }
  }

  @keyframes showMenu {
    from {
      opacity: 0;
      transform: translateY(15%) translateX(0%);
      visibility: hidden;
    }
    to {
      opacity: 1;
      transform: translateY(0%) translateX(0%);
      display: flex;
      visibility: visible;
    }
  }

  @keyframes hideMenu {
    from {
      opacity: 1;
      transform: translateY(0%) translateX(0%);
      display: flex;
    }
    to {
      opacity: 0;
      transform: translateY(15%) translateX(0%);
      visibility: hidden;
    }
  }
`
