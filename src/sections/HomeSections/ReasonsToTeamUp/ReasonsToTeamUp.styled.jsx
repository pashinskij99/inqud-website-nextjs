import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledReasonsToTeamUp = styled.section`
  padding-top: ${rem(240)};
  padding-bottom: ${rem(214)};
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
    margin-bottom: ${rem(24)};
    ${responsive.sm`
      margin-bottom: ${rem(15)};
    `};
  }

  .reasonsToTeamUpSubTitle {
    color: #517185;
    margin-bottom: ${rem(64)};
    ${responsive.xxl`
      margin-bottom: ${rem(62)};
    `}
    ${responsive.sm`
      margin-bottom: ${rem(39)};
    `};
  }

  .reasonsToTeamUpGrid {
    display: grid;
    grid-template-columns: repeat(3, ${rem(390)});
    justify-content: space-between;
    justify-self: center;
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
      `};

      svg {
        margin-bottom: ${rem(23)};
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
        margin-bottom: ${rem(14)};
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
        ${responsive.sm`
          display: none;
        `};
      }
    }
  }
`
