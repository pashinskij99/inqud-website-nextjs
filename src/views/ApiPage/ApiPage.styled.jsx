import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledApiPageWrapper = styled.main`
  .fees {
    padding-top: 198px;
    ${responsive.xl`
      padding-top: 118px;
    `}
    ${responsive.sm`
      padding-top: 94px;
    `}
  }

  .our-landscape {
    padding-bottom: 0;

    ${responsive.xxl`
      padding-top: 211px;
      padding-bottom: 0;
    `}
    ${responsive.xl`
      padding-top: 88px;
      padding-bottom: 0;
    `}
    ${responsive.sm`
      padding-top: 88px;
      padding-bottom: 0;
    `}
    .accordion-prob {
      ${responsive.xxl`
        
        height: 64px;
        min-height: 64px;
        padding: 18px 0 0 36px;
      `}
      ${responsive.xl`
        height: 56px;
        min-height: 56px;
        padding: 15px 0 0 33px;
      `}
    }
  }

  .faq {
    padding: 196px 0 112px;
    ${responsive.xxl`
      padding: 238px 0 200px;
    `}
    ${responsive.xl`
      padding: 78px 0 122px;
    `}
    ${responsive.sm`
      padding: 44px 0 0;
    `}
  }
`
