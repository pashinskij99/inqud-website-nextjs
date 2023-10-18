'use client'

import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledFeaturesB2CSectionWrapper = styled.section`
  --max-width-text: 320px;

  padding-top: 200px;
  ${responsive.xl`
    --max-width-text: 275px;
  
    padding-top: 120px;
  `}
  ${responsive.sm`
    --max-width-text: 100%;

    padding-top: 106px;
  `}
  .container {
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 440px);
    gap: 40px;

    ${responsive.xxl`
      grid-template-columns: repeat(3, 389px);
      gap: 24px;
    `}
    ${responsive.xl`
      justify-content: center;
      grid-template-columns: repeat(2, 332px);
      align-items: flex-start;
      gap: 24px;
    `}
    ${responsive.sm`
      grid-template-columns: 1fr;
      row-gap: 41px;
    `}
  }
  .features-grid-item {
    display: grid;
    justify-content: center;
    border-radius: 30px;
    background: #f2f5f7;
    padding: 40px 32px;
    text-align: center;

    ${responsive.xxl`
      padding: 40px 34.5px;
    `}
    ${responsive.xl`
      padding: 32px 6px;
    `}
    ${responsive.sm`
      background: transparent;
      padding: 0;
      border-radius: 0;
    `}

    &:nth-of-type(1) {
      order: 1;
    }
    &:nth-of-type(2) {
      order: 2;
    }
    &:nth-of-type(3) {
      order: 3;
    }
    &:nth-of-type(4) {
      order: 4;
      ${responsive.xxl`
        order: 5;
      `}
    }
    &:nth-of-type(5) {
      order: 5;
      ${responsive.xxl`
        order: 4;
      `}
    }
    &:nth-of-type(6) {
      order: 6;
    }
  }
  img {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto 24px;
    ${responsive.sm`
      margin: 0 auto 16.01px;
    `}
  }
  .title {
    font-weight: 700;
    line-height: 42px;
    margin-bottom: 8px;
    max-width: var(--max-width-text);
    ${responsive.sm`
      line-height: 32px;
      margin-bottom: 0;
    `}
  }
  .description {
    font-weight: 400;
    line-height: 24px;
    max-width: var(--max-width-text);

    ${responsive.sm`
      display: none;
    `}
  }
`
