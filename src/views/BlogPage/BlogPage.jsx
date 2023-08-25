'use client'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import BlogContentSection from '@/sections/BlogSections/BlogContentSection'
import BlogHeroSection from '@/sections/BlogSections/BlogHeroSection'
import RelatedArticles from '@/sections/BlogSections/RelatedArticles'
import { BlogProvider } from '@/contexts/BlogContext/BlogContext'
import { StyledBlogPageWrapper } from './BlogPage.styled'
import { ArticleProvider } from '@/contexts/ArticleContext/ArticleContext'
import { setBlogBreadcrumbs } from '@/store/features/breadcrumb/breadcrumbSlice'

export default function BlogPage({ blog, relatedData }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setBlogBreadcrumbs(blog.mainTitle))
  }, [blog])

  return (
    <BlogProvider relatedData={relatedData} data={blog}>
      <StyledBlogPageWrapper>
        <BlogHeroSection />
        <ArticleProvider>
          <BlogContentSection />
        </ArticleProvider>
        {relatedData.allBlogs.length > 0 && <RelatedArticles />}
      </StyledBlogPageWrapper>
    </BlogProvider>
  )
}
