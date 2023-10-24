import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
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
import Device, { DESKTOP, MOBILE, TABLET } from '@/components/Device/Device'

const DynamicCryptoWidgetSectionAnimationOnScroll = dynamic(
  () => import('@/components/AnimatedVideo/AnimatedVideoOnScroll'),
  {
    ssr: false,
  }
)

export default async function CryptoWidgetSection({ trans, data }) {
  // const { homePage: data } = await getData(HOME_B2B_CRYPTO_WIDGET, {
  //   locale: params.locale,
  // })
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
              <DynamicCryptoWidgetSectionAnimationOnScroll
                className={styles.cryptoWidgetDesktop}
                height={600}
                timeRepeat={3000}
                urlFirstVideo='/video/b2b_crypto_video_web.webm'
                width={500}
              />
            </Device>
            <Device device={MOBILE}>
              <Image
                className={styles.cryptoWidgetMobileSmaller}
                height={600}
                src='/video/b2b_crypto_widget_mobile.gif'
                alt='animation'
                width={500}
              />
              {/* <Animated2GifOnView */}
              {/*   className={styles.cryptoWidgetMobileSmaller} */}
              {/*   height={600} */}
              {/*   timeRepeat={0} */}
              {/*   urlSecondVideo='/video/b2b_crypto_widget_mobile.gif' */}
              {/*   stillSecondVideo={gifStill.src} */}
              {/*   timeSecondAnimate={5000} */}
              {/*   width={500} */}
              {/* /> */}
            </Device>
          </div>

          <StyledTypographyUrbanistBody className={styles.cryptoDescription}>
            {data.screen3Description}
          </StyledTypographyUrbanistBody>

          <ul className={styles.cryptoGrid}>
            {data.feature?.map(
              ({ description, id, image: { url }, title }, i) => (
                <li
                  className={styles.cryptoGridItem}
                  data-slug={trans.t('comming_soon')}
                  key={id}
                >
                  <Image src={Check} alt='Check' className={styles.check} />
                  {i === 3 ? (
                    <Image
                      src={Loading}
                      alt='loading'
                      className={styles.loading}
                    />
                  ) : null}

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
              )
            )}
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
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              loop
              autoPlay
              muted
              playsInline
              controls={false}
              width={500}
              height={600}
              className={styles.graphic}
              src='/video/b2b_crypto_video_web.webm'
            />
            {/* <DynamicCryptoWidgetSectionAnimationOnScroll */}
            {/*   className={styles.graphic} */}
            {/*   height={600} */}
            {/*   timeRepeat={3000} */}
            {/*   urlFirstVideo='/video/b2b_crypto_video_web.webm' */}
            {/*   width={500} */}
            {/* /> */}
          </Device>
        </div>
      </div>
    </section>
  )
}
