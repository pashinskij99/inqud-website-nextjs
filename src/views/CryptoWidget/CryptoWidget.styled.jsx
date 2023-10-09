'use client'

import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledCryptoWidgetWrapper = styled.main`
  .fees {
    padding: 197px 0 167px;
    ${responsive.xxl`
      padding: 233px 0 210px;
    `}
    ${responsive.xl`
      padding: 120px 0 92px;
    `}
    ${responsive.sm`
      padding: 96px 0 0;
    `}
  }

  .our-landscape {
    padding-top: 0px;
    ${responsive.xxl`
      padding-top: 0px;
    `}
    ${responsive.sm`
      padding-bottom: 139.5px;
    `}
  }

  .tutorial {
    padding-top: 0px;

    ${responsive.xxl`
      padding-top: 0px;
    `}
    ${responsive.xl`
      padding-top: 0px;
    `}
    ${responsive.sm`
      padding-top: 0px;
    `}
  }

  .faq {
    padding-top: 200px;
    padding-bottom: 0px;
    ${responsive.xxl`
      padding-top: 200px; 
      padding-bottom: 202px;
    `}
    ${responsive.xl`
      padding-top: 120px; 
      padding-bottom: 122px;
    `}
    ${responsive.sm`
      padding-top: 96px; 
      padding-bottom: 0px;
    `}
  }
`
