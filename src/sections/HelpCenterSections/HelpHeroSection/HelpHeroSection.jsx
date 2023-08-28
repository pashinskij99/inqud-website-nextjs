import clsx from 'clsx'
// import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { StyledHelpHeroSectionWrapper } from '@/sections/HelpCenterSections/HelpHeroSection/HelpHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { InputSearch } from '@/components/UI/Input'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import HeaderTabs from '@/components/Layout/Header/HeaderTabs'
// import { setSearchHelpCenterValue } from '@/store/features/search/searchSlice'
import BackIcon from '@/assets/icons/arrow-back.svg'

function HelpHeroSection({ page }) {
  // const dispatch = useDispatch()
  // const { searchValue } = useSelector((state) => state.search)
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (value) => {
    setSearchValue(value)
    // dispatch(setSearchHelpCenterValue(value))
  }

  const handleClear = () => {
    setSearchValue('')
  }

  const t = useTranslations('help_centre_page.hero_section')

  return (
    <StyledHelpHeroSectionWrapper className={page}>
      <Link href='/help-centre'>
        <button className={clsx('btn-back', page)}>
          <BackIcon />
          <StyledTypographyUrbanistBody>Back</StyledTypographyUrbanistBody>
        </button>
      </Link>

      <div className='container'>
        <StyledTypographyUrbanistH1 className={clsx('title', page)}>
          {t('title')}
        </StyledTypographyUrbanistH1>

        <form className='search-wrapper'>
          <InputSearch
            placeholder={t('search_placeholder')}
            classNameWrapper='input-wrapper input-wrapper-1'
            value={searchValue}
            onChange={(event) => handleChange(event.target.value)}
            handleChange={handleChange}
            handleClear={handleClear}
          />
          <InputSearch
            placeholder={t('search_placeholder')}
            classNameWrapper='input-wrapper input-wrapper-2'
            value={searchValue}
            onChange={(event) => handleChange(event.target.value)}
            handleChange={handleChange}
            handleClear={handleClear}
          />
          <Link href={`help-centre/search/${searchValue}`}>
            <StyledButtonSecondaryLight className='search-btn'>
              {t('search_button_text')}
            </StyledButtonSecondaryLight>
          </Link>
        </form>

        <HeaderTabs />
      </div>
    </StyledHelpHeroSectionWrapper>
  )
}

export default HelpHeroSection
