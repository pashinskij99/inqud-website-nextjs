import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import styles from './CryptoWidgetSection.module.scss'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStartedLight } from '@/components/UI/Button/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import Check from '@/assets/icons/check-green-background.svg'
import Loading from '@/assets/icons/loading.svg'
import gifStill from '@/assets/gif/b2b_crypto_widget_mobile.webp'
import { getData } from '@/lib/datocms'
import { HOME_B2B_CRYPTO_WIDGET } from '@/lib/datocmsQuery'
import {
  Animated2GifOnView,
  AnimatedVideoOnScroll,
} from '@/components/AnimatedVideo/AnimatedVideo'
import Device, {
  DESKTOP,
  MOBILE,
  TABLET,
  TABLET_OR_DESKTOP,
} from '@/components/Device/Device'

export default async function CryptoWidgetSectionWrapper({ params, trans }) {
  const { homePage: data } = await getData(HOME_B2B_CRYPTO_WIDGET, {
    locale: params.locale,
  })
  return <CryptoWidgetSection data={data} trans={trans} />
}

function CryptoWidgetSection({ data, trans }) {
  return (
    <section className={styles.wrapper}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.leftSide}>
          <StyledTypographyIBMH5 className={styles.cryptoSubTitle}>
            {data.screen3SubTitle}
          </StyledTypographyIBMH5>

          <StyledTypographyUrbanistH2 className={styles.cryptoTitle}>
            {data.screen3Title}
          </StyledTypographyUrbanistH2>

          <div className={styles.cryptoWidgetMobileWrapper}>
            <Device device={TABLET}>
              <AnimatedVideoOnScroll
                className={styles.cryptoWidgetDesktop}
                height={600}
                timeRepeat={3000}
                // urlFirstVideo='/video/b2b_crypto_video_web.webm'
                urlFirstVideo='/video/b2b_crypto_video_web.webm'
                width={500}
              />
            </Device>
            <Device device={MOBILE}>
              <Animated2GifOnView
                className={styles.cryptoWidgetMobileSmaller}
                height={600}
                timeRepeat={4000}
                urlSecondVideo='/video/b2b_crypto_widget_mobile.gif'
                stillSecondVideo={gifStill.src}
                timeSecondAnimate={5000}
                width={500}
              />
            </Device>
          </div>
          <Device device={MOBILE}>
            <StyledTypographyUrbanistH5
              className={styles.cryptoDescriptionMobile}
            >
              {data.screen3Description}
            </StyledTypographyUrbanistH5>
          </Device>
          {/* {size.width && size.width <= responseBreakPoint.mobile ? ( */}

          {/* ) : null} */}
          <Device device={TABLET_OR_DESKTOP}>
            <StyledTypographyUrbanistBody className={styles.cryptoDescription}>
              {data.screen3Description}
            </StyledTypographyUrbanistBody>
          </Device>

          <ul className={styles.cryptoGrid}>
            {data.feature?.map(({ description, id, image: { url }, title }) => (
              <li
                className={styles.cryptoGridItem}
                data-slug={trans.t('comming_soon')}
                key={id}
              >
                <Image src={Check} alt='Check' className={styles.check} />
                <Image src={Loading} alt='loading' className={styles.loading} />
                <div className={styles['icon-wrapper']}>
                  <Image src={url} alt={title} width={24} height={24} />
                </div>
                <StyledTypographyUrbanistH5
                  component='h3'
                  className={styles.cryptoGridItemTitle}
                >
                  {title}
                </StyledTypographyUrbanistH5>
                <StyledTypographyUrbanistBody
                  className={styles.cryptoGridItemDescription}
                >
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className={styles.cryptoButtonWrapper}>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStartedLight className={styles.cryptoButtonGetStarted}>
                {data.buttonScreen3GetStarted}
              </ButtonGetStartedLight>
            </Link>
            <Link href='/crypto-widget'>
              <StyledButtonGhost className={styles.cryptoButtonGhost}>
                {data.buttonScreen3LearnMore}
              </StyledButtonGhost>
            </Link>
          </div>
        </div>

        <div className={styles.rightSide}>
          <Device device={DESKTOP}>
            <AnimatedVideoOnScroll
              className={styles.graphic}
              height={600}
              timeRepeat={3000}
              urlFirstVideo='/video/b2b_crypto_video_web.webm'
              width={500}
            />
          </Device>
        </div>
      </div>
    </section>
  )
}
