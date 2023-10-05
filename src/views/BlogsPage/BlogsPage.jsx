'use client'

import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import dynamic from 'next/dynamic'
import { StyledBlogsPageWrapper } from '@/views/BlogsPage/BlogsPage.styled'
import BlogsSection from '@/sections/BlogsSections/BlogsSection'
import BlogsPageMainSection from '@/sections/BlogsSections/BlogsPageMainSection'
import { BlogContext, BlogProvider } from '@/contexts/BlogContext/BlogContext'
import { setTags } from '@/store/features/blog/blogSlice'

// const DynamicBlogsPageMainSection = dynamic(
//   () =>
//     import('@/sections/BlogsSections/BlogsPageMainSection').then(
//       (res) => res.default
//     ),
//   {
//     ssr: false,
//   }
// )
// const DynamicBlogsSection = dynamic(
//   () =>
//     import('@/sections/BlogsSections/BlogsSection').then((res) => res.default),
//   {
//     ssr: false,
//   }
// )

function BlogsWrapper() {
  const { pagination, activeTags, searchValue } = useSelector(
    (state) => state.blog
  )
  const { params } = useContext(BlogContext)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const fetchBlogs = await import(
        '@/store/features/blog/blogAsyncThunk'
      ).then((res) => res.fetchBlogs)

      dispatch(
        fetchBlogs({
          params,
          paginationParams: pagination,
          tags: activeTags,
          searchValue,
        })
      )
    }

    fetchData()
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
