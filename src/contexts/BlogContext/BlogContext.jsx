import { useRouter } from 'next/navigation'
import { createContext, useMemo } from 'react'

export const BlogContext = createContext(null)

export function BlogProvider({
  children,
  data = [],
  relatedData = [],
  searchParams,
  tags = {
    allTags: [],
    activeTags: [],
  },
  pagination = {
    first: 6,
    skip: 0,
    count: 0,
  },
}) {
  const { push } = useRouter()
  const entriesSearchParams = Object.entries(searchParams)

  const addActiveTag = (id) => {
    const oldQuery = entriesSearchParams
      .filter(([key]) => key !== 'tag')
      .map(([key, value]) => [key, value].join('='))
      .join('&')

    push(
      `?${oldQuery.length > 0 ? `${oldQuery}&` : ''}tag=${[
        ...tags.activeTags,
        id,
      ].join(',')}`
    )
  }

  const removeActiveTab = (id) => {
    const oldQuery = entriesSearchParams
      .filter(([key]) => key !== 'tag')
      .map(([key, value]) => [key, value].join('='))
      .join('&')

    push(
      `?${oldQuery.length > 0 ? `${oldQuery}&` : ''}tag=${tags.activeTags
        .filter((currentIdTag) => currentIdTag !== id)
        .join(',')}`
    )
  }

  const handleSearch = (text) => {
    const oldQuery = entriesSearchParams
      .filter(([key]) => key !== 'search')
      .map(([key, value]) => [key, value].join('='))
      .join('&')

    push(
      `?${oldQuery.length > 0 ? `${oldQuery}&` : ''}${
        text ? `search=${text}` : ''
      }`
    )
  }

  const handleStep = (step) => {
    const oldQuery = entriesSearchParams
      .filter(([key]) => key !== 'first' || key !== 'skip')
      .map(([key, value]) => [key, value].join('='))
      .join('&')

    push(
      `?${oldQuery.length > 0 ? `${oldQuery}&` : ''}${`skip=${
        pagination.first * step - pagination.first
      }`}`
    )
  }

  const value = useMemo(
    () => ({
      data,
      tags: tags.allTags,
      activeTags: tags.activeTags,
      relatedData: relatedData.allBlogs,
      removeActiveTab,
      addActiveTag,
      handleSearch,
      searchParams,
      handleStep,
      pagination,
    }),
    [data, relatedData, tags]
  )

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}
