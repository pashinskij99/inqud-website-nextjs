import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledTeamSectionWrapper = styled.section`
  padding-top: 240px;
  text-align: center;
  overflow: hidden;
  ${responsive.xxl`
    padding-top: 311.88px;
  `}
  ${responsive.xl`
    padding-top: 120px;
  `}
  ${responsive.sm`
    padding-top: 96px;
  `}

  .container {
  }
  .title {
    margin-bottom: 24px;
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
    `}
  }
  .description {
    color: rgba(81, 113, 133, 1);
    margin-bottom: 64px;
    ${responsive.sm`
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 40px;
      br {
        display: none;
      }
    `}
  }
  .team-grid {
    display: flex;
    justify-content: space-between;
    column-gap: 40px;
    margin-bottom: 48px;
    ${responsive.xxl`
      column-gap: 24px;
    `}
    ${responsive.xl`
      display: grid;
      grid-template-columns: repeat(2, auto);
      column-gap: 48px;
      row-gap: 40px;
      justify-items: center;
      justify-content: center;
      margin-bottom: 40px;
    `}
    ${responsive.sm`
      grid-template-columns: repeat(1, auto);
      column-gap: 0;
      row-gap: 40px;
      display: none;
    `}
    li {
      display: contents;

      /* &:nth-child(1) {
        .team-grid-item-image {
          transform: scale(1.3) translateY(16%);
        }
      }
      &:nth-child(2) {
      }
      &:nth-child(3) {
      }
      &:nth-child(4) {
      } */
    }
  }

  .swiper-team-grid {
    display: none;
    overflow-x: visible;
    margin-bottom: 32px;
    ${responsive.sm`
      display: block; 
    `}

    .swiper-team-grid-slide {
      width: 327px;
    }
  }

  .more-btn {
    p {
      font-weight: 700;
      color: rgba(81, 113, 133, 1);
    }
  }
`

export const StyledTeamCartWrapper = styled.div`
  .image-wrapper {
    overflow: hidden;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    ${responsive.xxl`
      height: 286px;
    `}
    ${responsive.xl`
      height: 320px;
    `}
    ${responsive.sm`
      height: 328px;
    `}
  }
  .team-grid-item-image {
    max-width: 320px;
    width: 100%;
    object-position: top;
    object-fit: none;
    transform: scale(1.3) translateY(11%);
  }
  .team-grid-item-title {
    font-weight: 700;
    margin-bottom: 8px;
    ${responsive.sm`
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 0px;
    `}
  }
  .team-grid-item-subTitle {
    color: rgba(81, 113, 133, 1);
    margin-bottom: 24px;
  }
  .team-grid-social-list {
    display: flex;
    column-gap: 8px;
    justify-content: center;
  }
  .team-grid-social-list-link {
  }
`
