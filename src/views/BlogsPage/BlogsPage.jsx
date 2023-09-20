'use client'

import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledBlogsPageWrapper } from '@/views/BlogsPage/BlogsPage.styled'
import BlogsSection from '@/sections/BlogsSections/BlogsSection'
import BlogsPageMainSection from '@/sections/BlogsSections/BlogsPageMainSection'
import { BlogContext, BlogProvider } from '@/contexts/BlogContext/BlogContext'
import { fetchBlogs } from '@/store/features/blog/blogAsyncThunk'
import { setTags } from '@/store/features/blog/blogSlice'

function BlogsWrapper() {
  const { pagination, activeTags, searchValue } = useSelector(
    (state) => state.blog
  )
  const { params } = useContext(BlogContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      fetchBlogs({
        params,
        paginationParams: pagination,
        tags: activeTags,
        searchValue,
      })
    )
  }, [])

  return (
    <>
      <BlogsPageMainSection />

      <BlogsSection />
    </>
  )
}

function BlogsPage({ tags = [], params, heroSectionData }) {
  const dispatch = useDispatch()

  dispatch(setTags(tags))

  return (
    <BlogProvider params={params} heroSectionData={heroSectionData}>
      <StyledBlogsPageWrapper>
        <BlogsWrapper />
      </StyledBlogsPageWrapper>
    </BlogProvider>
  )
}

export default BlogsPage
