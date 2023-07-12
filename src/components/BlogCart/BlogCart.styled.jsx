import styled from '@emotion/styled';

export const StyledBlogCartWrapper = styled.div`
  max-width: 440px;
  @media (max-width: 1400px) {
    max-width: 380px;
  }
  @media (max-width: 1200px) {
    max-width: 300px;
  }
  @media (max-width: 992px) {
    max-width: 332px;
  }
  @media (max-width: 576px) {
    text-align: center;
    max-width: 100%;
  }

  .image {
    border-radius: 30px;
    margin-bottom: 30px;

    @media (max-width: 1400px) {
      max-width: 380px;
      height: 260px;
    }

    @media (max-width: 1200px) {
      max-width: 300px;
      height: 210px;
    }

    @media (max-width: 992px) {
      max-width: 100%;
      //height: auto;
      //object-fit: contain;
      height: 250px;
      object-fit: cover;
    }

    @media (max-width: 576px) {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      margin-bottom: 24px;
    }
  }

  .subTitle {
    border-radius: 50px;
    background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.20));
    padding: 4px 16px 4px 16px;

    color: rgba(81, 113, 133, 1);
    margin-bottom: 16px;
    width: fit-content;
    line-height: 1;

    @media (max-width: 576px) {
      font-size: 14px;
      padding: 8px 12px 7px 12px;
      margin: 0 auto 12px;
    }
  }

  .title {
    text-align: start;
    font-weight: 700;
    margin-bottom: 16px;
    @media (max-width: 576px) {
      font-size: 24px;
      margin-bottom: 12px;
      text-align: center;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 576px) {
      justify-content: center;
    }
  }

  .date {
    color: rgba(81, 113, 133, 1);
  }

  svg {

  }

  .time {
    color: rgba(81, 113, 133, 1);
  }

`