import styled from '@emotion/styled'
import {rem} from '@/utils/rem';
import {responsive} from '@/utils/response';

export const StyledHeroSectionWrapper = styled.section`
  padding-top: ${rem(111)};
  padding-bottom: ${rem(98)};
  overflow: hidden;

  ${responsive.lg`
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
    ${responsive.lg`
      display: flex;
      flex-direction: column-reverse;
    `};

    @media (max-width: 992px) {
      gap: ${rem(40)};
    }
    @media (max-width: 576px) {
      gap: 0;
      text-align: center;
    }


    .leftSide {
      .subTitle {
        color: #517185;
        border-radius: ${rem(50)};
        background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
        width: fit-content;
        padding: ${rem(7)} ${rem(16)};
        line-height: 1;
        margin-bottom: ${rem(24)};
        @media (max-width: 992px) {
          margin-bottom: ${rem(20)};
        }
        @media (max-width: 576px) {
          font-size: ${rem(24)};
          padding: ${rem(5)} ${rem(16)};
          margin: 0 auto ${rem(15)};
        }
      }

      .title {
        margin-bottom: ${rem(24)};
      }

      .paragraph {
        color: #517185;
        margin-bottom: ${rem(45)};
        @media (max-width: 576px) {
          font-size: ${rem(24)};
          line-height: ${rem(34)};
          margin-bottom: ${rem(30)};
          br {
            display: none;
          }
        }
      }

      .features {
        width: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: ${rem(20)};
        row-gap: ${rem(24)};
        margin-bottom: ${rem(45)};
        @media (max-width: 576px) {
          grid-template-columns: 1fr;
          margin: 0 auto ${rem(40)};
          row-gap: ${rem(14)};
        }

        li {
          display: flex;
          align-items: center;
          gap: ${rem(10.67)};

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
        @media (max-width: 576px) {
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
        }
      }

      .payment {
        .payment-descr {
          color: #517185;
          margin-bottom: ${rem(24)};
          @media (max-width: 576px) {
            text-align: start;
          }

        }

        .payment-list {
          display: flex;
          align-items: center;
          gap: ${rem(40)};
        }
      }
    }

    .rightSide {
      .graphic {
        width: 100%;
      }

      .graphic-mobile {
        display: none;
      }

      @media (max-width: 1400px) {
        display: flex;
        justify-content: center;

        .graphic {
          display: none;
        }

        .graphic-mobile {
          display: block;
        }
      }
      @media (max-width: 576px) {
        display: flex;
        justify-content: center;

        .graphic-mobile {
          display: none;
        }
      }
    }
  }
`
