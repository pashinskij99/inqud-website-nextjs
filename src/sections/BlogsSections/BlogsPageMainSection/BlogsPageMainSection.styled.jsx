import styled from '@emotion/styled';

export const StyledBlogsPageMainSection = styled.section`
  padding: 35px 0 56px;


  @media (max-width: 992px) {
    padding: 48px 0 56px;
  }

  @media (max-width: 576px) {
    padding: 24px 0 40px;
  }

  .blogsPageTitle {
    color: rgba(45, 52, 57, 1);
    margin-bottom: 16px;
    @media (max-width: 576px) {
      font-size: 64px;
      font-weight: 400;
      margin-bottom: 24px;
      line-height: 74px;
    }
  }

  .blogsPageDescription {
    color: rgba(81, 113, 133, 0.800000011920929);
    margin-bottom: 32px;
    @media (max-width: 576px) {
      margin-bottom: 24px;
      line-height: 26px;
    }
  }

  .blogsPageSearchWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 464px;
    column-gap: 16px;
    margin: 0 auto;

    @media (max-width: 576px) {
      flex-direction: column;
      column-gap: 0px;
      max-width: 100%;
      width: 100%;
      row-gap: 8px;
    }

    .inputWrapper {
      flex: 1;
      @media (max-width: 576px) {
        flex: auto;
        max-width: 100%;
        width: 100%;
      }
    }

    button {
      @media (max-width: 576px) {
        width: 100%;
      }
    }

    .blogsPageSearchButton {
    }
`