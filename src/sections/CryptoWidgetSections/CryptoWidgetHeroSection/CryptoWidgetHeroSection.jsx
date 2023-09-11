import Link from 'next/link'
import { useContext } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledCryptoWidgetHeroSectionWrapper } from './CryptoWidgetHeroSection.styled'
import { StyledTypographyUrbanistH1 } from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { AnimatedOneVideo } from '@/components/AnimatedVideo'

export default function CryptoWidgetHeroSection() {
  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

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

            <StyledButtonGhost className='ghostButton'>
              {data.buttonScreen1B}
            </StyledButtonGhost>
          </div>

          <PaymentList />
        </div>

        <div className='right-side'>
          <AnimatedOneVideo
            className='graphic'
            height={650.44}
            timeRepeat={10000}
            urlFirstVideo='/video/400.mp4'
            width={633.97}
          />
        </div>
      </div>
    </StyledCryptoWidgetHeroSectionWrapper>
  )
}
