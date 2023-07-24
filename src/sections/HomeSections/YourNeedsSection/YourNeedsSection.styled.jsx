import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const YourNeedsSectionWrapper = styled.section`
  text-align: center;
  padding-top: ${rem(116)};
  padding-bottom: ${rem(229)};
  overflow: hidden;
  ${responsive.xxl`
    padding-top: ${rem(137)};
  `}
  ${responsive.xl`
    padding-top: ${rem(119)};
    padding-bottom: ${rem(110)};
  `};

  ${responsive.xs`
    padding-top: ${rem(95)};
    padding-bottom: ${rem(55)};
  `};

  .title {
    margin-bottom: ${rem(24)};

    &.title-desktop {
    }

    &.title-mobile {
      display: none;
    }

    .br-mobile {
      display: none;
    }

    ${responsive.xl`
      .br-desktop {
        display: none;
      }
    `};
    ${responsive.xs`
      margin-bottom: ${rem(15)};
      .br-mobile {
        display: block;
      }

      &.title-desktop {
        display: none;
      }

      &.title-mobile {
        display: block;
      }
    `};
  }

  .subTitle {
    margin-bottom: ${rem(64)};
    color: rgba(81, 113, 133, 1);

    &.subTitle-desktop {
    }

    &.subTitle-mobile {
      display: none;
    }

    ${responsive.xs`
      margin-bottom: ${rem(40)};
      &.subTitle-desktop {
        display: none;
      }

      &.subTitle-mobile {
        display: block;
      }
    `};
  }

  .listRequirements {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${rem(40)};
    ${responsive.xxl`
      gap: ${rem(0)};
    `};
    ${responsive.xl`
      display: none;
    `};

    /* .cartImage {
      ${responsive.xxl`
        height: ${rem(250)};
      `};
    } */
  }

  .slick-slide {
    width: fit-content !important;
    margin: 0 10px;
  }

  .listRequirementsSwiper {
    overflow: visible;
    display: none;

    .listRequirementsSwiperScollbar {
      bottom: -${rem(46)};
      width: ${rem(200)};
      left: 50%;
      transform: translateX(-50%);
      background: rgba(81, 113, 133, 0.2);
      opacity: 1 !important;
      height: ${rem(2)};

      ${responsive.xs`
        bottom: -${rem(36)};
      `};

      .swiper-scrollbar-drag {
        background: rgba(7, 116, 83, 1) !important;
      }
    }

    .listRequirementsSwiperDrag {
    }

    .listRequirementsSwiperItems {
      width: fit-content;
      /* width: 440px !important; */
    }

    ${responsive.xl`
      display: block;
    `};
  }
`

export const StyledCustomScrollbarWrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: -${rem(46)};
  width: fit-content;
  ${responsive.xs`
    bottom: -${rem(36)};
  `};
  .scrollBarLine {
    height: 2px;
    background: rgba(81, 113, 133, 0.2);
  }
  .scrollBarLineActive {
    position: absolute;
    top: 0;
    background-color: rgba(7, 116, 83, 1);
    height: 2px;
  }
`
