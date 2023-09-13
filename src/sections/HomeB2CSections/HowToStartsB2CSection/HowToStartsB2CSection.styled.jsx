import styled from '@emotion/styled'
import { nunito } from '@/utils/font'
import { responsive } from '@/utils/response'

export const StyledHowToStartsB2CSectionWrapper = styled.section`
  .container {
    ${responsive.xl`
      padding: 0;
    `}
  }
  .content-wrapper {
    border-radius: 32px;
    background: #f2f5f7;
    padding: 100px 100px 110px;
    ${responsive.xxl`
      padding: 100px 71.5px 110px;
    `}
    ${responsive.sm`
      padding: 96px 33.5px;
    `}
  }
  .title {
    font-weight: 400;
    line-height: 70px;
    letter-spacing: -1.28px;
    margin-bottom: 48px;
    text-align: center;
    ${responsive.xxl`
      font-size: 56px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0em;
      margin-bottom: 49px;
    `}
    ${responsive.xl`
      font-size: 64px;
      font-weight: 400;
      line-height: 70px;
      letter-spacing: -0.02em;
      margin-bottom: 43px;
    `}
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
      letter-spacing: 0em;
      line-height: 46px;
      margin-bottom: 40px;
    `}
  }
  .steps-wrapper {
    display: grid;
    grid-template-columns: 250px 171px 250px 171px 250px;
    column-gap: 27px;
    justify-content: space-between;
    align-items: flex-start;
    ${responsive.xxl`
      grid-template-columns: 250px 160px 250px 160px 250px;
      column-gap: 0;
    `}
    ${responsive.xl`
      grid-template-columns: 1fr;
      row-gap: 40px;
    `}
    ${responsive.sm`
      row-gap: 41px;
    `}

    &.desktop {
      ${responsive.xl`
        display: none;
      `}
    }
    &.tabletOrMobile {
      display: none;
      ${responsive.xl`
        display: grid;
      `}
    }
  }
  .step-image-wrapper {
    ${responsive.xl`
      display: none; 
    `}
  }
  .step-image {
    transform: translateY(25px);
    ${responsive.xxl`
      transform: translateY(27px); 
    `}
  }
`

export const StyledStepCartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;

  .step-cart-id-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: #bfffc8;
    margin-bottom: 22px;
    ${responsive.xl`
      margin-bottom: 16px;
    `}
    .step-cart-id {
      ${nunito.style};
      color: #077453;
      font-size: 40px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: 0em;
    }
  }

  &:last-child {
    .step-cart-id-wrapper {
      margin-bottom: 22px;
      ${responsive.xl`
        margin-bottom: 16px;
      `}
    }
  }

  .step-cart-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    margin-bottom: 18px;
    ${responsive.xl`
      margin-bottom: 6px;
    `}
  }
  &:last-child {
    .step-cart-title {
      margin-bottom: 10px;
    }
  }
  .step-cart-description {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 8px;
  }
  &:last-child {
    .step-cart-description {
      margin-bottom: 0px;
      ${responsive.xl`
        margin-bottom: 8px;
      `}
    }
  }
  .step-cart-time-wrapper {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  .step-cart-time {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(81, 113, 133, 1);
  }
  .step-cart-button {
    height: fit-content;
    padding-left: 0;
    svg {
      ${responsive.xl`
        width: 24.000164031982422px;
        height: 24.000164031982422px;  
      `}
      ${responsive.sm`
        position: static; 
      `}
    }
  }
`
