import styled from '@emotion/styled'
import {responsive} from '@/utils/response';

export const StyledTutorialWrapper = styled.section`
  padding-top: 197px;
  overflow: hidden;

  ${responsive.xxl`
    padding-top: 240px;
  `}
  ${responsive.xl`
    padding-top: 122px;
    padding-bottom: 60px;
  `}
  ${responsive.sm`
    padding-top: 236px;
    padding-bottom: 60px;
  `}
  .container {
  }

  .title {
    margin-bottom: 56px;
    ${responsive.xxl`
      font-size: 64px;
      font-weight: 400;
      line-height: 70px;
      letter-spacing: -1.28px;
    `}
    ${responsive.xl`
      font-size: 56px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0em;
      margin-bottom: 40px;
      
    `}
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
      letter-spacing: 0em;
      text-align: center;
    `}
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 440px);
    justify-content: space-between;
    column-gap: 40px;
    margin-bottom: 48px;

    ${responsive.xxl`
      grid-template-columns: repeat(3, 388.5px);
      column-gap: 24.37px;
      margin-bottom: 40.12px;
    `}
    &.desktopAndLaptop {
      ${responsive.xl`
        display: none;
      `}
    }

    &.tabletAndMobile {
      display: none;
      ${responsive.xl`
        display: block;
      `}
    }

    .grid-swiper {
      overflow: visible;


      .grid-swiper-slide {
        ${responsive.xl`
          width: auto;
        `}
      }

      .swiper-scrollbar {
        bottom: -58px;
        width: 200px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(81, 113, 133, 0.2);
        opacity: 1 !important;
        height: 2px;
        ${responsive.xl`
          display: block;
        `};
        ${responsive.sm`
          display: block;
          bottom: -42px;
        `};

        .swiper-scrollbar-drag {
          background: rgba(7, 116, 83, 1) !important;
        }
      }
    }


  }

  .load-more {
    ${responsive.xl`
      display: none;
    `}
    p {
      color: var(--independent-grey, #517185);
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
    }

  }
`
export const StyledTutorialCartWrapper = styled.div`
  cursor: pointer;

  ${responsive.xl`
    width: 332px;
  `}
  ${responsive.sm`
    width: 100%;
  `}
  .cart-image-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    height: 250px;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 32px;

    ${responsive.xxl`
      height: 220.739px;
    `}
    ${responsive.xl`
      height: 193px;
      margin-bottom: 24px;
    `}
    &:after {
      content: '';
      pointer-events: none;
      touch-action: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      z-index: 1;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), lightgray 50% / cover no-repeat;
    }
  }

  .cart-image {
    border-radius: 30px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cart-title {
    font-weight: 700;
    line-height: 42px;
    ${responsive.xl`
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
    `}
  }
`

export const StyledTutorialCartPlayButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);

  ${responsive.xxl`
    transform: translate(-50%, -30%);
  `}
  ${responsive.xl`
    transform: translate(-50%, -45%);
  `}
  .play-icon {
    margin-bottom: 8px;
  }

  .play-text {
    color: var(--exciting-lime, #BFFFC8);
    text-align: center;

    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
`
