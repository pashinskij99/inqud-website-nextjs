import Link from 'next/link'
import { StructuredText } from 'react-datocms/structured-text'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import HeroSectionPaymentList from '@/sections/HomeSections/HeroSection/components/HeroSectionPaymentList'
import Animated2Gif from '@/components/AnimatedVideo/Animated2Gif'
import Device, { TABLET_OR_DESKTOP } from '@/components/Device/Device'
import styles from './styles.module.scss'

const DynamicAnimatedFirstScreenVideo = dynamic(
  () => import('@/components/AnimatedVideo/AnimatedFirstScreenVideo'),
  {
    ssr: false,
  }
)

export function SubTitle({ className, children }) {
  return (
    <span className={clsx('title-ibm-2', styles['sub-title'], className)}>
      {children}
    </span>
  )
}

export default function HeroB2CSection({ data, params }) {
  // const {
  //   params,
  //   dataPage: { homeB2c: data },
  // } = useContext(PageContext)

  return (
    <section className={styles.wrapper}>
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
          <Animated2Gif
            loading='eager'
            className='graphic graphic-1'
            height={594}
            timeRepeat={5000}
            timeFirstAnimate={3000}
            timeSecondAnimate={3000}
            stillFirstVideo='/video/b2c_video-1.webp'
            stillSecondVideo='/video/b2c_video-2.webp'
            urlFirstVideo='/video/b2c_video-1.webp'
            urlSecondVideo='/video/b2c_video-2.webp'
            width={595}
          />
          {/* </Device> */}
          {/* DynamicAnimatedFirstScreenVideo */}

          {/* <AnimatedFirstScreenVideo
            className='graphic'
            height={594}
            timeRepeat={5000}
            urlFirstVideo='/video/color 600.mp4'
            urlSecondVideo='/video/b2c_video2.webm'
            width={595}
          /> */}
          <Device device={TABLET_OR_DESKTOP}>
            <DynamicAnimatedFirstScreenVideo
              className='graphic'
              height={594}
              timeRepeat={5000}
              urlFirstVideo='/video/b2c_video1.webm'
              urlSecondVideo='/video/b2c_video2.webm'
              width={595}
            />
          </Device>
        </div>
      </div>
    </section>
  )
}
