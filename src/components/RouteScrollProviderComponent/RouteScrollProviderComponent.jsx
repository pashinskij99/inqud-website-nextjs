'use client'

import { RouterScrollProvider } from '@moxy/next-router-scroll'

export default function RouteScrollProviderComponent({ children }) {
  return <RouterScrollProvider>{children}</RouterScrollProvider>
}
