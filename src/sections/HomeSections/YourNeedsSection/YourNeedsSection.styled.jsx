import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const YourNeedsSectionWrapper = styled.section`
  text-align: center;
  padding-top: ${rem(116)};
  padding-bottom: ${rem(229)};
  overflow: hidden;
  @media (max-width: 992px) {
    padding-top: ${rem(119)};
    padding-bottom: ${rem(110)};
  }

  @media (max-width: 576px) {
    padding-top: ${rem(95)};
    padding-bottom: ${rem(55)};
  }

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

    @media (max-width: 992px) {
      .br-desktop {
        display: none;
      }
    }
    @media (max-width: 576px) {
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
    }
  }

  .subTitle {
    margin-bottom: ${rem(64)};
    color: rgba(81, 113, 133, 1);

    &.subTitle-desktop {

    }

    &.subTitle-mobile {
      display: none;
    }

    @media (max-width: 576px) {
      margin-bottom: ${rem(40)};
      &.subTitle-desktop {
        display: none;
      }

      &.subTitle-mobile {
        display: block;
      }
    }

  }

  .listRequirements {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${rem(40)};

    @media (max-width: 1400px) {
      display: none;
    }
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

      @media (max-width: 576px) {
        bottom: -${rem(36)};
      }

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
`
