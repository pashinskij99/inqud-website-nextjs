import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledCryptoWidget2Section = styled.section`
  background: var(--exciting-lime, #bfffc8);
  padding-top: ${rem(410)};
  padding-bottom: ${rem(240)};
  ${responsive.xxl`
    padding-top: ${rem(413)};
  `};
  ${responsive.xl`
    padding: ${rem(120)} 0;
  `};
  ${responsive.sm`
    padding: ${rem(96)} 0;
    text-align: center;
    order: 7;
  `};

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: self-end;
    gap: ${rem(40)};
    @media (max-width: 1536px) and (min-width: 1279px) {
      grid-template-columns: 1.07fr 1fr;
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
        ${responsive.xxl`
          margin-bottom: ${rem(20)};
        `};
        ${responsive.xl`
          margin: 0 auto ${rem(24)};
          padding: ${rem(5)} ${rem(16)};
        `};
        ${responsive.sm`
          margin: 0 auto ${rem(18)};
        `};
      }

      .crypto2Title {
        margin-bottom: ${rem(24)};
        ${responsive.xxl`
          margin-bottom: ${rem(26)};
        `};
        ${responsive.xl`
          text-align: center;
          margin-bottom: ${rem(40)};
        `};
        ${responsive.sm`
          margin-bottom: ${rem(22)};
          letter-spacing: 0.4px;
        `};
      }

      .crypto2WidgetTablet {
        display: none;

        ${responsive.xl`
          display: block;
          max-width: ${rem(400)};
          max-height: ${rem(400)};
          object-fit: contain;
          margin: 0 auto ${rem(39)};
        `};
        ${responsive.sm`
          width: ${rem(400)};
          height: ${rem(400)};
        `};
        ${responsive.xs`
          width: ${rem(233.001)};
          height: ${rem(233)};
          margin: 0 auto ${rem(25)};
        `};
      }

      .crypto2Description {
        margin-bottom: ${rem(56)};
        ${responsive.xxl`
          font-size: ${rem(18)};
          font-weight: 500;
          line-height: ${rem(26)};
          margin-bottom: ${rem(56)};
        `}
        ${responsive.xl`
          font-size: 24px;
          font-weight: 400;
          line-height: 34px;
          letter-spacing: 0em;
          margin-bottom: ${rem(56)};
        `}
        &.crypto2Description-desktop {
        }

        &.crypto2Description-mobile {
          display: none;
        }

        ${responsive.sm`
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
        ${responsive.xxl`
          column-gap: ${rem(22)};
          row-gap: ${rem(40)};
        `}
        ${responsive.xl`
          grid-template-columns: repeat(2, 0.48fr);
          column-gap: ${rem(46)};
        `};
        ${responsive.sm`
          grid-template-columns: repeat(1, 1fr);
          gap: ${rem(16)};
          text-align: start;
          width: fit-content;
          margin: 0 auto ${rem(48)};
        `};

        .crypto2GridItem {
          ${responsive.sm`
            display: flex;
            align-items: center;
            gap: ${rem(12)};
            &:nth-child(1) {
              order: 1;
            }
            &:nth-child(2) {
              order: 4;
            }
            &:nth-child(3) {
              order: 2;
            }
            &:nth-child(4) {
              order: 3;
            }
          `};

          .check {
            display: none;
            ${responsive.sm`
              display: block;
            `};
          }

          .icon {
            width: ${rem(48)};
            height: ${rem(48.002)};
            margin-bottom: ${rem(8)};
            ${responsive.xxl`
              margin-bottom: ${rem(4)};
            `}
            ${responsive.sm`
              display: none;
            `};
          }

          .crypto2GridItemTitle {
            font-weight: 700;
            margin-bottom: ${rem(16)};
            ${responsive.xxl`
              margin-bottom: ${rem(7)};
            `}
            ${responsive.sm`
              margin-bottom: 0;
              font-weight: 500;
            `};
          }

          .crypto2GridItemDescription {
            font-weight: 500;
            ${responsive.sm`
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
        ${responsive.xxl`
          padding: ${rem(27)} ${rem(24)};
        `};
        ${responsive.xl`
          padding: ${rem(27)} ${rem(32)};
        `};
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
          ${responsive.xxl`
            // br {
            //   display: none;
            // }
          `};
          ${responsive.xl`
            order: 1;
            br {
              display: block;
            }
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
          ${responsive.xxl`
            margin-left: auto;
          `};
          ${responsive.sm`
            margin-left: 0;
          `};
        }

        .crypto2FooterButtonCrypto {
          white-space: nowrap;
          margin-right: ${rem(4)};
          height: ${rem(48)};

          ${responsive.xxl`
            padding: 0 16px;
          `};
          ${responsive.xl`
            padding: 0 ${rem(24)};
          `};

          ${responsive.sm`
            * {
              font-size: ${rem(24)};
            }
          `};
        }

        .crypto2FooterButtonCryptoCalendar {
          margin-right: ${rem(16)};
          width: ${rem(48)};
          height: ${rem(48)};
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          flex-shrink: 0;

          ${responsive.sm`
            margin-right: 0;
          `}

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
          ${responsive.sm`
            height: ${rem(48)};
            width: 100%;
          `};
        }
      }
    }

    .rightSide {
      @media (max-width: 1536px) and (min-width: 1279px) {
        display: flex;
        width: 100%;
        justify-content: start;
      }
      svg {
        width: ${rem(500)};
        height: ${rem(500)};
        @media (max-width: 1536px) and (min-width: 1279px) {
          transform: translate(10px, -3px);
        }
      }

      ${responsive.xl`
        display: none;
      `};
    }
  }
`
