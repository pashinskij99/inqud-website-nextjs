'use client'

import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledInstantFreeWrapper = styled.section`
  padding-top: 200px;
  ${responsive.xl`
    padding-top: 120px;
  `}
  ${responsive.sm`
    padding-top: 114px;
  `}
  .container {
    display: grid;
    grid-template-columns: repeat(2, 680px);
    justify-content: space-between;
    align-items: center;
    ${responsive.xxl`
      grid-template-columns: 566px 595px;
    `}
    ${responsive.xl`
      grid-template-columns: 100%;
      row-gap: 40px;
    `}
  }
  .left-side {
    ${responsive.xl`
      order: 2;
    `}
    .title {
      font-weight: 700;
      line-height: 46px;
      letter-spacing: 0em;
      margin-bottom: 16px;
      ${responsive.sm`
        color: var(--directness-black, #2D3439);
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 46px;
      `}
    }
    .description {
      font-weight: 400;
      line-height: 32px;
      letter-spacing: 0em;
      margin-bottom: 40px;
      ${responsive.sm`
        color: var(--independent-grey, #517185);
        font-weight: 400;
        line-height: 24px;
      `}
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 320px);
      justify-content: flex-start;
      /* align-items: center; */
      column-gap: 40px;
      margin-bottom: 40px;
      ${responsive.xxl`
        grid-template-columns: repeat(2, 310px);
        column-gap: 0px;
      `}
      ${responsive.xl`
        align-items: flex-start;
        column-gap: 50px;
      `}
      ${responsive.sm`
        grid-template-columns: 100%;
        row-gap: 40px;
      `}
      .cart {
        img {
          margin-bottom: 16px;
          ${responsive.xl`
            margin-bottom: 11px;
          `}
        }
        .cart-description {
          line-height: 24px;
          letter-spacing: 0em;
          color: rgba(81, 113, 133, 1);
        }
      }
    }

    .buttonsWrapper {
      display: flex;
      column-gap: 16px;
      ${responsive.sm`
        flex-direction: column;
        row-gap: 8px;
      `}

      .getStarted {
        &.getStarted-1 {
          ${responsive.sm`
            display: none;
          `}
        }
        &.getStarted-2 {
          display: none;
          ${responsive.sm`
            display: flex;
            padding-left: 0;
          `}
        }
      }
      .ghostButton {
        &.ghostButton-1 {
          ${responsive.sm`
            display: none;
          `}
        }
        &.ghostButton-2 {
          display: none;
          ${responsive.sm`
            display: block;
          `}
        }
      }
    }
  }
  .right-side {
    ${responsive.xl`
      order: 1;
    `}
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
        height: 558.25px
      `}
      ${responsive.xl`
        border-radius: 16.141px;
        width: 343px;
        height: 321.815px;
      `}
      img {
        ${responsive.xxl`
          width: 300.125px;
          height: 467.25px;
        `}
        ${responsive.xl`
          width: 173.013px;
          height: 268.074px;
          flex-shrink: 0;
        `}
      }
    }
  }
`
