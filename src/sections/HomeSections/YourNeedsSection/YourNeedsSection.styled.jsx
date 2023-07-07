import styled from '@emotion/styled'

export const YourNeedsSectionWrapper = styled.section`
  text-align: center;
  padding-top: 12rem;
  padding-bottom: 14rem;

  .title {
    margin-bottom: 2.4rem;
  }

  .subTitle {
    margin-bottom: 6.4rem;
    color: rgba(81, 113, 133, 1);
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
    overflow-y: visible;
    display: none;
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
