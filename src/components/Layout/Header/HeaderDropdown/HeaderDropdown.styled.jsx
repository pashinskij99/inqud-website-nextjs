import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const StyledHeaderDropdownWrapper = styled(Box)`
  position: relative;
  .dropdown-button {
    color: var(--directness-black, #2d3439);
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    transition: all 0.3s ease-in-out;
    padding: 1rem;
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
      height: 200px;
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
    margin-top: 50px;
    left: 50%;
    max-width: auto;
    padding: 2.4rem 3.2rem;
    border-radius: 16px;
    background: #fff;
    display: flex;
    gap: 3.2rem;

    &.show {
      animation: showMenu 0.3s ease-in-out forwards;
    }
    &.hide {
      animation: hideMenu 0.3s ease-in-out forwards;
    }

    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      background-color: red;
      width: 24px;
      height: 24px;
      transform: translateX(-50%) rotate(-45deg);
      border-radius: 4px;
      background: #FFF;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0rem;
      align-items: flex-start;

      color: var(--directness-black, #2d3439);
      font-size: 18px;
      font-weight: 400;
      line-height: normal;
      li {
        white-space: nowrap;
        width: 100%;
        padding: .5rem .8rem;
        border-radius: 0.8rem;
        &:not(:first-child) {
          &:hover {
            background-color: rgba(244, 245, 250, 1);
          }
        }

        &:first-child {
          color: var(--independent-grey, #517185);
          font-size: 14px;
          font-weight: 700;
          line-height: 18px;
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
