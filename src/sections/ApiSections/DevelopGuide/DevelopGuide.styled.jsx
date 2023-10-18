'use client'

import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledDevelopGuideWrapper = styled.section`
  padding: 200px 0;
  ${responsive.xl`
    padding: 120px 0;
  `}
  ${responsive.sm`
    padding: 110.18px 0 106.18px;
  `}
  .container {
    display: grid;
    grid-template-columns: repeat(2, 680px);
    align-items: center;
    justify-content: space-between;
    ${responsive.xxl`
      grid-template-columns: 595px 594px;
    `}
    ${responsive.xl`
      grid-template-columns: 100%;
      row-gap: 40px;
    `}
  }
  .left-side {
    .cart-wrapper {
      height: 638px;
      border-radius: 32px;
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.2) 100%
        ),
        conic-gradient(
          from -66deg at 51.32% 46.84%,
          #71bef6 0deg,
          #ffc451 99.25197958946228deg,
          #e1f664 212.1355676651001deg,
          #ff9a61 282.0405435562134deg,
          #cdacfe 360deg
        );
      display: flex;
      align-items: center;
      justify-content: center;
      ${responsive.xxl`
        height: 558.25px;
      `}
      ${responsive.xl`
        width: 343px;
        height: 321.815px;
        border-radius: 16.141px;
      `}
      img {
        ${responsive.xxl`
          width: 300.125px;
          height: 413px;
        `}
        ${responsive.xl`
          width: 173.013px;
          height: 238.082px;
        `}
      }
    }
  }

  .right-side {
    .title {
      color: var(--directness-black, #2d3439);
      font-weight: 700;
      line-height: 46px;
      margin-bottom: 16px;

      ${responsive.sm`
        color: var(--directness-black, #2D3439);
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
      `}
    }
    .description {
      color: var(--directness-black, #2d3439);
      font-weight: 400;
      line-height: 32px;
      margin-bottom: 40px;
      ${responsive.xl`
        max-width: 680px;
      `}
      ${responsive.sm`
        color: var(--independent-grey, #517185);
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
      `}
    }
    .get-started-button {
      &.get-started-button-1 {
        ${responsive.xl`
          display: none;
        `}
        ${responsive.sm`
          display: flex;
          width: 100%;
          padding-left: 0;
        `}
      }
      &.get-started-button-2 {
        display: none;

        ${responsive.xl`
          display: flex;
        `}
        ${responsive.sm`
          display: none;
        `}
      }
    }
  }
`
