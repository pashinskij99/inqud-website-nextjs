import styled from '@emotion/styled';
import { nunito } from '@/utils/font';
import { rem } from '@/utils/rem';
import { responsive } from '@/utils/response'



export const StyledPrivacyNoticeSectionWrapper = styled.section`
  .container {
    margin-top: 3rem;
    margin-bottom: 3rem;
    p {
      margin-bottom: 1rem;
    }

    a {
      display: inline;
      text-decoration-line: underline;
      color: #077453;
      margin-bottom: 1rem
    }

    h1 {
      margin-bottom: 1rem;
    }

    h4 {
      color: var(--directness-black, #2d3439);
      ${nunito.style}
    margin: 1rem 0;
      font-size: ${rem(32)};
      font-weight: 400;
      line-height: ${rem(42)};
      ${responsive.xs`
        font-size: ${rem(24)};
        line-height: ${rem(34)};
      `}
    }
  }
`;