import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledCompanyHeroSectionWrapper = styled.section`
  padding-top: 120px;
  ${responsive.xxl`
    padding-top: 64px;
  `}
  ${responsive.sm`
    padding-top: 56px;
  `}
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 170px;
    ${responsive.xxl`
      column-gap: 70px;
    `}
    ${responsive.xl`
      flex-direction: column;
      align-items: normal;
      column-gap: 0;
    `}
    ${responsive.sm`
      flex-direction: column-reverse;
      row-gap: 64px;
    `}
  }
  .left-side {
    .title {
      margin-bottom: 24px;

      ${responsive.sm`
        font-size: 64px;
        line-height: 74px;
      `}
    }
    .title-description {
      margin-bottom: 64px;
      color: rgba(81, 113, 133, 1);
      ${responsive.sm`
        font-size: 24px;
        font-style: normal;
        line-height: 34px;
      `}
    }
    .subTitle {
      margin-bottom: 24px;
      font-weight: 700;
      ${responsive.xl`
        margin-bottom: 16px;
      `}
      ${responsive.sm`
        font-size: 40px;
        margin-bottom: 10px;
      `}
    }
    .subTitle-description {
      margin-bottom: 64px;
      color: rgba(81, 113, 133, 1);
      &:last-child {
        margin-bottom: 0;
        ${responsive.xl`
          margin-bottom: 64px;
        `}
        ${responsive.sm`
          margin-bottom: 0;
        `}
      }
    }
  }

  .right-side {
    flex-shrink: 0;

    ${responsive.xl`
      display: flex;
      width: 100%;
      justify-content: center;
    `}

    svg {
      max-width: 550px;
      width: 100%;
      height: auto;
      ${responsive.xl`
        max-width: 688px;
      `}
    }
  }
`
