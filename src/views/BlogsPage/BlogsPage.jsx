'use client'

// import { useEffect } from 'react'
// import { useRouterScroll } from '@moxy/next-router-scroll'
import { StyledBlogsPageWrapper } from '@/views/BlogsPage/BlogsPage.styled'
import BlogsSection from '@/sections/BlogsSections/BlogsSection'
import BlogsPageMainSection from '@/sections/BlogsSections/BlogsPageMainSection'
import { BlogProvider } from '@/contexts/BlogContext/BlogContext'

function BlogsPage({ data, tags, searchParams, pagination }) {
  // const { updateScroll } = useRouterScroll()

  // useEffect(() => {
  //   updateScroll()
  // }, [])

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
