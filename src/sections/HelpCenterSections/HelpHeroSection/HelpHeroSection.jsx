import clsx from 'clsx'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { useWindowSize } from '@uidotdev/usehooks'
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
import { responseBreakPoint } from '@/utils/response'

function HelpHeroSection({ page, data }) {
  const dispatch = useDispatch()

  const { handleSubmit, control, reset } = useForm()

  const handleClear = () => {
    dispatch(setIsSearch(false))
    reset({
      search: '',
    })
  }

  const handleSearch = (data) => {
    dispatch(setSearchValue(data.search))

    dispatch(setIsSearch(true))
  }

  const size = useWindowSize()

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

        <form onSubmit={handleSubmit(handleSearch)} className='search-wrapper'>
          {size.width && size.width >= responseBreakPoint.desktop ? (
            <Controller
              control={control}
              name='search'
              render={({ field: { onChange, value } }) => (
                <InputSearch
                  placeholder={data.helpCentreHero.placeholder}
                  classNameWrapper='input-wrapper input-wrapper-1'
                  value={value}
                  onChange={(event) => {
                    onChange(event.target.value)
                  }}
                  handleClear={handleClear}
                />
              )}
            />
          ) : null}
          {size.width && size.width < responseBreakPoint.desktop ? (
            <Controller
              control={control}
              name='search'
              render={({ field: { onChange, value } }) => (
                <InputSearch
                  placeholder={data.helpCentreHero.placeholder}
                  classNameWrapper='input-wrapper input-wrapper-2'
                  value={value}
                  onChange={(event) => {
                    onChange(event.target.value)
                  }}
                  handleClear={handleClear}
                />
              )}
            />
          ) : null}

          <StyledButtonSecondaryLight
            type='submit'
            className={clsx('search-btn')}
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
