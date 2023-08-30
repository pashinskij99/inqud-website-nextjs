import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledApiHeroSectionWrapper } from './ApiHeroSection.styled'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistBody,
} from '@/components/UI/Typography/Typography.styled'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import Check from '@/assets/icons/check-green-background.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
// import codeImage from '@/assets/images/api/code.webp'
// import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function ApiHeroSection() {
  const t = useTranslations('api_page.hero_section')
  // const tFeatures = useTranslations('api_page.hero_section.features_list')

  // const features = [
  //   { id: 0, text: tFeatures(keysForLocale.keys4[0]) },
  //   {
  //     id: 1,
  //     text: tFeatures(keysForLocale.keys4[1]),
  //   },
  //   { id: 2, text: tFeatures(keysForLocale.keys4[2]) },
  //   { id: 3, text: tFeatures(keysForLocale.keys4[3]) },
  // ]

  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext)

  return (
    <StyledApiHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <SubTitle className='sub-title'>
            {/* {t('sub_title')} */}
            {data.subTitle}
          </SubTitle>
          <StyledTypographyUrbanistH1 className='title title-1'>
            {/* {t('title')} */}
            {data.title}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH1 className='title title-2'>
            {/* {t('title')} */}
            {data.title}
          </StyledTypographyUrbanistH1>

          <ul className='features'>
            {data.features.map((text) => (
              <li key={text}>
                <Check />
                <StyledTypographyUrbanistBody key={text}>
                  {text}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

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
          <div className='cart'>
            <Image
              src={data.image.url}
              width={500}
              height={488}
              alt={t('title')}
            />
          </div>
        </div>
      </div>
    </StyledApiHeroSectionWrapper>
  )
}
