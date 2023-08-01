import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { InputSearch } from '@/components/UI/Input/Input'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { StyledBlogsPageMainSection } from '@/sections/BlogsSections/BlogsPageMainSection/BlogsPageMainSection.styled'

function BlogsPageMainSection() {
  return (
    <StyledBlogsPageMainSection className='blogsPageMainSection'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='blogsPageTitle'>
          Inqud insights
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH5 className='blogsPageDescription'>
          Payment solutions for businesses & individuals
        </StyledTypographyUrbanistH5>

        <div className='blogsPageSearchWrapper'>
          <InputSearch
            classNameWrapper='inputWrapper'
            placeholder='Search article, industry or product'
          />
          <StyledButtonSecondaryLight className='blogsPageSearchButton'>
            Search
          </StyledButtonSecondaryLight>
        </div>
      </div>
    </StyledBlogsPageMainSection>
  )
}

export default BlogsPageMainSection
