import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledCartRequirement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .cartImageContainer {
    position: relative;
    width: 100%;
    height: ${rem(250)};
  }

  .cartImage {
  }

  .cartBody {
    padding: ${rem(40)} ${rem(32)} 0;
    @media (max-width: 576px) {
      padding: ${rem(32)} ${rem(32)} 0;
    }

    .cartTitle {
      font-weight: 700;
      margin-bottom: ${rem(16)};
    }

    .cartDescription {
      color: #517185;
      margin-bottom: ${rem(20)};
      @media (max-width: 576px) {
        margin-bottom: ${rem(13)};
      }
    }

    .cartBtn {
      margin: 0 auto;
    }
  }
`
