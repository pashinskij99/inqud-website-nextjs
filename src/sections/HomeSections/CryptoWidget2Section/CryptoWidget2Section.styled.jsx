'use client'

import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledCryptoWidget2Section = styled.section`
  background: var(--exciting-lime, #bfffc8);
  padding-top: 372px;
  padding-bottom: 202px;
  ${responsive.xxl`
    padding-top: 372px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 40px;

    ${responsive.xl`
      grid-template-columns: 1fr;
      justify-items: auto;
      gap: 0;
    `};

    .leftSide {
      max-width: 680px;
      width: 100%;

      ${responsive.xxl`
        max-width: 595px;
      `}
      ${responsive.xl`
        max-width: 100%;
      `}
      .content:nth-of-type(2) {
        display: block;
        margin: 0 auto;
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        img {
          right: 0;
        }
      }
      .crypto2SubTitle {
        font-size: 18px;
        border-radius: ${rem(50)};
        background: var(--clarity-white, #fff);
        color: var(--ambitious-green, #077453);
        line-height: 1;
        padding: ${rem(7)} ${rem(16)};
        width: fit-content;
        margin-bottom: 10px;

        ${responsive.xl`
          margin: 0 auto 15px;
          padding: ${rem(5)} ${rem(16)};
        `};
        ${responsive.sm`
          margin: 0 auto ${rem(18)};
        `};
      }

      .crypto2Title {
        margin-bottom: 6px;

        ${responsive.xxl`
          margin-bottom: 12px;
        `};
        ${responsive.xl`
          text-align: center;
          margin-bottom: 38px;
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
          max-width: 300px;
          max-height: 300px;
          object-fit: contain;
          margin: 0 auto ${rem(39)};
        `};
        ${responsive.sm`
          width: ${rem(400)};
          height: ${rem(400)};
          margin: 0 auto 22px;
        `};
        ${responsive.xs`
          width: ${rem(233.001)};
          height: ${rem(233)};
        `};
      }

      .crypto2Description {
        line-height: 24px;
        margin-bottom: 40px;

        ${responsive.xxl`
          font-size: ${rem(18)};
          font-weight: 500;
        `}
        ${responsive.xl`
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0em;
        `}

        ${responsive.sm`
          margin-bottom: 34px;
          font-size: ${rem(24)};
          line-height: 32px;
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
        row-gap: 23px;
        margin-bottom: 39px;
        ${responsive.xxl`
          column-gap: ${rem(22)};
        `}
        ${responsive.xl`
          grid-template-columns: repeat(2, 332px);
          column-gap: 23px;
          row-gap: 40px;
        `};
        ${responsive.sm`
          grid-template-columns: repeat(1, 1fr);
          gap: 6px;
          text-align: start;
          width: fit-content;
          margin: 0 auto 43px;
        `};

        .crypto2GridItem {
          ${responsive.xl`
            row-gap: 8px;
            display: grid;
            grid-template-columns: auto 268px;

            &:nth-of-type(4) {
              row-gap: 16px;
            }
            &:nth-of-type(3) {
              row-gap: 16px;
            }
          `}
          ${responsive.sm`
            display: flex;
            align-items: center;
            gap: ${rem(12)};
            &:nth-of-type(1) {
              order: 1;
            }
            &:nth-of-type(2) {
              order: 4;
            }
            &:nth-of-type(3) {
              order: 2;
            }
            &:nth-of-type(4) {
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
            margin-bottom: 2px;
            ${responsive.xxl`
              margin-bottom: ${rem(4)};
            `}
            ${responsive.xl`
              margin-bottom: 0;
            `}
            ${responsive.sm`
              display: none;
            `};
          }

          .crypto2GridItemTitle {
            font-weight: 700;
            margin-bottom: 8px;
            ${responsive.xxl`
              margin-bottom: ${rem(7)};
            `}
            ${responsive.xl`
              grid-column-start: 2;
              grid-column-end: 2;
              width: 100%;
              height: 48px;
              line-height: 1;
              display: flex;
              align-items: center;
              line-height: 32px;
              margin-bottom: 0;
            `}
            ${responsive.sm`
              height: auto;
              margin-bottom: 0;
              font-weight: 500;
            `};
          }

          .crypto2GridItemDescription {
            font-weight: 500;
            ${responsive.xl`
              grid-column-start: 1;
              grid-column-end: 3;
              line-height: 24px;
            `}
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
        min-width: max-content;
        position: relative;
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
          min-width: 100%;
          justify-items: center;
          padding: ${rem(34)} ${rem(24)} ${rem(31)};
        `};

        .crypto2FooterTitle {
          color: var(--exciting-lime, #bfffc8);
          font-weight: 700;
          line-height: ${rem(30)};
          margin-right: auto;
          max-width: 198px;
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
            max-width: 100%;
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
          &:hover {
            background-color: transparent;
            p {
              color: #bfffc8;
            }
          }
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
            background-color: transparent;
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
      display: flex;
      justify-content: center;
      flex: 1;

      .graphic {
        width: 500px;
        height: 500px;
      }

      ${responsive.xl`
        display: none;
      `};
    }
  }
`
