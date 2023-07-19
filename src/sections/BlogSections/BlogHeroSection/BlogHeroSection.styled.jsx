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
    padding: ${rem(32)} 0;
  `};

  .arrowLeftBackground {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    z-index: 0;
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

    ${responsive.xl`
      display: none;
    `};
  }
  .container {
    position: relative;
    z-index: 1;
  }
  .title {
    ${responsive.md`
      br {
        display: none;
      }
    `};
    ${responsive.xs`
      margin-bottom: ${rem(16)};
      font-size: ${rem(40)};
      line-height: ${rem(46)};
      font-weight: 400;
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
