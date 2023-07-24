import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledCartRequirement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  max-width: ${rem(440)};

  ${responsive.xxl`
    max-width: ${rem(380)};
  `}
  ${responsive.xl`
    max-width: ${rem(440)};
  `}
  ${responsive.lg`
    // max-width: ${rem(332)};
  `}
  ${responsive.xs`
    text-align: center;
    max-width: 100%;
  `}
  .cartImage {
    max-width: ${rem(440)};
    height: ${rem(300)};
    width: 100%;

    ${responsive.xxl`
      max-width: ${rem(380)};
      height: ${rem(260)};
    `};

    ${responsive.xl`
        max-width: ${rem(440)};

      height: ${rem(300)};
    `};
    ${responsive.lg`
      max-width: 100%;
      // height: ${rem(250)};
      // object-fit: cover;
    `};
    ${responsive.xs`
      max-width: 100%;
      height: auto;
      object-fit: contain;
      margin-bottom: ${rem(24)};
    `};
  }

  .cartBody {
    padding: ${rem(40)} ${rem(32)} 0;

    ${responsive.xs`
      padding: ${rem(32)} ${rem(32)} 0;
    `}
    .cartTitle {
      font-weight: 700;
      margin-bottom: ${rem(16)};
    }

    .cartDescription {
      color: #517185;
      margin-bottom: ${rem(20)};
      ${responsive.xs`
        margin-bottom: ${rem(13)};
      `}
    }

    .cartBtn {
      margin: 0 auto;
      svg {
        width: ${rem(24.000164031982422)};
        height: ${rem(24.000164031982422)};
        overflow: visible;
        ${responsive.xs`
          position: static;
        `}
      }
    }
  }
`
