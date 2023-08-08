import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledContactWrapper = styled.section`
  padding: 120px 0 124px;
  background: rgba(7, 116, 83, 1);
  position: relative;
  ${responsive.xxl`
    padding: 111px 0 124px;
  `}
  ${responsive.xl`
    padding: 111px 0 112px;
  `}
  ${responsive.sm`
    padding: 102px 0 104px;
    background: transparent;
  `}
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form {
    border-radius: 30px;
    background: var(--clarity-white, #fff);
    padding: 40px;
    max-width: 498px;
    width: 100%;
    ${responsive.sm`
      padding: 0px;
    `}
  }
  .title {
    color: var(--directness-black, #2d3439);
    text-align: center;
    line-height: 42px; /* 131.25% */
    margin-bottom: 32px;
    ${responsive.xxl`
      margin-bottom: 24px;
    `}
    ${responsive.sm`
      color: var(--directness-black, #2D3439);
      font-size: 32px;
      line-height: 42px;
      text-align: start;
    `}
    span {
      display: contents;
      font-weight: 700;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 200px);
    justify-content: center;
    text-align: center;
    column-gap: 16px;
    margin-bottom: 34px;
    ${responsive.sm`
      grid-template-columns: 100%;
      text-align: start;
      row-gap: 2px;
      margin-bottom: 22px;
    `}
    li {
      ${responsive.sm`
        display: flex;
        align-items: flex-start;
        column-gap: 16px;
      `}
      svg {
        margin-bottom: 12px;
        flex-shrink: 0;
      }
      .grid-title {
        color: rgba(81, 113, 133, 1);
        line-height: 24px;
        letter-spacing: 0em;
      }
    }
  }

  .input {
    margin-bottom: 22px;
    p {
      color: rgba(45, 52, 57, 1);
      margin-left: 16px;
    }
    input {
      padding-left: 16px !important;
    }
  }
  .textarea {
    textarea {
      margin-bottom: 0px;
    }
    margin-bottom: 32px;
  }
  .submit-btn {
    width: 100%;
    margin-bottom: 16px;

    &.submit-btn-1 {
      ${responsive.xxl`
        display: none;
      `}
    }
    &.submit-btn-2 {
      display: none;
      ${responsive.xxl`
        display: block;
      `}
    }
  }
  .description {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;

    color: #517185;
  }

  .submit-btn {
    height: 56px;
    display: inline-block;
    border-radius: 54px;
    background: #819eb0;
    transition: 0.3s ease-in-out;
    p {
      color: rgba(255, 255, 255, 1);
      font-weight: 700;
    }

    &:hover {
      background: #7fa8c2;
    }
  }
`
