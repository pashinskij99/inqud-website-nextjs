import styled from '@emotion/styled'
import { StyledStepCartWrapper } from '../HowToStartsB2CSection/HowToStartsB2CSection.styled'
import { responsive } from '@/utils/response'

export const StyledPassKYCB2CSectionWrapper = styled.section`
  padding-top: 200px;
  ${responsive.xxl`
    padding-top: 199px;
  `}
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
    text-align: center;
    line-height: 70px;
    letter-spacing: -1.28px;
    margin-bottom: 24px;
    ${responsive.xxl`
      font-size: 56px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0em;
    `}
    ${responsive.xl`
      font-size: 64px;
      font-weight: 400;
      line-height: 70px;
      letter-spacing: -0.02em;
    `}
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
      letter-spacing: 0em;
      margin-bottom: 14px;
    `}
  }
  .sub-title {
    font-size: 32px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(81, 113, 133, 1);
    margin-bottom: 64px;
    ${responsive.xxl`
      margin-bottom: 75px;
    `}
    ${responsive.xl`
      margin-bottom: 64px;
    `}
    ${responsive.sm`
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      margin-bottom: 40px;
    `}
  }
  .steps-wrapper {
    display: grid;
    grid-template-columns: 320px 40px 320px 40px 320px 40px 320px;
    align-items: flex-start;
    ${responsive.xxl`
      grid-template-columns: 190px 152px 190px 152px 190px 152px 190px; 
    `}
    ${responsive.xl`
      justify-content: center;
      grid-template-columns: 320px 48px 320px;
      row-gap: 40px;
    `}
    ${responsive.sm`
      grid-template-columns: 1fr;
      grid-template-rows: auto 56px auto 56px auto 56px auto;
      row-gap: 0;
      
    `}

    .step-wrapper, .step-image-wrapper {
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
          margin: 0 auto;
          
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
          margin: 0 auto;

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
            transform: rotate(180deg) translateY(-30px) translateX(35%);
          }        
        `}
        ${responsive.sm`
          display: grid;
          justify-content: center;
          margin: 0 auto;

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
    transform: translateX(-42%) translateY(65px);
    ${responsive.xxl`
      position: static;
      transform: translateY(25px) translateX(-8%);
    `}
    ${responsive.xl`
      position: absolute;
      transform: translateY(25px) translateX(-40%);
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
`

export const StyledStepCartKYCWrapper = styled(StyledStepCartWrapper)`
  img {
    margin-bottom: 24px;
    ${responsive.sm`
      margin-bottom: 8px;
    `}
  }
  .time {
    margin-bottom: 0 !important;
  }
  .step-cart-title {
    margin-bottom: 16px;
    ${responsive.sm`
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      margin-bottom: 0px;
    `}
  }
  &:last-of-type {
    .step-cart-title {
      margin-bottom: 14px;
      ${responsive.sm`
        margin-bottom: 7px;
      `}
    }
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
