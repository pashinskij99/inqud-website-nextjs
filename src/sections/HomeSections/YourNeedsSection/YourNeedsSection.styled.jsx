import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const YourNeedsSectionWrapper = styled.section`
  text-align: center;
  padding-top: 98px;
  padding-bottom: 199px;
  overflow: hidden;

  ${responsive.xxl`
    padding-bottom: 184px;
  `};
  ${responsive.xl`
    padding-top: 119px;
    padding-bottom: 132px;
  `};
  ${responsive.sm`
    padding-top: ${rem(95)};
    padding-bottom: ${rem(129.67)};
    order: 2;
  `};

  .title {
    margin-bottom: 16px;
    line-height: 62px;

    ${responsive.xl`
      text-align: start;
    `};
    ${responsive.sm`
      text-align: center;
      line-height: 46px;
      margin-bottom: ${rem(32)};
      letter-spacing: 0.2px;
    `};
  }

  .subTitle {
    margin-bottom: 50px;
    color: rgba(81, 113, 133, 1);

    &.subTitle-desktop {
    }

    &.subTitle-mobile {
      display: none;
    }

    ${responsive.xl`
      text-align: start;
      margin-bottom: 38px;
    `}
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
          margin: 0 auto;
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
    gap: 40px;
    ${responsive.xxl`
      column-gap: 24px;
    `};

    .cart-requirements {
      ${responsive.xxl`
        max-width: 389.33px;
      `};
    }

    .cartBody {
      ${responsive.xxl`
        padding: ${rem(40)} ${rem(10)} 0;
      `};
      ${responsive.xl`
        padding: ${rem(40)} 20px 0;
      `};

      .cartTitle {
        margin-bottom: 9px;
        ${responsive.xxl`
          margin-bottom: 14px;        
        `}
      }
    }

    .cartImage {
      ${responsive.xxl`
        height: ${rem(240)};
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

    .cart-requirements {
      ${responsive.xl`
        max-width: 389.33px;
      `};
      ${responsive.xs`
        max-width: 100%;
      `};

      .cartImage {
        ${responsive.xl`
        height: ${rem(240)};
      `};
      }
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
        bottom: -54px;
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
