import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledCryptoWidget2Section = styled.section`
  background: var(--exciting-lime, #bfffc8);
  padding-top: ${rem(410)};
  padding-bottom: ${rem(240)};
  ${responsive.xl`
    padding: ${rem(120)} 0;
  `};
  ${responsive.xs`
    padding: ${rem(96)} 0;
    text-align: center;
  `};

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: self-end;
    gap: ${rem(40)};
    @media (max-width: 1536px) and (min-width: 1280px) {
      grid-template-columns: 1.5fr 1fr;
    }

    ${responsive.xxl`
      gap: ${rem(60)};
    `};

    ${responsive.xl`
      grid-template-columns: 1fr;
      justify-items: auto;
      gap: 0;
    `};

    .leftSide {
      .crypto2SubTitle {
        border-radius: ${rem(50)};
        background: var(--clarity-white, #fff);
        color: var(--ambitious-green, #077453);
        line-height: 1;
        padding: ${rem(7)} ${rem(16)};
        width: fit-content;
        margin-bottom: ${rem(24)};
        ${responsive.xl`
          margin: 0 auto ${rem(24)};
          padding: ${rem(5)} ${rem(16)};
        `};
        ${responsive.xs`
          margin: 0 auto ${rem(18)};
        `};
      }

      .crypto2Title {
        margin-bottom: ${rem(24)};
        ${responsive.xl`
          text-align: center;
          margin-bottom: ${rem(40)};
        `};
        ${responsive.xs`
          margin-bottom: ${rem(22)};
        `};
      }

      .crypto2WidgetTablet {
        display: none;
        ${responsive.xl`
          display: block;
          max-width: ${rem(400)};
          max-height: ${rem(400)};
          object-fit: contain;
          margin: 0 auto ${rem(25)};
        `};
        ${responsive.xs`
          width: ${rem(233.001)};
          height: ${rem(233)};
        `};
      }

      .crypto2Description {
        margin-bottom: ${rem(56)};

        &.crypto2Description-desktop {
        }

        &.crypto2Description-mobile {
          display: none;
        }

        ${responsive.xs`
          margin-bottom: ${rem(40)};
          font-size: ${rem(24)};
          line-height: ${rem(34)};
          &.crypto2Description-desktop {
            display: none;
          }

          &.crypto2Description-mobile {
            display: block;
          }
        `};
      }

      .crypto2Grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: ${rem(45)};
        row-gap: ${rem(38)};
        margin-bottom: ${rem(56)};
        ${responsive.xs`
          grid-template-columns: repeat(1, 1fr);
          gap: ${rem(16)};
          text-align: start;
          width: fit-content;
          margin: 0 auto ${rem(48)};
        `};

        .crypto2GridItem {
          ${responsive.xs`
            display: flex;
            align-items: center;
            gap: ${rem(12)};
          `};

          .check {
            display: none;
            ${responsive.xs`
              display: block;
            `};
          }

          .icon {
            width: ${rem(48)};
            height: ${rem(48.002)};
            margin-bottom: ${rem(8)};
            ${responsive.xs`
              display: none;
            `};
          }

          .crypto2GridItemTitle {
            font-weight: 700;
            margin-bottom: ${rem(16)};
            ${responsive.xs`
              margin-bottom: 0;
              font-weight: 500;
            `};
          }

          .crypto2GridItemDescription {
            font-weight: 500;
            ${responsive.xs`
              display: none;
            `};
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
        ${responsive.sm`
          display: grid;
          grid-template-columns: 1fr;
          text-align: center;
          justify-items: center;
          padding: ${rem(34)} ${rem(24)} ${rem(31)};
        `};

        .crypto2FooterTitle {
          color: var(--exciting-lime, #bfffc8);
          font-weight: 700;
          line-height: ${rem(30)};
          margin-right: auto;
          ${responsive.xl`
            order: 1;
          `};
          ${responsive.sm`
            margin: ${rem(16)} auto ${rem(17)};
            font-size: ${rem(24)};
            order: 2;
            br {
              display: none;
            }
          `};
        }

        .crypto2FooterButtons {
          display: flex;
          align-items: center;
          order: 1;
        }

        .crypto2FooterButtonCrypto {
          white-space: nowrap;
          margin-right: ${rem(4)};

          ${responsive.sm`
            * {
              font-size: ${rem(24)};
            }
          `};
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
          ${responsive.xs`
            width: 100%;
          `};
        }
      }
    }

    .rightSide {
      svg {
        width: ${rem(500)};
        height: ${rem(500)};
      }

      ${responsive.xl`
        display: none;
      `};
    }
  }
`
