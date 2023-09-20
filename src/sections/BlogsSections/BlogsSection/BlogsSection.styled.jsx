import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledBlogsSectionWrapper = styled.section`
  padding-bottom: ${rem(126)};

  ${responsive.xl`
    padding-bottom: ${rem(96)};
  `}
  .blog-category-navigation-wrapper {
    display: block;
  }
  .blog-grid {
    padding: ${rem(66)} 0 ${rem(52)};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    column-gap: 40px;
    row-gap: 44px;
    ${responsive.xxl`
      padding: ${rem(56)} 0 ${rem(52)};
      column-gap: 24px;
      row-gap: 40px;
    `}
    ${responsive.xl`
      padding: ${rem(40)} 0 ${rem(52)};
      grid-template-columns: repeat(2, 1fr);
      column-gap: ${rem(24)};
      justify-content: space-between;
    `}
    ${responsive.sm`
      grid-template-columns: 1fr;
      column-gap: 0;
      justify-content: center;
      padding: ${rem(24)} 0;
      row-gap: ${rem(32)};
    `}
    li {
      display: contents;
      .cart {
        ${responsive.xxl`
          max-width: 389px;
        `}

        .imageWrapper {
          ${responsive.xl`
            margin-bottom: 33px;
          `}
          ${responsive.sm`
            margin-bottom: 21px;
          `}
        }

        .subTitle {
          ${responsive.sm`
            margin-bottom: 9px;
          `}
        }

        .title {
          ${responsive.sm`
            line-height: 32px;
          `}
        }
      }
      a {
        display: contents;
      }
    }
  }

  .error-message {
    margin-top: 100px;
  }

  .loadMoreButton {
    margin-bottom: ${rem(71)};

    ${responsive.xl`
      margin-bottom: ${rem(41)};
    `}
  }
`
