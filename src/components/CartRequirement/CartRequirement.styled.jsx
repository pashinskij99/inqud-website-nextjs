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
    text-align: start;
    align-items: flex-start;
  `}
  ${responsive.lg`
    // max-width: ${rem(332)};
  `}
  ${responsive.xs`
    text-align: center;
    max-width: 100%;
  `}
  .cartImage {
    max-width: 440px;
    height: 240px;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
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
    `};
    ${responsive.xs`
      max-width: 100%;
      height: auto;
      object-fit: contain;
      margin-bottom: ${rem(24)};
    `};
  }

  .cartBody {
    padding: 38px 0 0;

    ${responsive.xs`
      padding: ${rem(32)} ${rem(32)} 0;
    `}
    .cartTitle {
      font-weight: 700;
      margin-bottom: 7px;
      ${responsive.xl`
        margin-bottom: 15px;
      `}
    }

    .cartDescription {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      color: #517185;
      margin-bottom: 2px;
      ${responsive.xs`
        margin-bottom: ${rem(13)};
      `}
    }

    .cartBtn {
      margin: 0 auto;
      ${responsive.xl`
        margin: 0;
        padding: 0;
      `}
      svg {
        width: ${rem(24.000164031982422)};
        height: ${rem(24.000164031982422)};
        overflow: visible;
        ${responsive.sm`
          position: static;
        `}
      }
    }
  }
`
