'use client'

import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledReasonsToTeamUp = styled.section`
  padding-top: 198px;
  padding-bottom: 197px;
  text-align: center;
  overflow: hidden;
  ${responsive.xxl`
    padding-top: 194px;
  `};
  ${responsive.xl`
    padding: ${rem(120)} 0 ${rem(119)};
  `};
  ${responsive.sm`
    padding: 96px 0;
    order: 8;
  `};

  .reasonsToTeamUpTitle {
    margin-bottom: 14px;
    ${responsive.xl`
      text-align: start;
      line-height: 62px;
    `}
    ${responsive.sm`
      line-height: 46px;
      text-align: center;
      letter-spacing: 0.2px;
      margin-bottom: 14px;
    `};
  }

  .reasonsToTeamUpSubTitle {
    color: #517185;
    margin-bottom: 46px;
    ${responsive.xl`
      text-align: start;
      line-height: 30px;
      margin-bottom: 64px;
    `}
    ${responsive.sm`
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: center;

      margin-bottom: 42px;
    `};
  }

  .reasonsToTeamUpGrid {
    display: grid;
    grid-template-columns: repeat(3, 343px);
    justify-content: center;
    column-gap: 137px;
    row-gap: ${rem(37)};
    ${responsive.xxl`
      column-gap: 70.5px;
    `}
    ${responsive.xl`
      grid-template-columns: repeat(2, 332px);
      justify-items: center;
      row-gap: 39px;
      justify-content: center;
      column-gap: 25px;
      align-items: flex-start;
    `};

    ${responsive.sm`
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      column-gap: 0;
      justify-items: start;
      justify-content: start;
      text-align: start;
      row-gap: 24px;
    `};

    li {
      ${responsive.xl`
        row-gap: 17px;
        column-gap: 16px;
        display: grid;
        grid-template-columns: 64px 252px;
        text-align: start;
      `}
      ${responsive.sm`
        display: flex;
        align-items: center;
        gap: ${rem(24)};

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
          order: 6;
        }
        &:nth-of-type(5) {
          order: 6;
        }
        &:nth-of-type(6) {
          order: 5;
        }
      `};

      img {
        margin-bottom: 10px;
        ${responsive.xl`
          margin-bottom: 0;
        `}
        ${responsive.sm`
          flex-shrink: 0;
          margin-bottom: 0;
        `};
      }

      .reasonsToTeamUpGridItemTitle {
        font-weight: 700;
        margin-bottom: 9px;
        ${responsive.xl`
          grid-column-start: 2;
          grid-column-end: 2;
          margin-bottom: 0;
          line-height: 30px;
          display: flex;
          align-items: center;
        `}
        ${responsive.sm`
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: 0em;
          br {
            display: none;
          }
        `};
      }

      .reasonsToTeamUpGridItemDescription {
        color: #517185;
        line-height: 24px;
        ${responsive.xl`
          grid-column-start: 1;
          grid-column-end: 3;
        `}
        ${responsive.sm`
          display: none;
        `};
      }
    }
  }
`
