'use client'

import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'
import { nunito } from '@/utils/font'

export const StyledFeesBusinessWrapper = styled.section`
  --left-side-max-width: 680px;

  ${responsive.xxl`
    --left-side-max-width: 596px;
  `}
  ${responsive.xl`
    --left-side-max-width: 100%;
  `}
  ${responsive.sm`
    order: 3;
  `}
  .container {
    ${responsive.sm`
      padding: 0;
    `}
  }

  .title-wrapper {
    max-width: var(--left-side-max-width);
  }

  .title {
    margin-bottom: 6px;

    ${responsive.sm`
      padding: 0 ${rem(20)};
      letter-spacing: 0.7px;
    `}
  }

  .description {
    color: rgba(81, 113, 133, 1);
    margin-bottom: 32px;
    line-height: 24px;

    ${responsive.sm`
      margin-bottom: ${rem(19)};
      line-height: ${rem(26)};
      padding: 0 ${rem(20)};
    `}
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;
    column-gap: 40px;
    margin-bottom: 34px;
    ${responsive.xxl`
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 24px;
      margin-bottom: 30px;
    `}
    ${responsive.xl`
      display: flex;
      flex-direction: column;
      row-gap: 26px;
      margin-bottom: 30px;
    `}
    ${responsive.sm`
      row-gap: 0;
      margin-bottom: 0;
    `}
  }

  table {
    position: relative;
    max-width: var(--left-side-max-width);

    width: 100%;
    border-collapse: collapse;
    border-bottom: 2px solid rgba(244, 245, 250, 1);

    ${responsive.xxl`
      max-width: 100%;
    `}
    ${responsive.xl`
      max-width: 100%;
    `}
    ${responsive.sm`
      margin-bottom: ${rem(26)};
    `}
    &,
    th,
    td {
      /* border: none; */
      /* border-collapse: collapse; */
    }

    thead {
      margin-bottom: ${rem(8)};

      tr {
        width: 100%;

        th {
          height: 32px;

          &:first-of-type {
            padding-left: ${rem(32)};
            ${responsive.sm`
              padding-left: ${rem(20)};
            `}
          }

          p {
            color: rgba(81, 113, 133, 1);
            width: max-content;
            font-weight: 700;
          }

          &:last-of-type {
            text-align: end;
            padding-right: ${rem(32)};

            ${responsive.sm`
              padding-right: ${rem(20)};
            `}
            p {
              width: 100%;
            }
          }
        }
      }
    }

    tbody {
      /* &:before {
        content: '@';
        display: block;
        line-height: ${rem(7)};
        text-indent: -99999px;
      } */

      tr {
        &:nth-of-type(odd) {
          border-radius: 16px;
          /* background: rgba(244, 245, 250, 1); */

          td:first-of-type {
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            background: rgba(244, 245, 250, 1);
          }

          td:last-of-type {
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            background: rgba(244, 245, 250, 1);
          }

          ${responsive.sm`
            border-radius: 0;
          `}
        }

        td {
          height: ${rem(56)};

          ${responsive.sm`
            height: ${rem(56)};
          `}
          &:first-of-type {
            padding-left: ${rem(32)};

            ${responsive.sm`
              padding-left: ${rem(20)};
            `}
            p {
              font-weight: 700;
            }
          }

          &:last-of-type {
            text-align: end;
            padding-right: ${rem(32)};
            ${responsive.sm`
              padding-right: ${rem(20)};
            `}
          }
        }
      }
    }
  }

  .cart {
    overflow: hidden;
    position: relative;
    padding: 42px 24px 29px;
    border-radius: 16px;
    background: var(--confident-light-grey, #f4f5fa);
    display: grid;
    grid-template-columns: 298px 294px;
    max-width: var(--left-side-max-width);
    width: 100%;
    justify-content: space-between;
    column-gap: 24px;
    ${responsive.xxl`
      grid-template-columns: repeat(2, 262px);
      padding: 40px 24px 31px;
    `};

    ${responsive.xl`
      grid-template-columns: repeat(2, 308px);
      padding: ${rem(40)} ${rem(24)};
      max-width: 100%;
      column-gap: 24px;
      margin: 0;
    `}
    ${responsive.sm`
      display: flex;
      padding: ${rem(40)} ${rem(16)};
      flex-direction: column;
      row-gap: ${rem(11)};
      border-radius: 0;
    `}
    .cart-left-side {
      z-index: 1;
      flex-shrink: 0;

      h3 {
        font-weight: 700;
        ${responsive.sm`
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: 42px;
        `}
      }
    }

    .cart-right-side {
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      p {
        transform: translateY(14px);

        ${responsive.xxl`
          transform: translateY(5px);
        `};
        ${responsive.xl`
          margin-bottom: 66px;
          transform: translateY(7%);
        `};
        ${responsive.sm`
          margin-bottom: ${rem(36)};
        `}
      }

      button {
        ${responsive.sm`
          width: 100%;
        `}
      }
    }

    .cart-back {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 0;
      transform: translate(-50%, 50%);
      ${responsive.sm`
        left: auto;
        right: 0;
        transform: translate(50%, 50%);
      `}
    }
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    max-width: var(--left-side-max-width);

    p {
      display: inline-block;
      color: rgba(81, 113, 133, 1);
      line-height: 18px;
      font-size: 14px;
      letter-spacing: 0em;

      ${responsive.xl`
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
      `}
      ${responsive.sm`
        padding: 0 ${rem(16)};
      `}
      &:first-of-type {
        margin-bottom: 8px;
      }

      &:nth-of-type(3) {
        ${responsive.xl`
          margin-bottom: ${rem(8)};
        `}
      }

      &:nth-of-type(4) {
        ${responsive.xl`
          margin-bottom: 14px;
        `}
      }

      &.learnMore {
        position: relative;
        margin-bottom: ${rem(4)};

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            360deg,
            #fff 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
      }
    }

    .learnMoreButton {
      height: fit-content;
      width: fit-content;
      padding: 0 0 0 16px;
      color: #077453;
      font-size: ${rem(14)};
      font-weight: 700;
      line-height: ${rem(18)};
      ${nunito.style};
      ${responsive.xl`
        margin-bottom: 40px;
      `}
    }
  }
`
