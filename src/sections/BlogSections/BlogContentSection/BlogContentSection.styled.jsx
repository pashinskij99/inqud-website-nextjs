import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledBlogContentSectionWrapper = styled.section`
  padding-top: ${rem(61)};
  ${responsive.xl`
    padding-top: ${rem(68)};
  `};
  ${responsive.xs`
    padding-top: ${rem(24)};
  `};
  .container {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${rem(140)};
    column-gap: ${rem(40)};

    ${responsive.xl`
      flex-direction: column;
      row-gap: ${rem(36)};
      margin-bottom: ${rem(98)};
    `};
    ${responsive.xs`
      flex-direction: column;
      row-gap: ${rem(24)};
      margin-bottom: ${rem(96)};
    `};
  }
`

export const StyledLeftSide = styled.div`
  width: ${rem(305)};
  flex-shrink: 0;
  ${responsive.xl`
    order: 2;
    width: 100%;
  `};

  h5 {
    font-weight: 700;
    margin-bottom: ${rem(14)};
    ${responsive.xl`
      display: none;
    `};
  }
  .blog-content-nav {
    display: flex;
    flex-direction: column;
    row-gap: ${rem(12)};
    margin-bottom: ${rem(40)};

    ${responsive.xl`
      display: none;
    `};

    li {
      display: flex;
      align-items: start;
      .line {
        display: inline-block;
        position: absolute;
        opacity: 0;
        width: ${rem(2)};
        height: ${rem(16)};
        flex-shrink: 0;
        transform: translateY(25%);
        animation: animateListItemLineReverse 0.3s ease-in-out forwards;
        transition: 0.3s ease-in-out;
      }
      .title {
        transform: translateX(0);
        transition: 0.3s ease-in-out;
        animation: animateListItemTextReverse 0.3s ease-in-out forwards;
        color: #517185;
      }

      /* &:hover {
        .line {
          animation: animateListItemLine 0.3s ease-in-out forwards;
        }
        .title {
          animation: animateListItemText 0.3s ease-in-out forwards;
        }
      } */

      &.active {
        .line {
          animation: animateListItemLine 0.3s ease-in-out forwards;
        }
        .title {
          animation: animateListItemText 0.3s ease-in-out forwards;
        }
      }
    }
  }
  .share-wrapper {
    ${responsive.xl`
      display: flex;
      justify-content: space-between;
    `};
    .share-title {
      font-weight: 700;
      margin-bottom: ${rem(8)};
    }
    .share {
      display: flex;
      align-items: center;
      column-gap: ${rem(8)};
      flex-direction: row;
      li {
        display: contents;
        a {
          svg {
            rect {
              fill: rgba(159, 159, 159, 1);
            }
            path {
              fill: rgba(29, 25, 25, 1);
            }
          }
        }
      }
    }
  }

  @keyframes animateListItemLine {
    form {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes animateListItemLineReverse {
    form {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes animateListItemText {
    from {
      transform: translateX(${rem(0)});
    }
    to {
      transform: translateX(${rem(7)});
      font-weight: 700;
      color: #077453;
    }
  }
  @keyframes animateListItemTextReverse {
    from {
      transform: translateX(${rem(7)});
    }
    to {
      transform: translateX(${rem(0)});
    }
  }
`
export const StyledCenterSide = styled.div`
  width: 100%;
  ${responsive.xl`
    order: 1;
  `};
  .description {
    margin-bottom: ${rem(40)};
    &:last-child {
      margin-bottom: 0;
    }
  }
  .link {
    display: inline-block;
    text-decoration-line: underline;
    color: #077453;
  }
  .title {
    margin-bottom: ${rem(16)};
    font-weight: 700;
  }
  .image {
    width: 100%;
    object-fit: contain;
    height: auto;
    margin-bottom: ${rem(40)};
  }
  .separated {
    border-left: ${rem(4)} solid rgba(7, 116, 83, 1);
    padding-left: ${rem(24)};
    margin-top: ${rem(25)};
    margin-bottom: ${rem(23)};
    ${responsive.sm`
      font-size: ${rem(24)};
      font-weight: 400;
      line-height: ${rem(34)};
      br {
        display: none;
      }
    `};
  }
`
export const StyledRightSide = styled.div`
  width: ${rem(320)};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  row-gap: ${rem(8)};

  ${responsive.xl`
    order: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: ${rem(8)};
  `};

  ${responsive.sm`
    grid-template-columns: 1fr;
  `};
`

export const StyledCartInfoWrapper = styled.div`
  width: 100%;
  border-radius: ${rem(16)};
  background: #f4f5fa;
  padding: ${rem(8)} ${rem(16)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-weight: 700;
  }
  .description {
    color: rgba(81, 113, 133, 1);
  }
  .author-image {
    border-radius: 50%;
  }
`
