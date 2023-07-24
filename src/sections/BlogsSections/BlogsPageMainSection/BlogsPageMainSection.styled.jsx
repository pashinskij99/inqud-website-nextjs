import styled from '@emotion/styled'
import { rem } from '@/utils/rem'

export const StyledBlogsPageMainSection = styled.section`
  padding: ${rem(35)} 0 ${rem(56)};

  @media (max-width: 992px) {
    padding: ${rem(48)} 0 ${rem(56)};
  }

  @media (max-width: 576px) {
    padding: ${rem(24)} 0 ${rem(40)};
  }

  .blogsPageTitle {
    color: rgba(45, 52, 57, 1);
    margin-bottom: ${rem(16)};
    @media (max-width: 576px) {
      font-size: ${rem(64)};
      font-weight: 400;
      margin-bottom: ${rem(24)};
      line-height: ${rem(74)};
    }
  }

  .blogsPageDescription {
    color: rgba(81, 113, 133, 0.800000011920929);
    margin-bottom: ${rem(32)};
    @media (max-width: 576px) {
      margin-bottom: ${rem(24)};
      line-height: ${rem(26)};
    }
  }

  .blogsPageSearchWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${rem(464)};
    column-gap: ${rem(16)};
    margin: 0 auto;

    @media (max-width: 576px) {
      flex-direction: column;
      column-gap: 0;
      max-width: 100%;
      width: 100%;
      row-gap: ${rem(8)};
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
      height: ${rem(48)};
    }
  }
`
