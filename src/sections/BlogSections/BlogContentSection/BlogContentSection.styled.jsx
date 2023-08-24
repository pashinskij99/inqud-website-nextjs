import styled from '@emotion/styled';
import { rem } from '@/utils/rem';
import { responsive } from '@/utils/response';

export const StyledBlogContentSectionWrapper = styled.section`
  padding-top: ${rem(39)};
  padding-bottom: ${rem(110)};

  ${responsive.xxl`
    padding-bottom: ${rem(144)};
  `};
  ${responsive.xl`
    padding-top: ${rem(52)};
    padding-bottom: ${rem(120)};
  `};
  ${responsive.xs`
    padding-top: ${rem(24)};
    padding-bottom: ${rem(96)};
  `};

  .container {
    display: flex;
    justify-content: space-between;
    column-gap: ${rem(56)};
    ${responsive.xxl`
      column-gap: ${rem(24)};
    `}
    ${responsive.xl`
      flex-direction: column;
      row-gap: ${rem(39)};
    `};
    ${responsive.xs`
      flex-direction: column;
      row-gap: ${rem(24)};
      padding: 0;
    `};
  }
`;

export const StyledLeftSide = styled.div`
  top: calc(var(--header-height) + ${rem(68)});
  position: sticky;
  height: fit-content;
  width: 321px;
  flex-shrink: 0;

  ${responsive.xxl`
    width: 100%;
    max-width: ${rem(286)};
  `}

  ${responsive.xl`
    position: static;
    top: calc(var(--header-height) + ${rem(68)});
    order: 2;
    width: 100%;
    max-width: 100%;
  `};

  ${responsive.sm`
    top: calc(var(--header-height) + ${rem(24)});
    padding: 0 16px;
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
    row-gap: ${rem(16)};
    margin-bottom: ${rem(40)};

    ${responsive.xl`
      display: none;
    `};

    li {
      cursor: pointer;
      border-left: 0px solid transparent;

      &.active {
        border-left: 2px solid rgba(7, 116, 83, 1);
      }

      .title {
        display: block;
        color: var(--independent-grey, #517185);
        font-weight: 400;
        line-height: 26px;
        transform: translateX(0px);
        transition: 0.2s ease;

        &.active {
          color: var(--ambitious-green, #077453);
          font-weight: 700;
          transform: translateX(10px);
        }
      }
    }
  }

  .share-wrapper {
    ${responsive.xl`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `};

    .share-title {
      font-weight: 700;
      margin-bottom: ${rem(8)};
      ${responsive.xl`
        line-height: 1;
        margin-bottom: 0;
      `}
    }

    .share {
      display: flex;
      align-items: center;
      column-gap: ${rem(8)};
      flex-direction: row;

      ${responsive.sm`
        column-gap: 16px;
      `}
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
`;
export const StyledCenterSide = styled.div`
  width: 100%;
  ${responsive.xl`
    order: 1;
  `};

  .content-section {
    margin-bottom: ${rem(40)};

    ${responsive.xxl`
      margin-bottom: ${rem(38)};
    `}
    &:last-child {
      margin-bottom: 0;
    }

    .description {
      margin-bottom: ${rem(16)};

      &:last-child,
      &:last-of-type {
        margin-bottom: 0;
      }

      ${responsive.sm`
        padding: 0 16px;
      `}
    }

    .image {
      width: 100%;
      object-fit: contain;
      margin: ${rem(40)} 0;

      &:last-child,
      &:last-of-type {
        margin-bottom: 0;
      }

      ${responsive.xxl`
        height: 247px;
        object-fit: cover;
      `}
    }
  }

  .link {
    display: contents;

    span {
      text-decoration-line: underline;
      color: #077453;
    }
  }

  .title {
    margin-bottom: ${rem(16)};
    font-weight: 700;
    ${responsive.sm`
      font-size: 32px;
      font-weight: 700;
      line-height: 42px;
      letter-spacing: 0em;
      padding: 0 16px;
    `}
  }

  .separated {
    border-left: ${rem(4)} solid rgba(7, 116, 83, 1);
    padding-left: ${rem(24)};
    margin-top: ${rem(23)};
    margin-bottom: ${rem(25)};
    line-height: 32px;

    ${responsive.xl`
      font-size: ${rem(24)};
      font-weight: 400;
      margin: 23px 0 25px;
      line-height: 32px;

      br {
        display: none;
      }
    `};

    ${responsive.sm`
      margin: 23px 16px 25px;
    `}
    &.desktop {
      ${responsive.xxl`
        display: none;
      `}
    }

    &.laptop {
      display: none;

      ${responsive.xxl`
        display: block;
      `}
    }

    &.tablet {
      display: none;

      ${responsive.xl`
        display: block;
      `}
    }

    &.mobile {
      display: none;

      ${responsive.sm`
        display: block;
      `}
    }
  }
`;
export const StyledRightSide = styled.div`
  width: ${rem(320)};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  row-gap: ${rem(8)};

  ${responsive.xxl`
    width: 100%;
    max-width: ${rem(286)};
  `}

  ${responsive.xl`
    order: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 100%;
    gap: ${rem(8)};
  `};

  ${responsive.sm`
    grid-template-columns: 1fr;
    padding: 0 16px;
  `};
`;

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

  .description-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .description {
    color: rgba(81, 113, 133, 1);
  }

  .author-image {
    border-radius: 50%;
  }
`;
