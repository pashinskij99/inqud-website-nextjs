import styled from '@emotion/styled'
import { IBM } from '@/utils/font'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledCryptoWidgetSection = styled.section`
  background: var(--ambitious-green, #077453);
  padding-top: ${rem(245)};
  padding-bottom: ${rem(236)};
  overflow-x: hidden;

  ${responsive.xl`
    padding: ${rem(120)} 0;
  `};

  ${responsive.xs`
    padding: ${rem(96)} 0;
    overflow: hidden;
  `};

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: ${rem(60)};
    @media (max-width: 1536px) and (min-width: 1279px) {
      grid-template-columns: 1.1fr 1fr;
    }
    ${responsive.xl`
      grid-template-columns: 1fr;
      gap: 0;
    `};
    ${responsive.xs`
      text-align: center;
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
      ${responsive.xs`
        margin: 0 auto ${rem(16)};
        &.cryptoSubTitle-desktop {
          display: none;
        }

        &.cryptoSubTitle-mobile {
          display: block;
          width: 100%;
        }
      `};
    }

    .cryptoTitle {
      color: #ffffff;
      margin-bottom: ${rem(24)};
      ${responsive.xl`
        text-align: center;
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
      ${responsive.xs`
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
        br {
          display: none;
        }
      `};

      ${responsive.xs`
        display: none;
      `};
    }

    .cryptoDescriptionMobile {
      display: none;
      ${responsive.xs`
        display: block;
        color: #ffffff;
        margin-bottom: ${rem(40)};
        font-size: ${rem(24)};
        line-height: ${rem(34)};
      `};
    }

    .cryptoGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: ${rem(50)};
      row-gap: ${rem(40)};
      margin-bottom: ${rem(56)};
      ${responsive.xxl`
        column-gap: ${rem(26)};
        row-gap: ${rem(44)};
        margin-bottom: ${rem(46)};
      `}

      ${responsive.xs`
        grid-template-columns: repeat(1, 1fr);
        text-align: start;
        width: fit-content;
        margin: 0 auto ${rem(48)};
        gap: ${rem(16)};
      `};

      .cryptoGridItem {
        position: relative;
        ${responsive.xs`
          display: flex;
          align-items: center;
          gap: ${rem(12)};
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
          ${responsive.xs`
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
            `}
            ${responsive.xs`
              display: none;
            `};
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
            ${responsive.xxl`
              padding: ${rem(12)};
            `}
            ${responsive.xs`
              display: none;
            `};
          }
        }

        .loading {
          display: none;
        }

        .check {
          display: none;
          ${responsive.xs`
            display: block;
          `};
        }

        &:last-child {
          ${responsive.xs`
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
            margin-bottom: ${rem(6)};
          `}
          ${responsive.xs`
            font-weight: 500;
            margin: 0;
          `};
        }

        .cryptoGridItemDescription {
          font-weight: 500;
          color: #ffffff;
          ${responsive.xs`
            display: none;
          `};
        }
      }
    }

    .cryptoButtonWrapper {
      gap: ${rem(16)};
      display: flex;
      align-items: center;
      ${responsive.xs`
        display: flex;
        flex-direction: column;
        gap: ${rem(8)};
      `};

      .cryptoButtonGetStarted {
        ${responsive.xs`
          width: 100%;
        `};
      }

      .cryptoButtonGhost {
        border: 1px solid var(--exciting-lime-20, rgba(191, 255, 200, 0.2));
        color: #bfffc8;

        &:hover {
          background-color: #bfffc8;
          color: #077453;
        }

        ${responsive.xs`
          width: 100%;
        `};
      }
    }

    .rightSide {
      svg {
        max-width: ${rem(500)};
        width: 100%;
      }

      ${responsive.xl`
        display: none;
      `};
    }
  }
`
