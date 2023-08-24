import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledCryptoWidgetHeroSectionWrapper } from './CryptoWidgetHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import image from '../../../assets/images/crypto-widget/page/hero/Image.png'

export default function CryptoWidgetHeroSection() {
  const t = useTranslations('crypto_centre_page.hero_section')

  return (
    <StyledCryptoWidgetHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <SubTitle className='subTitle'>{t('sub_title')}</SubTitle>
          <StyledTypographyUrbanistH1 className='title'>
            {t('title')}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistBody className='description'>
            {t('paragraph')}
          </StyledTypographyUrbanistBody>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                {t('button_text_get_started')}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='ghostButton'>
              {t('button_text_contact_sales')}
            </StyledButtonGhost>
          </div>

          <PaymentList />
        </div>

        <div className='right-side'>
          <Image
            unoptimized
            src={image.src}
            alt='Crypto widget'
            width={633.969}
            height={572.441}
          />
        </div>
      </div>
    </StyledCryptoWidgetHeroSectionWrapper>
  )
}
