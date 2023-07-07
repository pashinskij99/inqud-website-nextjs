import styled from '@emotion/styled'

export const StyledBlogsSection = styled.section`
  /* padding-top: 24rem; */
  .blogsHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 5.6rem;
    @media (max-width: 576px) {
      justify-content: center;
      margin-bottom: 4rem;
      padding-top: 9.6rem;
    }
    .blogsHeaderTitle {
    }
    .blogsHeaderButton {
      @media (max-width: 576px) {
        display: none;
      }
    }
  }

  .blogsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    @media (max-width: 992px) {
      display: none;
    }
  }
  .blogsGridItem {
  }
  .blogsGridItemImageWrapper {
    position: relative;
    width: 100%;
    height: 25rem;
    margin-bottom: 3.2rem;
    .blogsGridItemImage {
    }

    @media (max-width: 576px) {
      margin-bottom: 2.4rem;
    }
  }

  .blogsGridItemBody {
    .blogsGridItemBodySubTitle {
      border-radius: 5rem;
      background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
      color: rgba(81, 113, 133, 1);
      line-height: 1;
      padding: 0.7rem 1.6rem;
      width: fit-content;
      margin-bottom: 1.6rem;
      @media (max-width: 576px) {
        margin: 0 auto 1.2rem;
      }
    }
    .blogsGridItemBodyTitle {
      margin-bottom: 1.6rem;
      font-weight: 700;
      @media (max-width: 576px) {
        margin-bottom: 1.2rem;
      }
    }
    .blogsGridItemBodyFooter {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      .blogsGridItemBodyFooterDate {
        color: var(--independent-grey, #517185);
      }
      .blogsGridItemBodyFooterDateTime {
        color: var(--independent-grey, #517185);
      }
    }
  }

  .blogsSwiper {
    display: none;
    overflow-y: visible;

    @media (max-width: 992px) {
      display: block;
    }

    @media (max-width: 576px) {
      margin-bottom: 8.2rem;
    }
    .listRequirementsSwiperScollbar {
      bottom: -4rem;
      width: 20rem;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(81, 113, 133, 0.2);
      opacity: 1 !important;

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
