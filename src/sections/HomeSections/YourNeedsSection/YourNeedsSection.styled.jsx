import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const YourNeedsSectionWrapper = styled.section`
  text-align: center;
  padding-top: ${rem(116)};
  padding-bottom: ${rem(229)};
  overflow: hidden;
  ${responsive.xxl`
    padding-top: ${rem(139)};
  `}
  ${responsive.xl`
    padding-top: ${rem(119)};
    padding-bottom: ${rem(102)};
  `};

  ${responsive.sm`
    padding-top: ${rem(95)};
    padding-bottom: ${rem(129.67)};
    order: 2;
  `};

  .title {
    margin-bottom: ${rem(24)};
    .br-tablet {
      display: none;
    }

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
      .br-tablet {
        display: block;
      }
    `};
    ${responsive.sm`
      margin-bottom: ${rem(32)};
      letter-spacing: 0.2px;
      .br-mobile {
        display: block;
      }

      &.title-desktop {
        display: none;
      }

      .br-tablet {
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

    ${responsive.sm`
      margin-bottom: ${rem(40)};
      &.subTitle-desktop {
        display: none;
      }

      &.subTitle-mobile {
        display: none;
      }
    `};
  }

  .cart-requirements {
    /* max-width: 100% !important; */
    /* width: 100%; */
    ${responsive.sm`
      border-radius: 16px;
      background: var(--confident-light-grey, #F4F5FA);
      padding: ${rem(24)} ${rem(26)};
    `}
    .cartBody {
      ${responsive.sm`
        padding: 0;
      `}
      .cartTitle {
        ${responsive.sm`
          margin-bottom: ${rem(8)};
          font-size: 24px;
          font-weight: 700;
          line-height: 34px;
        `}
      }
      .cartDescription {
        ${responsive.sm`
          margin-bottom: ${rem(16)};
        `}
      }
      button {
        ${responsive.sm`
          height: fit-content;
        `}
      }
    }
    img {
      ${responsive.xxl`
        border-radius: 30px;
        object-fit: cover;
      `}
      ${responsive.sm`
        display: none;
      `}
    }
  }

  .listRequirements {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${rem(40)};
    ${responsive.xxl`
      gap: ${rem(24)};
    `};
    ${responsive.xl`
      display: none;
    `};

    .cart-requirements {
      ${responsive.xxl`
        max-width: 100%;
      `};
    }

    .cartBody {
      ${responsive.xxl`
        padding: ${rem(40)} ${rem(10)} 0;
      `};
      ${responsive.xl`
        padding: ${rem(40)} 20px 0;
      `};
    }

    .cartImage {
      ${responsive.xxl`
        height: ${rem(300)};
      `};
    }
  }

  .slick-slide {
    width: fit-content !important;
    margin: 0 10px;
  }

  .listRequirementsSwiper {
    overflow: visible;
    display: none;

    .swiper-slide {
      ${responsive.sm`
        // width: fit-content;
      `}
    }

    .listRequirementsSwiperScollbar {
      bottom: -${rem(46)};
      width: ${rem(200)};
      left: 50%;
      transform: translateX(-50%);
      background: rgba(81, 113, 133, 0.2);
      opacity: 1 !important;
      height: ${rem(2)};
      ${responsive.xl`
        bottom: -${rem(12)};
      `};
      ${responsive.sm`
        bottom: -${rem(32)};
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
  ${responsive.sm`
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

export const StyledCoinsListWrapper = styled.div`
  display: none;
  column-gap: ${rem(16)};
  justify-content: center;
  margin-bottom: ${rem(32)};

  ${responsive.sm`
    display: flex;
    column-gap: ${rem(15)};
  `}
`
