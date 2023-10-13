'use client'

import { useEffect, useState } from 'react'
// import { useMediaQuery } from 'react-responsive'
import useMediaQuery from '@mui/material/useMediaQuery'
import { responseBreakPoint } from '@/utils/response'

export const MOBILE = 'MOBILE'
export const MOBILE_OR_TABLET = 'MOBILE_OR_TABLET'
export const TABLET = 'TABLET'
export const TABLET_OR_DESKTOP = 'TABLET_OR_DESKTOP'
export const DESKTOP = 'DESKTOP'

export default function Device({ device, children }) {
  const [isClient, setIsClient] = useState(false)
  // const isMobile = useMediaQuery({
  //   query: `(max-width: ${responseBreakPoint.mobile}px)`,
  // })
  const isMobile = useMediaQuery(
    `(max-width: ${responseBreakPoint.mobile}px)`,
    { noSsr: true }
  )
  // const isTablet = useMediaQuery({
  //   minWidth: responseBreakPoint.mobile,
  //   maxWidth: responseBreakPoint.tablet,
  // })
  const isTablet = useMediaQuery(
    `(max-width: ${responseBreakPoint.tablet}px) and (min-width: ${responseBreakPoint.mobile}px)`
  )
  // const isMobileOrTablet = useMediaQuery({
  //   query: `(max-width: ${responseBreakPoint.tablet}px)`,
  // })
  const isMobileOrTablet = useMediaQuery(
    `(max-width: ${responseBreakPoint.tablet}px)`
  )
  // const isDesktop = useMediaQuery({
  //   query: `(min-width: ${responseBreakPoint.tablet + 1}px)`,
  // })
  const isDesktop = useMediaQuery(
    `(min-width: ${responseBreakPoint.tablet + 1}px)`
  )
  // const isDesktopOrTablet = useMediaQuery({
  //   query: `(min-width: ${responseBreakPoint.mobile + 1}px)`,
  // })
  const isDesktopOrTablet = useMediaQuery(
    `(min-width: ${responseBreakPoint.mobile + 1}px)`
  )

  const getDevice = (key) => {
    switch (key) {
      case MOBILE:
        return isMobile
      case TABLET:
        return isTablet
      case DESKTOP:
        return isDesktop
      case MOBILE_OR_TABLET:
        return isMobileOrTablet
      case TABLET_OR_DESKTOP:
        return isDesktopOrTablet
      default:
        return isDesktop
    }
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return <> {isClient && getDevice(device) ? children : null}</>
}
