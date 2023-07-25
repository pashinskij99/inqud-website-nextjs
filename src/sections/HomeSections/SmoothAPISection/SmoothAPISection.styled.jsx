import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledSmoothAPISection = styled.section`
  padding-top: ${rem(240)};
  padding-bottom: ${rem(410)};
  ${responsive.xl`
    padding: ${rem(120)} 0;
  `};
  ${responsive.sm`
    padding: ${rem(96)} 0;
    order: 5;
  `};

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${rem(45)};
    align-items: center;
    ${responsive.xxl`
      grid-template-columns: 1fr 1fr;
      gap: ${rem(24)};
    `}
    ${responsive.xl`
      gap: 0;
      grid-template-columns: 1fr;
    `};

    .leftSide {
      @media (max-width: 1536px) and (min-width: 1279px) {
        justify-content: center;
        display: flex;
      }
      svg {
        width: ${rem(481)};
        height: ${rem(693)};
      }

      ${responsive.xl`
        display: none;
      `};
    }

    .rightSide {
      .smoothAPISubTitle {
        border-radius: ${rem(50)};
        background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
        color: #517185;
        margin-bottom: ${rem(24)};
        line-height: 1;
        padding: ${rem(7)} ${rem(16)};
        width: fit-content;
        margin-bottom: ${rem(21)};
        ${responsive.xl`
          margin-right: auto;
          margin-left: auto;
          padding: ${rem(5)} ${rem(16)};
          margin-bottom: ${rem(23)};
        `};

        ${responsive.sm`
          margin-bottom: ${rem(17)};
          background-color: rgba(244, 245, 250, 1);
        `};
      }

      .smoothAPITitle {
        margin-bottom: ${rem(24)};
        ${responsive.xl`
          text-align: center;
          margin-bottom: ${rem(40)};
        `};
        ${responsive.sm`
          margin-bottom: ${rem(32)};
          letter-spacing: 0.3px;
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
          max-width: 100%;
          margin-bottom: ${rem(28)};
          height: fit-content;
        `};
      }

      .smoothAPIDescription {
        margin-bottom: ${rem(56)};
        &.desktop {
          ${responsive.xl`
            display: none;
          `}
        }
        &.tablet {
          display: none;

          ${responsive.xl`
            display: block;
          `}
          ${responsive.sm`
            display: none;
          `}
        }

        ${responsive.xxl`
          font-size: ${rem(18)};
          font-weight: 500;
          line-height: ${rem(26)};
        `}

        ${responsive.xl`
          font-size: 24px;
          font-weight: 400;
          line-height: 34px;
          letter-spacing: 0em;
        `}

        ${responsive.sm`
          display: none;
        `};
      }

      .smoothAPIDescriptionMobile {
        display: none;
        ${responsive.sm`
          display: block;
          margin-bottom: ${rem(40)};
          text-align: center;
          font-size: ${rem(24)};
          line-height: ${rem(34)};
        `};
      }

      .smoothAPIGrid {
        display: grid;
        grid-template-columns: 0.77fr 0.8fr;
        column-gap: ${rem(40)};
        row-gap: ${rem(40)};
        margin-bottom: ${rem(56)};
        ${responsive.xxl`
          column-gap: ${rem(24)};
          row-gap: ${rem(40)};
        `}
        ${responsive.xl`
          column-gap: ${rem(34)};
          row-gap: ${rem(40)};
        `}
        ${responsive.sm`
          grid-template-columns: 1fr;
          gap: ${rem(16)};
          margin-bottom: ${rem(48)};
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        `};

        .smoothAPIGridItem {
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

          .smoothAPIGridItemTitle {
            margin-bottom: ${rem(16)};
            font-weight: 700;
            ${responsive.xxl`
              margin-bottom: ${rem(8)};
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
              br {
                display: none;
              }
            `};
          }

          .smoothAPIGridItemDescription {
            color: #517185;
            font-weight: 500;
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
