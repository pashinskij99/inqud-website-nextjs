import { useContext } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledHeroB2CSectionWrapper,
  StyledSubTitle,
} from './HeroB2CSection.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { AnimatedFirstScreenVideo } from '@/components/AnimatedVideo'

export function SubTitle({ className, children }) {
  return <StyledSubTitle className={className}>{children}</StyledSubTitle>
}

export default function HeroB2CSection() {

  const {
    dataPage: { homeB2c: data },
  } = useContext(PageContext)

  return (
    <StyledHeroB2CSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <div className='text-wrapper'>
            <SubTitle className='sub-title'>{data.subTitle}</SubTitle>
            <StyledTypographyUrbanistH1 className='title'>
              {data.title}
            </StyledTypographyUrbanistH1>
            <StyledTypographyUrbanistH5 className='description'>
              <StructuredText data={data.description} />
            </StyledTypographyUrbanistH5>

            <ButtonGetStarted className='get-started-btn'>
              {data.buttonScreen1}
            </ButtonGetStarted>
          </div>

          <PaymentList />
        </div>
        <div className='right-side'>
          <AnimatedFirstScreenVideo
            className='graphic'
            height={594}
            timeRepeat={5000}
            urlFirstVideo='/video/b2c_video1.webm'
            urlSecondVideo='/video/b2c_video2.webm'
            width={595}
          />
        </div>
      </div>
    </StyledHeroB2CSectionWrapper>
  )
}
