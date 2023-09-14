import styled from '@emotion/styled'
import { responsive } from '@/utils/response'
import { rem } from '@/utils/rem'

export const StyledCryptoBusinessSectionWrapper = styled.section`
  padding: 200px 0;
  overflow: hidden;
  ${responsive.xxl`
    padding: 200px 0 240px;
  `}
  ${responsive.xl`
    padding: 120px 0;
  `}
  ${responsive.sm`
    padding: 90px 0 112px;
  `}
  .container {
    ${responsive.sm`
      padding: 0 8px;
    `}
  }
  .title {
    color: var(--directness-black, #2d3439);
    font-weight: 400;
    line-height: 62px;
    margin-bottom: 56px;
    ${responsive.xxl`
      margin-bottom: 68px;
    `}
    ${responsive.xl`
      margin-bottom: 40px;
    `}
    ${responsive.sm`
      color: var(--directness-black, #2D3439);

      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
    `}
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 440px);
    justify-content: space-between;
    ${responsive.xxl`
      grid-template-columns: repeat(3, 389px);
    `}
    ${responsive.xl`
      grid-template-columns: repeat(3, 213px);
    `}
    ${responsive.sm`
      overflow: visible;
    `}

    &.grid-1 {
      ${responsive.sm`
        display: none;
      `}
    }
    &.grid-2 {
      display: none;

      .listRequirementsSwiperScollbar {
        bottom: -${rem(55)};
        width: ${rem(200)};
        left: 50%;
        transform: translateX(-50%);
        background: rgba(81, 113, 133, 0.2);
        opacity: 1 !important;
        height: 2px;

        .swiper-scrollbar-drag {
          background: rgba(7, 116, 83, 1) !important;
        }

        ${responsive.sm`
        bottom: -17px;
      `};
      }

      ${responsive.sm`
        display: block;
      `}

      .swiper-slide {
        width: 328px;
      }
    }

    .list {
      .item {
        &:not(:last-child) {
          border: none !important;
          .list-item-styled {
            border: none !important;
          }
        }
      }
    }
  }
`

export const StyledListItem = styled.div`
  width: 100%;
  border-radius: 20px;
  background: ${({ opacity, rgb }) => `rgba(${rgb}, ${opacity})`};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: start;
  padding: 15px 24px;
  ${responsive.xl`
    padding: 20px 16px;
    align-items: baseline;
  `}
  h5 {
    color: ${({ color }) => color};
    font-size: 18px;

    font-weight: 400;
    line-height: 26px;
  }

  &:first-child {
    padding: 18px 24px 22px;
    ${responsive.xl`
      padding: 15px 16px 20px;
    `}

    h5 {
      font-size: 24px;
      font-weight: 700;
    }
  }

  &:last-child {
    border: ${({ color }) => `2px solid ${color}`};
    padding: 15px 18px;
    ${responsive.xl`
      padding: 15px 15px;
      align-items: baseline;
    `}
    h5 {
      font-weight: 700;
    }
  }
`
