import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledSearchResultSectionWrapper = styled.section`
  padding: 68px 0 120px;
  background-color: #f6f7f8;
  ${responsive.xl`
    padding: 32px 0 120px;
  `}
  ${responsive.sm`
    padding: 32px 0 96px;
  `}
  .title {
    color: #517185;
    font-size: 40px;
    font-weight: 700;
    line-height: 46px;
    margin-bottom: 32px;

    ${responsive.xl`
      color: var(--independent-grey, #517185);
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      margin-bottom: 16px;
    `}
    ${responsive.sm`
      line-height: 34px;
      margin-bottom: 16px;
    `}

    .search-text {
      color: #2d3439;
    }
  }

  .list-search-result {
    display: grid;
    row-gap: 16px;
  }
`

export const StyledSearchCartWrapper = styled.div`
  border-radius: 30px;
  background: #fff;
  padding: 23px 32px;
  display: grid;
  grid-template-columns: 680px auto;
  justify-content: space-between;
  align-items: center;

  ${responsive.xl`
    grid-template-columns: 100%;
  `}

  .cart-text-wrapper {
    .cart-title {
      font-weight: 700;
      line-height: 32px;
      margin-bottom: 8px;
      ${responsive.sm`
        line-height: 24px;
      `}
    }
    .cart-description {
      color: var(--independent-grey, #517185);
      line-height: 26px;
      .select {
        font-weight: 700;
      }
    }
  }

  .cart-btn {
    height: fit-content;
    padding: 0;
    ${responsive.xl`
      display: none;
    `}
    .cart-btn-text {
      color: var(--ambitious-green, #077453);
      font-weight: 700;
      line-height: 26px;
    }
  }
`
