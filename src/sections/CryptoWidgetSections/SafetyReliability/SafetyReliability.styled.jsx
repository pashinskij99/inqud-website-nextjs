import styled from '@emotion/styled'
import { StyledCryptoWidgetFeaturesWrapper } from '../CryptoWidgetFeatures/CryptoWidgetFeatures.styled'
import { responsive } from '@/utils/response'

export const StyledSafetyReliabilitySection = styled(
  StyledCryptoWidgetFeaturesWrapper
)`
  background: white;

  ${responsive.xxl`
    padding-bottom: 196px;
  `}
  ${responsive.xl`
    padding-bottom: 121px;
  `}
  ${responsive.sm`
    padding-bottom: 96px;
  `}

  .container {
    ${responsive.xl`
      flex-direction: column-reverse;
      row-gap: 40px;    
    `}
  }
  .left-side {
    .title {
      margin-bottom: 38px;
      ${responsive.sm`
        margin-bottom: 32px;
      `}
    }

    .accordion {
      ${responsive.xl`
        row-gap: 18px;
      `}
      ${responsive.sm`
        row-gap: 19px;
      `}
      .accordion-title {
        ${responsive.xl`
          font-size: 24px;      
        `}
      }
      .accordion-description {
        max-width: 600px;
        ${responsive.sm`
          line-height: 24px;
        `}

        .offset {
          ${responsive.sm`
            display: inline-block;
            margin-top: 14px;
          `}
        }

        &.accordion-description-1 {
          ${responsive.sm`
            display: none;
          `}
        }
        &.accordion-description-2 {
          display: none;
          ${responsive.sm`
            display: block;
          `}
        }
      }
      div {
        background: white;
      }
    }
  }

  .right-side {
    ${responsive.xxl`
      width: 550px;
      height: 348px;  
    `}
    ${responsive.xl`
      width: 100%;
      max-width: 100%;
      display: block;
      height: 210px;  
    `}
    ${responsive.sm`
      display: none;
    `}
    .cart {
      width: 550px;
      height: 348px;
      ${responsive.xxl`
        width: 550px;
        height: 348px;  
      `}
      ${responsive.xl`
        width: 100%;
        height: 210px;  
      `}

      img {
        ${responsive.xl`
          width: 140.491px;
          height: 160px;
          flex-shrink: 0;
        `}
      }
    }
  }
`
