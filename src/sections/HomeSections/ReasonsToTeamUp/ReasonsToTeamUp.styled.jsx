import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledReasonsToTeamUp = styled.section`
  padding-top: 198px;
  padding-bottom: 197px;
  text-align: center;
  overflow: hidden;
  ${responsive.xl`
    padding: ${rem(120)} 0 ${rem(94)};
  `};
  ${responsive.sm`
    padding: ${rem(96)} 0;
    order: 8;
  `};

  .reasonsToTeamUpTitle {
    margin-bottom: 14px;
    ${responsive.sm`
      letter-spacing: 0.2px;
      margin-bottom: 14px;
    `};
  }

  .reasonsToTeamUpSubTitle {
    color: #517185;
    margin-bottom: 46px;
    ${responsive.xxl`
      margin-bottom: ${rem(62)};
    `}
    ${responsive.sm`
      margin-bottom: ${rem(39)};
    `};
  }

  .reasonsToTeamUpGrid {
    display: grid;
    grid-template-columns: repeat(3, 343px);
    justify-content: center;
    column-gap: 137px;
    row-gap: ${rem(37)};
    ${responsive.xxl`
      grid-template-columns: repeat(3, ${rem(320)});
    `}
    ${responsive.xl`
      grid-template-columns: repeat(2, ${rem(320)});
      justify-items: center;
      row-gap: ${rem(48)};
      justify-content: center;
      column-gap: ${rem(48)};
    `};

    ${responsive.sm`
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      column-gap: 0;
    `};

    ${responsive.sm`
      justify-items: start;
      justify-content: start;
      text-align: start;
      row-gap: ${rem(21)};
    `};

    li {
      ${responsive.sm`
        display: flex;
        align-items: center;
        gap: ${rem(24)};

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
          order: 6;
        }
        &:nth-child(5) {
          order: 6;
        }
        &:nth-child(6) {
          order: 5;
        }
      `};

      svg {
        margin-bottom: 10px;
        ${responsive.xxl`
          margin-bottom: ${rem(21)};
        `}
        ${responsive.sm`
          flex-shrink: 0;
          margin-bottom: 0;
        `};
      }

      .reasonsToTeamUpGridItemTitle {
        font-weight: 700;
        margin-bottom: 9px;
        ${responsive.xxl`
          margin-bottom: ${rem(16)};
        `}
        ${responsive.sm`
          margin-bottom: 0;
          font-weight: 400;
          br {
            display: none;
          }
        `};
      }

      .reasonsToTeamUpGridItemDescription {
        color: #517185;
        line-height: 24px;
        ${responsive.sm`
          display: none;
        `};
      }
    }
  }
`
