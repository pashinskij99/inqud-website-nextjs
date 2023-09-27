import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledHowIntegrateWrapper = styled.section`
  background-color: rgba(191, 255, 200, 1);
  padding: 120px 0;

  ${responsive.xl`
    padding-top: 120px;
  `}
  ${responsive.sm`
    padding-top: 96px;
    padding-bottom: 96px;
  `}
  .container {
  }
  .title {
    font-size: 56px;
    font-weight: 400;
    line-height: 62px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 64px;
    ${responsive.xxl`
      font-size: 56px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0em;
      margin-bottom: 66px;
    `}
    ${responsive.xl`
      font-size: 56px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom: 64px;
    `}
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
      letter-spacing: 0em;
      margin-bottom: 40px;
    `}
  }

  .steps-wrapper {
    display: grid;
    grid-template-columns: 320px 40px 320px 40px 320px 40px 320px;
    align-items: flex-start;
    margin-bottom: 64px;
    ${responsive.xxl`
      grid-template-columns: 270px 45.17px 270px 45.17px 270px 45.17px 270px; 
    `}
    ${responsive.xl`
      justify-content: center;
      grid-template-columns: 320px 48px 320px;
      row-gap: 38px;
    `}
    ${responsive.sm`
      grid-template-columns: 1fr;
      grid-template-rows: auto 54px auto 54px auto 54px auto;
      row-gap: 0;
      margin-bottom: 56px;
    `}

    .step-wrapper {
      &:nth-of-type(1) {
        ${responsive.xl`
          order: 1;        
        `}
      }
      &:nth-of-type(2) {
        ${responsive.xl`
          order: 2;        
        `}
        ${responsive.sm`
          display: grid;
          justify-content: center;
          
          .step-image {
            transform: translateY(23px) translateX(-50%);
          }
        `}
      }
      &:nth-of-type(3) {
        ${responsive.xl`
          order: 3;        
        `}
      }
      &:nth-of-type(4) {
        ${responsive.xl`
          order: 4;        
          display: none;    
        `}
        ${responsive.sm`
          order: 4;        
          display: grid;
          justify-content: center;

          .step-image {
            transform: translateY(27px) translateX(-50%);
          }
        `}
      }
      &:nth-of-type(5) {
        ${responsive.xl`
          order: 7;        
        `}
        ${responsive.sm`
          order: 5;        
        `}
      }
      &:nth-of-type(6) {
        ${responsive.xl`
          order: 6;
          .step-image {
            transform: rotate(180deg) translateY(-50px) translateX(35%);
          }        
        `}
        ${responsive.sm`
          display: grid;
          justify-content: center;

          .step-image {
            transform: translateY(30px) translateX(-50%);
          }
        `}
      }

      &:nth-of-type(7) {
        ${responsive.xl`
          order: 5;
        `}
        ${responsive.sm`
          order: 7;
        `}
      }
    }
  }
  .step-image-wrapper {
    position: relative;
  }
  .step-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateX(-42%) translateY(22px);
    ${responsive.xxl`
      position: static;
      transform: translateY(25px) translateX(-44%);
    `}
    ${responsive.xl`
      position: absolute;
      transform: translateY(46px) translateX(-38%);
    `}

    &.desktopOrTablet {
      ${responsive.sm`
        display: none;
      `}
    }
    &.mobile {
      display: none;

      ${responsive.sm`
        display: block;
      `}
    }
  }

  .get-started-button {
    margin: 0 auto;
    ${responsive.sm`
      width: 100%;
    `}
  }
`

export const StyledStepCartHowIntegrateWrapper = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  .step-icon {
    margin: 0 auto 22px;
    ${responsive.xxl`
      margin-bottom: 24px;
    `}
    ${responsive.sm`
      margin-bottom: 8px;
    `}
  }
  .step-cart-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0em;

    margin-bottom: 16px;
    ${responsive.sm`
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      margin-bottom: 0px;
    `}

    &.step-cart-title-1 {
      ${responsive.xxl`
        display: none;
      `}
    }
    &.step-cart-title-2 {
      display: none;

      ${responsive.xxl`
        display: block;
      `}
      ${responsive.xl`
        display: none;
      `}
    }
    &.step-cart-title-3 {
      display: none;

      ${responsive.xl`
        display: block;
      `}
      ${responsive.sm`
        display: none;
      `}
    }
    &.step-cart-title-4 {
      display: none;
      ${responsive.sm`
        display: block;
      `}
    }
  }
  &:last-of-type {
    .step-cart-title {
      margin-bottom: 14px;
      ${responsive.sm`
        margin-bottom: 7px;
      `}
    }
  }
  .step-cart-time-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
  }
  .step-cart-button {
    padding-left: 0;
    height: fit-content;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`
