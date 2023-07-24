import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledSmoothAPISection = styled.section`
  padding-top: ${rem(240)};
  padding-bottom: ${rem(410)};
  ${responsive.xl`
    padding: ${rem(120)} 0;
  `};
  ${responsive.xs`
    padding: ${rem(96)} 0;
  `};

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${rem(45)};
    align-items: center;
    ${responsive.xxl`
      grid-template-columns: 1fr 1fr;
      gap: ${rem(30)};
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

        ${responsive.xs`
          margin-bottom: ${rem(18)};
        `};
      }

      .smoothAPITitle {
        margin-bottom: ${rem(24)};
        ${responsive.xl`
          text-align: center;
          margin-bottom: ${rem(40)};
        `};
        ${responsive.xs`
          margin-bottom: ${rem(32)};
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
        ${responsive.xs`
          max-width: 100%;
          margin-bottom: ${rem(32)};
        `};
      }

      .smoothAPIDescription {
        margin-bottom: ${rem(56)};
        ${responsive.xxl`
          font-size: ${rem(18)};
          font-weight: 500;
          line-height: ${rem(26)};
        `}

        ${responsive.xs`
          display: none;
        `};
      }

      .smoothAPIDescriptionMobile {
        display: none;
        ${responsive.xs`
          display: block;
          margin-bottom: ${rem(40)};
          text-align: center;
          font-size: ${rem(24)};
          line-height: ${rem(34)};
        `};
      }

      .smoothAPIGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: ${rem(40)};
        row-gap: ${rem(40)};
        margin-bottom: ${rem(56)};
        ${responsive.xxl`
          column-gap: ${rem(24)};
          row-gap: ${rem(30)};
        `}
        ${responsive.xs`
          grid-template-columns: 1fr;
          gap: ${rem(16)};
          margin-bottom: ${rem(48)};
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        `};

        .smoothAPIGridItem {
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

          .smoothAPIGridItemTitle {
            margin-bottom: ${rem(16)};
            font-weight: 700;
            ${responsive.xxl`
              margin-bottom: ${rem(10)};
            `}
            ${responsive.xs`
              font-weight: 400;
              margin-bottom: 0;
            `};
          }

          .smoothAPIGridItemDescription {
            color: #517185;
            font-weight: 500;
            ${responsive.xs`
              display: none;
            `};
          }
        }
      }

      .smoothAPIButtonWrapper {
        display: flex;
        align-items: center;
        gap: ${rem(16)};
        ${responsive.xs`
          flex-direction: column;
          gap: ${rem(8)};
        `};

        .smoothAPIButtonGetStarted {
          ${responsive.xs`
            width: 100%;
          `};
        }

        .smoothAPIButtonGhost {
          ${responsive.xs`
            width: 100%;
          `};
        }
      }
    }
  }
`
