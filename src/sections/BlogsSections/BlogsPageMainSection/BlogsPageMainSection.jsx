import { useContext, useState } from 'react'
import Link from 'next/link'
import { StructuredText } from 'react-datocms/structured-text'
import { useRouter } from 'next/navigation'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { InputSearch } from '@/components/UI/Input/Input'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { StyledBlogsPageMainSection } from '@/sections/BlogsSections/BlogsPageMainSection/BlogsPageMainSection.styled'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'

function BlogsPageMainSection() {
  const { searchParams } = useContext(BlogContext)
  const [searchValue, setSearchValue] = useState(searchParams.search || '')
  const { heroSectionData } = useContext(BlogContext)

  const router = useRouter()

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleClear = () => {
    setSearchValue('')
    router.replace('/blog', undefined, { shallow: true })
  }

  return (
    <StyledBlogsPageMainSection className='blogsPageMainSection'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='blogsPageTitle'>
          {heroSectionData.title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH5 className='blogsPageDescription'>
          <StructuredText data={heroSectionData.description} />
        </StyledTypographyUrbanistH5>

        <form className='blogsPageSearchWrapper'>
          <InputSearch
            onChange={handleChange}
            value={searchValue}
            classNameWrapper='inputWrapper'
            placeholder={heroSectionData.inputPlaceholder}
            handleClear={handleClear}
          />
          <Link
            href={{
              query: {
                ...searchParams,
                search: searchValue,
                skip: 0,
              },
            }}
            scroll={false}
          >
            <StyledButtonSecondaryLight className='blogsPageSearchButton'>
              {heroSectionData.button}
            </StyledButtonSecondaryLight>
          </Link>
        </form>
      </div>
    </StyledBlogsPageMainSection>
  )
}

export default BlogsPageMainSection
