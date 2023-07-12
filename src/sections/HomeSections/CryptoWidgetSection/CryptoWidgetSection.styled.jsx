import styled from '@emotion/styled'
import {IBM} from '@/utils/font'
import {rem} from '@/utils/rem';

export const StyledCryptoWidgetSection = styled.section`
  background: var(--ambitious-green, #077453);
  padding-top: ${rem(237)};
  padding-bottom: ${rem(236)};
  overflow-x: hidden;
  @media (max-width: 1200px) {
    padding: ${rem(120)} 0;
  }

  @media (max-width: 576px) {
    padding: ${rem(96)} 0;
    overflow: hidden;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: ${rem(60)};
    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
    @media (max-width: 576px) {
      text-align: center;
    }

    .cryptoSubTitle {
      border-radius: ${rem(50)};
      background: var(--exciting-lime, #bfffc8);
      color: #077453;
      margin-bottom: ${rem(23)};
      line-height: 1;
      padding: ${rem(7)} ${rem(16)};
      width: fit-content;

      &.cryptoSubTitle-desktop {
      }

      &.cryptoSubTitle-mobile {
        display: none;
      }

      @media (max-width: 1200px) {
        margin: 0 auto ${rem(24)};
      }
      @media (max-width: 992px) {
        padding: ${rem(5)} ${rem(16)};
      }
      @media (max-width: 576px) {
        margin: 0 auto ${rem(16)};
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
      margin-bottom: ${rem(24)};
      @media (max-width: 1200px) {
        text-align: center;
      }
    }

    .cryptoWidgetMobileWrapper {
      display: none;
      @media (max-width: 1200px) {
        display: flex;
        justify-content: center;
        margin-bottom: ${rem(24)};
        .cryptoWidgetMobileSmaller {
          display: none;
        }

        .cryptoWidgetMobile {
          display: block;
        }
      }
      @media (max-width: 576px) {
        margin-bottom: ${rem(24.47)};
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
      margin-bottom: ${rem(56)};
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
        margin-bottom: ${rem(40)};
        font-size: ${rem(24)};
        line-height: ${rem(34)};
      }
    }

    .cryptoGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: ${rem(50)};
      row-gap: ${rem(40)};
      margin-bottom: ${rem(56)};
      @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        text-align: start;
        width: fit-content;
        margin: 0 auto ${rem(48)};
        gap: ${rem(16)};
      }

      .cryptoGridItem {
        position: relative;
        @media (max-width: 576px) {
          display: flex;
          align-items: center;
          gap: ${rem(12)};
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
            border-radius: ${rem(20)};
            outline: 2px dotted var(--exciting-lime, #bfffc8);
            opacity: 0.4000000059604645;
            padding: ${rem(14)} ${rem(12)} ${rem(16)} ${rem(20)};
            @media (max-width: 576px) {
              display: none;
            }
          }

          &::before {
            content: attr(data-slug);
            position: absolute;
            top: -${rem(16)};
            right: 0;

            ${IBM.style}

            font-size: ${rem(18)};
            font-weight: 400;
            line-height: ${rem(8.673)};
            letter-spacing: ${rem(1.8)};
            text-transform: uppercase;

            transform: translateY(-50%);

            color: var(--ambitious-green, #077453);
            height: ${rem(25)};
            padding: 0 ${rem(10)};

            border-radius: ${rem(30)};
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
          margin-bottom: ${rem(16)};
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
      gap: ${rem(16)};
      display: flex;
      align-items: center;
      @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        gap: ${rem(8)};
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
