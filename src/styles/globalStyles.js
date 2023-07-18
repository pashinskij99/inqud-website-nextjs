import { createGlobalStyle } from 'styled-components'
import { rem } from '@/utils/rem'

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
      font-size: 86%;
    }

    @media only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
      font-size: 86%;
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

  .containerHeader {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 ${rem(60)};
    @media (max-width: 639px) {
      padding: 0 ${rem(15.58)};
    }
  }

  .container {
    max-width: ${rem(1400)};
    margin: 0 auto;

    @media (max-width: 1536px) {
      max-width: ${rem(1280)};
    }
    @media (max-width: 1280px) {
      max-width: ${rem(1024)};
    }
    @media (max-width: 1024px) {
      max-width: 100%;
      padding: 0 ${rem(40)};
    }
    @media (max-width: 639px) {
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
