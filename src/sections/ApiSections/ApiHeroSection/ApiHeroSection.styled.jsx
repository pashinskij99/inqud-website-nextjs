import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledApiHeroSectionWrapper = styled.section`
  padding-top: 64px;
  ${responsive.sm`
    padding-top: 24px;
  `}
  .container {
    display: grid;
    grid-template-columns: 680px 560px;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    ${responsive.xxl`
      grid-template-columns: 596px 560px;
    `}
    ${responsive.xl`
      grid-template-columns: 100%;
      row-gap: 56px;
    `}
    ${responsive.sm`
      row-gap: 40px;
    `}
  }
  .left-side {
    ${responsive.xl`
      text-align: center;
      order: 2;
    `}
    .sub-title {
      margin-bottom: 24px;
      ${responsive.xl`
        margin: 0 auto 24px;      
      `}
      ${responsive.sm`
        color: var(--directness-black, #2D3439);
        font-size: 14px;
        font-weight: 400;
        line-height: 11px; /* 78.571% */
        letter-spacing: 1.4px;
        height: 26px;
        margin-bottom: 15.5px;
      `}
    }
    .title {
      line-height: 70px;
      letter-spacing: -0.02em;
      margin-bottom: 40px;
      ${responsive.xxl`
        letter-spacing: -1.28px;
        margin-bottom: 24px;
      `}
      ${responsive.sm`
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
        letter-spacing: -0em;
        margin-bottom: 16px;
      `}

      &.title-1 {
        ${responsive.xxl`
          display: none;
        `}
      }
      &.title-2 {
        display: none;
        ${responsive.xxl`
          display: block;
        `}
      }
    }
    .features {
      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-content: flex-start;
      column-gap: 24px;
      row-gap: 16px;
      margin-bottom: 40px;
      ${responsive.xl`
        justify-content: center;      
      `}
      ${responsive.sm`
        grid-template-columns: repeat(1, auto);
        margin-bottom: 32px;
      `}
      li {
        display: flex;
        align-items: center;
        column-gap: 8px;
        p {
          font-weight: 500;
          line-height: 22px;
          letter-spacing: 0em;
        }
      }
    }
    .buttonsWrapper {
      display: flex;
      column-gap: 16px;
      margin-bottom: 64px;
      ${responsive.xl`
        justify-content: center;      
      `}
      ${responsive.sm`
        flex-direction: column;
        row-gap: 8px;
        margin-bottom: 41px;
      `}

      .getStarted {
        ${responsive.sm`
          padding-left: 0;
        `}
      }
      .ghostButton {
      }
    }

    .payment {
      ${responsive.xl`
        text-align: start
      `}

      .payment-descr {
        ${responsive.xl`
          line-height: 26px;
          margin-bottom: 22px;
        `}
      }
    }
  }

  .right-side {
    ${responsive.xl`
      order: 1;
    `}
    .cart {
      background: conic-gradient(
          from -66.33deg at 51.32% 46.84%,
          #71bef6 0deg,
          #ffc451 99.25deg,
          #e1f664 212.14deg,
          #ff9a61 282.04deg,
          #cdacfe 360deg
        ),
        linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.2),
          rgba(255, 255, 255, 0.2)
        );
      border-radius: 30px;
      height: 650px;
      display: flex;
      align-items: center;
      justify-content: center;
      ${responsive.xl`
        height: 464px;
        max-width: 400px;
        width: 100%;
        margin: 0 auto;
      `}
      ${responsive.sm`
        height: 398.125px;
      `}

      img {
        ${responsive.xl`
          width: 375.143px;
          height: 365.571px;
          flex-shrink: 0;
        `}
        ${responsive.sm`
          width: 318.25px;
          height: 310.9px;
        `}
      }
    }
  }
`
