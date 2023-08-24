import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledHeroB2CSectionWrapper,
  StyledSubTitle,
} from './HeroB2CSection.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import Picture from '@/assets/images/homeB2C/hero/Picture.svg'

export function SubTitle({ className, children }) {
  return <StyledSubTitle className={className}>{children}</StyledSubTitle>
}

export default function HeroB2CSection() {
  const t = useTranslations('home_b2c_page.hero_section')

  return (
    <StyledHeroB2CSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <div className='text-wrapper'>
            <SubTitle className='sub-title'>{t('sub_title')}</SubTitle>
            <StyledTypographyUrbanistH1 className='title'>
              {t('title')}
            </StyledTypographyUrbanistH1>
            <StyledTypographyUrbanistH5 className='description'>
              {t('description')}
            </StyledTypographyUrbanistH5>

            <ButtonGetStarted className='get-started-btn'>
              {t('button_text')}
            </ButtonGetStarted>
          </div>

          <PaymentList />
        </div>
        <div className='right-side'>
          <Picture />
        </div>
      </div>
    </StyledHeroB2CSectionWrapper>
  )
}
