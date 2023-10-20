import { render } from 'datocms-structured-text-to-html-string'
import { useEffect, useState } from 'react'
import { helpCentreLinkTransform } from '@/utils/helpCentreLinkTransform'

export const useFilter = ({ data = [], searchValue }) => {
  const [filteredValue, setFilteredValue] = useState([])
  useEffect(() => {
    const newArray = []
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i]

        for (let j = 0; j < element.content.length; j++) {
          const elementInner = element.content[j]
          if (
            elementInner.title
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) > -1
          ) {
            newArray.push({
              ...elementInner,
              id: helpCentreLinkTransform(element.mainTitle),
              is: 'title',
              slugPage: element.slugPage,
            })
            break
          }

          // eslint-disable-next-line no-restricted-syntax, no-labels
          for (let k = 0; k < elementInner.descriptions.length; k++) {
            const description = render(elementInner.descriptions[k].description)
              .replace(/(<([^>]+)>)/gi, '')
              .replace(/(&[a-z]*;|<([^>]+)>)/gi, '')
            if (
              description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
            ) {
              newArray.push({
                ...elementInner,
                id: helpCentreLinkTransform(element.mainTitle),
                description,
                is: 'description',
                slugPage: element.slugPage,
              })
              break
            }
          }
        }
      }
      setFilteredValue(newArray)
    }
  }, [data, searchValue])

  return { filteredValue }
}
