import { useEffect, useState } from 'react'

export const useFilter = ({ data = [], searchValue }) => {
  const [filteredValue, setFilteredValue] = useState([])

  useEffect(() => {
    const newArray = []
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i]

        for (let j = 0; j < element.listQuestions.length; j++) {
          const elementInner = element.listQuestions[j]
          if (
            elementInner.title
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) > -1
          ) {
            newArray.push({ ...element, is: 'title' })
            continue
          }

          // eslint-disable-next-line no-restricted-syntax, no-labels
          third: for (let k = 0; k < elementInner.descriptions.length; k++) {
            const description = elementInner.descriptions[k]
            const splitedString = description.split('.')

            for (let l = 0; l < splitedString.length; l++) {
              const sentence = splitedString[l]

              if (
                sentence.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
              ) {
                newArray.push({
                  ...element,
                  description: sentence,
                  is: 'description',
                })
                // eslint-disable-next-line no-labels
                break third
              }
            }
          }
        }
      }
      setFilteredValue(newArray)
    }
  }, [data, searchValue])

  return { filteredValue }
}
