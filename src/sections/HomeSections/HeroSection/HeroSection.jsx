import Link from 'next/link'
import { Fragment, useContext } from 'react'
// import { useTranslations } from 'next-intl'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import {
  StyledHeroSectionWrapper,
  StyledMobileGridWrapper,
  StyledPaymentListWrapper,
} from './HeroSection.styled'
// import Val1 from '@/assets/images/hero/val1.svg'
// import Val2 from '@/assets/images/hero/val2.svg'
// import Val3 from '@/assets/images/hero/val3.svg'
// import Val4 from '@/assets/images/hero/val4.svg'
// import Val5 from '@/assets/images/hero/val5.svg'
// import Val6 from '@/assets/images/hero/val6.svg'
// import Val7 from '@/assets/images/hero/val7.svg'
// import Val8 from '@/assets/images/hero/val8.svg'
// import Val9 from '@/assets/images/hero/val9.svg'
import Grid1 from '@/assets/images/hero/grid1.svg'
import Grid2 from '@/assets/images/hero/grid2.svg'
import Grid3 from '@/assets/images/hero/grid3.svg'
import Grid4 from '@/assets/images/hero/grid4.svg'
import Grid5 from '@/assets/images/hero/grid5.svg'
import Grid6 from '@/assets/images/hero/grid6.svg'
// import HeroGraphic from '@/assets/images/hero/illustration.svg'
import Check from '@/assets/icons/check-green-background.svg'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
// import { keysForLocale } from '@/config/keysForLocale'

import { PageContext } from '@/contexts/PageContext/PageContext'

// const methodsPayment = [
//   { id: 0, text: 'BTC', icon: <Val1 /> },
//   { id: 1, text: 'ETH', icon: <Val2 /> },
//   { id: 2, text: 'EUR', icon: <Val3 /> },
//   { id: 3, text: 'USD', icon: <Val4 /> },
//   { id: 4, text: 'USDT', icon: <Val5 /> },
//   { id: 5, text: 'IDR', icon: <Val6 /> },
//   { id: 6, text: 'KZT', icon: <Val7 /> },
//   { id: 7, text: 'TRX', icon: <Val8 /> },
//   { id: 8, text: 'TRY', icon: <Val9 /> },
// ]

export default function HeroSection() {
  // const t = useTranslations('home_page.hero_section')
  // const tList = useTranslations('home_page.hero_section.features_list_text')
  // const tListMobile = useTranslations(
  //   'home_page.hero_section.features_list_textMobile'
  // )

  const {
    dataPage: { homePage: data },
  } = useContext(PageContext)

  // const features = [
  //   {
  //     id: 0,
  //     text: tList(keysForLocale.keys4[0]),
  //     textMobile: tListMobile(keysForLocale.keys4[0]),
  //   },
  //   {
  //     id: 1,
  //     text: tList(keysForLocale.keys4[1]),
  //     textMobile: tListMobile(keysForLocale.keys4[1]),
  //   },
  //   {
  //     id: 2,
  //     text: tList(keysForLocale.keys4[2]),
  //     textMobile: tListMobile(keysForLocale.keys4[2]),
  //   },
  //   {
  //     id: 3,
  //     text: tList(keysForLocale.keys4[3]),
  //     textMobile: tListMobile(keysForLocale.keys4[3]),
  //   },
  // ]

  return (
    <StyledHeroSectionWrapper>
      <div className='container'>
        <div className='leftSide'>
          <MobileGrid />
          <StyledTypographyIBMH5 className='subTitle'>
            {data.subTitle}
            {/* {t('sub_title')} */}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH1 className='title'>
            {data.title}
            {/* {t('title')} */}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH5 className='paragraph'>
            <StructuredText data={data.description} />
            {/* {t('paragraph')} */}
          </StyledTypographyUrbanistH5>

          <ul className='features'>
            {data.features.map((text) => (
              <li key={text}>
                <Check />
                <StyledTypographyUrbanistBody className='features-title features-title-1'>
                  {text}
                </StyledTypographyUrbanistBody>
                <StyledTypographyUrbanistBody className='features-title features-title-2'>
                  {text}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                {data.buttonScreen1GetStarted}
                {/* {t('button_text_get_started')} */}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='ghostButton'>
              {data.buttonScreen1ContactSales}
              {/* {t('button_text_contact_sales')} */}
            </StyledButtonGhost>
          </div>

          <PaymentList />
        </div>

        <div className='rightSide'>
          <Image
            width={595}
            height={595}
            src={data.heroImage.url}
            alt={data.buttonScreen1GetStarted}
            className='graphic'
          />
          {/* <HeroGraphic className='graphic' /> */}
        </div>
      </div>
    </StyledHeroSectionWrapper>
  )
}

const gridItems = [
  { id: 0, icon: <Grid1 /> },
  { id: 1, icon: <Grid2 /> },
  { id: 2, icon: <Grid3 /> },
  { id: 3, icon: <Grid4 /> },
  { id: 4, icon: <Grid5 /> },
  { id: 5, icon: <Grid6 /> },
]

function MobileGrid() {
  return (
    <StyledMobileGridWrapper>
      {gridItems.map(({ id, icon }) => (
        <Fragment key={id}>{icon}</Fragment>
      ))}
    </StyledMobileGridWrapper>
  )
}

export function PaymentList() {
  const {
    dataPage: { supportedCurrency: data },
  } = useContext(PageContext)

  // const t = useTranslations('home_page.hero_section')

  return (
    <StyledPaymentListWrapper className='payment'>
      <StyledTypographyUrbanistBody className='payment-descr'>
        {data.title}
        {/* {t('crypto_list_title')} */}
      </StyledTypographyUrbanistBody>

      <ul className='payment-list'>
        {data.list.map(
          ({ supportedCurrenciesImage, supportedCurrenciesName, id }) => (
            <li key={id}>
              <div className='icon-wrapper'>
                <Image
                  width={32.00000762939453}
                  height={32.00000762939453}
                  src={supportedCurrenciesImage.url}
                  alt={supportedCurrenciesName}
                />
              </div>
              <StyledTypographyUrbanistH5>
                {supportedCurrenciesName}
              </StyledTypographyUrbanistH5>
            </li>
          )
        )}
      </ul>
    </StyledPaymentListWrapper>
  )
}
