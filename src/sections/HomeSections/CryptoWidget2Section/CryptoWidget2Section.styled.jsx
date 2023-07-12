import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledCryptoWidget2Section = styled.section`
  background: var(--exciting-lime, #bfffc8);
  padding-top: ${rem(410)};
  padding-bottom: ${rem(240)};
  @media (max-width: 1200px) {
    padding: ${rem(120)} 0;
  }
  @media (max-width: 576px) {
    padding: ${rem(96)} 0;
    text-align: center;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: self-end;
    gap: ${rem(40)};
    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      justify-items: auto;
      gap: 0;
    }

    .leftSide {
      .crypto2SubTitle {
        border-radius: ${rem(50)};
        background: var(--clarity-white, #fff);
        color: var(--ambitious-green, #077453);
        line-height: 1;
        padding: ${rem(7)} ${rem(16)};
        width: fit-content;
        margin-bottom: ${rem(24)};
        @media (max-width: 1200px) {
          margin: 0 auto ${rem(24)};
        }
        @media (max-width: 992px) {
          padding: ${rem(5)} ${rem(16)};
        }
        @media (max-width: 576px) {
          margin: 0 auto ${rem(18)};
        }
      }

      .crypto2Title {
        margin-bottom: ${rem(24)};
        @media (max-width: 1200px) {
          text-align: center;
        }
        @media (max-width: 992px) {
          margin-bottom: ${rem(40)};
        }
        @media (max-width: 576px) {
          margin-bottom: ${rem(22)};
        }
      }

      .crypto2WidgetTablet {
        display: none;

        @media (max-width: 1200px) {
          display: block;
          max-width: ${rem(400)};
          max-height: ${rem(400)};
          object-fit: contain;
          margin: 0 auto ${rem(25)};
        }

        @media (max-width: 576px) {
          /* max-width: 100%; */
          width: ${rem(233.001)};
          height: ${rem(233)};
        }
      }

      .crypto2Description {
        margin-bottom: ${rem(56)};

        &.crypto2Description-desktop {

        }

        &.crypto2Description-mobile {
          display: none;
        }

        @media (max-width: 576px) {
          margin-bottom: ${rem(40)};
          font-size: ${rem(24)};
          line-height: ${rem(34)};
          &.crypto2Description-desktop {
            display: none;
          }

          &.crypto2Description-mobile {
            display: block;
          }
        }
      }

      .crypto2Grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: ${rem(45)};
        row-gap: ${rem(38)};
        margin-bottom: ${rem(56)};
        @media (max-width: 576px) {
          grid-template-columns: repeat(1, 1fr);
          gap: ${rem(16)};
          text-align: start;
          width: fit-content;
          margin: 0 auto ${rem(48)};
        }

        .crypto2GridItem {
          @media (max-width: 576px) {
            display: flex;
            align-items: center;
            gap: ${rem(12)};
          }

          svg {
            display: none;
            @media (max-width: 576px) {
              display: block;
            }
          }

          .crypto2GridItemTitle {
            font-weight: 700;
            margin-bottom: ${rem(16)};
            @media (max-width: 576px) {
              margin-bottom: 0;
              font-weight: 500;
            }
          }

          .crypto2GridItemDescription {
            font-weight: 500;
            @media (max-width: 576px) {
              display: none;
            }
          }
        }
      }

      .crypto2Footer {
        display: flex;
        align-items: center;
        border-radius: ${rem(30)};
        background: var(--independent-grey, #517185);
        padding: ${rem(25)} ${rem(32)};
        width: 100%;
        @media (max-width: 767px) {
          display: grid;
          grid-template-columns: 1fr;
          text-align: center;
          justify-items: center;
          padding: ${rem(34)} ${rem(24)} ${rem(31)};
        }

        .crypto2FooterTitle {
          color: var(--exciting-lime, #bfffc8);
          font-weight: 700;
          line-height: ${rem(30)};
          margin-right: auto;

          @media (max-width: 1200px) {
            order: 1;
          }
          @media (max-width: 767px) {
            margin: ${rem(16)} auto ${rem(17)};
            font-size: ${rem(24)};
            order: 2;
            br {
              display: none;
            }
          }
        }

        .crypto2FooterButtons {
          display: flex;
          align-items: center;
          order: 1;

        }

        .crypto2FooterButtonCrypto {
          white-space: nowrap;
          margin-right: ${rem(4)};

          @media (max-width: 767px) {
            * {
              font-size: ${rem(24)};
            }
          }
        }

        .crypto2FooterButtonCryptoCalendar {
          margin-right: ${rem(16)};
          width: ${rem(48)};
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          flex-shrink: 0;

          &:hover {
            path,
            rect {
              fill: #077453;
            }

            path {
              &:first-of-type {
                fill: #bfffc8;
              }
            }
          }
        }

        .crypto2FooterApplyButton {
          order: 3;
          white-space: nowrap;
          @media (max-width: 576px) {
            width: 100%;
          }
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
