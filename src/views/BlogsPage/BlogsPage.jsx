'use client'

import { StyledBlogsPageWrapper } from '@/views/BlogsPage/BlogsPage.styled'
import BlogsSection from '@/sections/BlogsSections/BlogsSection'
import BlogsPageMainSection from '@/sections/BlogsSections/BlogsPageMainSection'
import { BlogProvider } from '@/contexts/BlogContext/BlogContext'

function BlogsPage({ data, tags, searchParams, pagination }) {
  return (
    <BlogProvider
      searchParams={searchParams}
      pagination={pagination}
      data={data}
      tags={tags}
    >
      <StyledBlogsPageWrapper>
        <BlogsPageMainSection />

        <BlogsSection />
      </StyledBlogsPageWrapper>
    </BlogProvider>
  )
}

export default BlogsPage
