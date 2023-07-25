import styled from '@emotion/styled'
import { rem } from '@/utils/rem'

export const StyledBlogCategoryNavigationWrapper = styled.div`
  background-color: rgba(239, 242, 245, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: rgba(239, 242, 245, 1);
    width: ${(props) => props.width};
    z-index: 1;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .container {
    //width: 100%;
    //display: flex;
    //align-items: center;
    //gap: 8px;
    //padding: 23px 0;
    //overflow-x: auto;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${rem(8)};
    padding: ${rem(23)} 0;
    overflow-x: auto;

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    &::after {
      content: '';
      display: block;
      width: ${(props) => props.width};
      height: 100%;
      flex: 0 0 auto;
    }

    li {
      position: relative;

      button {
        border-radius: ${rem(50)};
        background: #fff;
        height: ${rem(34)};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 ${rem(16)};
        width: max-content;

        h5 {
          color: rgba(81, 113, 133, 1);
          @media (max-width: 576px) {
            font-size: ${rem(24)};
          }
        }
      }

      &.active {
        position: sticky;
        left: 0;
        z-index: 1;

        button {
          background: rgba(191, 255, 200, 1);

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100% + ${rem(8)});
            height: 100%;
            background-color: rgba(239, 242, 245, 1);
            z-index: -1;
            /* border-radius: 0 ${rem(50)} ${rem(50)} 0; */
          }
        }

        h5 {
          color: rgba(7, 116, 83, 1);
        }
      }
    }
  }
`
