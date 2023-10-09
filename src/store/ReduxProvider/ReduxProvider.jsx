'use client'

import { Provider } from 'react-redux'
import { usePathname } from 'next/navigation'
import { store } from '..'

export default function ReduxProvider({ children }) {
  const pathname = usePathname()

  if (pathname === '/business') return <>{children}</>

  return <Provider store={store}>{children}</Provider>
}
