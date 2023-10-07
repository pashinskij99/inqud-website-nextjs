'use client'

import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledOurLandscapeSection = styled.section`
  padding: 168px 0 199px;
  overflow: hidden;

  ${responsive.xl`
    padding: 87px 0 ${rem(122)};
  `};
  ${responsive.sm`
    text-align: center;
    padding: ${rem(96)} 0 ${rem(134)};
    order: 10;
  `};

  .container {
    .ourLandscapeTitle {
      margin-bottom: 20px;
      ${responsive.xxl`
        margin-bottom: 22px;
      `};
      ${responsive.sm`
        margin-bottom: 20px;
      `};
    }

    .ourLandscapeTabs {
      margin-bottom: 24px;
      ${responsive.sm`
        margin: 0 auto ${rem(24)};
      `};
    }

    .ourLandscapeDescription {
      color: #517185;
      line-height: ${rem(32)};
      max-width: 440px;

      .br-tablet {
        display: none;
      }
      ${responsive.xl`
        max-width: 100%;
      `}

      ${responsive.sm`
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;

        br {
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
      ${responsive.xl`
        margin-bottom: 10px;
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

    ${responsive.xxl`
      column-gap: ${rem(34)};
    `}
    ${responsive.lg`
      row-gap: ${rem(16.5)};
      flex-wrap: wrap;
    `};

    ${responsive.sm`
      justify-content: normal;
      column-gap: ${rem(32)};
    `}
    li {
      display: flex;
      align-items: center;
      border-radius: 30px;
      ${responsive.sm`
        // width: 100%;
        text-align: start;
        // padding: ${rem(15)} ${rem(26.2)} ${rem(14)} ${rem(26.2)};
        // border-radius: 30px;
        // background: var(--confident-light-grey, #F4F5FA);
      `};

      .coverageWrapper {
        width: ${rem(37.031)};
        height: ${rem(35.872)};
        display: flex;
        justify-content: start;
        align-items: center;
        margin-right: ${rem(22.77)};
        flex: 0 0 auto;
        ${responsive.sm`
          margin-right: ${rem(14)};
        `}
      }

      img {
        flex: 0 0 auto;

        &.desktop {
          ${responsive.sm`
            display: none;
          `}
        }

        &.mobile {
          display: none;
          ${responsive.sm`
            display: block;
          `}
        }
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

      .coverage5 {
      }

      .descriptionWrapper {
        .name {
          color: rgba(31, 40, 53, 1);
          font-weight: 700;
          ${responsive.sm`
            font-size: 18px;
            font-weight: 700;
            line-height: 26px;
          `}
        }

        .description {
          white-space: nowrap;
          color: rgba(81, 113, 133, 1);
          ${responsive.xl`
            white-space: nowrap;
          `}
          ${responsive.sm`
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
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

    img {
      max-width: 775.02px;
      width: 100%;
      margin: 0 auto;
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
    margin-bottom: 48px;

    ${responsive.xl`
      margin-bottom: 39px;
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

        p {
          font-size: ${rem(32)};
          letter-spacing: ${rem(3.2)};
        }

        img {
          flex-shrink: 0;
        }

        ${responsive.xl`
          p {
            font-size: ${rem(24)};
            line-height: ${rem(23)};
          }
        `};
      }
    }
  }

  .ourLandscapeSwiper {
    overflow: visible;
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

        p {
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
        bottom: -40px;
      `};
    }
  }

  .accordion-prob {
    height: 56px;
    border-radius: 20px;
    background: #ffa3a3;
    display: flex;
    align-items: center;
    padding: 15px 32px;
    ${responsive.sm`
      padding: 15px 32px;
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
