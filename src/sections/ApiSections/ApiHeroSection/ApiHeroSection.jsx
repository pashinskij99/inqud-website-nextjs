'use client'

import Link from 'next/link'
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
// import Animated2Gif from '@/components/AnimatedVideo/Animated2Gif'
import HeroSectionPaymentList from '@/sections/HomeSections/HeroSection/components/HeroSectionPaymentList'
import Device, { TABLET_OR_DESKTOP } from '@/components/Device/Device'
import ApiHeroButtonShowModal from './components/ApiHeroButtonShowModal'

const DynamicAnimatedOneVideo = dynamic(() =>
  import('@/components/AnimatedVideo/AnimatedOneVideo')
)

export default function ApiHeroSection({ paymentListData, params, data }) {
  // const {
  //   params,
  //   dataPage: { apiPage: data },
  // } = useContext(PageContext)

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

            <ApiHeroButtonShowModal data={data} />
          </div>

          <HeroSectionPaymentList data={paymentListData} params={params} />
        </div>
        <div className='right-side'>
          <Device device={TABLET_OR_DESKTOP}>
            <DynamicAnimatedOneVideo
              className='cart'
              width={500}
              height={488}
              timeRepeat={0}
              urlFirstVideo='/video/code 2.mp4'
            />
          </Device>
          {/* <Device device={MOBILE}> */}
          <Image
            priority
            loading='eager'
            className='cart cart-2'
            width={500}
            height={488}
            src='/video/api_page_hero.avif'
            alt='animations'
          />
          {/* <Animated2Gif
              className='cart'
              width={500}
              height={488}
              timeRepeat={0}
              timeFirstAnimate={10000}
              urlFirstVideo='/video/api_page_hero.avif'
              stillFirstVideo='/video/api_page_hero.webp'
              urlSecondVideo='/video/api_page_hero.avif'
              stillSecondVideo='/video/api_page_hero.webp'
              timeSecondAnimate={10000}
            /> */}
          {/* </Device> */}
        </div>
      </div>
    </StyledApiHeroSectionWrapper>
  )
}
