import styled from '@emotion/styled';
import {rem} from '@/utils/rem';

export const StyledBlogsSectionWrapper = styled.section`
  padding-bottom: ${rem(144)};
  @media (max-width: 992px) {
    padding-bottom: ${rem(96)};
  }

  .blog-grid {
    padding: ${rem(56)} 0 ${rem(48)};
    display: grid;
    grid-template-columns: repeat(3, min-content);
    justify-content: space-between;
    row-gap: ${rem(48)};

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: ${rem(24)};
      justify-content: space-between;
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0;
      justify-content: center;
      padding: ${rem(40)} 0;
      row-gap: ${rem(40)};
    }

    li {
      display: contents;

      a {
        display: contents;
      }
    }
  }

  .loadMoreButton {
    margin-bottom: ${rem(56)};
    @media (max-width: 992px) {
      margin-bottom: ${rem(41)};
    }
  }
`