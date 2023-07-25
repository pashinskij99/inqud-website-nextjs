import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'
import { urbanist } from '@/utils/font'

export const StyledOurLandscapeSection = styled.section`
  padding: ${rem(242)} 0;
  overflow: hidden;
  ${responsive.xxl`
    padding: ${rem(240)} 0;
  `};
  ${responsive.xl`
    padding: ${rem(98)} 0 ${rem(122)};
  `};
  ${responsive.sm`
    text-align: center;
    padding: ${rem(96)} 0 ${rem(134)};
    order: 10;
  `};

  .container {
    .ourLandscapeTitle {
      margin-bottom: ${rem(40)};
      ${responsive.xxl`
        margin-bottom: ${rem(40)};
      `};
      ${responsive.sm`
        margin-bottom: ${rem(32)};
      `};
    }

    .MuiTabs-root {
      display: contents;
      .MuiTabs-flexContainer,
      .MuiTabs-scroller,
      .css-heg063-MuiTabs-flexContainer {
        display: contents;
      }
    }

    .ourLandscapeTabs {
      display: flex;
      border-radius: ${rem(72)};
      border: 1px solid var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
      background: var(--clarity-white, #fff);
      padding: ${rem(1)};
      width: fit-content;
      margin-bottom: ${rem(24)};
      height: ${rem(44)};
      ${responsive.sm`
        margin: 0 auto ${rem(24)};
        width: 100%;
        display: flex;
      `};

      .css-jpln7h-MuiTabs-scroller {
        display: contents;
      }

      .MuiTabs-indicator,
      .css-1aquho2-MuiTabs-indicator {
        display: none !important;
      }

      .ourLandscapeTabsButton {
        border-radius: ${rem(72)};
        padding: ${rem(7)} ${rem(14.5)}!important;
        background: transparent;
        color: rgba(81, 113, 133, 1);
        min-height: auto;
        height: 100%;
        ${urbanist.style};
        font-size: ${rem(18)};
        font-weight: 400;
        line-height: 1;
        text-transform: capitalize;

        &.active {
          background: rgba(7, 116, 83, 1);
          font-weight: 700;
          color: rgba(255, 255, 255, 1);
        }

        ${responsive.sm`
          flex: 1;
          padding: ${rem(6)} ${rem(16)} ${rem(7)} ${rem(16)};
        `};
      }
    }

    .ourLandscapeDescription {
      color: #517185;
      line-height: ${rem(32)};

      .br-tablet {
        display: none;
      }

      ${responsive.xl`
        .br-desktop {
          display: none;
        }

        .br-tablet {
          display: block;
        }
      `};
      ${responsive.sm`
        font-size: ${rem(24)};
        br, .br-tablet {
          display: none;
        }
      `};
    }
  }
`

export const StyledCoverageWrapper = styled.div`
  .headerWrapper {
    display: flex;
    margin-bottom: ${rem(66)};
    justify-content: space-between;
    ${responsive.xl`
      flex-direction: column;
      row-gap: ${rem(40.5)};
    `};
    ${responsive.sm`
      margin-bottom: ${rem(32)};
    `};
    .ourLandscapeDescription {
      ${responsive.xxl`
        .br-desktop {
          display: none;
        }
      `};
      ${responsive.lg`
        br {
          display: none!important;
        }
      `};
      ${responsive.sm`
        br {
          display: none!important;
        }
      `};
    }
  }

  .list {
    display: flex;
    column-gap: ${rem(63)};

    &.desktop {
      ${responsive.sm`
        display: none;
      `}
    }
    &.mobile {
      display: none;
      ${responsive.sm`
        display: flex;
      `}
    }
    ${responsive.xxl`
        column-gap: ${rem(34)};
      `}
    ${responsive.lg`
        row-gap: ${rem(16.5)};
        flex-wrap: wrap;
      `};
    li {
      display: flex;
      align-items: center;
      border-radius: 30px;
      ${responsive.sm`
        width: 100%;
        text-align: start;
        padding: ${rem(15)} ${rem(26.2)} ${rem(14)} ${rem(26.2)};
        border-radius: 30px;
        background: var(--confident-light-grey, #F4F5FA);
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
              white-space: nowrap;
            `}
        }
      }
    }
  }
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

    .map {
      width: 100%;
      height: fit-content;
      max-height: ${rem(452)};
      ${responsive.sm`
        height: fit-content;
        margin-bottom: ${rem(31.97)};
      `};
    }
  }
`

export const StyledIndustriesWrapper = styled.div`
  .ourLandscapeDescription {
    margin-bottom: ${rem(66)};

    ${responsive.xl`
      margin-bottom: ${rem(62)};
    `};
    ${responsive.sm`
      margin-bottom: ${rem(39)};
    `};
  }
  .ourLandscapeRisk {
    display: flex;
    justify-content: space-between;
    ${responsive.xxl`
        gap: ${rem(24)};
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
      height: 2px;

      .swiper-scrollbar-drag {
        background: rgba(7, 116, 83, 1) !important;
      }

      ${responsive.sm`
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
    background: #ffa3a3;
    display: flex;
    align-items: center;
    padding: ${rem(18)} ${rem(32)} ${rem(20)};
    ${responsive.sm`
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
