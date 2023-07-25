import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'
import { urbanist } from '@/utils/font'

export const StyledFeesBusinessWrapper = styled.section`
  ${responsive.sm`
    order: 3;
  `}
  .container {
    ${responsive.sm`
      padding: 0;
    `}
  }
  h1 {
    margin-bottom: ${rem(8)};
    ${responsive.sm`
      padding: 0 ${rem(20)};
      letter-spacing: 0.7px;
    `}
    span {
      display: contents;
      ${responsive.sm`
        display: none;
      `}
    }
  }
  h5 {
    color: rgba(81, 113, 133, 1);
    margin-bottom: ${rem(40)};
    ${responsive.xxl`
      margin-bottom: ${rem(40)};
    `}
    ${responsive.sm`
      margin-bottom: ${rem(19)};
      line-height: ${rem(26)};
      padding: 0 ${rem(20)};
    `}

    .br-desktop {
      ${responsive.xxl`
        display: none;
      `}
    }
    .br-1200 {
      display: none;
      ${responsive.xxl`
        display: block;
      `}
      ${responsive.xl`
        display: none;
      `}
    }
  }
  .content-wrapper {
    display: flex;
    justify-content: space-between;
    column-gap: ${rem(39)};
    margin-bottom: ${rem(32)};
    ${responsive.xxl`
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: ${rem(24)};
      margin-bottom: ${rem(30)};
    `}
    ${responsive.xl`
      display: flex;
      flex-direction: column;
      row-gap: ${rem(19)};
    `}
    ${responsive.sm`
      row-gap: 0;
      margin-bottom: 0;
    `}
  }

  table {
    position: relative;
    max-width: ${rem(560)};
    width: 100%;
    border-collapse: collapse;
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
      border: none;
      /* border-collapse: collapse; */
    }
    thead {
      margin-bottom: ${rem(8)};
      tr {
        width: 100%;
        th {
          &:first-child {
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
          &:last-child {
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
      &:before {
        content: '@';
        display: block;
        line-height: ${rem(7)};
        text-indent: -99999px;
      }
      tr {
        &:nth-child(odd) {
          border-radius: 16px;
          background: rgba(244, 245, 250, 1);
          ${responsive.sm`
            border-radius: 0;
          `}
        }

        td {
          height: ${rem(56)};
          ${responsive.sm`
            height: ${rem(56)};
          `}
          &:first-child {
            padding-left: ${rem(32)};
            ${responsive.sm`
              padding-left: ${rem(20)};
            `}
            p {
              font-weight: 700;
            }
          }
          &:last-child {
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
    padding: ${rem(40)};
    border-radius: 16px;
    background: var(--confident-light-grey, #f4f5fa);
    display: flex;
    max-width: ${rem(801)};
    width: 100%;
    justify-content: space-between;
    ${responsive.xxl`
      column-gap: ${rem(57)};
      padding: ${rem(34)} ${rem(24)};
    `};
    ${responsive.xl`
      padding: ${rem(40)} ${rem(24)};
      max-width: 100%;
      column-gap: ${rem(17)};
      margin: 0;
    `}
    ${responsive.sm`
      padding: ${rem(40)} ${rem(16)};
      flex-direction: column;
      row-gap: ${rem(11)};
      border-radius: 0;
    `}
    .cart-left-side {
      z-index: 1;
      flex-shrink: 0;
      h4 {
        font-weight: 700;
        .br-1200 {
          display: none;
        }
        ${responsive.xxl`
          .br-desktop {
            display: none;
          }
          .br-1200 {
            display: block;
          }
        `}
        ${responsive.xl`
          .br-desktop {
            display: block;
          }
          .br-1200 {
            display: none;
          }
        `}
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
      @media (max-width: 1536px) and (min-width: 1279px) {
        margin-top: ${rem(10)};
      }

      p {
        transform: translateY(-4%);

        ${responsive.xxl`
          .br-desktop {
            display: none;
          }
        `};
        ${responsive.xl`
          margin-bottom: ${rem(60)};
          transform: translateY(7%);

          .br-desktop {
            display: inline-block;
          }
        `};
        ${responsive.md`
          margin-bottom: ${rem(60)};
          .br-desktop {
            display: none;
          };
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
    ${responsive.xl`
      display: none;
    `}

    &.tablet {
      display: none;
      ${responsive.xl`
        display: block;
        br {
          display: none
        }
      `}
      ${responsive.sm`
        margin-bottom: ${rem(40)};
      `}
    }
    .description {
      display: inline-block;
      color: rgba(81, 113, 133, 1);
      ${responsive.sm`
        padding: 0 ${rem(16)};
      `}
      &:first-child {
        margin-bottom: ${rem(8)};
      }
      &:nth-child(3) {
        ${responsive.xl`
            margin-bottom: ${rem(10)};
          `}
      }

      &:nth-child(4) {
        ${responsive.xl`
            margin-bottom: ${rem(20)};
          `}
      }

      .br-desktop {
        ${responsive.xxl`
          display: none;
        `}
      }
      .br-1200 {
        display: none;
        ${responsive.xxl`
          display: block;
        `}
        ${responsive.xl`
          display: none;
        `}
      }

      &.hide {
        ${responsive.sm`
          display: none;
        `}
      }

      &.learnMore {
        display: none;
        position: relative;
        margin-bottom: ${rem(4)};

        ${responsive.sm`
          display: block;
        `}
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
      display: none;

      height: fit-content;
      padding: 0 0 0 ${rem(16)};
      color: #077453;
      font-size: ${rem(14)};
      font-weight: 700;
      line-height: ${rem(18)};
      ${urbanist.style};
      ${responsive.sm`
        display: block;
      `}
    }
  }
`
