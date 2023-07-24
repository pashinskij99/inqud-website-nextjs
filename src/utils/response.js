import { css } from '@emotion/react'

export const responsive = {
  xs: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (max-width: 639px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (max-width: 830px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (max-width: 1279px) {
      ${css(...args)};
    }
  `,
  xxl: (...args) => css`
    @media (max-width: 1536px) {
      ${css(...args)};
    }
  `,
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}
