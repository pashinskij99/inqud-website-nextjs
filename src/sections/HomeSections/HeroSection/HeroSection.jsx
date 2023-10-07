/* eslint-disable jsx-a11y/media-has-caption */
import Link from 'next/link'
// import { useContext, useEffect, useState } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'
import clsx from 'clsx'
import styles from './HeroSection.module.scss'
// import { useWindowSize } from '@uidotdev/usehooks'
// import GifPlayer from 'react-gif-player'
// import dynamic from 'next/dynamic'
// import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
// import {
// StyledHeroSectionWrapper,
// StyledMobileGridWrapper,
// StyledPaymentListWrapper,
// } from './HeroSection.styled'
import Check from '@/assets/icons/check-green-background.svg'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'

// import { PageContext } from '@/contexts/PageContext/PageContext'
// import { AnimatedFirstScreenVideo } from '@/components/AnimatedVideo'
// import { responseBreakPoint } from '@/utils/response'
// import { getPageData } from '@/lib/datocms'
// import { HOME_B2B_HERO_LIST } from '@/lib/datocmsQuery'
import HeroSectionPaymentList from './components/HeroSectionPaymentList'
import HeroSectionModal from './components/HeroSectionModal'
import Device, { TABLET_OR_DESKTOP } from '@/components/Device/Device'
import { getData } from '@/lib/datocms'
import { MobileGrid } from './components/HeroMobileGrid'
import { AnimatedFirstScreenVideo } from '@/components/AnimatedVideo'
import { HOME_PAGE_QUERY } from '@/lib/datocmsQuery'
// import Device from '@/components/Device'

export default async function HeroSection({ params }) {
  // const {
  //   dataPage: { homePage: data },
  // } = useContext(PageContext)
  // const [calendlyModal, setCalendlyModal] = useState(false)
  // eslint-disable-next-line no-unused-vars
  // const setAutomationsOnCreatedCalendly = async (e) => {
  //   try {
  //     const response = await axios.get(e.data.payload.invitee.uri, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_CALENDLY_TOKEN}`,
  //       },
  //     })

  //     console.log(response.data.resource.email)

  //     await axios.post('/api/get-contact-by-email', {
  //       email: response.data.resource.email,
  //       automationId: 13,
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useCalendlyEventListener({
  //   onEventScheduled: async (e) => {
  //     // console.log(e.data.payload.invitee.uri)
  //     console.log(e.data.payload.invitee.uri)
  //   },
  // })

  // const size = useWindowSize()

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
