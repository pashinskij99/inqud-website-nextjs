import styled from '@emotion/styled'
import { StyledFeaturesSectionWrapper } from '@/sections/CompanySections/FeaturesSection/FeaturesSection.styled'
import { responsive } from '@/utils/response'

export const StyledCryptoWidgetFeaturesWrapper = styled(
  StyledFeaturesSectionWrapper
)`
  background: var(--confident-light-grey, #f4f5fa);
  ${responsive.xl`
    padding-bottom: 120px;
  `}
  ${responsive.sm`
    padding-bottom: 94px;
  `}
  .left-side {
    .title {
      margin-bottom: 43px;
      ${responsive.xxl`
        margin-bottom: 37px;
      `}
      ${responsive.xl`
        margin-bottom: 62px;
      `}
      ${responsive.sm`
        margin-bottom: 32px;
      `}
    }

    .accordion {
      .line {
        background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
      }
      div {
        background: var(--confident-light-grey, #f4f5fa);
      }
      row-gap: 19px;
      ${responsive.xl`
        row-gap: 24px;
      `}
      ${responsive.sm`
        row-gap: 19px;
      `}

      .accordion-title {
        ${responsive.xl`
          color: var(--directness-black, #2d3439);
          font-size: 32px;
        `}
        ${responsive.sm`
          color: var(--directness-black, #2D3439);
          font-size: 24px;
        `}
      }
      .accordion-description {
        padding-left: 41px;

        ${responsive.xxl`
          padding-left: 0px;
        `}
        ${responsive.xl`
          padding-top: 9px;
        `}
        ${responsive.sm`
          padding-top: 0;
        `}
      }
    }
  }
  .right-side {
    .cart {
      width: 560px;
      height: 650px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.2) 100%
        ),
        conic-gradient(
          from -66deg at 51.32% 46.84%,
          #71bef6 0deg,
          #ffc451 99.25197958946228deg,
          #e1f664 212.1355676651001deg,
          #ff9a61 282.0405435562134deg,
          #cdacfe 360deg
        );
    }

    img {
      width: fit-content;
      height: fit-content;
    }
  }
`
