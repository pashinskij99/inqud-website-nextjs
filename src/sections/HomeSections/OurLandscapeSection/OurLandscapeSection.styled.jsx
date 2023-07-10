import styled from '@emotion/styled'

export const StyledOurLandscapeSection = styled.section`
  padding: 24.2rem 0;
  overflow: hidden;
  @media (max-width: 1200px) {
    padding: 12rem 0;
  }
  @media (max-width: 576px) {
    text-align: center;
    padding: 9.6rem 0;
  }
  .container {
    .ourLandscapeTitle {
      margin-bottom: 4rem;
      @media (max-width: 576px) {
        margin-bottom: 3.2rem;
      }
    }
    .ourLandscapeTabs {
      border-radius: 7.2rem;
      border: 0.1rem solid
        var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
      background: var(--clarity-white, #fff);
      padding: 0.1rem;
      width: fit-content;
      margin-bottom: 2.4rem;
      @media (max-width: 576px) {
        margin: 0 auto 2.4rem;
        width: 100%;
        display: flex;
      }
      .ourLandscapeTabsButton {
        border-radius: 7.2rem;
        padding: 0.7rem 1.6rem 0.7rem 1.7rem;
        background: transparent;

        p {
          color: rgba(81, 113, 133, 1);
        }

        &.active {
          background: var(--confident-light-grey, #f4f5fa);

          .ourLandscapeTabsButtonText {
            font-weight: 700;
            color: #2d3439;
          }
        }

        @media (max-width: 576px) {
          flex: 1;
          padding: 0.6rem 1.6rem 0.7rem 1.6rem;
        }
      }
    }
    .ourLandscapeDescription {
      color: #517185;
      margin-bottom: 6.6rem;
      line-height: 3.2rem;
      .br-tablet {
        display: none;
      }
      @media (max-width: 992px) {
        margin-bottom: 6.2rem;
        .br-desktop {
          display: none;
        }
        .br-tablet {
          display: block;
        }
      }
      @media (max-width: 576px) {
        margin-bottom: 3.9rem;
        font-size: 24px;
        br {
          display: none;
        }
      }
    }
    .ourLandscapeRisk {
      display: flex;
      justify-content: space-between;
      @media (max-width: 1400px) {
        gap: 4rem;
      }
      @media (max-width: 1200px) {
        gap: 2.4rem;
      }

      @media (max-width: 767px) {
        display: none;
      }
      .ourLandscapeAccordion {
        max-width: 44rem;
        .ourLandscapeAccordionTitle {
          display: flex;
          align-items: center;
          gap: 2.4rem;
          margin-bottom: 1.6rem;
          @media (max-width: 992px) {
            margin-bottom: 1.4rem;
          }
          h5 {
            font-size: 3.2rem;
            letter-spacing: .32rem;
          }
          svg {
            flex-shrink: 0;
          }

          @media (max-width: 992px) {
            h5 {
              font-size: 2.4rem;
              line-height: 2.3rem;
            }
          }
        }
      }
    }

    .ourLandscapeSwiper {
      overflow: visible;
      display: none;
      .ourLandscapeAccordion {
        .ourLandscapeAccordionTitle {
          display: flex;
          align-items: center;
          gap: 2.4rem;
          margin-bottom: 1.6rem;
          h5 {
            font-size: 3.2rem;
          }
        }
      }
      .listRequirementsSwiperScollbar {
        bottom: -5.5rem;
        width: 20rem;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(81, 113, 133, 0.2);
        opacity: 1 !important;

        .swiper-scrollbar-drag {
          background: rgba(7, 116, 83, 1) !important;
        }

        @media (max-width: 576px) {
          bottom: -3.9rem;

        }
      }

      @media (max-width: 767px) {
        display: block;
      }
    }

    .listRequirementsSwiper {
      overflow-y: visible;
      display: none;
      .listRequirementsSwiperScollbar {
        bottom: -3.6rem;
        width: 20rem;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(81, 113, 133, 0.2);
        opacity: 1 !important;

        .swiper-scrollbar-drag {
          background: rgba(7, 116, 83, 1) !important;
        }

      }
      .listRequirementsSwiperDrag {
      }
      .listRequirementsSwiperItems {
        /* width: 440px !important; */
      }
      @media (max-width: 1400px) {
        display: block;
      }
    }
  }
`
