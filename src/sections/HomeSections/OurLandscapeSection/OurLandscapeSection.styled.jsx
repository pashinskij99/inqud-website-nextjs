import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledOurLandscapeSection = styled.section`
  padding: ${rem(242)} 0;
  overflow: hidden;
  @media (max-width: 1200px) {
    padding: ${rem(120)} 0;
  }
  @media (max-width: 576px) {
    text-align: center;
    padding: ${rem(96)} 0;
  }

  .container {
    .ourLandscapeTitle {
      margin-bottom: ${rem(40)};
      @media (max-width: 576px) {
        margin-bottom: ${rem(32)};
      }
    }

    .ourLandscapeTabs {
      border-radius: ${rem(72)};
      border: 1px solid var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
      background: var(--clarity-white, #fff);
      padding: ${rem(1)};
      width: fit-content;
      margin-bottom: ${rem(24)};
      @media (max-width: 576px) {
        margin: 0 auto ${rem(24)};
        width: 100%;
        display: flex;
      }

      .ourLandscapeTabsButton {
        border-radius: ${rem(72)};
        padding: ${rem(7)} ${rem(16)} ${rem(7)} ${rem(17)};
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
          padding: ${rem(6)} ${rem(16)} ${rem(7)} ${rem(16)};
        }
      }
    }

    .ourLandscapeDescription {
      color: #517185;
      margin-bottom: ${rem(66)};
      line-height: ${rem(32)};

      .br-tablet {
        display: none;
      }

      @media (max-width: 992px) {
        margin-bottom: ${rem(62)};
        .br-desktop {
          display: none;
        }

        .br-tablet {
          display: block;
        }
      }
      @media (max-width: 576px) {
        margin-bottom: ${rem(39)};
        font-size: ${rem(24)};
        br {
          display: none;
        }
      }
    }

    .ourLandscapeRisk {
      display: flex;
      justify-content: space-between;
      @media (max-width: 1400px) {
        gap: ${rem(40)};
      }
      @media (max-width: 1200px) {
        gap: ${rem(24)};
      }

      @media (max-width: 767px) {
        display: none;
      }

      .ourLandscapeAccordion {
        max-width: ${rem(440)};

        .ourLandscapeAccordionTitle {
          display: flex;
          align-items: center;
          gap: ${rem(24)};
          margin-bottom: ${rem(16)};
          @media (max-width: 992px) {
            margin-bottom: ${rem(14)};
          }

          h5 {
            font-size: ${rem(32)};
            letter-spacing: ${rem(3.2)};
          }

          svg {
            flex-shrink: 0;
          }

          @media (max-width: 992px) {
            h5 {
              font-size: ${rem(24)};
              line-height: ${rem(23)};
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
          gap: ${rem(24)};
          margin-bottom: ${rem(16)};

          h5 {
            font-size: ${rem(32)};
          }
        }
      }

      .listRequirementsSwiperScollbar {
        bottom: -${rem(55)};
        width: ${rem(200)};
        left: 50%;
        transform: translateX(-50%);
        background: rgba(81, 113, 133, 0.2);
        opacity: 1 !important;

        .swiper-scrollbar-drag {
          background: rgba(7, 116, 83, 1) !important;
        }

        @media (max-width: 576px) {
          bottom: -${rem(39)};
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
        bottom: -${rem(36)};
        width: ${rem(200)};
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
