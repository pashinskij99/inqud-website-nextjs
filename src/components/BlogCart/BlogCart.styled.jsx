import styled from '@emotion/styled';
import {rem} from '@/utils/rem';

export const StyledBlogCartWrapper = styled.div`
  max-width: ${rem(440)};
  @media (max-width: 1400px) {
    max-width: ${rem(380)};
  }
  @media (max-width: 1200px) {
    max-width: ${rem(300)};
  }
  @media (max-width: 992px) {
    max-width: ${rem(332)};
  }
  @media (max-width: 576px) {
    text-align: center;
    max-width: 100%;
  }

  .image {
    border-radius: ${rem(30)};
    margin-bottom: ${rem(30)};

    @media (max-width: 1400px) {
      max-width: ${rem(380)};
      height: ${rem(260)};
    }

    @media (max-width: 1200px) {
      max-width: ${rem(300)};
      height: ${rem(210)};
    }

    @media (max-width: 992px) {
      max-width: 100%;
      height: ${rem(250)};
      object-fit: cover;
    }

    @media (max-width: 576px) {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      margin-bottom: ${rem(24)};
    }
  }

  .subTitle {
    border-radius: ${rem(50)};
    background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.20));
    padding: ${rem(4)} ${rem(16)};

    color: rgba(81, 113, 133, 1);
    margin-bottom: ${rem(16)};
    width: fit-content;
    line-height: 1;

    @media (max-width: 576px) {
      font-size: ${rem(14)};
      padding: ${rem(8)} ${rem(12)} ${rem(7)} ${rem(12)};
      margin: 0 auto ${rem(12)};
    }
  }

  .title {
    text-align: start;
    font-weight: 700;
    margin-bottom: ${rem(16)};
    @media (max-width: 576px) {
      font-size: ${rem(24)};
      margin-bottom: ${rem(12)};
      text-align: center;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    gap: ${rem(12)};
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

export const StyledBlogCartWrapper2 = styled(StyledBlogCartWrapper)`

  

`