import clsx from 'clsx'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { StyledHelpHeroSectionWrapper } from '@/sections/HelpCenterSections/HelpHeroSection/HelpHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { InputSearch } from '@/components/UI/Input'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import HeaderTabs from '@/components/Layout/Header/HeaderTabs'
import BackIcon from '@/assets/icons/arrow-back.svg'
import {
  setIsSearch,
  setSearchValue,
} from '@/store/features/helpCentre/helpCentreSlice'

function HelpHeroSection({ page, data }) {
  const dispatch = useDispatch()
  const { searchValue } = useSelector((state) => state.helpCentre)
  const handleChange = (value) => {
    dispatch(setSearchValue(value))
  }

  const handleClear = () => {
    dispatch(setSearchValue(''))
    dispatch(setIsSearch(false))
  }

  const handleSearch = () => {
    dispatch(setIsSearch(true))
  }

  return (
    <StyledHelpHeroSectionWrapper className={page}>
      <Link href='/help-centre'>
        <button className={clsx('btn-back', page)}>
          <BackIcon />
          <StyledTypographyUrbanistBody>
            {data.helpCentreHero.backButton}
          </StyledTypographyUrbanistBody>
        </button>
      </Link>

      <div className='container'>
        <StyledTypographyUrbanistH1 className={clsx('title', page)}>
          {data.helpCentreHero.title}
        </StyledTypographyUrbanistH1>

        <form className='search-wrapper'>
          <InputSearch
            placeholder={data.helpCentreHero.placeholder}
            classNameWrapper='input-wrapper input-wrapper-1'
            value={searchValue}
            onChange={(event) => handleChange(event.target.value)}
            handleChange={handleChange}
            handleClear={handleClear}
          />
          <InputSearch
            placeholder={data.helpCentreHero.placeholder}
            classNameWrapper='input-wrapper input-wrapper-2'
            value={searchValue}
            onChange={(event) => handleChange(event.target.value)}
            handleChange={handleChange}
            handleClear={handleClear}
          />
          <StyledButtonSecondaryLight
            type='button'
            className={clsx('search-btn', {
              ['events-none']: !searchValue,
            })}
            onClick={handleSearch}
          >
            {data.helpCentreHero.button}
          </StyledButtonSecondaryLight>
        </form>

        <div
          className={clsx('tabs-wrapper', {
            ['hide']: page !== 'main',
          })}
        >
          <HeaderTabs />
        </div>
      </div>
    </StyledHelpHeroSectionWrapper>
  )
}

export default HelpHeroSection
