import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledSmoothAPISection = styled.section`
  padding-top: ${rem(240)};
  padding-bottom: ${rem(410)};
  @media (max-width: 1200px) {
    padding: ${rem(120)} 0;
  }
  @media (max-width: 576px) {
    padding: ${rem(96)} 0;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${rem(45)};
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
        border-radius: ${rem(50)};
        background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
        color: #517185;
        margin-bottom: ${rem(24)};
        line-height: 1;
        padding: ${rem(7)} ${rem(16)};
        width: fit-content;
        margin-bottom: ${rem(21)};
        @media (max-width: 1200px) {
          margin-right: auto;
          margin-left: auto;
        }
        @media (max-width: 992px) {
          padding: ${rem(5)} ${rem(16)};
          margin-bottom: ${rem(23)};
        }
        @media (max-width: 576px) {
          margin-bottom: ${rem(18)};
        }
      }

      .smoothAPITitle {
        margin-bottom: ${rem(24)};
        @media (max-width: 1200px) {
          text-align: center;
          margin-bottom: ${rem(40)};
        }
        @media (max-width: 576px) {
          margin-bottom: ${rem(32)};
        }
      }

      .smoothAPIImageTablet {
        display: none;
        @media (max-width: 1200px) {
          display: block;
          object-fit: contain;
          max-width: ${rem(400.004)};
          height: ${rem(277.15)};
          margin: 0 auto ${rem(40)};
        }
        @media (max-width: 576px) {
          max-width: 100%;
          margin-bottom: ${rem(32)};
        }
      }

      .smoothAPIDescription {
        margin-bottom: ${rem(56)};
        @media (max-width: 576px) {
          display: none;
        }
      }

      .smoothAPIDescriptionMobile {
        display: none;
        @media (max-width: 576px) {
          display: block;
          margin-bottom: ${rem(40)};
          text-align: center;
          font-size: ${rem(24)};
          line-height: ${rem(34)};
        }
      }

      .smoothAPIGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: ${rem(40)};
        row-gap: ${rem(35)};
        margin-bottom: ${rem(56)};
        @media (max-width: 576px) {
          grid-template-columns: 1fr;
          gap: ${rem(16)};
          margin-bottom: ${rem(48)};
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }

        .smoothAPIGridItem {
          @media (max-width: 576px) {
            display: flex;
            align-items: center;
            gap: ${rem(12)};
          }

          svg {
            display: none;
            @media (max-width: 576px) {
              display: block;
            }
          }

          .smoothAPIGridItemTitle {
            margin-bottom: ${rem(16)};
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
        gap: ${rem(16)};
        @media (max-width: 576px) {
          flex-direction: column;
          gap: ${rem(8)};
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
