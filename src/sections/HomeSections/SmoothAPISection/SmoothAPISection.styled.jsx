'use client'

import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledSmoothAPISection = styled.section`
  padding-top: 200px;
  padding-bottom: 372px;
  ${responsive.xl`
    padding: ${rem(120)} 0;
  `};
  ${responsive.sm`
    padding: ${rem(96)} 0;
    order: 5;
  `};

  .container {
    display: flex;
    justify-content: space-between;
    column-gap: 171.55px;
    align-items: center;
    ${responsive.xxl`
      gap: ${rem(24)};
    `}
    ${responsive.xl`
      gap: 0;
    `};

    .leftSide {
      ${responsive.xxl`
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
      .graphic {
        width: 416.4502258300781px;
        height: 600px;
        transform: translateX(132px);
        ${responsive.xxl`
          transform: translateX(0);
        `}
      }

      ${responsive.xl`
        display: none;
      `};
    }

    .rightSide {
      max-width: 680px;
      width: 100%;

      ${responsive.xxl`
        max-width: 596px;
      `}
      ${responsive.xl`
        max-width: 100%;
      `}
      .smoothAPISubTitle {
        font-size: 18px;
        border-radius: ${rem(50)};
        background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
        color: #517185;
        margin-bottom: ${rem(24)};
        line-height: 1;
        padding: ${rem(7)} ${rem(16)};
        width: fit-content;
        margin-bottom: 10px;
        ${responsive.xl`
          margin-right: auto;
          margin-left: auto;
          padding: ${rem(5)} ${rem(16)};
        `};

        ${responsive.sm`
          margin-bottom: ${rem(17)};
          background-color: rgba(244, 245, 250, 1);
        `};
      }

      .smoothAPITitle {
        margin-bottom: 15px;
        ${responsive.xl`
          text-align: center;
          margin-bottom: ${rem(40)};
        `};
        ${responsive.sm`
          margin-bottom: ${rem(32)};
          letter-spacing: 0.3px;
          line-height: 46px;
        `};

        .br-1200 {
          display: none;
          ${responsive.xxl`
            display: block;
          `};
          ${responsive.xl`
            display: none;
          `};
        }
      }

      .smoothAPIImageTablet {
        display: none;
        ${responsive.xl`
          display: block;
          object-fit: contain;
          max-width: ${rem(400.004)};
          height: ${rem(277.15)};
          margin: 0 auto ${rem(40)};
        `};
        ${responsive.sm`
          width: 100%;
          max-width: 100%;
          margin-bottom: ${rem(28)};
          height: fit-content;
        `};
      }

      .smoothAPIDescription {
        line-height: 24px;
        margin-bottom: 39px;

        ${responsive.xxl`
          font-weight: 500;
        `}

        ${responsive.xl`
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          margin-bottom: 49px;
        `}

        ${responsive.sm`
          display: block;
          margin-bottom: 34px;
          text-align: center;
          font-size: ${rem(24)};
          line-height: 32px;
        `};
      }

      .smoothAPIGrid {
        display: grid;
        grid-template-columns: repeat(2, 320px);
        column-gap: 40px;
        row-gap: 24px;
        margin-bottom: 42px;
        ${responsive.xxl`
          grid-template-columns: repeat(2, 286px);
          column-gap: 24px;
          row-gap: 22px;
        `}
        ${responsive.xl`
          grid-template-columns: repeat(2, 332px);
          column-gap: 24px;
          justify-content: space-between;
          row-gap: 18px;
          align-items: flex-start;
          margin-bottom: 36px;
        `}
        ${responsive.sm`
          grid-template-columns: 1fr;
          margin-bottom: 43px;
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
          gap: 6px;
        `};

        .smoothAPIGridItem {
          ${responsive.xl`
            row-gap: 8px;
            display: grid;
            grid-template-columns: auto 268px;
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

          ${responsive.sm`
            display: flex;
            align-items: center;
            gap: ${rem(12)};
          `}
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

          .smoothAPIGridItemTitle {
            margin-bottom: 6px;
            font-weight: 700;

            ${responsive.xxl`
              margin-bottom: ${rem(8)};
              line-height: 32px;
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
            `}
            br {
              display: none;
            }

            ${responsive.md`
              br {
                display: block;
              }
            `}
            ${responsive.sm`
              font-weight: 400;
              margin-bottom: 0;
              height: auto;
              
              br {
                display: none;
              }
            `};
          }

          .smoothAPIGridItemDescription {
            color: #517185;
            font-weight: 500;
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

      .smoothAPIButtonWrapper {
        display: flex;
        align-items: center;
        gap: ${rem(16)};
        ${responsive.sm`
          flex-direction: column;
          gap: ${rem(8)};
        `};

        .smoothAPIButtonGetStarted {
          ${responsive.sm`
            width: 100%;
            height: ${rem(48)};
            svg {
              width: ${rem(40)};
              height: ${rem(40)};
            }
          `};
        }

        .smoothAPIButtonGhost {
          ${responsive.sm`
            width: 100%;
            height: ${rem(48)};
          `};
        }
      }
    }
  }
`
