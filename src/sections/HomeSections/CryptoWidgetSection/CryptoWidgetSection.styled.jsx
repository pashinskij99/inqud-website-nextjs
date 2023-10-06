import styled from '@emotion/styled'
import { nunito } from '@/utils/font'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledCryptoWidgetSection = styled.section`
  background: var(--ambitious-green, rgb(7, 116, 83));
  padding-top: 200px;
  padding-bottom: 200px;
  overflow-x: hidden;
  &::selection {
    background: var(--ambitious-green, rgb(7, 116, 83));
  }

  ${responsive.xxl`
    padding-top: 200px;
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
    display: flex;
    align-items: center;
    column-gap: 133px;

    ${responsive.xxl`
      column-gap: 72px;
      align-items: flex-end;
    `}
    ${responsive.xl`
      padding-right: ${rem(50)};
      gap: 0;
    `};
    ${responsive.sm`
      padding-right: ${rem(16)};
      text-align: center;
      padding: 0;
    `};

    .leftSide {
      max-width: 680px;
      width: 100%;

      ${responsive.xxl`
        max-width: 596px;
      `};
      ${responsive.xl`
        max-width: 100%;
      `};
    }

    .cryptoSubTitle {
      border-radius: ${rem(50)};
      background: var(--exciting-lime, #bfffc8);
      color: #077453;
      font-size: 18px;
      margin-bottom: 10px;
      line-height: 1;
      padding: ${rem(7)} ${rem(16)};
      width: fit-content;

      ${responsive.xl`
        margin: 0 auto 14px;
        padding: ${rem(5)} ${rem(16)};
      `};
      ${responsive.sm`
        margin: 0 auto ${rem(16)};
      `};
    }

    .cryptoTitle {
      color: #ffffff;
      margin-bottom: 14px;
      ${responsive.xl`
        text-align: center;
        margin-bottom: 24px;
      `};
      ${responsive.sm`
        line-height: 46px;
        letter-spacing: 0.3px;
      `};
    }

    .cryptoWidgetMobileWrapper {
      display: none;
      ${responsive.xl`
        display: flex;
        justify-content: center;
        margin: 0 auto 22px;
        position: relative;

        &::before, &::after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 133.333px;
        }
        &::before {
          top: 0;
          background: linear-gradient(180deg, #077453 0%, rgba(7, 116, 83, 0.00) 100%);        
        }
  
        &::after {
          bottom: 0;
          background: linear-gradient(360deg, #077453 0%, rgba(7, 116, 83, 0.00) 100%);
        }

        img {
          width: 397.33px;
          height: 399.3333435058594px;
        }
        .cryptoWidgetMobileSmaller {
          display: none;
        }
        
        .cryptoWidgetDesktop {
          display: block;
        }
      `};
      ${responsive.sm`
        margin-bottom: ${rem(24.47)};
        overflow: hidden;
        &::before, &::after {
          height: 80px;
        }
        
        &::after {
          background: linear-gradient(360deg, #077453 0%, rgba(7, 116, 83, 0.00) 100%);
          transform: translateY(50px); 
        }
  
        .cryptoWidgetMobileSmaller {
          display: block;
          width: 100%;
          height: auto;
        }

        .cryptoWidgetDesktop {
          display: none;
        }
      `};
    }

    .cryptoDescription {
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;

      color: #ffffff;
      margin-bottom: 40px;

      ${responsive.xl`
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
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
        line-height: 32px;
        padding: 0 ${rem(16)};
      `};
    }

    .cryptoGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: ${rem(46)};
      row-gap: ${rem(24)};
      margin-bottom: 40px;
      ${responsive.xxl`
        column-gap: 28px;
        row-gap: 42px;
      `}
      ${responsive.xl`
        align-items: flex-start;
        row-gap: 26px;
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
        ${responsive.xl`
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: flex-start;
        `}
        ${responsive.sm`
          display: flex;
          align-items: center;
          gap: ${rem(12)};

          &:nth-of-type(1) {
            order: 1;
          }
          &:nth-of-type(2) {
            order: 3;
          }
          &:nth-of-type(3) {
            order: 2;
          }
          &:nth-of-type(4) {
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
          margin-bottom: ${rem(6)};
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

        &:last-of-type {
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

            ${nunito.style}

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
              margin-top: 10px;
              right: 0;
            `}

            ${responsive.xl`
              margin-top: 0;
              right: 0;
              transform: translateY(-100%) translateX(-14px);
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
              padding: 15px;
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

        &:last-of-type {
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
          margin-bottom: 8px;
          ${responsive.xxl`
            margin-bottom: ${rem(8)};
          `}
          ${responsive.xl`
            grid-column-start: 2;
            grid-column-end: 2;
            margin-left: 16px;
            width: 100%;
            margin: 0 0 0 16px;
            height: 48px;
            line-height: 1;
            display: flex;
            align-items: center;
          `}
          ${responsive.sm`
            height: auto;
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
          ${responsive.xl`
            grid-column-start: 1;
            grid-column-end: 3;
          `}
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
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 200px;
      }

      &::before {
        top: 0;
        background: linear-gradient(
          180deg,
          #077453 0%,
          rgba(7, 116, 83, 0) 100%
        );
      }

      &::after {
        bottom: 0;
        background: linear-gradient(
          360deg,
          #077453 0%,
          rgba(7, 116, 83, 0) 100%
        );
      }

      ${responsive.xl`
        display: none;
      `};

      .graphic {
        max-width: ${rem(500)};
        width: 100%;
      }
    }
  }
`
