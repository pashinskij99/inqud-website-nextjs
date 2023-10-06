import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

// import { toast } from 'react-toastify'
import { useWindowSize } from '@uidotdev/usehooks'
import dynamic from 'next/dynamic'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCryptoWidget2Section } from './CryptoWidget2Section.styled'
import Check from '@/assets/icons/check-dark.svg'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { ButtonGhostCrypto } from '@/components/UI/Button'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { responseBreakPoint } from '@/utils/response'
import { AnimatedVideoOnScroll } from '@/components/AnimatedVideo'
import { Animated2GifOnView } from '@/components/AnimatedVideo/AnimatedVideo'
import { getPageData } from '@/lib/datocms'
import { HOME_B2B_CRYPTO_WIDGET_2 } from '@/lib/datocmsQuery'

const DynamicModalSubmitEmailWrapper = dynamic(
  () =>
    import('./components/ModalSubmitEmailWrapper').then((mod) => mod.default),
  {
    ssr: false,
  }
)

export default function CryptoWidget2Section() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({})

  // const {
  //   dataPage: { homePage: data },
  // } = useContext(PageContext)
  const { params } = useContext(PageContext)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const size = useWindowSize()

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: HOME_B2B_CRYPTO_WIDGET_2,
      })

      setData(pageData.homePage)
    }

    getData()
  }, [])

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
          {size.width &&
          size.width <= responseBreakPoint.tablet &&
          size.width > responseBreakPoint.mobile ? (
            <AnimatedVideoOnScroll
              className='crypto2WidgetTablet'
              width={500}
              height={500}
              timeRepeat={5000}
              urlFirstVideo='/video/b2b_cart2crypto.webm'
            />
          ) : null}
          {size.width && size.width <= responseBreakPoint.mobile ? (
            <Animated2GifOnView
              className='crypto2WidgetTablet'
              width={500}
              height={500}
              timeRepeat={5000}
              stillSecondVideo='/video/b2b_cart2crypto.webp'
              urlSecondVideo='/video/b2b_cart2crypto.gif'
              timeSecondAnimate={5000}
            />
          ) : null}

          {size.width && size.width <= responseBreakPoint.mobile ? (
            <StyledTypographyUrbanistH5 className='crypto2Description crypto2Description-mobile'>
              {data.screen5Description}
            </StyledTypographyUrbanistH5>
          ) : null}

          {size.width && size.width > responseBreakPoint.mobile ? (
            <StyledTypographyUrbanistBody className='crypto2Description crypto2Description-desktop'>
              {data.screen5Description}
            </StyledTypographyUrbanistBody>
          ) : null}

          <ul className='crypto2Grid'>
            {data.screen5Features?.map(
              ({ description, id, image: { url }, title }) => (
                <li
                  className='crypto2GridItem'
                  data-slug='comming soon'
                  key={id}
                >
                  <Check className='check' />
                  <Image src={url} alt={title} width={48} height={48} />
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

            <StyledButtonSecondaryLight
              onClick={handleOpen}
              className='crypto2FooterApplyButton'
            >
              {data.buttonLead2C}
            </StyledButtonSecondaryLight>

            {open ? (
              <DynamicModalSubmitEmailWrapper
                open={open}
                handleClose={handleClose}
              />
            ) : null}
          </div>
        </div>
        <div className='rightSide'>
          {size.width && size.width >= responseBreakPoint.desktop ? (
            <AnimatedVideoOnScroll
              className='graphic'
              width={500}
              height={500}
              timeRepeat={5000}
              urlFirstVideo='/video/b2b_cart2crypto.webm'
            />
          ) : null}
        </div>
      </div>
    </StyledCryptoWidget2Section>
  )
}
