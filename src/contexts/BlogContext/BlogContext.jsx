import { createContext, useMemo } from 'react'

export const BlogContext = createContext(null)

export function BlogProvider({
  children,
  blogDetails = {},
  heroSectionData = null,
  relatedData = {},
  params,
}) {
  const value = useMemo(
    () => ({
      data: [],
      relatedData: relatedData.allBlogs,
      heroSectionData,
      blogDetails,
      params,
    }),
    [relatedData, blogDetails, heroSectionData, params]
  )

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}
