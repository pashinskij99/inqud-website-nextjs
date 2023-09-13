import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledHelpHeroSectionWrapper = styled.section`
  text-align: center;
  padding-top: 32px;
  position: relative;

  ${responsive.xl`
    padding-top: 46px;
  `}
  ${responsive.sm`
    padding-top: 32px;
  `}

  &.general {
    ${responsive.xl`
      padding-top: 32px;
    `}
  }

  .btn-back {
    display: none;
    border-radius: 42px;
    border: 1px solid var(--confident-light-grey, #f4f5fa);
    background: var(--clarity-white, #fff);
    height: 48px;
    align-items: center;
    column-gap: 6px;
    padding: 0 24px;
    transition: background-color 0.3s ease-in-out;
    position: absolute;
    top: 50%;
    left: 60px;
    transform: translateY(-50%);

    ${responsive.xxl`
      left: 32px;
    `}

    &.general {
      display: flex;
      ${responsive.xl`
        display: none;
      `}
    }

    &:hover {
      background-color: #f4f5fa;
    }

    p {
      color: var(--independent-grey, #517185);

      line-height: 24px;
    }
  }
  .container {
    ${responsive.xl`
      max-width: 100%;
      padding: 0;
    `}
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(129, 158, 176, 0.2);
  }

  .title {
    line-height: 74px;
    letter-spacing: 0em;
    margin-bottom: 32px;

    ${responsive.xl`
      line-height: 70px;
      letter-spacing: -0.08rem;
      margin-bottom: 36px;
    `}
    ${responsive.sm`
      padding: 0 16px;
      line-height: 46px;
      letter-spacing: 0em;
      margin-bottom: 23px;
    `}
    &.general {
      font-size: 56px;
      line-height: 62px;
      ${responsive.xl`
        letter-spacing: -0rem;
        margin-bottom: 30px;
      `}
      ${responsive.sm`
        color: var(--directness-black, #2D3439);
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
        margin-bottom: 24px;
      `}
    }
  }

  .search-wrapper {
    display: flex;
    align-items: center;
    column-gap: 16px;
    max-width: 541px;
    width: 100%;
    margin: 0 auto 24px;

    ${responsive.xl`
      max-width: 464px;
      margin: 0 auto 26px;
    `}
    ${responsive.sm`
      padding: 0 16px;
      flex-direction: column;
      row-gap: 8px;
      margin: 0 auto 25px;
    `}
    .input-wrapper {
      width: 100%;

      &.input-wrapper-1 {
        ${responsive.xl`
        display: none;
      `}
      }

      &.input-wrapper-2 {
        display: none;
        ${responsive.xl`
        display: block;
      `}
      }
    }

    .search-btn {
      height: 48px;

      ${responsive.sm`
        width: 100%;
      `}
    }
  }

  .tabs {
    align-items: baseline;
    transform: translateX(-14.5px);

    ${responsive.xl`
      width: 100%;
      transform: none;
    `}
    button {
      ${responsive.xl`
        width: 100%;
        padding: 0!important;
        display: flex;
        flex: 1;
        max-width: 100%;
      `}
    }

    .ourLandscapeTabsButton.active {
      border: none;
      border-bottom: 2px solid rgba(7, 116, 83, 1);
      border-radius: 0;
    }
  }
`
