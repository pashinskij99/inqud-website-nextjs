'use client'

import { createElement, useEffect, useRef } from 'react'
import { useIntersectionObserver } from '@/components/InView/useIntersection'

export default function InView({
  as,
  children,
  options = {},
  onView,
  ...props
}) {
  const elementRef = useRef()

  const entry = useIntersectionObserver(elementRef, options)
  useEffect(() => {
    if (entry) {
      onView(entry.isIntersecting)
    }
  }, [entry])

  return createElement(
    as,
    {
      ...props,
      ref: elementRef,
    },
    children
  )
}
