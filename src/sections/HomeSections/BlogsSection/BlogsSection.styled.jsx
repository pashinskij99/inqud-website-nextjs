import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledBlogsSection = styled.section`
  /* padding-top: 24rem; */
  @media (max-width: 992px) {
    padding-bottom: ${rem(62)};
    overflow: hidden;
  }

  .blogsHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: ${rem(56)};
    @media (max-width: 992px) {
      align-items: center;
    }
    @media (max-width: 576px) {
      justify-content: center;
      margin-bottom: ${rem(40)};
      padding-top: ${rem(96)};
    }

    .blogsHeaderTitle {
    }

    .blogsHeaderButton {
      @media (max-width: 992px) {
        height: ${rem(48)};
        margin-top: ${rem(15)};
      }
      @media (max-width: 576px) {
        display: none;
      }
    }
  }

  .blogsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${rem(40)};
    @media (max-width: 992px) {
      display: none;
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

    @media (max-width: 576px) {
      max-width: 100%;
      height: ${rem(193)};
      margin-bottom: ${rem(23)};
    }
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
      @media (max-width: 576px) {
        margin: 0 auto ${rem(12)};
      }
    }

    .blogsGridItemBodyTitle {
      margin-bottom: ${rem(16)};
      font-weight: 700;
      @media (max-width: 576px) {
        margin-bottom: ${rem(12)};
        text-align: center;
      }
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

      @media (max-width: 576px) {
        justify-content: center;
      }
    }
  }

  .blogsSwiper {
    display: none;
    overflow-y: visible;

    @media (max-width: 992px) {
      display: block;
      overflow: visible;
    }

    @media (max-width: 576px) {
      margin-bottom: ${rem(82)};
    }

    .listRequirementsSwiperScollbar {
      bottom: -${rem(58)};
      width: ${rem(200)};
      left: 50%;
      transform: translateX(-50%);
      background: rgba(81, 113, 133, 0.2);
      opacity: 1 !important;
      height: ${rem(2)};
      @media (max-width: 576px) {
        bottom: -${rem(40)};
      }

      .swiper-scrollbar-drag {
        background: rgba(7, 116, 83, 1) !important;
      }
    }
  }

  .blogsHeaderButtonMobile {
    display: none;
    @media (max-width: 576px) {
      width: 100%;
      display: block;
    }
  }
`
