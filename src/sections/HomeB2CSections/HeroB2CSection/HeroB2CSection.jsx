'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { StructuredText } from 'react-datocms/structured-text'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledHeroB2CSectionWrapper,
  StyledSubTitle,
} from './HeroB2CSection.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { PageContext } from '@/contexts/PageContext/PageContext'
import HeroSectionPaymentList from '@/sections/HomeSections/HeroSection/components/HeroSectionPaymentList'
import Device, { MOBILE, TABLET_OR_DESKTOP } from '@/components/Device/Device'

const DynamicAnimated2Gif = dynamic(
  () => import('@/components/AnimatedVideo/Animated2Gif'),
  {
    ssr: false,
  }
)

const DynamicAnimatedFirstScreenVideo = dynamic(
  () => import('@/components/AnimatedVideo/AnimatedFirstScreenVideo'),
  {
    ssr: false,
  }
)

export function SubTitle({ className, children }) {
  return <StyledSubTitle className={className}>{children}</StyledSubTitle>
}

export default function HeroB2CSection() {
  const {
    params,
    dataPage: { homeB2c: data },
  } = useContext(PageContext)

  return (
    <StyledHeroB2CSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <div className='text-wrapper'>
            <SubTitle className='sub-title'>{data.subTitle}</SubTitle>
            <StyledTypographyUrbanistH1 className='title'>
              {data.title}
            </StyledTypographyUrbanistH1>
            <StyledTypographyUrbanistH5 component='div' className='description'>
              <StructuredText data={data.description} />
            </StyledTypographyUrbanistH5>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='get-started-btn'>
                {data.buttonScreen1}
              </ButtonGetStarted>
            </Link>
          </div>

          <HeroSectionPaymentList params={params} />
        </div>
        <div className='right-side'>
          <Device device={MOBILE}>
            <DynamicAnimated2Gif
              className='graphic'
              height={594}
              timeRepeat={5000}
              timeFirstAnimate={3000}
              timeSecondAnimate={3000}
              urlFirstVideo='/video/b2c_video1.gif'
              urlSecondVideo='/video/b2c_video2.gif'
              width={595}
            />
          </Device>
          <Device device={TABLET_OR_DESKTOP}>
            <DynamicAnimatedFirstScreenVideo
              className='graphic'
              height={594}
              timeRepeat={5000}
              urlFirstVideo='/video/id_color 600_1.mp4'
              urlSecondVideo='/video/b2c_video2.webm'
              width={595}
            />
          </Device>
        </div>
      </div>
    </StyledHeroB2CSectionWrapper>
  )
}
