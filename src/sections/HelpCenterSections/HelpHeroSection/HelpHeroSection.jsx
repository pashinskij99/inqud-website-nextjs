import clsx from 'clsx'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { StyledHelpHeroSectionWrapper } from '@/sections/HelpCenterSections/HelpHeroSection/HelpHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import HeaderTabs from '@/components/Layout/Header/HeaderTabs'
import BackIcon from '@/assets/icons/arrow-back.svg'

const DynamicHelpHeroSectionSearchForm = dynamic(
  () =>
    import('./components/HelpHeroSectionSearchForm').then((res) => res.default),
  {
    ssr: false,
  }
)

function HelpHeroSection({ page, data }) {
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

        <DynamicHelpHeroSectionSearchForm data={data} />

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
