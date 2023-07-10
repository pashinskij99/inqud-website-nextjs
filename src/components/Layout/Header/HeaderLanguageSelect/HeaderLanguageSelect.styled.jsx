import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const StyledHeaderLanguageSelectWrapper = styled(Box)`
  position: relative;
  width: 4rem;
  cursor: pointer;
  .button-select {
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) translateX(100%);
      display: flex;
      align-items: center;
      right: -0.7rem;
      gap: 0.8rem;
      font-size: 1.8rem;
      font-weight: 700;
      color: rgba(45, 52, 57, 1);
      @media (max-width: 992px) {
        right: -0.5rem;
      }
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
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-25%);
    display: none;
    .trigger {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      z-index: 0;
      display: none;
    }



    &.show {
      display: block;
      z-index: 11111;

      .trigger {
        display: block;
      }
    }

    ul {
      padding: 1rem 0.8rem 1rem 0.8rem;
      border-radius: 1.6rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 0rem;
      background-color: white;
      margin-top: 85px;
      position: relative;

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
        z-index: -1;
      }

      &.show {
        animation: showMenu 0.3s ease-in-out forwards;
      }
      &.hide {
        animation: hideMenu 0.3s ease-in-out forwards;
      }

      li {
        padding: 0.8rem 2rem 0.8rem 2.8rem;
        white-space: nowrap;
        button {
          color: var(--directness-black, #2d3439);
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
          position: relative;
          svg {
            position: absolute;
            left: -2.153rem;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        &:hover {
          background-color: #f4f5fa;
          border-radius: 8px;
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
