import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledCryptoWidgetHeroSectionWrapper = styled.section`
  padding-top: 64px;
  ${responsive.sm`
    padding-top: 0;
  `}
  .container {
    display: grid;
    grid-template-columns: 680px 668.97px;
    align-items: center;
    column-gap: 65px;
    ${responsive.xxl`
      grid-template-columns: 596px 610px;
      column-gap: 25px;
    `}
    ${responsive.xl`
      grid-template-columns: 100%;
      row-gap: 56.27px;
    `}
    ${responsive.sm`
      row-gap: 40.5px;
    `}
  }
  .left-side {
    ${responsive.xl`
      order: 2;
      text-align: center;
    `}
    .subTitle {
      margin-bottom: 24px;
      ${responsive.xl`
        margin: 0 auto 24px;
      `}
      ${responsive.sm`
        color: var(--directness-black, #2D3439);
        font-size: 14px;
        font-weight: 400;
        line-height: 11px;
        letter-spacing: 1.4px;
        height: 26px;
        padding: 0 12px;
        margin-bottom: 16px;
      `}
    }
    .title {
      line-height: 70px;
      letter-spacing: -0.02em;
      margin-bottom: 24px;
      ${responsive.sm`
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
        letter-spacing: 0em;
        margin-bottom: 16px;
      `}
    }
    .description {
      line-height: 24px;
      letter-spacing: 0em;
      color: rgba(81, 113, 133, 1);

      margin-bottom: 40px;

      ${responsive.sm`
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 32px;
      `}
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
      }
      .ghostButton {
        &.ghostButton-1 {
          ${responsive.xl`
            display: none;
          `}
        }
        &.ghostButton-2 {
          display: none;
          ${responsive.xl`
            display: block;
          `}
        }
      }
    }

    .payment {
      ${responsive.xl`
        text-align: start;
      `}
      .payment-descr {
        ${responsive.xl`
          margin-bottom: 22px;
        `}
      }
    }
  }

  .right-side {
    position: relative;
    height: 650px;
    display: flex;
    align-items: flex-end;

    ${responsive.xxl`
      height: 610.05px;
    `}
    ${responsive.xl`
      order: 1;
      height: 399.73px;
      justify-content: center;
    `}
    ${responsive.sm`
      height: 351.669px;
    `}
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 560px;
      height: 650px;

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
      border-radius: 30px;
      z-index: -1;

      ${responsive.xxl`
        width: 525.58px;
        height: 610.05px;
      `}
      ${responsive.xl`
        width: 344.381591796875px;
        height: 399.7286376953125px;
        border-radius: 20px;
      `}
      ${responsive.sm`
        width: 302.976px;
        height: 351.669px;
        flex-shrink: 0;
      `}
    }

    img {
      width: 100%;
      flex-shrink: 0;
      ${responsive.xxl`
        height: 537.25439453125px;
      `}
      ${responsive.xl`
        width: 409.8758239746094px;
        height: 352.03253173828125px;
      `}
      ${responsive.sm`
        width: 360.999px;
        height: 309.707px;
      `}
    }
  }
`
