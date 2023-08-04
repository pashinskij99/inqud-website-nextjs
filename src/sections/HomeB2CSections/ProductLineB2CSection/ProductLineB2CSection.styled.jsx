import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledProductLineB2CSectionWrapper = styled.section`
  padding: 200px 0;
  ${responsive.xl`
    padding: 120px 0;
  `}
  ${responsive.sm`
    padding: 98px 0;
  `}
  .container {
  }
  .title {
    line-height: 62px;
    text-align: center;
    margin-bottom: 24px;
    ${responsive.xl`
      text-align: start;
      margin-bottom: 31px;
    `}
    ${responsive.sm`
      text-align: center;
      line-height: 46px;
      margin-bottom: 33px;
    `}
  }
  .image-tablet-or-mobile {
    max-width: 688px;
    height: 322px;
    width: 100%;
    margin-bottom: 40px;
    ${responsive.xl`
      max-width: 100%;
    `}
    ${responsive.sm`
      max-width: 100%;
      height: 273.392px;
      margin-bottom: 32px;
    `}

    &.tablet, &.mobile {
      display: none;
    }
    &.tablet {
      ${responsive.xl`
        display: block;
      `}
      ${responsive.sm`
        display: none;
      `}
    }
    &.mobile {
      ${responsive.sm`
        display: block;
      `}
    }
  }
  .tabs-wrapper {
    margin: 0 auto 50px;
    ${responsive.xl`
      margin: 0 0 16px;
    `}
    ${responsive.sm`
      margin: 0 auto 33px;
    `}

    &.desktopOrTablet {
      ${responsive.sm`
        display: none;
      `}
    }
    &.mobile {
      display: none;
      ${responsive.sm`
        display: flex;
      `}
    }
  }
`

export const StyledTabContentWrapper = styled.div`
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 680px);
    justify-content: space-between;
    column-gap: 40px;
    align-items: center;
    ${responsive.xxl`
      grid-template-columns: 595px 596px;
      column-gap: 25px;
    `}
    ${responsive.xl`
      grid-template-columns: 1fr;
    `}
  }
  .left-side {
    ${responsive.sm`
      text-align: center;
    `}
    .content-title {
      line-height: 46px;
      margin-bottom: 8px;
      font-weight: 700;
      ${responsive.xxl`
        margin-bottom: 16px;
      `}
      ${responsive.xl`
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
      `}
      ${responsive.sm`
        font-size: 32px;
        font-weight: 700;
        line-height: 42px;
      `}

      &.desktopOrTablet {
        ${responsive.sm`
          display: none;
        `}
      }
      &.tablet {
        display: none;
        ${responsive.sm`
          display: block;
        `}
      }
    }
    .content-description {
      line-height: 24px;
      margin-bottom: 40px;
      ${responsive.xxl`
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
      `}
      ${responsive.xl`
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 48px;
      `}
      ${responsive.sm`
        margin-bottom: 40px;
      `}
    }
    .content-grid {
      display: grid;
      grid-template-columns: repeat(2, 320px);
      column-gap: 40px;
      row-gap: 32px;
      align-items: flex-start;
      margin-bottom: 40px;
      justify-content: center;

      ${responsive.xxl`
        grid-template-columns: repeat(2, 286px);
        column-gap: 24px;
        margin-bottom: 39px;
      `}
      ${responsive.xl`
        justify-content: center;
        grid-template-columns: repeat(2, 320px);
        column-gap: 40px;
        row-gap: 32px;
        margin-bottom: 31px;
      `}
      ${responsive.sm`
        grid-template-columns: 1fr;
        column-gap: 40px;
        row-gap: 24px;
        margin-bottom: 31px;
      `}
    }
    .content-grid-item {
      display: grid;
      grid-template-columns: 48px 256px;
      column-gap: 16px;
      row-gap: 8px;
      ${responsive.xxl`
        grid-template-columns: 48px 216px;
        column-gap: 16px;
      `}
      ${responsive.xl`
        grid-template-columns: 48px 250px;
        column-gap: 16px;
      `}
      ${responsive.sm`
        grid-template-columns: 1fr;
        gap: 0;
      `}
    }
    svg {
      align-self: center;
      ${responsive.sm`
        margin: 0 auto 15px;
      `}
    }
    .content-grid-item-title {
      font-weight: 700;
      line-height: 32px;
      align-self: center;
      ${responsive.sm`
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        margin-bottom: 8px;
      `}
    }
    .content-grid-item-description {
      grid-column-start: 1;
      grid-column-end: 3;
      line-height: 24px;
      color: rgba(81, 113, 133, 1);
      ${responsive.sm`
        grid-column-start: auto;
        grid-column-end: auto;
      `}
    }
    .content-grid-item-button {
      ${responsive.sm`
        width: 100%;
        height: 48px;
        
      `}

      svg {
        ${responsive.sm`
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
        `}
      }
    }
  }

  .right-side {
    display: flex;
    ${responsive.xxl`
      align-self: center;
    `}
    ${responsive.xl`
      display: none;
    `}
    img {
      ${responsive.xxl`
        width: 596px;
        height: 475.049px; 
      `}
    }
  }
`
