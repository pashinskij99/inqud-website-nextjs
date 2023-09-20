import { createContext, useEffect, useMemo, useState } from 'react'

export const HelpCentreDetailsContext = createContext(null)

export function HelpCentreDetailsProvider({ children, data }) {
  const [currentData, setCurrentData] = useState({})
  useEffect(() => {
    setCurrentData({
      content: data.content,
      icon: data.icon?.url,
      id: data.id,
      mainTitle: data.mainTitle,
    })
  }, [data])

  const value = useMemo(
    () => ({
      data: currentData,
      fullData: data,
    }),
    [currentData, data]
  )

  return (
    <HelpCentreDetailsContext.Provider value={value}>
      {children}
    </HelpCentreDetailsContext.Provider>
  )
}
