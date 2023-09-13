import { useContext } from 'react'
import Link from 'next/link'
import { StructuredText } from 'react-datocms/structured-text'
import { useWindowSize } from '@uidotdev/usehooks'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledHeroB2CSectionWrapper,
  StyledSubTitle,
} from './HeroB2CSection.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import { PageContext } from '@/contexts/PageContext/PageContext'
// import { AnimatedFirstScreenVideo } from '@/components/AnimatedVideo'
import {
  Animated2Gif,
  AnimatedFirstScreenVideo,
} from '@/components/AnimatedVideo/AnimatedVideo'
import { responseBreakPoint } from '@/utils/response'

export function SubTitle({ className, children }) {
  return <StyledSubTitle className={className}>{children}</StyledSubTitle>
}

export default function HeroB2CSection() {
  const {
    dataPage: { homeB2c: data },
  } = useContext(PageContext)

  const size = useWindowSize()

  return (
    <StyledHeroB2CSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <div className='text-wrapper'>
            <SubTitle className='sub-title'>{data.subTitle}</SubTitle>
            <StyledTypographyUrbanistH1 className='title'>
              {data.title}
            </StyledTypographyUrbanistH1>
            <StyledTypographyUrbanistH5 className='description'>
              <StructuredText data={data.description} />
            </StyledTypographyUrbanistH5>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='get-started-btn'>
                {data.buttonScreen1}
              </ButtonGetStarted>
            </Link>
          </div>

          <PaymentList />
        </div>
        <div className='right-side'>
          {size.width <= responseBreakPoint.mobile ? (
            <Animated2Gif
              className='graphic'
              height={594}
              timeRepeat={5000}
              timeFirstAnimate={3000}
              timeSecondAnimate={3000}
              urlFirstVideo='/video/b2c_video1.gif'
              urlSecondVideo='/video/b2c_video2.gif'
              width={595}
            />
          ) : (
            <AnimatedFirstScreenVideo
              className='graphic'
              height={594}
              timeRepeat={5000}
              urlFirstVideo='/video/b2c_video1.webm'
              urlSecondVideo='/video/b2c_video2.webm'
              width={595}
            />
          )}
        </div>
      </div>
    </StyledHeroB2CSectionWrapper>
  )
}
