import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledHeroSectionWrapper = styled.section`
  padding-top: ${rem(64)};
  padding-bottom: ${rem(98)};
  overflow: hidden;

  ${responsive.xxl`
    padding-top: ${rem(63)};
  `}
  ${responsive.xl`
    padding-top: ${rem(23)};
    padding-bottom: 0;
  `}
  ${responsive.sm`
    padding-top: ${rem(18)};
    text-align: center;
    order: 1;
  `}
  .container {
    display: flex;
    justify-content: space-between;
    column-gap: 127px;
    ${responsive.xxl`
      column-gap: 24px;
    `}
    ${responsive.xl`
      display: flex;
      flex-direction: column-reverse;
      row-gap: 40px;
    `};

    ${responsive.sm`
      gap: 0;
    `}
    .leftSide {
      .subTitle {
        color: #517185;
        border-radius: ${rem(50)};
        background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
        width: fit-content;
        padding: ${rem(7)} ${rem(16)};
        line-height: 1;
        margin-bottom: 19px;
        ${responsive.xxl`
          margin-bottom: ${rem(20)};
        `};
        ${responsive.xl`
          margin-bottom: ${rem(20)};
        `};
        ${responsive.sm`
          display: none;
          font-size: ${rem(24)};
          padding: ${rem(5)} ${rem(16)};
          margin: 0 auto ${rem(15)};
        `};
      }

      .title {
        margin-bottom: ${rem(24)};
        line-height: 70px;
        ${responsive.sm`
          font-size: ${rem(40)};
          font-weight: 700;
          margin-bottom: ${rem(8)};
          line-height: ${rem(46)};
          letter-spacing: .2px;
        `};
      }

      .paragraph {
        color: #517185;
        margin-bottom: 27px;
        ${responsive.xxl`
          margin-bottom: 27px;
        `}
        ${responsive.sm`
          font-size: ${rem(18)};
          line-height: ${rem(25.7)};
          margin-bottom: ${rem(32)};
        `};
      }

      .features {
        width: fit-content;
        display: grid;
        grid-template-columns: repeat(2, auto);
        column-gap: 24px;
        row-gap: 13px;
        margin-bottom: 45px;

        ${responsive.sm`
          grid-template-columns: 1fr 1fr;
          margin: 0 auto ${rem(40)};
          row-gap: 20px;
          column-gap: ${rem(14)};
        `};

        li {
          display: flex;
          align-items: center;
          gap: ${rem(10.67)};

          ${responsive.xxl`
            gap: ${rem(9)};
          `}

          ${responsive.sm`
            gap: ${rem(3)};
            &:nth-child(1) {
              order: 1;
            }
            &:nth-child(2) {
              order: 4;
            }
            &:nth-child(3) {
              order: 2;
            }
            &:nth-child(4) {
              order: 3;
            }
          `};

          ${responsive.sm`
            display: flex;
            flex-direction: column;
            align-items: center;
          `};

          svg {
            width: ${rem(21.333)};
            height: ${rem(21.333)};
          }

          .features-title {
            font-weight: 500;
            color: rgba(45, 52, 57, 1);
            ${responsive.sm`
              line-height: 22px;
            `}
            &.features-title-1 {
              ${responsive.sm`
              display: none;
            `}
            }
            &.features-title-2 {
              display: none;

              ${responsive.sm`
              display: block;
            `}
            }
          }
        }
      }

      .buttonsWrapper {
        display: flex;
        align-items: center;
        gap: ${rem(16)};
        margin-bottom: 64px;
        ${responsive.xl`
          margin-bottom: ${rem(65)};
        `}
        ${responsive.sm`
          flex-direction: column;
          gap: ${rem(6.5)};
          margin-bottom: ${rem(39.67)};
          .getStarted {
            width: 100%;
            display: flex;
            padding-left: 0;
            justify-content: center;
            position: relative;

            svg {
              position: absolute;
              right: ${rem(4)};
            }
          }

          .ghostButton {
            width: 100%;
          }
        `};
      }
    }

    .rightSide {
      .graphic {
        width: 595px;
        height: 595px;
      }

      ${responsive.xl`
        display: flex;
        justify-content: center;
        .graphic {
          max-width: 400px;
          height: 400px;
        }
      `};

      ${responsive.sm`
        display: flex;
        justify-content: center;

        .graphic {
          display: none;
        }
      `};
    }
  }

  @keyframes carousel {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`

export const StyledMobileGridWrapper = styled.div`
  display: none;
  gap: ${rem(8)};
  grid-template-columns: 1fr 1fr 1fr;
  width: fit-content;
  margin: 0 auto 24px;
  ${responsive.sm`
    display: grid;
  `}
`

export const StyledPaymentListWrapper = styled.div`
  .payment-descr {
    color: rgba(81, 113, 133, 0.800000011920929);
    margin-bottom: ${rem(24)};
    ${responsive.xl`
            margin-bottom: ${rem(13)};
          `}
    ${responsive.sm`
            text-align: start;
            margin-bottom: ${rem(16)};
          `};
  }

  .payment-list {
    display: flex;
    align-items: center;
    gap: ${rem(32)};
    overflow: auto;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    ${responsive.xxl`
            gap: ${rem(33)};
          `}
    ${responsive.sm`
            gap: ${rem(25)};
          `}
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    li {
      display: flex;
      align-items: center;
      gap: ${rem(10)};

      /* &:nth-last-child(1),
      &:nth-last-child(2),
      &:nth-last-child(3),
      &:nth-last-child(4) {
        display: none;

        ${responsive.xl`
          display: flex;
        `}
      } */

      .icon-wrapper {
        position: relative;
        display: flex;

        img {
          position: relative;
          width: ${rem(32)};
          height: ${rem(32)};
          border-radius: 50%;

          z-index: 1;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;

          background-color: rgba(154, 177, 192, 0.2);
        }

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 95%;
          height: 95%;
          background-color: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
      }

      h5 {
        color: rgba(129, 158, 176, 0.8);
        ${responsive.sm`
                font-size: 24px;
              `}
      }
    }
  }
`
