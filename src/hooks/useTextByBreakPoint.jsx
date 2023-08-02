import { useBreakpoints } from './useBreakPoints'

export function useTextByBreakPoint({
  contentDesktop,
  contentLaptop,
  contentTablet,
  contentMobile,
}) {
  const { sm, xl, xxl } = useBreakpoints()
  if (sm) return contentMobile
  if (xl) return contentTablet
  if (xxl) return contentLaptop
  return contentDesktop
}
