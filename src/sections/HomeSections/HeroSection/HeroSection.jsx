import Link from 'next/link'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
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
import AnimatedMobile from './components/AnimatedMobile'

const DynamicAnimatedFirstScreenVideo = dynamic(
  () => import('@/components/AnimatedVideo/AnimatedFirstScreenVideo'),
  {
    ssr: false,
  }
)

export default async function HeroSection({ dataPage }) {
  const data = dataPage.homePage

  return (
    <section className={styles.wrapper}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.leftSide}>
          <AnimatedMobile />

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
                  className={styles['features-title']}
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
          <HeroSectionPaymentList data={dataPage.supportedCurrency} />
        </div>

        <div className={styles.rightSide}>
          <Device device={TABLET_OR_DESKTOP}>
            <DynamicAnimatedFirstScreenVideo
              className={styles.graphic}
              height={595}
              timeRepeat={5000}
              urlFirstVideo='/video/1.webm'
              urlSecondVideo='/video/2.webm'
              width={595}
            />
          </Device>
        </div>
      </div>
    </section>
  )
}
