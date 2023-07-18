import BlogContentSection from '@/sections/BlogSections/BlogContentSection'
import BlogHeroSection from '@/sections/BlogSections/BlogHeroSection'
import { StyledBlogPageWrapper } from './BlogPage.styled'
import RelatedArticles from '@/sections/BlogSections/RelatedArticles'

export default function BlogPage() {
  return (
    <StyledBlogPageWrapper>
      <BlogHeroSection />
      <BlogContentSection />
      <RelatedArticles />
    </StyledBlogPageWrapper>
  )
}
