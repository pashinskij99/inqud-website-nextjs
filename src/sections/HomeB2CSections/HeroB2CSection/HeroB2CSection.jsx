import Link from 'next/link'
import { StructuredText } from 'react-datocms/structured-text'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledHeroB2CSectionWrapper,
  StyledSubTitle,
} from './HeroB2CSection.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import HeroSectionPaymentList from '@/sections/HomeSections/HeroSection/components/HeroSectionPaymentList'
import AnimatedFirstScreenVideo from '@/components/AnimatedVideo/AnimatedFirstScreenVideo'
// const DynamicAnimated2Gif = dynamic(
//   () => import('@/components/AnimatedVideo/Animated2Gif'),
//   {
//     ssr: false,
//   }
// )

// const DynamicAnimatedFirstScreenVideo = dynamic(
//   () => import('@/components/AnimatedVideo/AnimatedFirstScreenVideo'),
//   {
//     ssr: false,
//   }
// )

export function SubTitle({ className, children }) {
  return <StyledSubTitle className={className}>{children}</StyledSubTitle>
}

export default function HeroB2CSection({ data, params }) {
  // const {
  //   params,
  //   dataPage: { homeB2c: data },
  // } = useContext(PageContext)

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
          {/* <Device device={MOBILE}> */}
          {/* <AnimatedVideoGif */}
          {/*   loading='eager' */}
          {/*   className='graphic graphic-1' */}
          {/*   height={594} */}
          {/*   timeRepeat={5000} */}
          {/*   timeFirstAnimate={3000} */}
          {/*   timeSecondAnimate={3000} */}
          {/*   urlFirstVideo='/video/b2c_video1.webp' */}
          {/*   urlSecondVideo='/video/b2c_video2.webp' */}
          {/*   width={595} */}
          {/* /> */}
          {/* </Device> */}
          {/* DynamicAnimatedFirstScreenVideo */}

          <AnimatedFirstScreenVideo
            className='graphic'
            height={594}
            timeRepeat={5000}
            urlFirstVideo='/video/color 600.mp4'
            urlSecondVideo='/video/b2c_video2.webm'
            width={595}
          />
          {/* <Device device={TABLET_OR_DESKTOP}> */}
          {/*   <DynamicAnimatedFirstScreenVideo */}
          {/*     className='graphic graphic-2' */}
          {/*     height={594} */}
          {/*     timeRepeat={5000} */}
          {/*     urlFirstVideo='/video/id_color 600_1.mp4' */}
          {/*     urlSecondVideo='/video/b2c_video2.webm' */}
          {/*     width={595} */}
          {/*   /> */}
          {/* </Device> */}
        </div>
      </div>
    </StyledHeroB2CSectionWrapper>
  )
}
