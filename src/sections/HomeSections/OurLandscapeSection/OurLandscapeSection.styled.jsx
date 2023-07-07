import styled from '@emotion/styled'

export const StyledOurLandscapeSection = styled.section`
  padding: 24rem 0;
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
      outline: 0.1rem solid
        var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
      background: var(--clarity-white, #fff);
      padding: 0.2rem;
      width: fit-content;
      margin-bottom: 2.4rem;
      @media (max-width: 576px) {
        margin: 0 auto 2.4rem;
        width: 100%;
        display: flex;
      }
      .ourLandscapeTabsButton {
        border-radius: 7.2rem;
        padding: 1.3rem 1.6rem 1.4rem 1.6rem;
        background: transparent;

        color: #517185;

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
      @media (max-width: 576px) {
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
          /* @media (max-width: 767px) {
            display: none;
          } */
          svg {
            flex-shrink: 0;
          }
        }
      }
    }

    .ourLandscapeSwiper {
      overflow-y: visible;
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
