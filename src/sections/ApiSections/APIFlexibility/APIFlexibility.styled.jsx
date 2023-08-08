import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledAPIFlexibilityWrapper = styled.section`
  padding: 200px 0;
  text-align: center;
  ${responsive.xl`
    padding: 120px 0;
  `}
  ${responsive.sm`
    padding: 97px 0 103px;
  `}
  .title {
    line-height: 62px;
    letter-spacing: 0em;
    margin-bottom: 16px;
    ${responsive.sm`
      line-height: 46px;
      letter-spacing: 0em;
    `}
  }
  .description {
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
    line-height: 24px;
    margin-bottom: 48px;
    color: rgba(81, 113, 133, 1);
    ${responsive.sm`
      margin-bottom: 32px;
    `}
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 440px);
    gap: 40px;

    ${responsive.xxl`
      grid-template-columns: repeat(3, 389px);
      gap: 24px;
      align-items: flex-start;
    `}
    ${responsive.xl`
      justify-content: center;
      grid-template-columns: repeat(2, 332px);
      align-items: flex-start;
      gap: 24px;
    `}
    ${responsive.sm`
      grid-template-columns: 1fr;
      row-gap: 40px;
    `}

    .features-grid-item {
      display: grid;
      justify-content: center;
      border-radius: 30px;
      background: #f2f5f7;
      padding: 40px 32px;
      text-align: center;

      ${responsive.xxl`
        padding: 40px 24px;
      `}
      ${responsive.xl`
        padding: 32px 24px;
      `}
      ${responsive.sm`
        background: transparent;
        padding: 0 10px;
        border-radius: 0;
      `}

      &:nth-child(1) {
        order: 1;
      }
      &:nth-child(2) {
        order: 2;
      }
      &:nth-child(3) {
        order: 3;
      }
      &:nth-child(4) {
        order: 4;
        ${responsive.xl`
          order: 5;
        `}
        ${responsive.sm`
          order: 4;
        `}
      }
      &:nth-child(5) {
        order: 5;
        ${responsive.xl`
          order: 4;
        `}
        ${responsive.sm`
          order: 5;
        `}
      }
      &:nth-child(6) {
        order: 6;
      }
    }
    svg {
      display: block;
      width: 64px;
      height: 64px;
      margin: 0 auto 24px;
      ${responsive.sm`
      margin: 0 auto 16.01px;
    `}
    }
    .features-grid-item-title {
      font-weight: 700;
      line-height: 42px;
      margin-bottom: 8px;
      max-width: var(--max-width-text);
      ${responsive.sm`
        font-size: 32px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: 0em;
        margin-bottom: 0;
      `}

      &.features-grid-item-title-1 {
        ${responsive.xl`
          display: none;
        `}
        ${responsive.sm`
          display: block;
        `}
      }
      &.features-grid-item-title-2 {
        display: none;
        ${responsive.xl`
          display: block;
        `}
        ${responsive.sm`
          display: none;
        `}
      }
    }
    .features-grid-item-description {
      font-weight: 400;
      line-height: 24px;
      max-width: var(--max-width-text);

      ${responsive.sm`
        display: none;
      `}

      &.features-grid-item-description-1 {
        ${responsive.xl`
          display: none;
        `}
      }
      &.features-grid-item-description-2 {
        display: none;
        ${responsive.xl`
          display: block;
        `}
        ${responsive.sm`
          display: none;
        `}
      }
    }
  }
`
