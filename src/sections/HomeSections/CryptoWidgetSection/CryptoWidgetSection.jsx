import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import Image from 'next/image'
import { useWindowSize } from '@uidotdev/usehooks'
import { StyledCryptoWidgetSection } from './CryptoWidgetSection.styled'
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
import { PageContext } from '@/contexts/PageContext/PageContext'
import { AnimatedVideoOnScroll } from '@/components/AnimatedVideo'
import { responseBreakPoint } from '@/utils/response'
import { Animated2GifOnView } from '@/components/AnimatedVideo/AnimatedVideo'
// import { Animated2GifOnView } from '@/components/AnimatedVideo/AnimatedVideo'
import gif from '@/assets/gif/b2b_crypto_widget_mobile.gif'

export default function CryptoWidgetSection() {
  const t = useTranslations('home_page_crypto_widget_section')

  const {
    dataPage: { homePage: data },
  } = useContext(PageContext)

  const size = useWindowSize()

  return (
    <StyledCryptoWidgetSection>
      <div className='container'>
        <div className='leftSide'>
          <StyledTypographyIBMH5 className='cryptoSubTitle cryptoSubTitle-desktop'>
            {data.screen3SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyIBMH5 className='cryptoSubTitle cryptoSubTitle-mobile'>
            {data.screen3SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='cryptoTitle'>
            {data.screen3Title}
          </StyledTypographyUrbanistH2>

          <div className='cryptoWidgetMobileWrapper'>
            {size.width > responseBreakPoint.mobile &&
            size.width < responseBreakPoint.desktop ? (
              <AnimatedVideoOnScroll
                className='cryptoWidgetDesktop'
                height={600}
                timeRepeat={5000}
                urlFirstVideo='/video/b2b_crypto_video_web.webm'
                width={500}
              />
            ) : null}

            {size.width <= responseBreakPoint.mobile ? (
              <Animated2GifOnView
                className='cryptoWidgetMobileSmaller'
                height={600}
                timeRepeat={5000}
                urlSecondVideo={gif.src}
                timeSecondAnimate={5000}
                width={500}
              />
            ) : null}
          </div>

          <StyledTypographyUrbanistBody className='cryptoDescription'>
            {data.screen3Description}
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH5 className='cryptoDescriptionMobile'>
            {data.screen3Description}
          </StyledTypographyUrbanistH5>

          <ul className='cryptoGrid'>
            {data.feature.map(({ description, id, image: { url }, title }) => (
              <li
                className='cryptoGridItem'
                data-slug={t('comming_soon')}
                key={id}
              >
                <Check className='check' />
                <Loading className='loading' />
                <div className='icon-wrapper'>
                  <Image src={url} alt={title} width={24} height={24} />
                </div>
                <StyledTypographyUrbanistH5 className='cryptoGridItemTitle'>
                  {title}
                </StyledTypographyUrbanistH5>
                <StyledTypographyUrbanistBody className='cryptoGridItemDescription'>
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='cryptoButtonWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStartedLight className='cryptoButtonGetStarted'>
                {data.buttonScreen3GetStarted}
              </ButtonGetStartedLight>
            </Link>
            <Link href='/crypto-widget'>
              <StyledButtonGhost className='cryptoButtonGhost'>
                {data.buttonScreen3LearnMore}
              </StyledButtonGhost>
            </Link>
          </div>
        </div>

        <div className='rightSide'>
          <AnimatedVideoOnScroll
            className='graphic'
            height={600}
            timeRepeat={5000}
            urlFirstVideo='/video/b2b_crypto_video_web.webm'
            width={500}
          />
          {/* <Image
            src={data.screen3Image.url}
            width={500}
            height={600}
            alt={data.screen3Title}
          /> */}
        </div>
      </div>
    </StyledCryptoWidgetSection>
  )
}
