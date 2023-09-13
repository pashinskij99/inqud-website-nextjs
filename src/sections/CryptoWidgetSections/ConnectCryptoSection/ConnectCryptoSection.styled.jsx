import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledConnectCryptoSectionWrapper = styled.section`
  overflow: hidden;
  position: relative;
  height: 568px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(7, 116, 83, 1);

  ${responsive.sm`
    height: 490px;
  `}
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    &.background-1 {
      ${responsive.xxl`
        display: none;
      `}
    }
    &.background-2 {
      display: none;
      ${responsive.xxl`
        display: block;
      `}
      ${responsive.xl`
        display: none;
      `}
    }
  }

  .title {
    color: var(--confident-light-grey, #f4f5fa);
    text-align: center;
    font-size: 56px;
    font-weight: 700;
    line-height: 66px;
    max-width: 640px;
    margin: 0 auto 16px;
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 50px;
      margin: 0 auto 24px;
    `}
  }
  .description {
    color: var(--confident-light-grey, #f4f5fa);
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    max-width: 640px;
    margin: 0 auto 40px;
    ${responsive.sm`
      color: var(--clarity-white, #FFF);
      font-size: 24px;
      font-weight: 400;
      line-height: 34px;
      margin: 0 auto 24px;
    `}
    span {
      font-weight: 700;
    }
  }
  .get-started {
    margin: 0 auto;
    ${responsive.sm`
      height: 48px;
      width: 100%;
      padding-left: 0;
    `}
    svg {
      ${responsive.sm`
        display: none;
      `}
    }
  }
`
