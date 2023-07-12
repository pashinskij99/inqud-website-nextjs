import styled from '@emotion/styled';

export const StyledBlogPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 384px;
  margin: 0 auto;

  @media (max-width: 576px) {
    justify-content: space-between;
  }

  .events-none {
  }

  .prev {
    margin-right: 40px;
    @media (max-width: 576px) {
      margin-right: 0px;
    }
  }

  .list-numbers {
    display: flex;
    align-items: center;
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 4px;

    p {
      line-height: 1;
    }

    &.active {
      background: var(--exciting-lime, #BFFFC8);

      p {
        font-weight: 700;
        color: rgba(7, 116, 83, 1);
      }
    }

    &:hover {
      background: rgba(191, 255, 200, 0.4000000059604645);
    }
  }

  .dots {
  }


  .events-none {
    pointer-events: none;
    touch-action: none;
  }

  .next {
    margin-left: 40px;
    @media (max-width: 576px) {
      margin-left: 0px;
    }

    circle {
      fill: rgba(191, 255, 200, 1);
    }

    path {
      fill: rgba(7, 116, 83, 1);
      opacity: 1;
    }
  }

`