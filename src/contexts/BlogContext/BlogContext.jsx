import { createContext, useMemo } from 'react';

export const BlogContext = createContext(null);

export function BlogProvider({
  children,
  data = [],
  heroSectionData,
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
  const value = useMemo(
    () => ({
      data,
      tags: tags.allTags,
      activeTags: tags.activeTags,
      relatedData: relatedData.allBlogs,
      heroSectionData,
      searchParams,
      pagination,
    }),
    [data, relatedData, tags]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
