import styled from '@emotion/styled'
import {rem} from '@/utils/rem';
import {responsive} from '@/utils/response';

export const StyledOurLandscapeSection = styled.section`
  padding: ${rem(242)} 0;
  overflow: hidden;
  ${responsive.xl`
    padding: ${rem(120)} 0;
  `};
  ${responsive.xs`
    text-align: center;
    padding: ${rem(96)} 0;
  `};

  .container {
    .ourLandscapeTitle {
      margin-bottom: ${rem(40)};
      ${responsive.xs`
        margin-bottom: ${rem(32)};
      `};
    }

    .ourLandscapeTabs {
      border-radius: ${rem(72)};
      border: 1px solid var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
      background: var(--clarity-white, #fff);
      padding: ${rem(1)};
      width: fit-content;
      margin-bottom: ${rem(24)};
      ${responsive.xs`
        margin: 0 auto ${rem(24)};
        width: 100%;
        display: flex;
      `};

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

        ${responsive.xs`
          flex: 1;
          padding: ${rem(6)} ${rem(16)} ${rem(7)} ${rem(16)};
        `};
      }
    }

    .ourLandscapeDescription {
      color: #517185;
      margin-bottom: ${rem(66)};
      line-height: ${rem(32)};

      .br-tablet {
        display: none;
      }

      ${responsive.xl`
        margin-bottom: ${rem(62)};
        .br-desktop {
          display: none;
        }

        .br-tablet {
          display: block;
        }
      `};
      ${responsive.xs`
        margin-bottom: ${rem(39)};
        font-size: ${rem(24)};
        br {
          display: none;
        }
      `};
    }


  }
`

export const StyledCoverageWrapper = styled.div`

  .coverageWrapper {
    display: flex;
    justify-content: space-between;
    gap: ${rem(145)};
    ${responsive.lg`
        column-gap: ${rem(0)};
        row-gap: ${rem(31.97)};
      `};

    ${responsive.xl`
      flex-direction: column-reverse;
    `};

    ul {
      display: flex;
      flex-direction: column;
      row-gap: ${rem(16)};


      li {
        display: flex;
        align-items: center;
        border-radius: 30px;
        background: var(--confident-light-grey, #F4F5FA);
        padding: ${rem(27)} ${rem(52)} ${rem(22)} ${rem(26.2)};
        ${responsive.xs`
          text-align: start;
          padding: ${rem(15)} ${rem(26.2)} ${rem(14)} ${rem(26.2)};
        `};

        .coverageWrapper {
          width: ${rem(37.031)};
          height: ${rem(35.872)};
          display: flex;
          justify-content: start;
          align-items: center;
          margin-right: ${rem(22.77)};
          flex: 0 0 auto;
        }

        svg {
          flex: 0 0 auto;
        }

        .coverage1 {
          width: ${rem(37.031)};
          height: ${rem(35.872)};

        }

        .coverage2 {
          width: ${rem(38.189)};
          height: ${rem(33.638)};
        }

        .coverage3 {
          width: ${rem(28.878)};
          height: ${rem(22.418)};
        }

        .coverage4 {
          width: ${rem(24.96)};
          height: ${rem(32.058)};
        }

        .descriptionWrapper {
          .name {
            color: rgba(31, 40, 53, 1);
            font-weight: 700;
          }

          .description {
            white-space: nowrap;
            color: rgba(81, 113, 133, 1);
            ${responsive.xl`
              white-space: normal;
            `}
          }
        }
      }
    }

    .map {
      width: 100%;
      ${responsive.xs`
        height: fit-content;
      `};
    }
  }

`

export const StyledIndustriesWrapper = styled.div`
  .ourLandscapeRisk {
    display: flex;
    justify-content: space-between;
    ${responsive.xxl`
        gap: ${rem(40)};
      `};
    ${responsive.xl`
        gap: ${rem(24)};
      `};
    ${responsive.sm`
        display: none;
      `};

    .ourLandscapeAccordion {
      max-width: ${rem(440)};
      flex: 1;
      display: flex;
      flex-direction: column;

      .ourLandscapeAccordionTitle {
        display: flex;
        align-items: center;
        gap: ${rem(24)};
        margin-bottom: ${rem(16)};
        ${responsive.xl`
            margin-bottom: ${rem(14)};
          `};

        h5 {
          font-size: ${rem(32)};
          letter-spacing: ${rem(3.2)};
        }

        svg {
          flex-shrink: 0;
        }

        ${responsive.xl`
            h5 {
              font-size: ${rem(24)};
              line-height: ${rem(23)};
            }
          `};
      }
    }
  }

  .ourLandscapeSwiper {
    overflow: visible;
    display: none;
    height: auto;

    .swiper-slide {
      height: auto;
    }

    .ourLandscapeAccordion {
      display: flex;
      flex-direction: column;
      height: 100%;

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

      ${responsive.xs`
          bottom: -${rem(39)};
        `};
    }

    ${responsive.sm`
        display: block;
      `};
  }

  .accordion-prob {
    height: 64px;
    border-radius: 20px;
    background: #FFA3A3;
    display: flex;
    align-items: center;
    padding: ${rem(18)} ${rem(32)} ${rem(20)};
    ${responsive.xs`
      padding: ${rem(18)} ${rem(24)} ${rem(20)};    
    `}
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

    ${responsive.xl`
        display: block;
      `};
  }
`