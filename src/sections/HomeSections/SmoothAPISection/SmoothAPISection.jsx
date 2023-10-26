import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import styles from './styles.module.scss'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
// import { StyledSmoothAPISection } from './SmoothAPISection.styled'
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

const DynamicAnimatedVideoOnScroll = dynamic(
  () => import('@/components/AnimatedVideo/AnimatedVideoOnScroll'),
  {
    ssr: false,
  }
)

export default async function SmoothAPISection({ data }) {
  return (
    <section className={styles.wrapper}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.leftSide}>
          <Device device={DESKTOP}>
            <DynamicAnimatedVideoOnScroll
              className={styles.graphic}
              height={600}
              timeRepeat={5000}
              urlFirstVideo='/video/il-api.mp4'
              width={416.45}
            />
          </Device>
        </div>
        <div className={styles.rightSide}>
          <StyledTypographyIBMH5 className={styles.smoothAPISubTitle}>
            {data.screen4SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className={styles.smoothAPITitle}>
            {data.screen4Title}
          </StyledTypographyUrbanistH2>

          <Device device={MOBILE}>
            <Animated2GifOnView
              className={styles.smoothAPIImageTablet}
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
              className={styles.smoothAPIImageTablet}
              height={600}
              timeRepeat={5000}
              urlFirstVideo='/video/b2b_api_video_tablet.mp4'
              width={416.45}
            />
          </Device>

          <StyledTypographyUrbanistBody className={styles.smoothAPIDescription}>
            {data.screen4Description}
          </StyledTypographyUrbanistBody>

          <ul className={styles.smoothAPIGrid}>
            {data.screen4Features?.map(({ description, id, image, title }) => (
              <li
                className={styles.smoothAPIGridItem}
                data-slug='comming soon'
                key={id}
              >
                <Image src={Check} alt='check' className={styles.check} />
                {Boolean(image?.url) && (
                  <Device device={TABLET_OR_DESKTOP}>
                    <Image
                      className='icon'
                      src={image.url}
                      alt={title}
                      width={48}
                      height={48}
                    />
                  </Device>
                )}

                <StyledTypographyUrbanistH5
                  component='h3'
                  className={styles.smoothAPIGridItemTitle}
                >
                  {title}
                </StyledTypographyUrbanistH5>
                <StyledTypographyUrbanistBody
                  className={styles.smoothAPIGridItemDescription}
                >
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className={styles.smoothAPIButtonWrapper}>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className={styles.smoothAPIButtonGetStarted}>
                {data.buttonScreen4GetStarted}
              </ButtonGetStarted>
            </Link>
            <Link href='/integration-api'>
              <StyledButtonGhost className={styles.smoothAPIButtonGhost}>
                {data.buttonScreen4LearnMore}
              </StyledButtonGhost>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
