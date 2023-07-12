import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledHeaderDropdownWrapper = styled.div`
  position: relative;

  .dropdown-button {
    color: var(--directness-black, #2d3439);
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: normal;
    display: flex;
    gap: ${rem(8)};
    align-items: center;
    transition: all 0.3s ease-in-out;
    padding: ${rem(10)};

    svg {
      transition: all 0.3s ease-in-out;
    }

    &.active {
      color: #077453;

      svg {
        transform: rotateZ(180deg);

        path {
          fill: #077453;
        }
      }
    }
  }

  .dropdown-menu-wrapper {
    position: absolute;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    display: none;

    .trigger {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: ${rem(200)};
      z-index: 0;
      display: none;
    }

    &.show {
      display: block;

      .trigger {
        display: block;
      }
    }
  }

  .dropdown-menu {
    margin-top: ${rem(50)};
    left: 50%;
    padding: ${rem(24)} ${rem(32)};
    border-radius: ${rem(16)};
    background: #fff;
    display: flex;
    gap: ${rem(32)};

    &.show {
      animation: showMenu 0.3s ease-in-out forwards;
    }

    &.hide {
      animation: hideMenu 0.3s ease-in-out forwards;
    }

    &::before {
      content: "";
      position: absolute;
      top: -${rem(10)};
      left: 50%;
      width: ${rem(24)};
      height: ${rem(24)};
      transform: translateX(-50%) rotate(-45deg);
      border-radius: ${rem(4)};
      background: #FFF;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0rem;
      align-items: flex-start;

      color: var(--directness-black, #2d3439);
      font-size: ${rem(18)};
      font-weight: 400;
      line-height: normal;

      li {
        white-space: nowrap;
        width: 100%;
        padding: ${rem(5)} ${rem(8)};
        border-radius: ${rem(8)};

        &:not(:first-child) {
          &:hover {
            background-color: rgba(244, 245, 250, 1);
          }
        }

        &:first-child {
          color: var(--independent-grey, #517185);
          font-size: ${rem(14)};
          font-weight: 700;
          line-height: ${rem(18)};

          a {
            pointer-events: none;
            touch-action: none;
            cursor: text;
          }
        }

        a {
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
