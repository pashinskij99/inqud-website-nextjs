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
            listQuestions: contentBusiness.map(
              ({ descriptions, title, id }) => ({
                id,
                title,
                descriptions: descriptions.map(
                  ({ description }) =>
                    description.value?.document.children[0].children[0].value
                ),
              })
            ),
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
            listQuestions: contentBusiness.map(
              ({ descriptions, title, id }) => ({
                id,
                title,
                descriptions: descriptions.map(
                  ({ description }) =>
                    description.value?.document.children[0].children[0].value
                ),
              })
            ),
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
            listQuestions: contentPersonal.map(
              ({ descriptions, title, id }) => ({
                id,
                title,
                descriptions: descriptions.map(
                  ({ description }) =>
                    description.value?.document.children[0].children[0].value
                ),
              })
            ),
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
            listQuestions: contentPersonal.map(
              ({ descriptions, title, id }) => ({
                id,
                title,
                descriptions: descriptions.map(
                  ({ description }) =>
                    description.value?.document.children[0].children[0].value
                ),
              })
            ),
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
