import Image from 'next/image'
// import { useContext, useEffect, useState } from 'react'

// import { toast } from 'react-toastify'
// import { useWindowSize } from '@uidotdev/usehooks'
// import dynamic from 'next/dynamic'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCryptoWidget2Section } from './CryptoWidget2Section.styled'
import Check from '@/assets/icons/check-dark.svg'
// import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { ButtonGhostCrypto } from '@/components/UI/Button'
// import { PageContext } from '@/contexts/PageContext/PageContext'
// import { responseBreakPoint } from '@/utils/response'
// import { AnimatedVideoOnScroll } from '@/components/AnimatedVideo'
// import { Animated2GifOnView } from '@/components/AnimatedVideo/AnimatedVideo'
import { getData } from '@/lib/datocms'
import { HOME_B2B_CRYPTO_WIDGET_2 } from '@/lib/datocmsQuery'
import { AnimatedVideoOnScroll } from '@/components/AnimatedVideo'
import { Animated2GifOnView } from '@/components/AnimatedVideo/AnimatedVideo'
import Device, {
  DESKTOP,
  MOBILE,
  TABLET,
  TABLET_OR_DESKTOP,
} from '@/components/Device/Device'
import { CryptoWidget2ModalWithButton } from './components/CryptoWidget2ModalWithButton'

export default async function CryptoWidget2Section({ params }) {
  // const [open, setOpen] = useState(false)
  // const [data, setData] = useState({})

  // const {
  //   dataPage: { homePage: data },
  // } = useContext(PageContext)
  // const { params } = useContext(PageContext)

  // const size = useWindowSize()

  // useEffect(() => {
  //   const getData = async () => {
  //     const pageData = await getPageData({
  //       variables: {
  //         locale: params.locale,
  //       },
  //       query: HOME_B2B_CRYPTO_WIDGET_2,
  //     })

  //     setData(pageData.homePage)
  //   }

  //   getData()
  // }, [])

  const { homePage: data } = await getData(HOME_B2B_CRYPTO_WIDGET_2, {
    locale: params.locale,
  })

  return (
    <StyledCryptoWidget2Section>
      <div className='container'>
        <div className='leftSide'>
          <StyledTypographyIBMH5 className='crypto2SubTitle'>
            {data.screen5SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='crypto2Title'>
            {data.screen5Title}
          </StyledTypographyUrbanistH2>
          <Device device={TABLET}>
            <AnimatedVideoOnScroll
              className='crypto2WidgetTablet'
              width={500}
              height={500}
              timeRepeat={5000}
              urlFirstVideo='/video/b2b_cart2crypto.webm'
            />
          </Device>
          <Device device={MOBILE}>
            <Animated2GifOnView
              className='crypto2WidgetTablet'
              width={500}
              height={500}
              timeRepeat={5000}
              stillSecondVideo='/video/b2b_cart2crypto.webp'
              urlSecondVideo='/video/b2b_cart2crypto.gif'
              timeSecondAnimate={5000}
            />
          </Device>
          <Device device={MOBILE}>
            <StyledTypographyUrbanistH5 className='crypto2Description crypto2Description-mobile'>
              {data.screen5Description}
            </StyledTypographyUrbanistH5>
          </Device>

          <Device device={TABLET_OR_DESKTOP}>
            <StyledTypographyUrbanistBody className='crypto2Description crypto2Description-desktop'>
              {data.screen5Description}
            </StyledTypographyUrbanistBody>
          </Device>

          <ul className='crypto2Grid'>
            {data.screen5Features?.map(
              ({ description, id, image: { url }, title }) => (
                <li
                  className='crypto2GridItem'
                  data-slug='comming soon'
                  key={id}
                >
                  <Image className='check' src={Check} alt='check' />
                  <Image
                    className='icon'
                    src={url}
                    alt={title}
                    width={48}
                    height={48}
                  />
                  <StyledTypographyUrbanistH5
                    component='h3'
                    className='crypto2GridItemTitle'
                  >
                    {title}
                  </StyledTypographyUrbanistH5>
                  <StyledTypographyUrbanistBody className='crypto2GridItemDescription'>
                    {description}
                  </StyledTypographyUrbanistBody>
                </li>
              )
            )}
          </ul>

          <div className='crypto2Footer'>
            <StyledTypographyUrbanistH5 className='crypto2FooterTitle'>
              {data.lead5Screen}
            </StyledTypographyUrbanistH5>
            <div className='crypto2FooterButtons'>
              <ButtonGhostCrypto className='crypto2FooterButtonCrypto'>
                {data.buttonLead2A}
              </ButtonGhostCrypto>
              <ButtonGhostCrypto className='crypto2FooterButtonCryptoCalendar'>
                <Image
                  src={data.buttonLead2B?.url}
                  alt={data.lead5Screen}
                  width={18}
                  height={18}
                />
              </ButtonGhostCrypto>
            </div>

            <CryptoWidget2ModalWithButton data={data} params={params} />
          </div>
        </div>
        <div className='rightSide'>
          <Device device={DESKTOP}>
            <AnimatedVideoOnScroll
              className='graphic'
              width={500}
              height={500}
              timeRepeat={5000}
              urlFirstVideo='/video/b2b_cart2crypto.webm'
            />
          </Device>
        </div>
      </div>
    </StyledCryptoWidget2Section>
  )
}
