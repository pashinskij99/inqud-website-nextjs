import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledCoreSectionWrapper = styled.section`
  padding-top: 187px;
  ${responsive.xxl`
    padding-top: 198px;
  `}
  ${responsive.xl`
    padding-top: 120px;
  `}
  ${responsive.sm`
    padding-top: 96px;
  `}
  .container {
  }
  .title {
    margin-bottom: 54px;
    ${responsive.xl`
      margin-bottom: 36px;
    `}
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
      margin-bottom: 31px;
    `}
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    ${responsive.xxl`
      gap: 24px;
    `}
    ${responsive.xl`
      grid-template-columns: 1fr;
      row-gap: 32px;
    `}
    ${responsive.sm`
      row-gap: 22px;
    `}
    li {
      display: contents;
    }
  }
`

export const StyledGridCartWrapper = styled.div`
  padding: 32px;
  border-radius: 30px;
  background: #f6f7f8;
  display: flex;
  flex-direction: column;
  ${responsive.xl`
    flex-direction: row;
    align-items: center;
    column-gap: 32px;
    padding: 0;
    background: transparent;
  `}
  ${responsive.sm`
    column-gap: 16px;
    align-items: flex-start;
  `}

  .cart-id-wrapper {
    position: relative;
    width: 64px;
    height: 64px;
    background: var(--exciting-lime, #bfffc8);
    border-radius: 16px;
    margin-bottom: 24px;
    ${responsive.xl`
      margin-bottom: 0px;
    `}
    ${responsive.sm`
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      border-radius: 8px;
    `}
    .cart-id {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -47%);
      line-height: 1;
      font-size: 40px;
      font-weight: 400;
      ${responsive.sm`
        font-size: 20px;
      `}
    }
  }
  .cart-text-wrapper {
    display: contents;
    ${responsive.xl`
      display: flex;
      flex-direction: column;
    `}
  }
  .cart-title {
    font-weight: 700;
    margin-bottom: 8px;
    ${responsive.xl`
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 0px;
    `}
    ${responsive.sm`
      margin-bottom: 8px;
    `}
  }
  .cart-description {
    color: #517185;
    ${responsive.xl`
      font-weight: 500;
      white-space: nowrap;
      letter-spacing: -0.18px;
    `}
    ${responsive.sm`
      white-space: normal;
    `}
  }
`
