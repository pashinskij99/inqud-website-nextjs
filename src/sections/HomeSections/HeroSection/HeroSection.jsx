/* eslint-disable jsx-a11y/media-has-caption */
import Link from 'next/link'
import { useContext } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import {
  StyledHeroSectionWrapper,
  StyledMobileGridWrapper,
  StyledPaymentListWrapper,
} from './HeroSection.styled'
// import Grid1 from '@/assets/images/hero/grid1.svg'
// import Grid2 from '@/assets/images/hero/grid2.svg'
// import Grid3 from '@/assets/images/hero/grid3.svg'
// import Grid4 from '@/assets/images/hero/grid4.svg'
// import Grid5 from '@/assets/images/hero/grid5.svg'
// import Grid6 from '@/assets/images/hero/grid6.svg'
import Check from '@/assets/icons/check-green-background.svg'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'

import { PageContext } from '@/contexts/PageContext/PageContext'
import { AnimatedFirstScreenVideo } from '@/components/AnimatedVideo'

export default function HeroSection() {
  const {
    dataPage: { homePage: data },
  } = useContext(PageContext)

  return (
    <StyledHeroSectionWrapper>
      <div className='container'>
        <div className='leftSide'>
          <MobileGrid />
          <StyledTypographyIBMH5 className='subTitle'>
            {data.subTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH1 className='title'>
            {data.title}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH5 className='paragraph'>
            <StructuredText data={data.description} />
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
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='ghostButton'>
              {data.buttonScreen1ContactSales}
            </StyledButtonGhost>
          </div>

          <PaymentList />
        </div>

        <div className='rightSide'>
          <AnimatedFirstScreenVideo
            className='graphic'
            height={595}
            timeRepeat={5000}
            urlFirstVideo='/video/video1.mp4'
            urlSecondVideo='/video/video2.mp4'
            width={595}
          />
        </div>
      </div>
    </StyledHeroSectionWrapper>
  )
}

// const gridItems = [
//   { id: 0, icon: <Grid1 /> },
//   { id: 1, icon: <Grid2 /> },
//   { id: 2, icon: <Grid3 /> },
//   { id: 3, icon: <Grid4 /> },
//   { id: 4, icon: <Grid5 /> },
//   { id: 5, icon: <Grid6 /> },
// ]

function MobileGrid() {
  return (
    <StyledMobileGridWrapper>
      {/* {gridItems.map(({ id, icon }) => (
        <Fragment key={id}>{icon}</Fragment>
      ))} */}
      <video muted autoPlay src='/video/b2b_video_mobile.mp4' />
    </StyledMobileGridWrapper>
  )
}

export function PaymentList() {
  const {
    dataPage: { supportedCurrency: data },
  } = useContext(PageContext)

  return (
    <StyledPaymentListWrapper className='payment'>
      <StyledTypographyUrbanistBody className='payment-descr'>
        {data.title}
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
