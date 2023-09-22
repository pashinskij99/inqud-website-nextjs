import { createContext, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { render } from 'datocms-structured-text-to-html-string'

export const HelpCentreContext = createContext()

export function HelpCentreProvider({ children, data }) {
  const { tab } = useSelector((state) => state.activeTab)
  const [browseByProductData, setBrowseByProductData] = useState([])
  const [exploreByCategoryData, setExploreByCategoryData] = useState([])

  useEffect(() => {
    if (tab === 0) {
      setBrowseByProductData(
        data
          .filter(
            ({ category, typeContent }) =>
              typeContent.name === 'Business' &&
              category.name === 'Browse by product'
          )
          .map(({ mainTitle, id, icon, content }) => ({
            title: mainTitle,
            id,
            icon: icon.url,
            answers: content.length,
            listQuestions: content.map(({ descriptions, title, id }) => ({
              id,
              title,
              descriptions: descriptions.map(({ description }) =>
                render(description)
                  .replace(/(<([^>]+)>)/gi, '')
                  .replace(/(&[a-z]*;|<([^>]+)>)/gi, '')
              ),
            })),
          }))
      )
      setExploreByCategoryData(
        data
          .filter(
            ({ category, typeContent }) =>
              typeContent.name === 'Business' &&
              category.name === 'Explore by category'
          )
          .map(({ mainTitle, id, icon, content }) => ({
            title: mainTitle,
            id,
            icon: icon.url,
            answers: content.length,
            listQuestions: content.map(({ descriptions, title, id }) => ({
              id,
              title,
              descriptions: descriptions.map(({ description }) =>
                render(description)
                  .replace(/(<([^>]+)>)/gi, '')
                  .replace(/(&[a-z]*;|<([^>]+)>)/gi, '')
              ),
            })),
          }))
      )
    } else {
      setBrowseByProductData(
        data
          .filter(
            ({ category, typeContent }) =>
              typeContent.name === 'Personal' &&
              category.name === 'Browse by product'
          )
          .map(({ mainTitle, id, icon, content }) => ({
            title: mainTitle,
            id,
            icon: icon.url,
            answers: content.length,
            listQuestions: content.map(({ descriptions, title, id }) => ({
              id,
              title,
              descriptions: descriptions.map(({ description }) =>
                render(description)
                  .replace(/(<([^>]+)>)/gi, '')
                  .replace(/(&[a-z]*;|<([^>]+)>)/gi, '')
              ),
            })),
          }))
      )
      setExploreByCategoryData(
        data
          .filter(
            ({ category, typeContent }) =>
              typeContent.name === 'Personal' &&
              category.name === 'Explore by category'
          )
          .map(({ mainTitle, id, icon, content }) => ({
            title: mainTitle,
            id,
            icon: icon.url,
            answers: content.length,
            listQuestions: content.map(({ descriptions, title, id }) => ({
              id,
              title,
              descriptions: descriptions.map(({ description }) =>
                render(description)
                  .replace(/(<([^>]+)>)/gi, '')
                  .replace(/(&[a-z]*;|<([^>]+)>)/gi, '')
              ),
            })),
          }))
      )
    }
  }, [tab, data])

  const value = useMemo(
    () => ({
      browseByProductData,
      exploreByCategoryData,
      data,
    }),
    [browseByProductData, exploreByCategoryData, data]
  )

  return (
    <HelpCentreContext.Provider value={value}>
      {children}
    </HelpCentreContext.Provider>
  )
}
