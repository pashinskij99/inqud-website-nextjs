/* eslint-disable jsx-a11y/media-has-caption */
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'
import { useWindowSize } from '@uidotdev/usehooks'
// import { useCalendlyEventListener } from 'react-calendly'
import GifPlayer from 'react-gif-player'
import dynamic from 'next/dynamic'
// import axios from 'axios'
// import GifPlayer from 'react-gif-player'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import {
  StyledHeroSectionWrapper,
  StyledMobileGridWrapper,
  StyledPaymentListWrapper,
} from './HeroSection.styled'
import Check from '@/assets/icons/check-green-background.svg'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'

import { PageContext } from '@/contexts/PageContext/PageContext'
import { AnimatedFirstScreenVideo } from '@/components/AnimatedVideo'
import { responseBreakPoint } from '@/utils/response'
import { getPageData } from '@/lib/datocms'
import { HOME_B2B_HERO_LIST } from '@/lib/datocmsQuery'

const DynamicModalCalendaly = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupModal),
  {
    ssr: false,
  }
)

export default function HeroSection() {
  const {
    dataPage: { homePage: data },
  } = useContext(PageContext)
  const [calendlyModal, setCalendlyModal] = useState(false)
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

  const handleOpenCalendlyModal = async () => {
    setCalendlyModal(true)
    const removeGlobalScrollBar = await import(
      '@/utils/addOrRemoveGlobalScrollBar'
    ).then((res) => res.removeGlobalScrollBar)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = async () => {
    setCalendlyModal(false)
    const addGlobalScrollBar = await import(
      '@/utils/addOrRemoveGlobalScrollBar'
    ).then((res) => res.addGlobalScrollBar)

    addGlobalScrollBar()
  }

  const size = useWindowSize()

  return (
    <StyledHeroSectionWrapper>
      <div className='container'>
        <div className='leftSide'>
          {size.width && size.width <= responseBreakPoint.mobile ? (
            <MobileGrid />
          ) : null}

          <StyledTypographyIBMH5 className='subTitle'>
            {data.subTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH1 className='title'>
            {data.title}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH5 component='p' className='paragraph'>
            <StructuredText data={data.description} />
          </StyledTypographyUrbanistH5>

          <ul className='features'>
            {data.features.map((text) => (
              <li key={text}>
                <Image src={Check} alt='check' />
                <StyledTypographyUrbanistBody className='features-title features-title-1'>
                  {text}
                </StyledTypographyUrbanistBody>
                <StyledTypographyUrbanistBody className='features-title features-title-2'>
                  {text}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                {data.buttonScreen1GetStarted}
              </ButtonGetStarted>
            </Link>
            <StyledButtonGhost
              onClick={handleOpenCalendlyModal}
              className='ghostButton'
            >
              {data.buttonScreen1ContactSales}
            </StyledButtonGhost>
            {calendlyModal ? (
              <DynamicModalCalendaly
                onModalClose={handleCloseCalendlyModal}
                open={calendlyModal}
                rootElement={document.getElementById('calendly-model-wrapper')}
                url='https://calendly.com/inqud_team/30-minute-free-consultation'
              />
            ) : null}
          </div>

          <PaymentList />
        </div>

        <div className='rightSide'>
          {size.width && size.width >= responseBreakPoint.mobile ? (
            <AnimatedFirstScreenVideo
              className='graphic'
              height={595}
              timeRepeat={5000}
              urlFirstVideo='/video/video1.webm'
              urlSecondVideo='/video/video2.webm'
              width={595}
            />
          ) : null}
        </div>
      </div>
    </StyledHeroSectionWrapper>
  )
}

// eslint-disable-next-line no-unused-vars
function MobileGrid() {
  return (
    <StyledMobileGridWrapper>
      {/* <Image */}
      {/*   fetchpriority='high' */}
      {/*   loading='eager' */}
      {/*   src='/video/b2b_hero_mobile.gif' */}
      {/*   width={343} */}
      {/*   height={152} */}
      {/* /> */}

      <GifPlayer
        fetchpriority='high'
        priority
        loading='lazy'
        autoplay
        still='/video/b2b_hero_mobile.webp'
        gif='/video/b2b_hero_mobile.gif'
        alt='animation'
        width={343}
        height={152}
      />
    </StyledMobileGridWrapper>
  )
}

export function PaymentList() {
  const { params } = useContext(PageContext)
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: HOME_B2B_HERO_LIST,
      })

      setData(pageData.supportedCurrency)
    }

    getData()
  }, [])

  return (
    <StyledPaymentListWrapper className='payment'>
      <StyledTypographyUrbanistBody className='payment-descr'>
        {data.title}
      </StyledTypographyUrbanistBody>

      <ul className='payment-list-wrapper'>
        <div className='payment-list payment-list-1'>
          {data?.list?.map(
            ({ supportedCurrenciesImage, supportedCurrenciesName, id }) => (
              <li key={id}>
                <div className='icon-wrapper'>
                  <Image
                    width={32.00000762939453}
                    height={32.00000762939453}
                    src={supportedCurrenciesImage.url}
                    alt={supportedCurrenciesName}
                  />
                </div>
                <StyledTypographyUrbanistH5>
                  {supportedCurrenciesName}
                </StyledTypographyUrbanistH5>
              </li>
            )
          )}
        </div>
        <div aria-hidden='true' className='payment-list payment-list-2'>
          {data?.list?.map(
            ({ supportedCurrenciesImage, supportedCurrenciesName, id }) => (
              <li key={id}>
                <div className='icon-wrapper'>
                  <Image
                    width={32.00000762939453}
                    height={32.00000762939453}
                    src={supportedCurrenciesImage.url}
                    alt={supportedCurrenciesName}
                  />
                </div>
                <StyledTypographyUrbanistH5>
                  {supportedCurrenciesName}
                </StyledTypographyUrbanistH5>
              </li>
            )
          )}
        </div>
      </ul>
    </StyledPaymentListWrapper>
  )
}
