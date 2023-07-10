import styled from '@emotion/styled'
import { IBM } from '@/utils/font'

export const StyledCryptoWidgetSection = styled.section`
  background: var(--ambitious-green, #077453);
  padding-top: 23.7rem;
  padding-bottom: 23.6rem;
  overflow-x: hidden;
  @media (max-width: 1200px) {
    padding: 12rem 0;
  }

  @media (max-width: 576px) {
    padding: 9.6rem 0;
    overflow: hidden;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 6rem;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
    @media (max-width: 576px) {
      text-align: center;
    }
    .cryptoSubTitle {
      border-radius: 5rem;
      background: var(--exciting-lime, #bfffc8);
      color: #077453;
      margin-bottom: 2.3rem;
      line-height: 1;
      padding: 0.7rem 1.6rem;
      width: fit-content;
      &.cryptoSubTitle-desktop {}
      &.cryptoSubTitle-mobile {
        display: none;
      }
      @media (max-width: 1200px) {
        margin: 0 auto 2.4rem;
      }
      @media (max-width: 992px) {
        padding: 0.5rem 1.6rem;
      }
      @media (max-width: 576px) {
        margin: 0 auto 1.6rem;
        &.cryptoSubTitle-desktop {
          display: none;
        }
        &.cryptoSubTitle-mobile {
          display: block;
          width: 100%;
        }
      }
    }
    .cryptoTitle {
      color: #ffffff;
      margin-bottom: 2.4rem;
      @media (max-width: 1200px) {
        text-align: center;
      }
    }

    .cryptoWidgetMobileWrapper {
      display: none;
      @media (max-width: 1200px) {
        display: flex;
        justify-content: center;
        margin-bottom: 2.4rem;
        .cryptoWidgetMobileSmaller {
          display: none;
        }
        .cryptoWidgetMobile {
          display: block;
        }
      }
      @media (max-width: 576px) {
        margin-bottom: 2.447rem;
        .cryptoWidgetMobileSmaller {
          display: block;
          width: 100%;
        }
        .cryptoWidgetMobile {
          display: none;
        }
      }
    }

    .cryptoDescription {
      color: #ffffff;
      margin-bottom: 5.6rem;
      @media (max-width: 992px) {
        br {
          display: none;
        }
      }
      @media (max-width: 576px) {
        display: none;
      }
    }
    .cryptoDescriptionMobile {
      display: none;
      @media (max-width: 576px) {
        display: block;
        color: #ffffff;
        margin-bottom: 4rem;
        font-size: 2.4rem;
        line-height: 34px;
      }
    }
    .cryptoGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 5rem;
      row-gap: 4rem;
      margin-bottom: 5.6rem;
      @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        text-align: start;
        width: fit-content;
        margin: 0 auto 4.8rem;
        gap: 1.6rem;
      }
      .cryptoGridItem {
        position: relative;
        @media (max-width: 576px) {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        &:last-child {
          .cryptoGridItemTitle,
          .cryptoGridItemDescription {
            opacity: 0.6000000238418579;
          }
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-52%);
            right: 0;
            bottom: 0;
            margin: auto;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            outline: 0.2rem dotted var(--exciting-lime, #bfffc8);
            opacity: 0.4000000059604645;
            padding: 1.4rem 1.2rem 1.6rem 2rem;
            @media (max-width: 576px) {
              display: none;
            }
          }
          &::before {
            content: attr(data-slug);
            position: absolute;
            top: -1.6rem;
            right: 0;

            ${IBM.style}

            font-size: 18px;
            font-weight: 400;
            line-height: 8.673px;
            letter-spacing: 1.8px;
            text-transform: uppercase;

            transform: translateY(-50%);

            color: var(--ambitious-green, #077453);
            height: 2.5rem;
            padding: 0 1rem;

            border-radius: 30px;
            background: var(--exciting-lime, #bfffc8);
            display: flex;
            align-items: center;
            z-index: 1;
            @media (max-width: 576px) {
              display: none;
            }
          }
        }

        .loading {
          display: none;
        }
        .check {
          display: none;
          @media (max-width: 576px) {
            display: block;
          }
        }
        &:last-child {
          @media (max-width: 576px) {
            .loading {
              display: block;
            }
            .check {
              display: none;
            }
          }
        }

        .cryptoGridItemTitle {
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 1.6rem;
          @media (max-width: 576px) {
            font-weight: 500;
            margin: 0;
          }
        }
        .cryptoGridItemDescription {
          font-weight: 500;
          color: #ffffff;
          @media (max-width: 576px) {
            display: none;
          }
        }
      }
    }
    .cryptoButtonWrapper {
      gap: 1.6rem;
      display: flex;
      align-items: center;
      @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      .cryptoButtonGetStarted {
        @media (max-width: 576px) {
          width: 100%;
        }
      }
      .cryptoButtonGhost {
        border: 1px solid var(--exciting-lime-20, rgba(191, 255, 200, 0.2));
        color: #bfffc8;

        &:hover {
          background-color: #bfffc8;
          color: #077453;
        }

        @media (max-width: 576px) {
          width: 100%;
        }
      }
    }

    .rightSide {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
`
