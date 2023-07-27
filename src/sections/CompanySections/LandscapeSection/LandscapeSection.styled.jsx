import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledLandscapeSectionWrapper = styled.section`
  padding-top: 240px;
  ${responsive.xl`
    padding-top: 120px;
  `}
  ${responsive.sm`
    padding-top: 98px;
  `}
  .container {
  }
  .title {
    text-align: center;
    margin-bottom: 16px;
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
    `}
  }
  .description {
    text-align: center;
    color: rgba(81, 113, 133, 1);
    margin-bottom: 64px;
    ${responsive.xl`
      margin-bottom: 40px;
    `}
    ${responsive.sm`
      font-size: 18px;
      line-height: 26px;
      br {
        display: none;
      }
    `}
  }
  .list {
    display: flex;
    column-gap: 63px;
    justify-content: center;
    margin-bottom: 48px;

    ${responsive.xl`
      column-gap: 32px;
      margin-bottom: 25px;
    `}
    ${responsive.sm`
      flex-wrap: wrap;
      row-gap: 16px;
      justify-content: space-between;
    `}
  }
  .list-item {
    display: flex;
    align-items: center;
    gap: 22.77px;
    ${responsive.xl`
      gap: 15.8px;
    `}
    ${responsive.sm`
      max-width: auto;
    `}

    &:nth-child(1) {
      svg {
        width: 27px;
        height: 26px;
        flex-shrink: 0;
      }
    }
    &:nth-child(2) {
      img {
        width: 28px;
        height: 25px;
        flex-shrink: 0;
      }
    }
    &:nth-child(3) {
      svg {
        width: 28px;
        height: 25px;
        flex-shrink: 0;
      }
    }
  }
  .list-item-icon-wrapper {
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
    max-width: 999.998px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
`
