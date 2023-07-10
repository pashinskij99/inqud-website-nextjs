import styled from '@emotion/styled'

export const StyledCryptoWidget2Section = styled.section`
  background: var(--exciting-lime, #bfffc8);
  padding-top: 41rem;
  padding-bottom: 24rem;
  @media (max-width: 1200px) {
    padding: 12rem 0;
  }
  @media (max-width: 576px) {
    padding: 9.6rem 0;
    text-align: center;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: self-end;
    gap: 4rem;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      justify-items: auto;
      gap: 0;
    }
    .leftSide {
      .crypto2SubTitle {
        border-radius: 5rem;
        background: var(--clarity-white, #fff);
        color: var(--ambitious-green, #077453);
        line-height: 1;
        padding: 0.7rem 1.6rem;
        width: fit-content;
        margin-bottom: 2.4rem;
        @media (max-width: 1200px) {
          margin: 0 auto 2.4rem;
        }
        @media (max-width: 992px) {
          padding: 0.5rem 1.6rem;
        }
        @media (max-width: 576px) {
          margin: 0 auto 1.8rem;
        }
      }
      .crypto2Title {
        margin-bottom: 2.4rem;
        @media (max-width: 1200px) {
          text-align: center;
        }
        @media (max-width: 992px) {
          margin-bottom: 4rem;
        }
        @media (max-width: 576px) {
          margin-bottom: 2.2rem;
        }
      }
      .crypto2WidgetTablet {
        display: none;

        @media (max-width: 1200px) {
          display: block;
          max-width: 40rem;
          max-height: 40rem;
          object-fit: contain;
          margin: 0 auto 2.5rem;
        }

        @media (max-width: 576px) {
          /* max-width: 100%; */
          width: 233.001px;
          height: 233px;
        }
      }
      .crypto2Description {
        margin-bottom: 5.6rem;
        &.crypto2Description-desktop {

        }
        &.crypto2Description-mobile {
          display: none;
        }
        @media (max-width: 576px) {
          margin-bottom: 4rem;
          font-size: 24px;
          line-height: 34px;
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
        column-gap: 4.5rem;
        row-gap: 3.8rem;
        margin-bottom: 5.6rem;
        @media (max-width: 576px) {
          grid-template-columns: repeat(1, 1fr);
          gap: 1.6rem;
          text-align: start;
          width: fit-content;
          margin: 0 auto 4.8rem;
        }
        .crypto2GridItem {
          @media (max-width: 576px) {
            display: flex;
            align-items: center;
            gap: 1.2rem;
          }
          svg {
            display: none;
            @media (max-width: 576px) {
              display: block;
            }
          }
          .crypto2GridItemTitle {
            font-weight: 700;
            margin-bottom: 1.6rem;
            @media (max-width: 576px) {
              margin-bottom: 0rem;
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
        border-radius: 30px;
        background: var(--independent-grey, #517185);
        padding: 2.5rem 3.2rem;
        width: 100%;
        @media (max-width: 767px) {
          display: grid;
          grid-template-columns: 1fr;
          text-align: center;
          justify-items: center;
          padding: 3.4rem 2.4rem 3.1rem;
        }
        .crypto2FooterTitle {
          color: var(--exciting-lime, #bfffc8);
          font-weight: 700;
          line-height: 3rem;
          margin-right: auto;

          @media (max-width: 1200px) {
            order: 1;
          }
          @media (max-width: 767px) {
            margin: 1.6rem auto 1.7rem;
            font-size: 2.4rem;
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
          margin-right: 0.4rem;

          @media (max-width: 767px) {
            * {
              font-size: 2.4rem;
            }
          }
        }
        .crypto2FooterButtonCryptoCalendar {
          margin-right: 1.6rem;
          width: 4.8rem;
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
