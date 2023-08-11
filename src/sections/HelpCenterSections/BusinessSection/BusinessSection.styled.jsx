import styled from '@emotion/styled';
import {responsive} from '@/utils/response';

export const StyledBusinessSectionWrapper = styled.section`
  padding: 56px 0 239px;

  ${responsive.xxl`
    padding: 54px 0 246px;
  `}
  ${responsive.xl`
    padding: 55px 0 119px;
  `}
  ${responsive.sm`
    padding: 30px 0 96px;
  `}

  background-color: rgba(246, 247, 248, 1);

  .container {
    display: grid;
    row-gap: 56px;
    ${responsive.sm`
      row-gap: 38px;
    `}
  }
`

export const StyledSubSectionWrapper = styled.div`
  .title {
    font-weight: 700;
    line-height: 46px;
    margin-bottom: 32px;
    ${responsive.sm`
      margin-bottom: 14px;  
    `}
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 440px);
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;

    ${responsive.xxl`
      grid-template-columns: repeat(3, 389px);
      gap: 24px;
    `}
    ${responsive.xl`
      grid-template-columns: repeat(2, 332px);
      justify-content: flex-start;
    `}
    ${responsive.sm`
      grid-template-columns: repeat(1, 343px);
      gap: 16px;
    `}
  }

  .cart {
    padding: 32px;
    border-radius: 30px;
    background-color: white;
    ${responsive.xl`
      padding: 24px;
    `}
  }

  .cart-header {
    display: flex;
    column-gap: 24px;
    align-items: center;
    margin-bottom: 16px;

    svg {
      flex-shrink: 0;
    }

    .cart-title {
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      ${responsive.sm`
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0em;
      `}
    }
  }


  .cart-body {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-bottom: 16px;

    .cart-question {
      line-height: 26px;
      letter-spacing: 0em;
    }
  }


  .cart-footer {
    display: flex;
    justify-content: space-between;

    .cart-btn-view {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      color: rgba(7, 116, 83, 1);
      height: auto;
      padding: 0;
    }

    .cart-answers-text {
      line-height: 26px;
      letter-spacing: 0em;
      color: rgba(81, 113, 133, 1);
    }
  }
`

export const StyledOtherDocumentationSectionWrapper = styled.div`
  .title {
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    margin-bottom: 39px;
    ${responsive.sm`
      margin-bottom: 15px;
    `}
  }

  .cart {
    border-radius: 30px;
    background: #FFF;
    max-width: 930px;
    width: 100%;
    padding: 32px;
    display: grid;
    grid-template-columns: 543px 128.585px;
    column-gap: 115.41px;
    align-items: center;
    ${responsive.xl`
      grid-template-columns: 482px 128.59px;
      column-gap: 24px;
      padding: 26px 24px 32px 24px;
    `}
    ${responsive.sm`
      grid-template-columns: 100%;
      row-gap: 24px;
    `}
  }

  .left-side {
    ${responsive.sm`
      order: 2;
    `}
    .cart-title {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      margin-bottom: 16px;
      ${responsive.xl`
        margin-bottom: 10px;
      `}
    }

    .cart-description {
      color: var(--independent-grey, #517185);
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 16px;
      ${responsive.xl`
        line-height: 26px;
        letter-spacing: 0em;
      `}
    }

    .cart-btn {
      padding: 0 24px;

      .cart-btn-text {
        color: #FFF;
        font-weight: 700;
        line-height: 27px;
      }
    }


  }


  .right-side {
    ${responsive.sm`
      order: 1;
    `}
    img {
    }
  }
`
