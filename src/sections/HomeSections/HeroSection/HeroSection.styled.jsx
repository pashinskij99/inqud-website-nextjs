import styled from '@emotion/styled'

export const StyledHeroSectionWrapper = styled.section`
  padding-top: 11.1rem;
  padding-bottom: 9.8rem;
  overflow: hidden;
  @media (max-width: 1400px) {
    padding-top: 2.1rem;
    padding-bottom: 0;
  }
  @media (max-width: 576px) {
    padding-top: 3.5rem;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.4rem;
    @media (max-width: 1400px) {
      display: flex;
      flex-direction: column-reverse;
    }
    @media (max-width: 992px) {
      gap: 4rem;
    }
    @media (max-width: 576px) {
      gap: 0;
      text-align: center;
    }
    .leftSide {
      .subTitle {
        color: #517185;
        border-radius: 50px;
        background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
        width: fit-content;
        padding: 0.7rem 1.6rem;
        line-height: 1;
        margin-bottom: 2.4rem;
        @media (max-width: 992px) {
          margin-bottom: 2rem;
        }
        @media (max-width: 576px) {
          font-size: 2.4rem;
          padding: 0.5rem 1.6rem;
          margin: 0 auto;
          margin-bottom: 1.5rem;
        }
      }
      .title {
        margin-bottom: 2.4rem;
      }
      .paragraph {
        color: #517185;
        margin-bottom: 4.5rem;
        @media (max-width: 576px) {
          font-size: 2.4rem;
          line-height: 34px;
          margin-bottom: 3rem;
          br {
            display: none;
          }
        }
      }
      .features {
        width: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        row-gap: 2.4rem;
        margin-bottom: 4.5rem;
        @media (max-width: 576px) {
          grid-template-columns: 1fr;
          margin: 0 auto;
          margin-bottom: 4rem;
          row-gap: 1.4rem;
        }
        li {
          display: flex;
          align-items: center;
          gap: 1.067rem;
          p {
            color: #517185;
          }
        }
      }
      .buttonsWrapper {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        margin-bottom: 8rem;
        @media (max-width: 576px) {
          flex-direction: column;
          gap: .65rem;
          margin-bottom: 5.6rem;
          .getStarted {
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            svg {
              position: absolute;
              right: 0.4rem;
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
          margin-bottom: 2.4rem;
          @media (max-width: 576px) {
            text-align: start;
          }

        }
        .payment-list {
          display: flex;
          align-items: center;
          gap: 4rem;
        }
      }
    }
    .rightSide {
      .graphic {
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
