import { createContext, useMemo } from 'react'

export const PageContext = createContext()

export default function PageProvider({ dataPage = {}, children }) {
  const value = useMemo(
    () => ({
      dataPage,
    }),
    [dataPage]
  )
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}
