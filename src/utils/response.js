import {css} from '@emotion/react';

export const responsive = {
  xs: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: 639px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: 1280px) {
      ${css(...args)}
    }
  `,
  xxl: (...args) => css`
    @media (max-width: 1536px) {
      ${css(...args)}
    }
  `
}
