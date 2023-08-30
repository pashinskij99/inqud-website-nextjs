import Link from 'next/link'
import Image from 'next/image'
// import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledCryptoWidgetHeroSectionWrapper } from './CryptoWidgetHeroSection.styled'
import {
  // StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
// import image from '@/assets/images/crypto-widget/page/hero/Image.png'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function CryptoWidgetHeroSection() {
  // const t = useTranslations('crypto_centre_page.hero_section')

  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  return (
    <StyledCryptoWidgetHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <SubTitle className='subTitle'>
            {/* {t('sub_title')} */}
            {data.subTitle}
          </SubTitle>
          <StyledTypographyUrbanistH1 className='title'>
            {/* {t('title')} */}
            {data.title}
          </StyledTypographyUrbanistH1>
          <div className='description'>
            <StructuredText data={data.description} />
          </div>
          {/* <StyledTypographyUrbanistBody className='description'> */}
          {/* {t('paragraph')} */}
          {/* </StyledTypographyUrbanistBody> */}

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                {/* {t('button_text_get_started')} */}
                {data.buttonScreen1A}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='ghostButton'>
              {/* {t('button_text_contact_sales')} */}
              {data.buttonScreen1B}
            </StyledButtonGhost>
          </div>

          <PaymentList />
        </div>

        <div className='right-side'>
          <Image
            unoptimized
            src={data.image.url}
            alt='Crypto widget'
            width={633.969}
            height={572.441}
          />
        </div>
      </div>
    </StyledCryptoWidgetHeroSectionWrapper>
  )
}
