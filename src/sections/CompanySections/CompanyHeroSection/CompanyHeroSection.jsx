import Image from 'next/image'
// import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCompanyHeroSectionWrapper } from './CompanyHeroSection.styled'
// import graphic from '@/assets/images/company/hero/graphic.webp'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { responseBreakPoint } from '@/utils/response'

const DynamicCompanyHeroSectionDesktop = dynamic(() =>
  import('./components/CompanyHeroSectionDesktop').then((res) => res.default)
)

export default function CompanyHeroSection() {
  // const t = useTranslations('company_page.hero_section')
  // const tMission = useTranslations('company_page.hero_section.our_mission')
  // const tVision = useTranslations('company_page.hero_section.our_vision')

  const {
    dataPage: { aboutUsPage: data },
  } = useContext(PageContext)

  const size = useWindowSize()

  return (
    <StyledCompanyHeroSectionWrapper>
      {(size.width && size.width > responseBreakPoint.tablet) ||
      size.width <= responseBreakPoint.mobile ? (
        <DynamicCompanyHeroSectionDesktop data={data} />
      ) : null}

      {size.width &&
      size.width <= responseBreakPoint.tablet &&
      size.width > responseBreakPoint.mobile ? (
        <div className='container tablet'>
          <div className='cart'>
            <StyledTypographyUrbanistH2 className='title'>
              {/* {t('title')} */}
              {data.screen1MainTitle}
            </StyledTypographyUrbanistH2>
            <StyledTypographyUrbanistBody className='title-description'>
              {/* {t('description')} */}
              {data.screen1MainDescription}
            </StyledTypographyUrbanistBody>
          </div>

          <div className='cart'>
            <Image
              src={data.screen1Image.url}
              alt='About us'
              width={332}
              height={332}
            />
          </div>

          <div className='cart'>
            <StyledTypographyUrbanistH3 className='subTitle'>
              {/* {tMission('title')} */}
              {data.screen1Title1}
            </StyledTypographyUrbanistH3>
            <StyledTypographyUrbanistBody className='subTitle-description'>
              {/* {tMission('description')} */}
              {data.screen1Description1}
            </StyledTypographyUrbanistBody>
          </div>

          <div className='cart'>
            <StyledTypographyUrbanistH3 className='subTitle'>
              {/* {tVision('title')} */}
              {data.screen1Title2}
            </StyledTypographyUrbanistH3>
            <StyledTypographyUrbanistBody className='subTitle-description'>
              {/* {tVision('description')} */}
              {data.screen1Description2}
            </StyledTypographyUrbanistBody>
          </div>
        </div>
      ) : null}
    </StyledCompanyHeroSectionWrapper>
  )
}
