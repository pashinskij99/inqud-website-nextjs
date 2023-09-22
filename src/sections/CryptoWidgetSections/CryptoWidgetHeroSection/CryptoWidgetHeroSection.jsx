import Link from 'next/link'
import { useContext, useState } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import { useWindowSize } from '@uidotdev/usehooks'
import dynamic from 'next/dynamic'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledCryptoWidgetHeroSectionWrapper } from './CryptoWidgetHeroSection.styled'
import { StyledTypographyUrbanistH1 } from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { AnimatedOneVideo } from '@/components/AnimatedVideo'
import { Animated2Gif } from '@/components/AnimatedVideo/AnimatedVideo'
import { responseBreakPoint } from '@/utils/response'

const DynamicModalCalendaly = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupModal),
  {
    ssr: false,
  }
)

export default function CryptoWidgetHeroSection() {
  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  const size = useWindowSize()
  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
  }

  return (
    <StyledCryptoWidgetHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <SubTitle className='subTitle'>{data.subTitle}</SubTitle>
          <StyledTypographyUrbanistH1 className='title'>
            {data.title}
          </StyledTypographyUrbanistH1>
          <div className='description'>
            <StructuredText data={data.description} />
          </div>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                {data.buttonScreen1A}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost
              onClick={handleOpenCalendlyModal}
              className='ghostButton'
            >
              {data.buttonScreen1B}
            </StyledButtonGhost>
            <DynamicModalCalendaly
              onModalClose={handleCloseCalendlyModal}
              open={calendlyModal}
              rootElement={document.getElementById('calendly-model-wrapper')}
              url='https://calendly.com/inqud_team/call-with-inqud'
            />
          </div>

          <PaymentList />
        </div>

        <div className='right-side'>
          {size.width && size.width > responseBreakPoint.mobile ? (
            <AnimatedOneVideo
              className='graphic'
              height={650.44}
              timeRepeat={10000}
              urlFirstVideo='/video/400.mp4'
              width={633.97}
            />
          ) : null}
          {size.width && size.width <= responseBreakPoint.mobile ? (
            <Animated2Gif
              className='graphic'
              height={357}
              timeRepeat={5000}
              timeFirstAnimate={16000}
              urlFirstVideo='/video/crypto-page-mobile.gif'
              urlSecondVideo='/video/crypto-page-mobile.gif'
              timeSecondAnimate={16000}
              width={500}
            />
          ) : null}
        </div>
      </div>
    </StyledCryptoWidgetHeroSectionWrapper>
  )
}
