import React from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { StyledHelpHeroSectionWrapper } from '@/sections/HelpCenterSections/HelpHeroSection/HelpHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { InputSearch } from '@/components/UI/Input'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import HeaderTabs from '@/components/Layout/Header/HeaderTabs'
import { setSearchValue } from '@/store/features/searchHelpCenter/searchHelpCenterSlice'
import BackIcon from '@/assets/icons/arrow-back.svg'

function HelpHeroSection({ page }) {
  const dispatch = useDispatch()
  const { searchValue } = useSelector((state) => state.searchHelpCenter)

  const handleChange = (value) => {
    dispatch(setSearchValue(value))
  }

  return (
    <StyledHelpHeroSectionWrapper className={page}>
      <button className='btn-back'>
        <BackIcon />
        <StyledTypographyUrbanistBody>Back</StyledTypographyUrbanistBody>
      </button>
      <div className='container'>
        <StyledTypographyUrbanistH1 className={clsx('title', page)}>
          Hi, how can we help?
        </StyledTypographyUrbanistH1>

        <div className='search-wrapper'>
          <InputSearch
            placeholder='Search for articles...'
            classNameWrapper='input-wrapper input-wrapper-1'
            value={searchValue}
            onChange={(event) => handleChange(event.target.value)}
          />
          <InputSearch
            placeholder='Search article, industry or product'
            classNameWrapper='input-wrapper input-wrapper-2'
            value={searchValue}
            onChange={(event) => handleChange(event.target.value)}
          />
          <StyledButtonSecondaryLight className='search-btn'>
            Search
          </StyledButtonSecondaryLight>
        </div>

        <HeaderTabs />
      </div>
    </StyledHelpHeroSectionWrapper>
  )
}

export default HelpHeroSection
