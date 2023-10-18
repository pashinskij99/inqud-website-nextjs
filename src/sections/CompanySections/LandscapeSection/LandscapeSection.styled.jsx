'use client'

import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledLandscapeSectionWrapper = styled.section`
  padding-top: 200px;
  ${responsive.xxl`
    padding-top: 199px;
  `}
  ${responsive.xl`
    padding-top: 120px;
  `}
  ${responsive.sm`
    padding-top: 95px;
  `}
  .container {
  }
  .text-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    column-gap: 94px;
    margin-bottom: 50px;
    ${responsive.xxl`
      column-gap: 0;
    `}
    ${responsive.xl`
      flex-direction: column;
      align-items: center;
      margin-bottom: 25px;
    `}
  }
  .title-wrapper {
    /* display: flex; */
    ${responsive.xl`
      text-align: center;
    `}
  }
  .title {
    margin-bottom: 16px;
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
    `}
  }
  .description {
    color: rgba(81, 113, 133, 1);
    max-width: 537px;
    ${responsive.xl`
      max-width: 100%;
    `}
    ${responsive.xxl`
      br {
        display: none;
      }
    `}
    ${responsive.xl`
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0em;
      max-width: 585px;

      margin-bottom: 38px;
    `}
    ${responsive.sm`
      font-size: 18px;
      line-height: 24px;
      max-width: 100%;
      br {
        display: none;
      }
    `}
  }
  .list {
    display: flex;
    column-gap: 56px;
    justify-content: center;
    ${responsive.xxl`
      max-width: 667px;
      width: 100%;
      column-gap: 0px;
      justify-content: space-between;
    `}
    ${responsive.xl`
      column-gap: 26px;
      justify-content: center;
    `}
    ${responsive.sm`
      flex-wrap: wrap;
      row-gap: 16px;
      justify-content: space-between;
    `}
    ${responsive.xxs`
      justify-content: flex-start;
    `}
  }
  .list-item {
    display: flex;
    align-items: center;
    gap: 22.77px;
    ${responsive.xxl`
      gap: 15.8px;
    `}
    ${responsive.xl`
      gap: 12px;
    `}
    ${responsive.sm`
      max-width: auto;
      display: flex;
      align-items: flex-end;
    `}

    &:nth-of-type(1) {
      svg {
        width: 37.031px;
        height: 35.872px;
        flex-shrink: 0;
        ${responsive.sm`
          width: 32.878px;
          height: 31.418px;
        `}
      }
    }
    &:nth-of-type(2) {
      img {
        width: 42.189px;
        height: 38.638px;
        flex-shrink: 0;
        ${responsive.sm`
          width: 36.878px;
          height: 34.418px;
        `}
      }
    }
    &:nth-of-type(3) {
      svg {
        width: 34.878px;
        height: 28.418px;
        flex-shrink: 0;
        ${responsive.sm`
          width: 30.878px;
          height: 27.418px;
        `}
      }
    }
  }
  .list-item-icon-wrapper {
    display: flex;
  }
  .list-item-text-wrapper {
  }
  .list-item-title {
    font-weight: 700;
  }
  .list-item-description {
    color: rgba(81, 113, 133, 1);
    ${responsive.xxl`
      line-height: 18px;
    `}
    ${responsive.xl`
      font-size: 14px;
    `}
  }

  .map {
    max-width: 775.02px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
`
