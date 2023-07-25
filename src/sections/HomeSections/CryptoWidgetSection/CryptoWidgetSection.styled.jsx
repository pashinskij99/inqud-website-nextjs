import styled from '@emotion/styled'
import { IBM } from '@/utils/font'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledCryptoWidgetSection = styled.section`
  background: var(--ambitious-green, #077453);
  padding-top: ${rem(245)};
  padding-bottom: ${rem(236)};
  overflow-x: hidden;

  ${responsive.xxl`
    padding-top: ${rem(246)};
  `};

  ${responsive.xl`
    padding: ${rem(120)} 0;
  `};

  ${responsive.sm`
    padding: ${rem(96)} 0;
    overflow: hidden;
    order: 4;
  `};

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: ${rem(60)};
    @media (max-width: 1536px) and (min-width: 1279px) {
      grid-template-columns: 1fr 1fr;
      gap: 26px;
    }
    ${responsive.xl`
      padding-right: ${rem(50)};
      grid-template-columns: 1fr;
      gap: 0;
    `};
    ${responsive.sm`
      padding-right: ${rem(16)};
      text-align: center;
      padding: 0;
    `};

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

      ${responsive.xl`
        margin: 0 auto ${rem(24)};
        padding: ${rem(5)} ${rem(16)};
      `};
      ${responsive.sm`
        margin: 0 auto ${rem(18)};
        &.cryptoSubTitle-desktop {
          display: none;
        }

        &.cryptoSubTitle-mobile {
          display: block;
          width: fit-content;
        }
      `};
    }

    .cryptoTitle {
      color: #ffffff;
      margin-bottom: ${rem(24)};
      ${responsive.xl`
        text-align: center;
      `};
      ${responsive.sm`
        letter-spacing: 0.3px;
      `};
    }

    .cryptoWidgetMobileWrapper {
      display: none;
      ${responsive.xl`
        display: flex;
        justify-content: center;
        margin-bottom: ${rem(24)};
        .cryptoWidgetMobileSmaller {
          display: none;
        }

        .cryptoWidgetMobile {
          display: block;
        }
      `};
      ${responsive.sm`
        margin-bottom: ${rem(24.47)};
        .cryptoWidgetMobileSmaller {
          display: block;
          width: 100%;
        }

        .cryptoWidgetMobile {
          display: none;
        }
      `};
    }

    .cryptoDescription {
      color: #ffffff;
      margin-bottom: ${rem(56)};
      ${responsive.xxl`
        font-size: ${rem(18)};
        line-height: ${rem(26)};
        letter-spacing: 0.07px;
        br {
          display: none;
        }
      `};

      ${responsive.xl`
        font-size: 24px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
      `};

      ${responsive.sm`
        display: none;
      `};
    }

    .cryptoDescriptionMobile {
      display: none;
      ${responsive.sm`
        display: block;
        color: #ffffff;
        margin-bottom: ${rem(40)};
        font-size: ${rem(24)};
        line-height: ${rem(34)};
        padding: 0 ${rem(16)};
      `};
    }

    .cryptoGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: ${rem(50)};
      row-gap: ${rem(40)};
      margin-bottom: ${rem(56)};
      ${responsive.xxl`
        column-gap: ${rem(28)};
        row-gap: ${rem(42)};
        margin-bottom: ${rem(46)};
      `}
      ${responsive.xl`
        margin-bottom: ${rem(51)};
      `};

      ${responsive.sm`
        grid-template-columns: repeat(1, 1fr);
        text-align: start;
        width: fit-content;
        margin: 0 auto ${rem(48)};
        gap: ${rem(16)};
      `};

      .cryptoGridItem {
        position: relative;

        ${responsive.sm`
          display: flex;
          align-items: center;
          gap: ${rem(12)};

          &:nth-child(1) {
            order: 1;
          }
          &:nth-child(2) {
            order: 3;
          }
          &:nth-child(3) {
            order: 2;
          }
          &:nth-child(4) {
            order: 4;
          }
        `};

        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${rem(48)};
          height: ${rem(48)};

          border-radius: ${rem(16)};
          background: rgba(191, 255, 200, 0.20000000298023224);
          margin-bottom: ${rem(8)};
          ${responsive.xxl`
            margin-bottom: ${rem(7)};
          `};
          ${responsive.sm`
            display: none;
          `};
        }

        .icon1 {
          width: ${rem(24.0000057220459)};
          height: ${rem(24.0000057220459)};
        }
        .icon2 {
          width: ${rem(20.25)};
          height: ${rem(21)};
        }
        .icon3 {
          width: ${rem(24)};
          height: ${rem(24)};
        }
        .icon4 {
          width: ${rem(24)};
          height: ${rem(22.23)};
        }

        &:last-child {
          .cryptoGridItemTitle,
          .cryptoGridItemDescription,
          .icon4 {
            opacity: 0.6000000238418579;
          }

          &::before {
            content: attr(data-slug);
            position: absolute;
            top: 0;
            right: ${rem(12)};

            ${IBM.style}

            font-size: ${rem(18)};
            font-weight: 400;
            line-height: ${rem(8.673)};
            letter-spacing: ${rem(1.8)};
            text-transform: uppercase;

            color: var(--ambitious-green, #077453);
            height: ${rem(25)};
            padding: 0 ${rem(10)};

            border-radius: ${rem(30)};
            background: var(--exciting-lime, #bfffc8);
            display: flex;
            align-items: center;
            z-index: 1;
            ${responsive.xxl`
              margin-top: ${rem(10)};
              right: 0;
            `}

            ${responsive.sm`
              display: none;
            `};
          }

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            right: 0;
            bottom: 0;
            margin: auto;
            width: 100%;
            height: 100%;
            border-radius: ${rem(20)};
            outline: 2px dotted var(--exciting-lime, #bfffc8);
            opacity: 0.4000000059604645;
            padding: ${rem(14)} ${rem(12)} ${rem(16)} ${rem(20)};
            ${responsive.xxl`
              padding: ${rem(12)};
            `}
            ${responsive.xl`
              padding-right: ${rem(10)};
            `}
            ${responsive.sm`
              display: none;
            `};
          }
        }

        .loading {
          display: none;
        }

        .check {
          display: none;
          ${responsive.sm`
            display: block;
          `};
        }

        &:last-child {
          ${responsive.sm`
            .loading {
              display: block;
            }

            .check {
              display: none;
            }
          `};
        }

        .cryptoGridItemTitle {
          color: #ffffff;
          font-weight: 700;
          margin-bottom: ${rem(16)};
          ${responsive.xxl`
            margin-bottom: ${rem(8)};
          `}
          ${responsive.sm`
            font-weight: 500;
            margin: 0;
          `};
        }

        .cryptoGridItemDescription {
          font-weight: 500;
          color: #ffffff;
          ${responsive.xxl`
            br {
              display: none;
            }
          `};
          ${responsive.sm`
            display: none;
          `};
        }
      }
    }

    .cryptoButtonWrapper {
      gap: ${rem(16)};
      display: flex;
      align-items: center;
      ${responsive.sm`
        display: flex;
        flex-direction: column;
        gap: ${rem(8)};
        padding: 0 ${rem(16)};
      `};

      .cryptoButtonGetStarted {
        ${responsive.sm`
          width: 100%;
          padding-left: 0;
          height: ${rem(48)};
          svg {
            width: ${rem(40)};
            height: ${rem(40)};
          }
        `};
      }

      .cryptoButtonGhost {
        border: 1px solid var(--exciting-lime-20, rgba(191, 255, 200, 0.2));
        color: #bfffc8;

        &:hover {
          background-color: #bfffc8;
          color: #077453;
        }

        ${responsive.sm`
          width: 100%;
          height: ${rem(48)};
        `};
      }
    }

    .rightSide {
      svg {
        max-width: ${rem(500)};
        width: 100%;
        ${responsive.xxl`
          transform: translateY(53px) translateX(-1px);
        `}
        ${responsive.xl`
          transform: none;
        `};
      }

      ${responsive.xl`
        display: none;
      `};
    }
  }
`
