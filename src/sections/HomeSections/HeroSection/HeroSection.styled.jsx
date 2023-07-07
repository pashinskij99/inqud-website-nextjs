import styled from '@emotion/styled'

export const StyledHeroSectionWrapper = styled.section`
  padding-top: 11.1rem;
  padding-bottom: 9.8rem;
  overflow: hidden;
  @media (max-width: 1400px) {
    padding-top: 2.4rem;
    padding-bottom: 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.4rem;
    @media (max-width: 1400px) {
      display: flex;
      flex-direction: column-reverse;
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
        @media (max-width: 576px) {
          margin: 0 auto;
          margin-bottom: 1.6rem;
        }
      }
      .title {
        margin-bottom: 2.4rem;
      }
      .paragraph {
        color: #517185;
        margin-bottom: 4.8rem;
      }
      .features {
        width: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 4rem;
        row-gap: 2.4rem;
        margin-bottom: 4.8rem;
        @media (max-width: 576px) {
          grid-template-columns: 1fr;
          margin: 0 auto;
          margin-bottom: 4rem;
        }
        li {
          display: flex;
          align-items: center;
          gap: 1.067rem;
        }
      }
      .buttonsWrapper {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        margin-bottom: 8rem;
        @media (max-width: 576px) {
          flex-direction: column;
          gap: 1.2rem;
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
