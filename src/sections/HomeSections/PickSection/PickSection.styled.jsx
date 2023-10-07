'use client'

import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledPickSectionSection = styled.section`
  border-radius: ${rem(30)};
  background: var(--ambitious-green, #077453);
  padding-left: ${rem(63.5)};

  overflow: hidden;
  /* max-width: 1216px; */
  /* width: 100%; */
  display: flex;
  justify-content: space-between;

  height: ${rem(344)};

  align-items: center;

  ${responsive.xl`
    max-width: 100% !important;
    border-radius: 0;
    flex-direction: column;
    height: auto;
    text-align: center;

    padding-left: ${rem(0)};
  `};

  ${responsive.sm`
    display: flex;
    padding-left: 16px !important;
    padding-right: 16px !important;
    order: 5;
    order: 11;
    width: 100%;
  `}
  .container {
    display: contents;
    ${responsive.xl`
      display: grid;
      grid-template-columns: 317.33px 312px;
      padding-left: 39.5px !important;
      padding-right: 39.5px !important;
      justify-content: space-between;
      column-gap: 59.67px;
      padding-top: 96px !important;
      padding-bottom: 72px !important;
      row-gap: 24px;
    `}
    ${responsive.sm`
      display: flex;
      padding-left: 16px !important;
      padding-right: 16px !important;
      order: 5;
      order: 11;
      flex-direction: column;
      align-items: center;
    `}
  }
  .pickTitle {
    color: white;
    flex-shrink: 0;

    &.pickTitleApi {
      max-width: 400px;
      ${responsive.xl`
        font-size: 40px;
        font-weight: 400;
        line-height: 46px;
        margin-bottom: 40px;
        max-width: 100%;
      `}
      ${responsive.sm`
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 50px;
        margin-bottom: 13px;
      `}
      span {
        ${responsive.sm`
          display: contents;
          text-align: center;
        `}
      }
      .br-desktop {
        ${responsive.xl`
          display: none;
        `}
      }
      .br-tablet {
        display: none;
        ${responsive.xl`
          display: block;
        `}
        ${responsive.sm`
          display: none;
        `}
      }
      .br-mobile {
        display: none;

        ${responsive.sm`
          display: block;
        `}
      }

      span {
        font-weight: 700;
      }
    }
    ${responsive.xxl`
      .pickTitle10Minutes {
        line-height: 62px;
      }
    `};
    ${responsive.xl`
      margin-bottom: ${rem(24)};
      font-weight: 400;
      grid-column-start: 1;
      grid-column-end: 4;
      text-align: start;
      line-height: 62px;
      .pickTitleDontLose {
        br {
          display: none;
        }
      }
      .pickTitle10Minutes {
        margin-bottom: ${rem(11.5)};
        br {
          display: none;
        }
      }
    `};
    ${responsive.sm`
      text-align: center;
      font-weight: 700;
      line-height: 46px;
      margin-bottom: 6px;
      max-width: 300px; 
      .pickTitle10Minutes {
        line-height: 46px;
        margin-bottom: ${rem(6)};
        br {
          display: block;
        }
      }
    `};

    .pickTitle10Minutes {
      max-width: 390px;
      ${responsive.xl`
        max-width: 100%; 
      `}
    }
  }

  .pickListWrapper {
    ${responsive.xl`
      align-self: center;
      text-align: start;
    `}
  }

  .pickList {
    flex-shrink: 0;
    margin-left: ${rem(20)};
    ${responsive.xl`
      margin-bottom: ${rem(40)};
      margin-left: 0;
    `};
    ${responsive.sm`
      margin-bottom: ${rem(38)};
    `};

    &.pickListApi {
      ul {
        ${responsive.xl`
          row-gap: 16px;
        `}

        li {
          &:nth-of-type(1) {
            ${responsive.xl`
              order: 1;
            `}
          }
          &:nth-of-type(2) {
            order: 2;
            ${responsive.xl`
              order: 2;
            `}
          }
          &:nth-of-type(3) {
            ${responsive.xl`
              order: 3;
            `}
          }
          p {
            white-space: nowrap;
          }
        }
      }
    }

    .pickListTitle {
      color: white;
      font-weight: 700;
      margin-bottom: ${rem(24)};
      ${responsive.xl`
        margin-bottom: ${rem(24)};
      `};

      ${responsive.sm`
        text-align: center;
        font-size: ${rem(24)};
        font-weight: 700;
        margin-bottom: ${rem(28)};
      `};
    }

    ul {
      display: flex;
      flex-direction: column;
      row-gap: ${rem(16)};
      ${responsive.xl`
        text-align: start;
        row-gap: ${rem(11)};
      `};
      ${responsive.sm`
        row-gap: ${rem(11)};
      `};

      li {
        display: flex;
        align-items: center;
        font-weight: 500;
        gap: ${rem(16)};

        ${responsive.xl`
          &:nth-of-type(1) {
            order: 2
          }
          &:nth-of-type(2) {
            order: 3
          }
          &:nth-of-type(3) {
            order: 1
          }
        `}
        ${responsive.sm`
          &:nth-of-type(1) {
            order: 1
          }
          &:nth-of-type(2) {
            order: 2
          }
          &:nth-of-type(3) {
            order: 3
          }
        `}
        .pickListItemText {
          color: white;
        }

        img,
        svg {
          flex-shrink: 0;
        }
      }
    }
  }

  .pickList10Minutes {
    max-width: 300px;
    ${responsive.sm`
      max-width: 100%;
    `}
    ${responsive.xl`
      ul {
        gap: ${rem(21)};
        li {
          &:nth-of-type(1) {
            order: 1;
            br {
              display: none;
            }
          }
          &:nth-of-type(2) {
            order: 2
          }
          &:nth-of-type(3) {
            order: 3
          }
        }
      }
    `};

    ${responsive.sm`
      ul {
        max-width: 308px;
        row-gap: ${rem(20)};
      }
    `};
  }

  .pickPick {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    padding: 0 ${rem(54)};
    background: var(--ambitious-green, #0f674d);

    ${responsive.xl`
      background: rgba(45, 52, 57, 0.2);
      border-radius: 30px;
      padding-left: 34px;
      padding-right: 34px;
      transform: translateY(-25px);
      padding-top: 32px;
      padding-bottom: 32px;
    `};

    ${responsive.sm`
      background: transparent;
      width: 100%;
      padding: 0;
    `};

    img {
      margin-bottom: ${rem(16)};
      ${responsive.sm`
        display: none;
      `};
    }

    .pickPickDescription {
      color: white;
      margin-bottom: ${rem(32)};
      font-weight: 500;
      max-width: 187px;
      ${responsive.sm`
        display: none;
      `};
    }

    .pickPickButton {
      width: 100%;
      ${responsive.sm`
        height: 48px;
      `};
    }
  }
`
