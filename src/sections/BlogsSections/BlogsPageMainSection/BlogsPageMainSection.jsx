import { useContext } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledBlogsPageMainSection } from '@/sections/BlogsSections/BlogsPageMainSection/BlogsPageMainSection.styled'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'

const DynamicBlogsPageMainSectionForm = dynamic(
  () =>
    import('./components/BlogsPageMainSectionForm').then((res) => res.default),
  {
    ssr: false,
  }
)

function BlogsPageMainSection() {
  const { heroSectionData } = useContext(BlogContext)

  if (!heroSectionData) return null

  return (
    <StyledBlogsPageMainSection className='blogsPageMainSection'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='blogsPageTitle'>
          {heroSectionData.title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH5 className='blogsPageDescription'>
          <StructuredText data={heroSectionData.description} />
        </StyledTypographyUrbanistH5>

        <DynamicBlogsPageMainSectionForm />
      </div>
    </StyledBlogsPageMainSection>
  )
}

export default BlogsPageMainSection
