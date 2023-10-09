import Link from 'next/link'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'
import clsx from 'clsx'
import styles from './HeroSection.module.scss'
import Check from '@/assets/icons/check-green-background.svg'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import HeroSectionPaymentList from './components/HeroSectionPaymentList'
import HeroSectionModal from './components/HeroSectionModal'
import Device, { TABLET_OR_DESKTOP } from '@/components/Device/Device'
import { getData } from '@/lib/datocms'
import { MobileGrid } from './components/HeroMobileGrid'
import { AnimatedFirstScreenVideo } from '@/components/AnimatedVideo'
import { HOME_PAGE_QUERY } from '@/lib/datocmsQuery'

export default async function HeroSection({ params }) {
  const { homePage: data } = await getData(HOME_PAGE_QUERY, {
    locale: params.locale,
  })

  return (
    <section className={styles.wrapper}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.leftSide}>
          {/* <Device device={MOBILE}> */}
          <MobileGrid />
          {/* </Device> */}

          <StyledTypographyIBMH5 className={styles.subTitle}>
            {data.subTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH1 className={styles.title}>
            {data.title}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH5
            component='div'
            className={styles.paragraph}
          >
            <StructuredText data={data.description} />
          </StyledTypographyUrbanistH5>

          <ul className={styles.features}>
            {data.features.map((text) => (
              <li key={text}>
                <Image src={Check} alt='check' />
                <StyledTypographyUrbanistBody
                  className={clsx(
                    styles['features-title'],
                    styles['features-title-1']
                  )}
                >
                  {text}
                </StyledTypographyUrbanistBody>
                <StyledTypographyUrbanistBody
                  className={clsx(
                    styles['features-title'],
                    styles['features-title-2']
                  )}
                >
                  {text}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className={styles.buttonsWrapper}>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className={styles.getStarted}>
                {data.buttonScreen1GetStarted}
              </ButtonGetStarted>
            </Link>

            <HeroSectionModal data={data} />
          </div>

          <HeroSectionPaymentList params={params} />
        </div>

        <div className={styles.rightSide}>
          <Device device={TABLET_OR_DESKTOP}>
            <AnimatedFirstScreenVideo
              className={styles.graphic}
              height={595}
              timeRepeat={5000}
              urlFirstVideo='/video/video1.webm'
              urlSecondVideo='/video/video2.webm'
              width={595}
            />
          </Device>
          {/* <Device>
            {({ isMobile }) =>
              !isMobile && (
                <AnimatedFirstScreenVideo
                  className='graphic'
                  height={595}
                  timeRepeat={5000}
                  urlFirstVideo='/video/video1.webm'
                  urlSecondVideo='/video/video2.webm'
                  width={595}
                />
              )
            }
          </Device> */}
        </div>
      </div>
    </section>
  )
}
