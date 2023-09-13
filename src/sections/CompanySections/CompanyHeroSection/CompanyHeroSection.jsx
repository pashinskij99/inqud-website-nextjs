import Image from 'next/image'
// import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCompanyHeroSectionWrapper } from './CompanyHeroSection.styled'
// import graphic from '@/assets/images/company/hero/graphic.webp'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function CompanyHeroSection() {
  // const t = useTranslations('company_page.hero_section')
  // const tMission = useTranslations('company_page.hero_section.our_mission')
  // const tVision = useTranslations('company_page.hero_section.our_vision')

  const {
    dataPage: { aboutUsPage: data },
  } = useContext(PageContext)

  return (
    <StyledCompanyHeroSectionWrapper>
      <div className='container desktop'>
        <div className='left-side'>
          <StyledTypographyUrbanistH1 className='title'>
            {/* {t('title')} */}
            {data.screen1MainTitle}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH5 className='title-description'>
            {/* {t('description')} */}
            {data.screen1MainDescription}
          </StyledTypographyUrbanistH5>

          <StyledTypographyUrbanistH3 className='subTitle'>
            {/* {tMission('title')} */}
            {data.screen1Title1}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            {/* {tMission('description')} */}
            {data.screen1Description1}
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH3 className='subTitle'>
            {/* {tVision('title')} */}
            {data.screen1Title2}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            {/* {tVision('description')} */}
            {data.screen1Description2}
          </StyledTypographyUrbanistBody>
        </div>
        <div className='right-side'>
          <Image
            src={data.screen1Image.url}
            alt='About us'
            width={550}
            height={550}
          />
        </div>
      </div>

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
    </StyledCompanyHeroSectionWrapper>
  )
}
