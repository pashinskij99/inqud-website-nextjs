'use client'

import Image from 'next/image'
// import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import { useContext } from 'react'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledPassKYCB2CSectionWrapper,
  StyledStepCartKYCWrapper,
} from './PassKYCB2CSection.styled'
import { ButtonLearnMore } from '@/components/UI/Button'
import TimeIcon from '@/assets/images/homeB2C/how-to-start/time.svg'
import arrowImage from '@/assets/images/homeB2C/how-to-start/arrow.png'
import arrowImageMobile from '@/assets/images/homeB2C/PassKYC/arrow-down.png'
// import Icon1 from '@/assets/images/homeB2C/PassKYC/icon1.svg'
// import Icon2 from '@/assets/images/homeB2C/PassKYC/icon2.svg'
// import Icon3 from '@/assets/images/homeB2C/PassKYC/icon3.svg'
// import Icon4 from '@/assets/images/homeB2C/PassKYC/icon4.svg'
// import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function PassKYCB2CSection() {
  // const t = useTranslations('home_b2c_page.pass_KYC_section')
  // const tListTitle = useTranslations(
  //   'home_b2c_page.pass_KYC_section.items_title'
  // )
  // const tListTime = useTranslations('home_b2c_page.pass_KYC_section.items_time')

  // const stepsContent = [
  //   {
  //     id: 1,
  //     title: tListTitle(keysForLocale.keys4[0]),
  //     time: tListTime(keysForLocale.keys4[0]),
  //     icon: <Icon1 className='step-icon' />,
  //   },
  //   { id: 2, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
  //   {
  //     id: 3,
  //     title: tListTitle(keysForLocale.keys4[1]),
  //     time: tListTime(keysForLocale.keys4[1]),
  //     icon: <Icon2 className='step-icon' />,
  //   },
  //   { id: 4, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
  //   {
  //     id: 5,
  //     title: tListTitle(keysForLocale.keys4[2]),
  //     time: tListTime(keysForLocale.keys4[2]),
  //     icon: <Icon3 className='step-icon' />,
  //   },
  //   { id: 6, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
  //   {
  //     id: 7,
  //     title: tListTitle(keysForLocale.keys4[3]),
  //     time: '',
  //     button: t('button_text'),
  //     icon: <Icon4 className='step-icon' />,
  //   },
  // ]

  const {
    dataPage: { homeB2c: data },
  } = useContext(PageContext)

  return (
    <StyledPassKYCB2CSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH1 className='title'>
          {/* {t('title')} */}
          {data.screen5Title}
        </StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistH4 className='sub-title'>
          {/* {t('sub_title')} */}
          {data.screen5Description}
        </StyledTypographyUrbanistH4>

        <div className='steps-wrapper'>
          {/* {data.screen5Step.map(
            ({ description, image, id, time, title, button }, i) => (
              <> */}
          <div key={data.screen5Step[0].id} className='step-wrapper'>
            <StepContent
              key={data.screen5Step[0].id}
              id={data.screen5Step[0].id}
              image={data.screen5Step[0].image.url}
              time={data.screen5Step[0].time}
              title={data.screen5Step[0].title}
              button={data.screen5Step[0].button}
              description={data.screen5Step[0].description}
            />
          </div>

          <div className='step-image-wrapper'>
            <Image
              className='step-image desktopOrTablet'
              src={arrowImage.src}
              width={171}
              height={15}
              alt='arrow'
            />
            <Image
              className='step-image mobile'
              src={arrowImageMobile.src}
              width={16}
              height={24}
              alt='arrow'
            />
          </div>
          <div key={data.screen5Step[1].id} className='step-wrapper'>
            <StepContent
              key={data.screen5Step[1].id}
              id={data.screen5Step[1].id}
              image={data.screen5Step[1].image.url}
              time={data.screen5Step[1].time}
              title={data.screen5Step[1].title}
              button={data.screen5Step[1].button}
              description={data.screen5Step[1].description}
            />
          </div>

          <div className='step-image-wrapper'>
            <Image
              className='step-image desktopOrTablet'
              src={arrowImage.src}
              width={171}
              height={15}
              alt='arrow'
            />
            <Image
              className='step-image mobile'
              src={arrowImageMobile.src}
              width={16}
              height={24}
              alt='arrow'
            />
          </div>
          <div key={data.screen5Step[2].id} className='step-wrapper'>
            <StepContent
              key={data.screen5Step[2].id}
              id={data.screen5Step[2].id}
              image={data.screen5Step[2].image.url}
              time={data.screen5Step[2].time}
              title={data.screen5Step[2].title}
              button={data.screen5Step[2].button}
              description={data.screen5Step[2].description}
            />
          </div>

          <div className='step-image-wrapper'>
            <Image
              className='step-image desktopOrTablet'
              src={arrowImage.src}
              width={171}
              height={15}
              alt='arrow'
            />
            <Image
              className='step-image mobile'
              src={arrowImageMobile.src}
              width={16}
              height={24}
              alt='arrow'
            />
          </div>
          <div key={data.screen5Step[3].id} className='step-wrapper'>
            <StepContent
              key={data.screen5Step[3].id}
              id={data.screen5Step[3].id}
              image={data.screen5Step[3].image.url}
              time={null}
              title={data.screen5Step[3].title}
              button={data.screen5Step[3].time}
              description={data.screen5Step[3].description}
            />
          </div>
        </div>
      </div>
    </StyledPassKYCB2CSectionWrapper>
  )
}

function StepContent({ id, title, image, time, button }) {
  return (
    <StepCart id={id} time={time} title={title} image={image} button={button} />
  )
}

function StepCart({ image, title, time, button }) {
  return (
    <StyledStepCartKYCWrapper>
      <Image src={image} alt='' width={64} height={64} />
      <StyledTypographyUrbanistH4 className='step-cart-title'>
        {title}
      </StyledTypographyUrbanistH4>
      {!time && button ? (
        <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
          <ButtonLearnMore className='step-cart-button'>
            {button}
          </ButtonLearnMore>
        </Link>
      ) : (
        <div className='step-cart-time-wrapper'>
          <Image className='time' src={TimeIcon} alt='TimeIcon' />
          <StyledTypographyUrbanistBody className='step-cart-time'>
            {time}
          </StyledTypographyUrbanistBody>
        </div>
      )}
    </StyledStepCartKYCWrapper>
  )
}
