import { createContext, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

export const HelpCentreContext = createContext()

export function HelpCentreProvider({
  children,
  browseByProduct,
  exploreByCategory,
}) {
  const { tab } = useSelector((state) => state.activeTab)
  const [browseByProductData, setBrowseByProductData] = useState([])
  const [exploreByCategoryData, setExploreByCategoryData] = useState([])

  useEffect(() => {
    if (tab === 0) {
      setBrowseByProductData(
        browseByProduct.map(
          ({ mainTitleBusiness, id, iconBusiness, contentBusiness }) => ({
            title: mainTitleBusiness,
            id,
            icon: iconBusiness.url,
            answers: contentBusiness.length,
            listQuestions: contentBusiness,
          })
        )
      )
      setExploreByCategoryData(
        exploreByCategory.map(
          ({ mainTitleBusiness, id, iconBusiness, contentBusiness }) => ({
            title: mainTitleBusiness,
            id,
            icon: iconBusiness.url,
            answers: contentBusiness.length,
            listQuestions: contentBusiness,
          })
        )
      )
    } else {
      setBrowseByProductData(
        browseByProduct.map(
          ({ mainTitlePersonal, id, iconPersonal, contentPersonal }) => ({
            title: mainTitlePersonal,
            id,
            icon: iconPersonal.url,
            answers: contentPersonal.length,
            listQuestions: contentPersonal,
          })
        )
      )
      setExploreByCategoryData(
        exploreByCategory.map(
          ({ mainTitlePersonal, id, iconPersonal, contentPersonal }) => ({
            title: mainTitlePersonal,
            id,
            icon: iconPersonal.url,
            answers: contentPersonal.length,
            listQuestions: contentPersonal,
          })
        )
      )
    }
  }, [tab])

  const value = useMemo(
    () => ({
      browseByProductData,
      exploreByCategoryData,
    }),
    [browseByProductData, exploreByCategoryData]
  )

  return (
    <HelpCentreContext.Provider value={value}>
      {children}
    </HelpCentreContext.Provider>
  )
}
