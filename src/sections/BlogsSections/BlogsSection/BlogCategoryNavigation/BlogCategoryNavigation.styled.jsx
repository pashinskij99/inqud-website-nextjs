import styled from '@emotion/styled';

export const StyledBlogCategoryNavigationWrapper = styled.div`
  background-color: rgba(239, 242, 245, 1);

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
    gap: 8px;
    padding: 23px 0;
    overflow-x: auto;

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    li {
      position: relative;

      button {
        border-radius: 50px;
        background: #FFF;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        width: max-content;

        h5 {
          color: rgba(81, 113, 133, 1);
          @media (max-width: 576px) {
            font-size: 24px;
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
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(239, 242, 245, 1);
            z-index: -1;
            border-radius: 0 50px 50px 0;
          }
        }

        h5 {
          color: rgba(7, 116, 83, 1);
        }
      }
    }
  }
`