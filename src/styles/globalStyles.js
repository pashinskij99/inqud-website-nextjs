'use client'

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
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 1536px) {
      max-width: 1216px;
    }
    @media (max-width: 1279px) {
      max-width: 767px;
    }
    @media (max-width: 1024px) {
      max-width: 767px;
      padding: 0 40px;
    }
    @media (max-width: 767px) {
      max-width: 100%;
      padding: 0 16px;
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
  .events-none {
    pointer-events: none;
    touch-action: none;
  }
  .loader-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`

export default GlobalStyle
