import { useTranslations } from 'next-intl'
import { Controller, useForm } from 'react-hook-form'
import { useContext } from 'react'
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
  const { handleSearch, searchParams } = useContext(BlogContext)

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: { search: searchParams.search },
  })

  const onSubmit = (data) => {
    const { search } = data
    handleSearch(search)
  }

  const handleClear = () => {
    setValue('search', '')
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='blogsPageSearchWrapper'
        >
          <Controller
            render={({ field: { onChange, value } }) => (
              <InputSearch
                onChange={onChange}
                value={value}
                classNameWrapper='inputWrapper'
                placeholder={t('search_placeholder')}
                handleClear={handleClear}
              />
            )}
            name='search'
            control={control}
          />

          <StyledButtonSecondaryLight className='blogsPageSearchButton'>
            {t('search_button_text')}
          </StyledButtonSecondaryLight>
        </form>
      </div>
    </StyledBlogsPageMainSection>
  )
}

export default BlogsPageMainSection
