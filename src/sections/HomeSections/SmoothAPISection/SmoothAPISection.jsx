import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledSmoothAPISection } from './SmoothAPISection.styled'
import { ButtonGetStarted } from '@/components/UI/Button/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import Check from '@/assets/icons/check-green-background.svg'
import Animated2GifOnView from '@/components/AnimatedVideo/Animated2GifOnView'
import Device, {
  DESKTOP,
  MOBILE,
  TABLET,
  TABLET_OR_DESKTOP,
} from '@/components/Device/Device'
import { getData } from '@/lib/datocms'
import { HOME_B2B_SMOOTH_API } from '@/lib/datocmsQuery'

const DynamicAnimatedVideoOnScroll = dynamic(
  () => import('@/components/AnimatedVideo/AnimatedVideoOnScroll'),
  {
    ssr: false,
  }
)

export default async function SmoothAPISection({ params }) {
  const { homePage: data } = await getData(HOME_B2B_SMOOTH_API, {
    locale: params.locale,
  })

  return (
    <StyledSmoothAPISection>
      <div className='container'>
        <div className='leftSide'>
          <Device device={DESKTOP}>
            <DynamicAnimatedVideoOnScroll
              className='graphic'
              height={600}
              timeRepeat={5000}
              urlFirstVideo='/video/il-api.mp4'
              width={416.45}
            />
          </Device>
        </div>
        <div className='rightSide'>
          <StyledTypographyIBMH5 className='smoothAPISubTitle'>
            {data.screen4SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='smoothAPITitle'>
            {data.screen4Title}
          </StyledTypographyUrbanistH2>

          <Device device={MOBILE}>
            <Animated2GifOnView
              className='smoothAPIImageTablet'
              height={232.88}
              timeRepeat={5000}
              stillSecondVideo='/video/b2b_api_mobile.webp'
              urlSecondVideo='/video/b2b_api_mobile.gif'
              timeSecondAnimate={5000}
              width={343}
            />
          </Device>

          <Device device={TABLET}>
            <DynamicAnimatedVideoOnScroll
              className='smoothAPIImageTablet'
              height={600}
              timeRepeat={5000}
              urlFirstVideo='/video/b2b_api_video_tablet.mp4'
              width={416.45}
            />
          </Device>

          <StyledTypographyUrbanistBody className='smoothAPIDescription'>
            {data.screen4Description}
          </StyledTypographyUrbanistBody>

          <ul className='smoothAPIGrid'>
            {data.screen4Features?.map(
              ({ description, id, image: { url }, title }) => (
                <li
                  className='smoothAPIGridItem'
                  data-slug='comming soon'
                  key={id}
                >
                  <Image src={Check} alt='check' className='check' />
                  <Device device={TABLET_OR_DESKTOP}>
                    <Image
                      className='icon'
                      src={url}
                      alt={title}
                      width={48}
                      height={48}
                    />
                  </Device>

                  <StyledTypographyUrbanistH5
                    component='h3'
                    className='smoothAPIGridItemTitle'
                  >
                    {title}
                  </StyledTypographyUrbanistH5>
                  <StyledTypographyUrbanistBody className='smoothAPIGridItemDescription'>
                    {description}
                  </StyledTypographyUrbanistBody>
                </li>
              )
            )}
          </ul>

          <div className='smoothAPIButtonWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='smoothAPIButtonGetStarted'>
                {data.buttonScreen4GetStarted}
              </ButtonGetStarted>
            </Link>
            <Link href='/inqud-api'>
              <StyledButtonGhost className='smoothAPIButtonGhost'>
                {data.buttonScreen4LearnMore}
              </StyledButtonGhost>
            </Link>
          </div>
        </div>
      </div>
    </StyledSmoothAPISection>
  )
}
