'use client'

import { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'
import { StyledBlogsPageWrapper } from '@/views/BlogsPage/BlogsPage.styled'
import BlogsSection from '@/sections/BlogsSections/BlogsSection'
import BlogsPageMainSection from '@/sections/BlogsSections/BlogsPageMainSection'
import { BlogProvider } from '@/contexts/BlogContext/BlogContext'

function BlogsPage({ data, tags, searchParams, pagination, heroSectionData }) {
  const router = useRouter()

  useLayoutEffect(
    () => router.replace('/blog', undefined, { shallow: true }),
    []
  )

  return (
    <BlogProvider
      searchParams={searchParams}
      pagination={pagination}
      heroSectionData={heroSectionData}
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
