'use client'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import BlogContentSection from '@/sections/BlogSections/BlogContentSection'
import BlogHeroSection from '@/sections/BlogSections/BlogHeroSection'
// import RelatedArticles from '@/sections/BlogSections/RelatedArticles'
import { BlogProvider } from '@/contexts/BlogContext/BlogContext'
import { StyledBlogPageWrapper } from './BlogPage.styled'
import { ArticleProvider } from '@/contexts/ArticleContext/ArticleContext'
import { setBlogBreadcrumbs } from '@/store/features/breadcrumb/breadcrumbSlice'

const DynamicRelatedArticles = dynamic(
  () =>
    import('@/sections/BlogSections/RelatedArticles').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)

export default function BlogPage({ blog, relatedData, blogHeroSection }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setBlogBreadcrumbs(blog.mainTitle))

    return () => {
      dispatch(setBlogBreadcrumbs(''))
    }
  }, [blog])
  return (
    <BlogProvider
      blogDetails={blog}
      relatedData={relatedData}
      heroSectionData={blogHeroSection}
      data={blog}
    >
      <StyledBlogPageWrapper>
        <BlogHeroSection />
        <ArticleProvider>
          <BlogContentSection />
        </ArticleProvider>
        {relatedData.allBlogs.length > 0 && <DynamicRelatedArticles />}
      </StyledBlogPageWrapper>
    </BlogProvider>
  )
}
