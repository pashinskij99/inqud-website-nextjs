import styled from '@emotion/styled';
import {rem} from '@/utils/rem';

export const StyledBlogPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${rem(384)};
  margin: 0 auto;

  @media (max-width: 576px) {
    justify-content: space-between;
  }

  .events-none {
  }

  .prev {
    margin-right: ${rem(40)};
    @media (max-width: 576px) {
      margin-right: 0;
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
    width: ${rem(32)};
    height: ${rem(32)};
    flex-shrink: 0;
    border-radius: ${rem(4)};

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
    margin-left: ${rem(40)};
    @media (max-width: 576px) {
      margin-left: 0;
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