import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCompanyHeroSectionWrapper } from './CompanyHeroSection.styled'
import graphic from '@/assets/images/company/hero/graphic.webp'

export default function CompanyHeroSection() {
  const t = useTranslations('company_page.hero_section')
  const tMission = useTranslations('company_page.hero_section.our_mission')
  const tVision = useTranslations('company_page.hero_section.our_vision')

  return (
    <StyledCompanyHeroSectionWrapper>
      <div className='container desktop'>
        <div className='left-side'>
          <StyledTypographyUrbanistH1 className='title'>
            {t('title')}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH5 className='title-description'>
            {t('description')}
          </StyledTypographyUrbanistH5>

          <StyledTypographyUrbanistH3 className='subTitle'>
            {tMission('title')}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            {tMission('description')}
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH3 className='subTitle'>
            {tVision('title')}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            {tVision('description')}
          </StyledTypographyUrbanistBody>
        </div>
        <div className='right-side'>
          <Image src={graphic.src} alt='About us' width={550} height={550} />
        </div>
      </div>

      <div className='container tablet'>
        <div className='cart'>
          <StyledTypographyUrbanistH2 className='title'>
            {t('title')}
          </StyledTypographyUrbanistH2>
          <StyledTypographyUrbanistBody className='title-description'>
            {t('description')}
          </StyledTypographyUrbanistBody>
        </div>

        <div className='cart'>
          <Image src={graphic.src} alt='About us' width={332} height={332} />
        </div>

        <div className='cart'>
          <StyledTypographyUrbanistH3 className='subTitle'>
            {tMission('title')}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            {tMission('description')}
          </StyledTypographyUrbanistBody>
        </div>

        <div className='cart'>
          <StyledTypographyUrbanistH3 className='subTitle'>
            {tVision('title')}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            {tVision('description')}
          </StyledTypographyUrbanistBody>
        </div>
      </div>
    </StyledCompanyHeroSectionWrapper>
  )
}
