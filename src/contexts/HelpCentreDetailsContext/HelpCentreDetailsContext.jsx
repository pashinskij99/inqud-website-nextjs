import { createContext, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

export const HelpCentreDetailsContext = createContext()

export function HelpCentreDetailsProvider({ children, data, type }) {
  const [currentData, setCurrentData] = useState({})
  const { tab } = useSelector((state) => state.activeTab)

  useEffect(() => {
    if (type === 'product') {
      if (tab === 0) {
        setCurrentData({
          content: data.helpCentreBlock.contentBusiness,
          icon: data.helpCentreBlock.iconBusiness.url,
          id: data.helpCentreBlock.id,
          mainTitle: data.helpCentreBlock.mainTitleBusiness,
        })
      } else {
        setCurrentData({
          content: data.helpCentreBlock.contentPersonal,
          icon: data.helpCentreBlock.iconPersonal.url,
          id: data.helpCentreBlock.id,
          mainTitle: data.helpCentreBlock.mainTitlePersonal,
        })
      }
    } else if (tab === 0) {
      setCurrentData({
        content: data.helpCentreBlockSecond.contentBusiness,
        icon: data.helpCentreBlockSecond.iconBusiness.url,
        id: data.helpCentreBlockSecond.id,
        mainTitle: data.helpCentreBlockSecond.mainTitleBusiness,
      })
    } else {
      setCurrentData({
        content: data.helpCentreBlockSecond.contentPersonal,
        icon: data.helpCentreBlockSecond.iconPersonal.url,
        id: data.helpCentreBlockSecond.id,
        mainTitle: data.helpCentreBlockSecond.mainTitlePersonal,
      })
    }
  }, [data, type])

  console.log(currentData)

  const value = useMemo(
    () => ({
      data: currentData,
    }),
    [currentData]
  )

  return (
    <HelpCentreDetailsContext.Provider value={value}>
      {children}
    </HelpCentreDetailsContext.Provider>
  )
}
