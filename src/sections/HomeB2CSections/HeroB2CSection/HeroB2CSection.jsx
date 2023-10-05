import { useContext } from 'react'
import Link from 'next/link'
import { StructuredText } from 'react-datocms/structured-text'
import { useWindowSize } from '@uidotdev/usehooks'
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
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { responseBreakPoint } from '@/utils/response'

const DynamicAnimated2Gif = dynamic(
  () =>
    import('@/components/AnimatedVideo/AnimatedVideo').then(
      (res) => res.Animated2Gif
    ),
  {
    ssr: false,
  }
)

const DynamicAnimatedFirstScreenVideo = dynamic(
  () =>
    import('@/components/AnimatedVideo/AnimatedVideo').then(
      (res) => res.AnimatedFirstScreenVideo
    ),
  {
    ssr: false,
  }
)

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
          {size.width && size.width <= responseBreakPoint.mobile ? (
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
          ) : null}
          {size.width && size.width > responseBreakPoint.mobile ? (
            <DynamicAnimatedFirstScreenVideo
              className='graphic'
              height={594}
              timeRepeat={5000}
              urlFirstVideo='/video/id_color 600_1.mp4'
              urlSecondVideo='/video/b2c_video2.webm'
              width={595}
            />
          ) : null}
        </div>
      </div>
    </StyledHeroB2CSectionWrapper>
  )
}
