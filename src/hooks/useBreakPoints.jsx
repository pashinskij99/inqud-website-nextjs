import { useMediaQuery } from './useMediaQuery'

export function useBreakpoints() {
  const breakpoints = {
    xxs: useMediaQuery('(max-width: 400px)'),
    xs: useMediaQuery('(max-width: 576px)'),
    sm: useMediaQuery('(max-width: 767px)'),
    md: useMediaQuery('(max-width: 830px)'),
    lg: useMediaQuery('(max-width: 1024px)'),
    xl: useMediaQuery('(max-width: 1279px)'),
    xxl: useMediaQuery('(max-width: 1536px)'),
    active: 'default',
  }

  if (breakpoints.xxs) breakpoints.active = 'xxs'
  if (breakpoints.xs) breakpoints.active = 'xs'
  if (breakpoints.sm) breakpoints.active = 'sm'
  if (breakpoints.md) breakpoints.active = 'md'
  if (breakpoints.lg) breakpoints.active = 'lg'
  if (breakpoints.xl) breakpoints.active = 'xl'
  if (breakpoints.xxl) breakpoints.active = 'xxl'

  return breakpoints
}
