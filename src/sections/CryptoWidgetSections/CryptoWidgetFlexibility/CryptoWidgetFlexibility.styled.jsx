import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledCryptoWidgetFlexibilityWrapper = styled.section`
  padding-top: 200px;
  ${responsive.xl`
    padding-top: 120px;
  `}
  ${responsive.sm`
    padding-top: 103px;
  `}
  .container {
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 440px);
      align-items: flex-start;
      justify-content: space-between;
      ${responsive.xxl`
        grid-template-columns: repeat(3, 389px);
      `}
      ${responsive.xl`
        grid-template-columns: repeat(2, 332px);
        gap: 24px;
        justify-content: center;
      `}
      ${responsive.sm`
        grid-template-columns: repeat(1, 343px);
        gap: 31px;
      `}
      .grid-item {
        border-radius: 30px;
        background: #f2f5f7;
        padding: 40px 32px;
        display: grid;
        justify-items: center;
        align-items: center;
        text-align: center;
        ${responsive.xxl`
          padding: 40px 21px;
        `}
        ${responsive.xl`
          padding: 40px 24px;
        `}
        ${responsive.sm`
          padding: 0px 32px;
          background: transparent;
        `}
        img {
          margin-bottom: 23px;
          ${responsive.sm`
            margin-bottom: 16px;
          `}
        }
        .grid-item-title {
          font-weight: 700;
          line-height: 42px;
          margin-bottom: 8px;
          ${responsive.sm`
            line-height: 32px;
          `}
        }
        .grid-item-description {
          line-height: 24px;
          ${responsive.sm`
            display: none;
          `}
        }
      }
    }
  }
`
