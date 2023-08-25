import { useTranslations } from 'next-intl'
import { useContext, useState } from 'react'
import Link from 'next/link'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { InputSearch } from '@/components/UI/Input/Input'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { StyledBlogsPageMainSection } from '@/sections/BlogsSections/BlogsPageMainSection/BlogsPageMainSection.styled'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'

function BlogsPageMainSection() {
  const t = useTranslations('insights_page.hero_section')
  const { searchParams } = useContext(BlogContext)
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleClear = () => {
    setSearchValue('')
  }

  return (
    <StyledBlogsPageMainSection className='blogsPageMainSection'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='blogsPageTitle'>
          {t('title')}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH5 className='blogsPageDescription'>
          {t('description')}
        </StyledTypographyUrbanistH5>

        <form className='blogsPageSearchWrapper'>
          <InputSearch
            onChange={handleChange}
            value={searchValue}
            classNameWrapper='inputWrapper'
            placeholder={t('search_placeholder')}
            handleClear={handleClear}
          />
          <Link
            href={{
              query: {
                ...searchParams,
                search: searchValue,
                skip: 0,
                first: 3,
              },
            }}
            scroll={false}
          >
            <StyledButtonSecondaryLight className='blogsPageSearchButton'>
              {t('search_button_text')}
            </StyledButtonSecondaryLight>
          </Link>
        </form>
      </div>
    </StyledBlogsPageMainSection>
  )
}

export default BlogsPageMainSection
