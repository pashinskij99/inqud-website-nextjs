import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledHeroSectionWrapper = styled.section`
  padding-top: ${rem(90)};
  padding-bottom: ${rem(98)};
  overflow: hidden;
  ${responsive.xxl`
    padding-top: ${rem(64)};
  `}
  ${responsive.xl`
    padding-top: ${rem(21)};
    padding-bottom: 0;
  `}
  ${responsive.xs`
    padding-top: ${rem(35)};
  `}
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${rem(44)};
    ${responsive.xl`
      display: flex;
      flex-direction: column-reverse;
      gap: ${rem(40)};
    `};

    ${responsive.xs`
      gap: 0;
      text-align: center;
    `}
    .leftSide {
      .subTitle {
        color: #517185;
        border-radius: ${rem(50)};
        background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
        width: fit-content;
        padding: ${rem(7)} ${rem(16)};
        line-height: 1;
        margin-bottom: ${rem(24)};
        ${responsive.xl`
          margin-bottom: ${rem(20)};
        `};
        ${responsive.xs`
          font-size: ${rem(24)};
          padding: ${rem(5)} ${rem(16)};
          margin: 0 auto ${rem(15)};
        `};
      }

      .title {
        margin-bottom: ${rem(24)};
      }

      .paragraph {
        color: #517185;
        margin-bottom: ${rem(45)};
        ${responsive.xxl`
          margin-bottom: ${rem(30)};
        `}
        ${responsive.xs`
          font-size: ${rem(24)};
          line-height: ${rem(34)};
          margin-bottom: ${rem(30)};
          br {
            display: none;
          }
        `};
      }

      .features {
        width: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: ${rem(20)};
        row-gap: ${rem(16)};
        margin-bottom: ${rem(45)};
        ${responsive.xxl`
          column-gap: ${rem(10)};
          row-gap: ${rem(10)};
        `}
        ${responsive.xs`
          grid-template-columns: 1fr;
          margin: 0 auto ${rem(40)};
          row-gap: ${rem(14)};
        `};

        li {
          display: flex;
          align-items: center;
          gap: ${rem(10.67)};

          svg {
            width: ${rem(21.333)};
            height: ${rem(21.333)};
          }

          p {
            color: rgba(45, 52, 57, 1);
          }
        }
      }

      .buttonsWrapper {
        display: flex;
        align-items: center;
        gap: ${rem(16)};
        margin-bottom: ${rem(80)};
        ${responsive.xs`
          flex-direction: column;
          gap: ${rem(6.5)};
          margin-bottom: ${rem(56)};
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

      .payment {
        .payment-descr {
          color: rgba(81, 113, 133, 0.800000011920929);
          margin-bottom: ${rem(24)};
          ${responsive.xs`
            text-align: start;
          `};
        }

        .payment-list {
          display: flex;
          align-items: center;
          gap: ${rem(32)};
          overflow: auto;
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */

          &::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
          li {
            display: flex;
            align-items: center;
            gap: ${rem(10)};

            &:nth-last-child(1),
            &:nth-last-child(2),
            &:nth-last-child(3),
            &:nth-last-child(4) {
              display: none;

              ${responsive.xl`
                  display: flex;
              `}
            }
            .icon-wrapper {
              position: relative;
              display: flex;
              svg {
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
            }
          }
        }
      }
    }

    .rightSide {
      .graphic {
        width: 100%;
        height: 100%;
      }

      ${responsive.xl`
        display: flex;
        justify-content: center;
        .graphic {
          max-width: ${rem(407.186)};
          height: ${rem(407.186)};
        }
      `};

      ${responsive.xs`
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
