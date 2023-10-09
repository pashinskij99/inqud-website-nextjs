'use client'

import Link from 'next/link'
import { useContext, useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledApiHeroSectionWrapper } from './ApiHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import Check from '@/assets/icons/check-green-background.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { responseBreakPoint } from '@/utils/response'
import { Animated2Gif } from '@/components/AnimatedVideo/AnimatedVideo'
import HeroSectionPaymentList from '@/sections/HomeSections/HeroSection/components/HeroSectionPaymentList'

const DynamicApiHeroSectionModalForm = dynamic(() =>
  import('./components/ApiHeroSectionModalForm').then((res) => res.default)
)

const DynamicAnimatedOneVideo = dynamic(() =>
  import('@/components/AnimatedVideo').then((res) => res.AnimatedOneVideo)
)

export default function ApiHeroSection() {
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  const {
    params,
    dataPage: { apiPage: data },
  } = useContext(PageContext)

  const size = useWindowSize()

  return (
    <StyledApiHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <SubTitle className='sub-title'>{data.subTitle}</SubTitle>
          <StyledTypographyUrbanistH1 className='title title-1'>
            {data.title}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH1 className='title title-2'>
            {data.title}
          </StyledTypographyUrbanistH1>

          <ul className='features'>
            {data.features.map((text) => (
              <li key={text}>
                <Image src={Check} alt='Check' />
                <StyledTypographyUrbanistBody key={text}>
                  {text}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                {data.buttonScreen1A}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost
              onClick={handleShowModal}
              className='ghostButton'
            >
              {data.buttonScreen1B}
            </StyledButtonGhost>
            {showModal ? (
              <DynamicApiHeroSectionModalForm
                data={data}
                handleClose={handleHideModal}
                showModal={showModal}
              />
            ) : null}
          </div>

          <HeroSectionPaymentList params={params} />
        </div>
        <div className='right-side'>
          {size.width && size.width > responseBreakPoint.mobile ? (
            <DynamicAnimatedOneVideo
              className='cart'
              width={500}
              height={488}
              timeRepeat={10000}
              urlFirstVideo='/video/code 2.mp4'
            />
          ) : null}
          {size.width && size.width <= responseBreakPoint.mobile ? (
            <Animated2Gif
              className='cart'
              width={500}
              height={488}
              timeRepeat={5000}
              timeFirstAnimate={10000}
              urlFirstVideo='/video/api_page_hero.gif'
              stillFirstVideo='/video/api_page_hero.webp'
              urlSecondVideo='/video/api_page_hero.gif'
              stillSecondVideo='/video/api_page_hero.webp'
              timeSecondAnimate={10000}
            />
          ) : null}
        </div>
      </div>
    </StyledApiHeroSectionWrapper>
  )
}
