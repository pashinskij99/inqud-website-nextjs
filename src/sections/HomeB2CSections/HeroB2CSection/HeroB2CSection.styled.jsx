'use client'

import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'
import { StyledTypographyIBMH5 } from '@/components/UI/Typography/Typography.styled'

export const StyledHeroB2CSectionWrapper = styled.section`
  padding-top: 64px;
  overflow: hidden;

  ${responsive.xxl`
    padding-top: 65px;
  `};
  ${responsive.xl`
    padding-top: 58px;
  `};
  ${responsive.sm`
    padding-top: 13px;
  `};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 125.99px;
    ${responsive.xxl`
      column-gap: 34px;
    `}
    ${responsive.xl`
      flex-direction: column-reverse;
      row-gap: 57px;
    `}
    ${responsive.sm`
      row-gap: 33px;
      padding: 0;
    `}
  }

  .left-side {
    ${responsive.xl`
      text-align: center;
      width: 100%;
    `}
    .text-wrapper {
      display: contents;
      ${responsive.sm`
        display: block;
        padding: 0 16px;
      `}
    }

    .sub-title {
      margin-bottom: 22px;
      ${responsive.xl`
        margin: 0 auto 22px;
      `}
      ${responsive.sm`
        display: none;
      `}
    }

    .title {
      line-height: 70px;
      margin-bottom: 24px;

      ${responsive.sm`
        line-height: 46px;
        letter-spacing: 0em;
        margin-bottom: 16px;

        font-size: 40px;
        font-weight: 700;
      `}
    }

    .description {
      margin-bottom: 33px;
      color: rgba(81, 113, 133, 1);
      line-height: 32px;
      max-width: 557px;
      ${responsive.xl`
        max-width: 100%; 
      `}

      ${responsive.sm`
        letter-spacing: 0em;
        margin-bottom: 32px;

        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
      `}
      .br-desktop {
        ${responsive.xl`
          display: none;
        `}
      }
    }

    .get-started-btn {
      margin-bottom: 63px;

      ${responsive.xxl`
        margin-bottom: 79px;
      `};
      ${responsive.xl`
        margin: 0 auto 65px;
      `}
      ${responsive.sm`
        height: 48px;
        width: 100%;
        margin: 0 auto 55px;

        svg {
          width: 40px;
          height: 40px;
        }
      `}
    }
    .payment {
      ${responsive.sm`
        padding-left: 16px;
      `}
    }
    .payment-descr {
      ${responsive.xl`
        text-align: start;
      `}
    }
  }

  .right-side {
    display: flex;
    flex-shrink: 0;

    .graphic {
      max-width: 595.008px;
      height: 594.109px;
      width: 100%;
      ${responsive.xl`
        max-width: 400.00048828125px;
        height: 399.40234375px;
      `}
      ${responsive.sm`
        width: 342.9996337890625px;
        height: 342.48712158203125px;
      `}

      &.graphic-1 {
        display: none;
        ${responsive.sm`
          display: block;
        `}
      }
      &.graphic-2 {
        ${responsive.sm`
          display: none;
        `}
      }
    }
  }
`

export const StyledSubTitle = styled(StyledTypographyIBMH5)`
  /* @extend .title-ibm-2; */

  font-size: 18px;

  color: #517185;
  border-radius: 32px;
  background: conic-gradient(
    from -46deg at 31.64% 32.35%,
    #71bef6 0deg,
    #ffc451 99.25197958946228deg,
    #e1f664 212.1355676651001deg,
    #ff9a61 272.05706119537354deg,
    #cdacfe 360deg
  );
  width: fit-content;
  padding: 0 ${rem(16)};
  line-height: 1;
  color: rgba(45, 52, 57, 1);
  height: 34px;
  display: flex;
  align-items: center;

  ${responsive.sm`
    padding: ${rem(5)} ${rem(16)};
  `};
`
