import { useState, createContext, useMemo } from 'react'

export const BlogContext = createContext(null)

export function BlogProvider({
  children,
  data = [],
  relatedData = {},
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
  const [isLastPaginationPage, setIsLastPaginationPage] = useState(false)

  const value = useMemo(
    () => ({
      data,
      tags: tags.allTags,
      activeTags: tags.activeTags,
      relatedData: relatedData.allBlogs,
      searchParams,
      pagination,
      isLastPaginationPage,
      setIsLastPaginationPage,
    }),
    [data, relatedData, tags]
  )

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}
