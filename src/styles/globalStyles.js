import { createGlobalStyle } from 'styled-components'
import { rem } from '@/utils/rem'

const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: ${rem(72)};

    @media (max-width: 1279px) {
      --header-height: ${rem(72)};
    }
    @media (max-width: 767px) {
      --header-height: ${rem(54)};
    }
  }

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

    /* @media (-webkit-device-pixel-ratio: 1.25) {
      font-size: 86%;
    } */

    /* @media only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
      font-size: 86%;
    } */
  }

  a {
    color: inherit;
    text-decoration: none;
    display: contents;
  }

  ul, li {
    list-style: none;
  }

  .containerHeader {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 60px;
    @media (max-width: 1536px) {
      padding: 0 32px;
    }
    @media (max-width: 1279px) {
      padding: 0 40px;
    }
    @media (max-width: 767px) {
      padding: 0 16px;
    }
  }

  .container {
    max-width: ${rem(1400)};
    margin: 0 auto;

    @media (max-width: 1536px) {
      max-width: ${rem(1216)};
    }
    @media (max-width: 1279px) {
      max-width: ${rem(1024)};
    }
    @media (max-width: 1024px) {
      max-width: 767px;
      padding: 0 ${rem(40)};
    }
    @media (max-width: 767px) {
      max-width: 100%;
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
`

export default GlobalStyle
