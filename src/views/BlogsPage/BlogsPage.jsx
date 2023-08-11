import { StyledBlogsPageWrapper } from '@/views/BlogsPage/BlogsPage.styled'
import BlogsSection from '@/sections/BlogsSections/BlogsSection'
import BlogsPageMainSection from '@/sections/BlogsSections/BlogsPageMainSection'

function BlogsPage() {
  return (
    <StyledBlogsPageWrapper>
      <BlogsPageMainSection />

      <BlogsSection />
    </StyledBlogsPageWrapper>
  )
}

export default BlogsPage
