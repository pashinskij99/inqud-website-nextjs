import styled from '@emotion/styled';

export const StyledBlogsSectionWrapper = styled.section`
  padding-bottom: 144px;
  @media (max-width: 992px) {
    padding-bottom: 96px;
  }

  .blog-grid {
    padding: 56px 0 48px;
    display: grid;
    grid-template-columns: repeat(3, min-content);
    justify-content: space-between;
    row-gap: 48px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 24px;
      justify-content: space-between;
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0;
      justify-content: center;
      padding: 40px 0;
      row-gap: 40px;
    }

    li {
      display: contents;

      a {
        display: contents;
      }
    }
  }

  .loadMoreButton {
    margin-bottom: 56px;
    @media (max-width: 992px) {
      margin-bottom: 41px;
    }
  }
`