import {createGlobalStyle} from 'styled-components';
import {rem} from '@/utils/rem';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    position: relative;
  }

  html {
    font-size: 100%;

    @media (-webkit-device-pixel-ratio: 1.25) {
      font-size: 85%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    display: contents;
  }

  ul, li {
    list-style: none;
  }

  .container {
    max-width: ${rem(1401)};
    margin: 0 auto;

    @media (max-width: 1400px) {
      max-width: ${rem(1200)};
    }
    @media (max-width: 1200px) {
      max-width: ${rem(970)};
    }
    @media (max-width: 992px) {
      max-width: ${rem(750)};
      padding: 0 ${rem(40)};
    }
    @media (max-width: 780px) {
      max-width: none;
      padding: 0 ${rem(40)};
    }
    @media (max-width: 576px) {
      max-width: none;
      padding: 0 ${rem(16)};
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .no-scroll {
    overflow: hidden !important;
  }
`;

export default GlobalStyle;