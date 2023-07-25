import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledPickSectionSection = styled.section`
  border-radius: ${rem(30)};
  background: var(--ambitious-green, #077453);
  padding-left: ${rem(63.5)};

  overflow: hidden;
  max-width: 1216px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  height: ${rem(344)};

  align-items: center;

  ${responsive.xl`
    padding: ${rem(92)} 0 !important;
    max-width: 100% !important;
    border-radius: 0;
    flex-direction: column;
    height: auto;
    text-align: center;
  `};
  ${responsive.sm`
    order: 5;
    order: 11;
  `}

  .pickTitle {
    color: white;
    flex-shrink: 0;
    ${responsive.xl`
      margin-bottom: ${rem(24)};
      font-weight: 400;
      line-height: ${rem(74.5)};
      .pickTitle10Minutes {
        margin-bottom: ${rem(11.5)};
      }
    `};
    ${responsive.sm`
      font-weight: 700;
      line-height: ${rem(50)};
      margin-bottom: ${rem(30)};
      .pickTitle10Minutes {
        margin-bottom: ${rem(6)};
      }
    `};
  }

  .pickListMobile {
    display: none;
    ${responsive.sm`
      display: block;
    `};
  }

  .pickListDontLose {
    ${responsive.sm`
      display: none;
    `};
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

    .pickListTitle {
      color: white;
      font-weight: 700;
      margin-bottom: ${rem(24)};
      ${responsive.xl`
        margin-bottom: ${rem(24)};
      `};

      ${responsive.sm`
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
          &:nth-child(1) {
            order: 2
          }
          &:nth-child(2) {
            order: 3
          }
          &:nth-child(3) {
            order: 1
          }
        `}
        ${responsive.sm`
          &:nth-child(1) {
            order: 1
          }
          &:nth-child(2) {
            order: 2
          }
          &:nth-child(3) {
            order: 3
          }
        `}

        .pickListItemText {
          color: white;
        }

        svg {
          flex-shrink: 0;
        }
      }
    }
  }

  .pickList10Minutes {
    ${responsive.xl`
      ul {
        gap: ${rem(21)};
      }
    `};

    ${responsive.sm`
      ul {
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
        background: #077453;
      `};

    ${responsive.sm`
        width: 100%;
        padding: 0 ${rem(16)};
      `};

    svg {
      margin-bottom: ${rem(16)};
      ${responsive.xl`
          display: none;
        `};
    }

    .pickPickDescription {
      color: white;
      margin-bottom: ${rem(32)};
      font-weight: 500;
      ${responsive.xl`
          display: none;
        `};
    }

    .pickPickButton {
      width: 100%;

      &.desktop {
        ${responsive.xl`
          display: none
        `}
      }
      &.mobile {
        display: none;
        ${responsive.xl`
          display: block;
        `}
      }
    }
  }
`
