import clsx from 'clsx'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { StyledHelpHeroSectionWrapper } from '@/sections/HelpCenterSections/HelpHeroSection/HelpHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { InputSearch } from '@/components/UI/Input'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import HeaderTabs from '@/components/Layout/Header/HeaderTabs'
import BackIcon from '@/assets/icons/arrow-back.svg'
import { HelpCentreContext } from '@/contexts/HelpCentreContext/HelpCentreContext'

function HelpHeroSection({ page, data }) {
  const helpCentreData = useContext(HelpCentreContext)
  const [searchValue, setSearchValue] = useState(
    helpCentreData?.searchValue || ''
  )
  const router = useRouter()
  const params = useParams()

  const handleChange = (value) => {
    setSearchValue(value)
  }

  const handleClear = () => {
    setSearchValue('')
    router.replace('/help-centre', undefined, { shallow: true })
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
          {page === 'main' ? (
            <Link
              href={{
                pathname: '/help-centre',
                query: {
                  search: searchValue,
                },
              }}
            >
              <StyledButtonSecondaryLight className='search-btn'>
                {data.helpCentreHero.button}
              </StyledButtonSecondaryLight>
            </Link>
          ) : (
            <Link
              href={{
                pathname: `/help-centre/${params.slug}`,
                query: {
                  searchIn: searchValue,
                },
              }}
            >
              <StyledButtonSecondaryLight className='search-btn'>
                {data.helpCentreHero.button}
              </StyledButtonSecondaryLight>
            </Link>
          )}
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
