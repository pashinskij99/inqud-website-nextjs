import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledCompanyHeroSectionWrapper = styled.section`
  padding-top: 70px;
  ${responsive.xxl`
    padding-top: 60px;
  `}
  ${responsive.xl`
    padding-top: 20px;
  `}
  ${responsive.sm`
    padding-top: 28px;
  `}

  .container {
    display: flex;
    justify-content: space-between;
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
      row-gap: 41px;
    `}

    &.desktop {
      ${responsive.xl`
        display: none;
      `}
      ${responsive.sm`
        display: flex;
      `}
    }
    &.tablet {
      display: none;
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-between;
      column-gap: 24px;
      row-gap: 45px;
      svg {
        width: 100%;
        height: auto;
      }
      ${responsive.xl`
        display: grid;
      `};
      ${responsive.sm`
        display: none;
      `}
    }
  }
  .cart {
    &:nth-of-type(1) {
      align-self: center;
    }

    .title {
      margin-bottom: 12px;
    }
    .title-description {
      /* margin-bottom: 48px; */
      color: rgba(81, 113, 133, 1);
      line-height: 24px;
    }
    .subTitle {
      margin-bottom: 23px;
      font-weight: 700;
      line-height: 32px;
    }
    .subTitle-description {
      /* margin-bottom: 39px; */
      color: rgba(81, 113, 133, 1);
      line-height: 24px;
    }
  }
  .left-side {
    .title {
      margin-bottom: 14px;

      ${responsive.sm`
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
        letter-spacing: 0em;
        margin-bottom: 16px;
      `}
    }
    .title-description {
      margin-bottom: 48px;
      color: rgba(81, 113, 133, 1);
      line-height: 32px;

      ${responsive.sm`
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;

        margin-bottom: 39px;
      `}
    }
    .subTitle {
      margin-bottom: 23px;
      font-weight: 700;
      line-height: 32px;

      ${responsive.xl`
        margin-bottom: 16px;
      `}
      ${responsive.sm`
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0em;

        margin-bottom: 10px;
      `}
    }
    .subTitle-description {
      margin-bottom: 39px;
      color: rgba(81, 113, 133, 1);
      line-height: 24px;
      ${responsive.sm`
        margin-bottom: 21px;
      `}
      &:last-of-type {
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

    ${responsive.xxl`
      display: flex;
      align-items: center;
    `}

    ${responsive.xl`
      display: flex;
      width: 100%;
      justify-content: center;
    `}

    img {
      max-width: 550px;
      width: 100%;
      height: auto;
      ${responsive.xl`
        max-width: 688px;
      `}
    }
  }
`
