import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledBlogsSection = styled.section`
  /* padding-top: 24rem; */
  padding-top: ${rem(240)};
  ${responsive.xl`
    padding-top: ${rem(120)};
    padding-bottom: ${rem(62)};
    overflow: hidden;
  `};
  ${responsive.sm`
    order: 12;
    padding-top: 0;
    padding-bottom: 0;
  `};

  .slide {
    width: fit-content;
    ${responsive.sm`
      max-width: 100%;
    `}
  }

  .blogsHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: ${rem(56)};
    ${responsive.xl`
      align-items: center;
    `};
    ${responsive.sm`
      justify-content: center;
      margin-bottom: ${rem(40)};
      padding-top: 0;
    `};

    .blogsHeaderTitle {
    }

    .blogsHeaderButton {
      ${responsive.xl`
        height: ${rem(48)};
        margin-top: ${rem(15)};
      `};
      ${responsive.sm`
        display: none;
      `};
    }
  }

  .blogsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${rem(40)};
    ${responsive.xxl`
      gap: ${rem(24)};
    `};
    ${responsive.xl`
      display: none;
    `};

    .cart {
      max-width: 100%;
      .imageWrapper,
      img {
        max-width: 100%;
        height: 250px;
      }
    }

    .image {
    }
  }

  .blogsGridItem {
    display: block;
  }

  .blogsGridItemImageWrapper {
    position: relative;
    width: 100%;
    height: ${rem(250)};
    margin-bottom: ${rem(32)};

    .blogsGridItemImage {
    }

    ${responsive.sm`
      max-width: 100%;
      height: ${rem(193)};
      margin-bottom: ${rem(23)};
    `};
  }

  .blogsGridItemBody {
    .blogsGridItemBodySubTitle {
      border-radius: ${rem(50)};
      background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
      color: rgba(81, 113, 133, 1);
      line-height: 1;
      padding: ${rem(7)} ${rem(16)};
      width: fit-content;
      margin-bottom: ${rem(12)};
      ${responsive.sm`
        margin: 0 auto ${rem(12)};
      `};
    }

    .blogsGridItemBodyTitle {
      margin-bottom: ${rem(16)};
      font-weight: 700;
      ${responsive.sm`
        margin-bottom: ${rem(12)};
        text-align: center;
      `};
    }

    .blogsGridItemBodyFooter {
      display: flex;
      align-items: center;
      gap: ${rem(12)};

      .blogsGridItemBodyFooterDate {
        color: var(--independent-grey, #517185);
      }

      .blogsGridItemBodyFooterDateTime {
        color: var(--independent-grey, #517185);
      }

      ${responsive.sm`
        justify-content: center;
      `};
    }
  }

  .blogsSwiper {
    display: none;
    overflow-y: visible;
    ${responsive.xl`
      display: block;
      overflow: visible;
    `};
    ${responsive.sm`
      margin-bottom: ${rem(82)};
    `};
    ${responsive.xs`
      .cart {
        max-width: 100%;
        img {
          max-width: 100%;
        }
      }
    `}

    .listRequirementsSwiperScollbar {
      bottom: -${rem(58)};
      width: ${rem(200)};
      left: 50%;
      transform: translateX(-50%);
      background: rgba(81, 113, 133, 0.2);
      opacity: 1 !important;
      height: ${rem(2)};
      ${responsive.sm`
        bottom: -${rem(40)};
      `};

      .swiper-scrollbar-drag {
        background: rgba(7, 116, 83, 1) !important;
      }
    }
  }

  .blogsHeaderButtonMobile {
    display: none;
    ${responsive.sm`
      width: 100%;
      display: block;
    `};
  }
`
