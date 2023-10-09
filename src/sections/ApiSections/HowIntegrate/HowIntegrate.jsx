'use client'

import Image from 'next/image'
import { useContext } from 'react'
import Link from 'next/link'
import {
  StyledHowIntegrateWrapper,
  StyledStepCartHowIntegrateWrapper,
} from './HowIntegrate.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import arrowImage from '@/assets/images/homeB2C/how-to-start/arrow.png'
import arrowImageMobile from '@/assets/images/homeB2C/PassKYC/arrow-down.png'
import TimeIcon from '@/assets/images/homeB2C/how-to-start/time.svg'
import Icon1 from '@/assets/images/api/how-integrate/num1-min.svg'
import Icon2 from '@/assets/images/api/how-integrate/num2-min.svg'
import Icon3 from '@/assets/images/api/how-integrate/num3-min.svg'
import Icon4 from '@/assets/images/api/how-integrate/num4-min.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function minHowIntegrate() {
  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext)

  const stepsContent = [
    {
      id: 1,
      title: data.screen3Steps[0].title,
      titleLaptop: data.screen3Steps[0].title,
      titleTablet: data.screen3Steps[0].title,
      titleMobile: data.screen3Steps[0].title,
      time: data.screen3Steps[0].time,
      icon: <Image className='step-icon' src={Icon1} alt='Icon1' />,
    },
    { id: 2, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 3,
      title: data.screen3Steps[1].title,
      titleLaptop: data.screen3Steps[1].title,
      titleTablet: data.screen3Steps[1].title,
      titleMobile: data.screen3Steps[1].title,
      time: data.screen3Steps[1].time,
      icon: <Image className='step-icon' src={Icon2} alt='Icon2' />,
    },
    { id: 4, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 5,
      title: data.screen3Steps[2].title,
      titleLaptop: data.screen3Steps[2].title,
      titleTablet: data.screen3Steps[2].title,
      titleMobile: data.screen3Steps[2].title,
      time: data.screen3Steps[2].time,
      icon: <Image className='step-icon' src={Icon3} alt='Icon3' />,
    },
    { id: 6, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 7,
      title: data.screen3Steps[3].title,
      titleLaptop: data.screen3Steps[3].title,
      titleTablet: data.screen3Steps[3].title,
      titleMobile: data.screen3Steps[3].title,
      time: data.screen3Steps[3].time,
      icon: <Image className='step-icon' src={Icon4} alt='Icon4' />,
    },
  ]

  return (
    <StyledHowIntegrateWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {data.screen3Title}
          {/* How to integrate Inqud API to your business? */}
        </StyledTypographyUrbanistH2>

        <div className='steps-wrapper'>
          {stepsContent.map(
            ({
              description,
              icon,
              imageSrcMobile,
              id,
              imageSrc,
              time,
              title,
              titleLaptop,
              titleTablet,
              titleMobile,
              button,
            }) => (
              <div key={id} className='step-wrapper'>
                <StepContent
                  key={id}
                  id={id}
                  icon={icon}
                  imageSrcMobile={imageSrcMobile}
                  imageSrc={imageSrc}
                  time={time}
                  title={title}
                  titleLaptop={titleLaptop}
                  titleTablet={titleTablet}
                  titleMobile={titleMobile}
                  button={button}
                  description={description}
                />
              </div>
            )
          )}
        </div>
        <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
          <ButtonGetStarted className='get-started-button'>
            {data.screen3Button}
          </ButtonGetStarted>
        </Link>
      </div>
    </StyledHowIntegrateWrapper>
  )
}

export function StepContent({
  id,
  title,
  titleLaptop,
  titleTablet,
  titleMobile,
  imageSrcMobile,
  icon,
  time,
  imageSrc,
  button,
}) {
  return id % 2 === 0 ? (
    <div className='step-image-wrapper'>
      <Image
        className='step-image desktopOrTablet'
        src={imageSrc}
        width={171}
        height={15}
        alt='arrow'
      />
      <Image
        className='step-image mobile'
        src={imageSrcMobile}
        width={16}
        height={24}
        alt='arrow'
      />
    </div>
  ) : (
    <StepCart
      id={id}
      time={time}
      title={title}
      titleLaptop={titleLaptop}
      titleTablet={titleTablet}
      titleMobile={titleMobile}
      icon={icon}
      button={button}
    />
  )
}

export function StepCart({
  icon,
  title,
  titleLaptop,
  titleTablet,
  titleMobile,
  time,
}) {
  return (
    <StyledStepCartHowIntegrateWrapper>
      {icon}
      <StyledTypographyUrbanistH4 className='step-cart-title step-cart-title-1'>
        {title}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistH4 className='step-cart-title step-cart-title-2'>
        {titleLaptop}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistH4 className='step-cart-title step-cart-title-3'>
        {titleTablet}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistH4 className='step-cart-title step-cart-title-4'>
        {titleMobile}
      </StyledTypographyUrbanistH4>

      <div className='step-cart-time-wrapper'>
        <Image src={TimeIcon} alt='TimeIcon' />
        <StyledTypographyUrbanistBody className='step-cart-time'>
          {time}
        </StyledTypographyUrbanistBody>
      </div>
    </StyledStepCartHowIntegrateWrapper>
  )
}
