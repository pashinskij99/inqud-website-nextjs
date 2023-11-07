'use client'

import dynamic from 'next/dynamic'
import BlogContentSection from '@/sections/BlogSections/BlogContentSection'
import BlogHeroSection from '@/sections/BlogSections/BlogHeroSection'
import { BlogProvider } from '@/contexts/BlogContext/BlogContext'
import { StyledBlogPageWrapper } from './BlogPage.styled'
import { ArticleProvider } from '@/contexts/ArticleContext/ArticleContext'
import SetterBreadcrumbComponent from '@/components/SetterBreadcrumbComponent'

const DynamicRelatedArticles = dynamic(
  () => import('@/sections/BlogSections/RelatedArticles'),
  {
    ssr: false,
  }
)

export default function BlogPage({ blog, relatedData, blogHeroSection }) {
  return (
    <BlogProvider
      blogDetails={blog}
      relatedData={relatedData}
      heroSectionData={blogHeroSection}
      data={blog}
    >
      <SetterBreadcrumbComponent
        data={[
          {
            name: blogHeroSection.breadcrumb,
            href: '/blog',
          },
          {
            name: blog.mainTitle,
            href: '',
          },
        ]}
      />
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
