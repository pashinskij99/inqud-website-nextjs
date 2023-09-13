import { css } from '@emotion/react'

export const responsive = {
  xxs: (...args) => css`
    @media (max-width: 400px) {
      ${css(...args)};
    }
  `,
  xs: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (max-width: 767px) {
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

export const responseBreakPoint = {
  mobile: 767,
  tablet: 1279,
  desktop: 1280,
}
