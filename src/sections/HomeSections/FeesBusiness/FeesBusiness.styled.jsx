import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledFeesBusinessWrapper = styled.section`
  h1 {
    margin-bottom: ${rem(8)};
  }
  h5 {
    color: rgba(81, 113, 133, 1);
    margin-bottom: ${rem(40)};
    ${responsive.xxl`
      margin-bottom: ${rem(40)};
    `}
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
      margin-bottom: ${rem(22)};
    `}
    ${responsive.xl`
      display: flex;
      flex-direction: column;
      row-gap: ${rem(39)};
    `}
  }

  table {
    position: relative;
    max-width: ${rem(560)};
    width: 100%;
    ${responsive.xxl`
      max-width: 100%;
    `}
    ${responsive.xl`
      max-width: 100%;
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
          }
          p {
            color: rgba(81, 113, 133, 1);
            width: max-content;
            font-weight: 700;
          }
          &:last-child {
            text-align: end;
            padding-right: ${rem(32)};
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
        line-height: ${rem(8)};
        text-indent: -99999px;
      }
      tr {
        position: relative;
        &:nth-child(odd) {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 16px;
            background: rgba(244, 245, 250, 1);
            z-index: -1;
          }
        }

        td {
          height: ${rem(56)};
          &:first-child {
            padding-left: ${rem(32)};
            p {
              font-weight: 700;
            }
          }
          &:last-child {
            text-align: end;
            padding-right: ${rem(32)};
          }
        }
      }
    }
  }

  .cart {
    overflow: hidden;
    position: relative;
    padding: ${rem(40)};
    /* margin-top: ${rem(26)}; */
    border-radius: 16px;
    background: var(--confident-light-grey, #f4f5fa);
    display: flex;
    max-width: ${rem(801)};
    width: 100%;
    justify-content: space-between;
    ${responsive.xxl`
      column-gap: ${rem(44)};
      padding: ${rem(34)} ${rem(24)};
    `};
    ${responsive.xl`
      padding: ${rem(40)} ${rem(24)};
      max-width: 100%;
      margin: 0;
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
        ${responsive.xxl`
          .br-desktop {
            display: none;
          }
        `};
        ${responsive.xl`
          margin-bottom: ${rem(60)};
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
      }
    }

    .cart-back {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 0;
      transform: translate(-50%, 50%);
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
    }
    .description {
      display: inline-block;
      color: rgba(81, 113, 133, 1);
      &:first-child {
        margin-bottom: ${rem(8)};
      }
    }
  }
`
