'use client'

import Link from 'next/link'
import { useContext, useState } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledCryptoWidgetHeroSectionWrapper } from './CryptoWidgetHeroSection.styled'
import { StyledTypographyUrbanistH1 } from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'
import {
  addGlobalScrollBar,
  removeGlobalScrollBar,
} from '@/utils/addOrRemoveGlobalScrollBar'
import HeroSectionPaymentList from '@/sections/HomeSections/HeroSection/components/HeroSectionPaymentList'
import Device, { MOBILE, TABLET_OR_DESKTOP } from '@/components/Device/Device'

const DynamicModalCalendaly = dynamic(
  () => import('@/components/CalendlyForm').then((mod) => mod.default),
  {
    ssr: false,
  }
)
const DynamicAnimatedOneVideo = dynamic(
  () => import('@/components/AnimatedVideo/AnimatedOneVideo'),
  {
    ssr: false,
  }
)

export default function CryptoWidgetHeroSection() {
  const {
    params,
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
    addGlobalScrollBar()
  }

  return (
    <StyledCryptoWidgetHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <SubTitle className='subTitle'>{data.subTitle}</SubTitle>
          <StyledTypographyUrbanistH1 className='title'>
            {data.title}
          </StyledTypographyUrbanistH1>
          <div className='description'>
            <StructuredText data={data.description} />
          </div>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                {data.buttonScreen1A}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost
              onClick={handleOpenCalendlyModal}
              className='ghostButton'
            >
              {data.buttonScreen1B}
            </StyledButtonGhost>
            {calendlyModal ? (
              <DynamicModalCalendaly
                handleClose={handleCloseCalendlyModal}
                open={calendlyModal}
              />
            ) : null}
          </div>

          <HeroSectionPaymentList params={params} />
        </div>

        <div className='right-side'>
          <Device device={TABLET_OR_DESKTOP}>
            <DynamicAnimatedOneVideo
              className='graphic'
              height={650.44}
              timeRepeat={0}
              urlFirstVideo='/video/400.mp4'
              width={633.97}
            />
          </Device>
          <Device device={MOBILE}>
            <Image
              src='/video/crypto-page-mobile.avif'
              className='graphic'
              width={500}
              height={357}
              alt='graphic'
            />
            {/* <Animated2Gif */}
            {/*   className='graphic' */}
            {/*   height={357} */}
            {/*   timeRepeat={0} */}
            {/*   timeFirstAnimate={16000} */}
            {/*   stillSecondVideo='/video/crypto-page-mobile.webp' */}
            {/*   stillFirstVideo='/video/crypto-page-mobile.webp' */}
            {/*   urlFirstVideo='/video/crypto-page-mobile.avif' */}
            {/*   urlSecondVideo='/video/crypto-page-mobile.avif' */}
            {/*   timeSecondAnimate={16000} */}
            {/*   width={500} */}
            {/* /> */}
          </Device>
        </div>
      </div>
    </StyledCryptoWidgetHeroSectionWrapper>
  )
}
