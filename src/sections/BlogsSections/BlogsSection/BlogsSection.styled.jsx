import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledBlogsSectionWrapper = styled.section`
  padding-bottom: ${rem(144)};

  ${responsive.lg`
    padding-bottom: ${rem(96)};
  `}
  .blog-grid {
    padding: ${rem(56)} 0 ${rem(48)};
    display: grid;
    grid-template-columns: repeat(3, min-content);
    justify-content: space-between;
    row-gap: ${rem(48)};
    ${responsive.xxl`
      column-gap: ${rem(24)};
      row-gap: ${rem(40)};
    `}

    ${responsive.lg`
      grid-template-columns: repeat(2, 1fr);
      column-gap: ${rem(24)};
      justify-content: space-between;
    `}
    ${responsive.xs`
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0;
      justify-content: center;
      padding: ${rem(40)} 0;
      row-gap: ${rem(40)};
    `}
    li {
      display: contents;

      a {
        display: contents;
      }
    }
  }

  .loadMoreButton {
    margin-bottom: ${rem(56)};

    ${responsive.lg`
      margin-bottom: ${rem(41)};
    `}
  }
`
