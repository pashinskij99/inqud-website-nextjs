import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledBlogHeroSectionWrapper = styled.section`
  position: relative;
  text-align: center;
  padding: ${rem(56)} 0;
  background-color: rgba(191, 255, 200, 1);
  overflow: hidden;

  ${responsive.xl`
    display: flex;
    flex-direction: column-reverse;
    padding: ${rem(40)} 0;
  `};

  ${responsive.xs`
    padding: ${rem(32)} 0 ${rem(38)};
  `};

  .arrowLeftBackground {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    z-index: 0;
    ${responsive.xxl`
      transform: translateX(-43%)
    `};
    ${responsive.xl`
      display: none;
    `};
  }
  .arrowRightBackground {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    z-index: 0;

    ${responsive.xxl`
      transform: translateX(43%)
    `};
    ${responsive.xl`
      display: none;
    `};
  }
  .container {
    position: relative;
    z-index: 1;
  }
  .title {
    margin-bottom: ${rem(16)};
    ${responsive.xxl`
      font-size: 56px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0em;

      margin-bottom: ${rem(14)};
    `}
    ${responsive.xl`
      font-size: 56px;
      font-weight: 400;
      line-height: 62px;
    `}
    ${responsive.sm`
      font-size: 40px;
      font-weight: 400;
      line-height: 46px;
      letter-spacing: -0.02em;

      margin-bottom: ${rem(8)};
      br {
        display: none;
      }
    `};
  }
  .date-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rem(12)};
    p {
      color: rgba(81, 113, 133, 1);
    }
  }
  .button-back {
    position: absolute;
    top: 50%;
    left: ${rem(60)};
    transform: translateY(-50%);
    height: ${rem(48)};
    padding: 0 ${rem(24)};
    display: flex;
    align-items: center;
    gap: ${rem(6)};
    border-radius: 42px;
    border: 1px solid #f4f5fa;
    background: #fff;
    z-index: 1;

    ${responsive.xxl`
      left: ${rem(32)};
    `};
    ${responsive.xl`
      position: static;
      width: fit-content;
      margin: 0 auto ${rem(16)};
      transform: none;
    `};

    p {
      color: rgba(81, 113, 133, 1);
    }
  }
`
