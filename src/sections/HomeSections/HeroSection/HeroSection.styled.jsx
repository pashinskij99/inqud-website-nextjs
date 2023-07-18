import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledHeroSectionWrapper = styled.section`
  padding-top: ${rem(111)};
  padding-bottom: ${rem(98)};
  overflow: hidden;

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
            color: #517185;
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
            svg {
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

      .graphic-mobile {
        display: none;
      }

      ${responsive.xl`
        display: flex;
        justify-content: center;

        .graphic {
          display: none;
        }

        .graphic-mobile {
          display: block;
        }
      `};

      ${responsive.xs`
        display: flex;
        justify-content: center;

        .graphic-mobile {
          display: none;
        }
      `};
    }
  }
`
