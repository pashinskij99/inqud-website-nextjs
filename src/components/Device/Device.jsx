'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { responseBreakPoint } from '@/utils/response'

export const MOBILE = 'MOBILE'
export const MOBILE_OR_TABLET = 'MOBILE_OR_TABLET'
export const TABLET = 'TABLET'
export const TABLET_OR_DESKTOP = 'TABLET_OR_DESKTOP'
export const DESKTOP = 'DESKTOP'

export default function Device({ device, children }) {
  const [isClient, setIsClient] = useState(false)
  const isMobile = useMediaQuery({
    query: `(max-width: ${responseBreakPoint.mobile}px)`,
  })
  const isTablet = useMediaQuery({
    minWidth: responseBreakPoint.mobile,
    maxWidth: responseBreakPoint.tablet,
  })
  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${responseBreakPoint.tablet}px)`,
  })
  const isDesktop = useMediaQuery({
    query: `(min-width: ${responseBreakPoint.tablet + 1}px)`,
  })
  const isDesktopOrTablet = useMediaQuery({
    query: `(min-width: ${responseBreakPoint.mobile + 1}px)`,
  })

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
