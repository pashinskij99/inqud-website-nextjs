import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const StyledHeaderWrapper = styled(Box)`
  padding: 23px 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  @media (max-width: 767px) {
    padding: 0.8rem 16px;
    height: 5rem;
  }
  .logoSection {
    display: flex;
    align-items: center;
    gap: 4.7rem;
    @media (max-width: 767px) {
      gap: 1.6rem;

      .logo {
        display: none;
      }
    }
    .logo-mobile {
      display: none;
      @media (max-width: 767px) {
        display: block;
      }
    }

    .tabs {
      @media (max-width: 767px) {
        display: none;
      }
      display: flex;
      align-items: center;
      gap: 1.6rem;
      .secondaryButton {
        padding: 0 14px;
        height: 4rem;
        border-radius: 7.2rem;
        outline: 1px solid transparent;
        background: var(--clarity-white, #fff);

        transition: 0.3s ease-in-out;

        p {
          color: var(--independent-grey, #517185);
          font-weight: 400;
        }
      }

      .activeButton {
        height: 4rem;
      }
    }

    .mobile-tabs {
      display: none;
      @media (max-width: 767px) {
        display: ${(props) => (props.active ? 'none' : 'block')};
      }
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
      gap: 4rem;
      color: var(--directness-black, #2d3439);

      font-size: 18px;
      font-weight: 700;
      line-height: normal;

      li {
        z-index: 1;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #077453;
        }
      }
    }

    @media (max-width: 1400px) {
      display: none;
    }
  }

  .languageMenu {
    @media (max-width: 576px) {
      display: ${(props) => (props.active ? 'block' : 'none')};
    }
  }

  .userSection {
    display: flex;
    align-items: center;
    gap: 9.6rem;
    @media (max-width: 767px) {
      gap: 7.5rem;
    }

    .hamburger {
      display: none;
      width: 5rem;
      height: 5rem;
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

      border-radius: 12.5px;
      background: rgba(129, 158, 176, 0.20000000298023224);

      & {
      }

      & span {
        pointer-events: none;
        display: block;
        position: absolute;
        height: 0.313rem;
        width: 15px;
        border-radius: 1.5625rem;
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

        @media (max-width: 767px) {
          width: 10px;
        }
      }

      & span:nth-child(even) {
        left: 25px;
        border-radius: 0 9px 9px 0;
        @media (max-width: 767px) {
          left: 15px;
        }
      }

      & span:nth-child(odd) {
        left: 10px;
        border-radius: 9px 0 0 9px;
        @media (max-width: 767px) {
          left: 7px;
        }
      }

      & span:nth-child(1),
      & span:nth-child(2) {
        top: 1.563rem;

        @media (max-width: 767px) {
          top: 1rem;
        }
      }

      & span:nth-child(3),
      & span:nth-child(4) {
        top: 2.344rem;
        @media (max-width: 767px) {
          top: 1.5rem;
        }
      }

      & span:nth-child(5),
      & span:nth-child(6) {
        top: 3.125rem;
        @media (max-width: 767px) {
          top: 2rem;
        }
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
        left: 13px;
        top: 18px;

        @media (max-width: 767px) {
          left: 8px;
          top: 11px;
        }
      }

      &.open span:nth-child(2) {
        left: calc(50% - 2px);
        top: 18px;
        @media (max-width: 767px) {
          left: calc(50% - 1px);
          top: 11px;
        }
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
        left: 13px;
        top: 28px;
        @media (max-width: 767px) {
          left: 8px;
          top: 18px;
        }
      }

      &.open span:nth-child(6) {
        left: calc(50% - 2px);
        top: 28px;

        @media (max-width: 767px) {
          left: calc(50% - 1px);
          top: 18px;
        }
      }
      @media (max-width: 1400px) {
        display: block;
      }

      @media (max-width: 767px) {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 0.8rem;
      }
    }

    .sign {
      display: flex;
      align-items: center;
      gap: 16px;
      @media (max-width: 1400px) {
        display: none;
      }
      .signIn {
        height: 4rem;
      }
      .signUp {
        height: 4rem;
      }
    }
  }
`
