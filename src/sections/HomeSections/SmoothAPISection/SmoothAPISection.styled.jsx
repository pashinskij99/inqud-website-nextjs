import styled from '@emotion/styled'

export const StyledSmoothAPISection = styled.section`
  padding-top: 24rem;
  padding-bottom: 41rem;
  @media (max-width: 1200px) {
    padding: 12rem 0;
  }
  @media (max-width: 576px) {
    padding: 9.6rem 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.5rem;
    align-items: center;
    @media (max-width: 1200px) {
      gap: 0;
      grid-template-columns: 1fr;
    }
    .leftSide {
      @media (max-width: 1200px) {
        display: none;
      }
    }
    .rightSide {
      .smoothAPISubTitle {
        border-radius: 5rem;
        background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
        color: #517185;
        margin-bottom: 2.4rem;
        line-height: 1;
        padding: 0.7rem 1.6rem;
        width: fit-content;
        margin-bottom: 2.1rem;
        @media (max-width: 1200px) {
          margin-right: auto;
          margin-left: auto;
        }
        @media (max-width: 992px) {
          padding: 0.5rem 1.6rem;
          margin-bottom: 2.3rem;
        }
        @media (max-width: 576px) {
          margin-bottom: 1.8rem;
        }
      }
      .smoothAPITitle {
        margin-bottom: 2.4rem;
        @media (max-width: 1200px) {
          text-align: center;
          margin-bottom: 4rem;
        }
        @media (max-width: 576px) {
          margin-bottom: 3.2rem;
        }
      }
      .smoothAPIImageTablet {
        display: none;
        @media (max-width: 1200px) {
          display: block;
          object-fit: contain;
          max-width: 40.0004rem;
          height: 277.15px;
          margin: 0 auto 4rem;
        }
        @media (max-width: 576px) {
          max-width: 100%;
          margin-bottom: 3.2rem;
        }
      }
      .smoothAPIDescription {
        margin-bottom: 5.6rem;
        @media (max-width: 576px) {
          display: none;
        }
      }
      .smoothAPIDescriptionMobile {
        display: none;
        @media (max-width: 576px) {
          display: block;
          margin-bottom: 4rem;
          text-align: center;
          font-size: 2.4rem;
          line-height: 3.4rem;
        }
      }
      .smoothAPIGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 4rem;
        row-gap: 3.5rem;
        margin-bottom: 5.6rem;
        @media (max-width: 576px) {
          grid-template-columns: 1fr;
          gap: 1.6rem;
          margin-bottom: 4.8rem;
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }
        .smoothAPIGridItem {
          @media (max-width: 576px) {
            display: flex;
            align-items: center;
            gap: 1.2rem;
          }
          svg {
            display: none;
            @media (max-width: 576px) {
              display: block;
            }
          }
          .smoothAPIGridItemTitle {
            margin-bottom: 1.6rem;
            font-weight: 700;
            @media (max-width: 576px) {
              font-weight: 400;
              margin-bottom: 0;
            }
          }
          .smoothAPIGridItemDescription {
            color: #517185;
            font-weight: 500;
            @media (max-width: 576px) {
              display: none;
            }
          }
        }
      }

      .smoothAPIButtonWrapper {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        @media (max-width: 576px) {
          flex-direction: column;
          gap: 0.8rem;
        }
        .smoothAPIButtonGetStarted {
          @media (max-width: 576px) {
            width: 100%;
          }
        }
        .smoothAPIButtonGhost {
          @media (max-width: 576px) {
            width: 100%;
          }
        }
      }
    }
  }
`
