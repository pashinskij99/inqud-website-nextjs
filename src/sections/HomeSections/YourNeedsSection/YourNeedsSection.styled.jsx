import styled from '@emotion/styled'

export const YourNeedsSectionWrapper = styled.section`
  text-align: center;
  padding-top: 11.6rem;
  padding-bottom: 22.9rem;
  overflow: hidden;
  @media (max-width: 992px) {
    padding-top: 11.9rem;
    padding-bottom: 11rem;
  }

  @media (max-width: 576px) {
    padding-top: 9.5rem;
    padding-bottom: 5.5rem;
  }

  .title {
    margin-bottom: 2.4rem;
    &.title-desktop {}
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
      margin-bottom: 1.5rem;
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
    margin-bottom: 6.4rem;
    color: rgba(81, 113, 133, 1);
    &.subTitle-desktop {

    }
    &.subTitle-mobile {
      display: none;
    }

    @media (max-width: 576px) {
      margin-bottom: 4rem;
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
    gap: 4rem;

    @media (max-width: 1400px) {
      display: none;
    }
  }

  .listRequirementsSwiper {
    overflow: visible;
    display: none;
    .listRequirementsSwiperScollbar {
      bottom: -4.6rem;
      width: 20rem;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(81, 113, 133, 0.2);
      opacity: 1 !important;
      height: .2rem;

      @media (max-width: 576px) {
        bottom: -3.6rem;
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
