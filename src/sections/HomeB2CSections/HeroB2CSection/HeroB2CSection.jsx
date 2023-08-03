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
import Picture from '@/assets/images/homeB2C/hero/Picture.svg'

function SubTitle({ className, children }) {
  return <StyledSubTitle className={className}>{children}</StyledSubTitle>
}

export default function HeroB2CSection() {
  return (
    <StyledHeroB2CSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <div className='text-wrapper'>
            <SubTitle className='sub-title'>For personal use</SubTitle>
            <StyledTypographyUrbanistH1 className='title'>
              Simplify your personal finance
            </StyledTypographyUrbanistH1>
            <StyledTypographyUrbanistH5 className='description'>
              Seamlessly integrate crypto and local currencies into{' '}
              <br className='br-desktop' /> your daily routine using regular
              credit cards.
            </StyledTypographyUrbanistH5>

            <ButtonGetStarted className='get-started-btn'>
              Get started
            </ButtonGetStarted>
          </div>

          <PaymentList />
        </div>
        <div className='right-side'>
          <Picture />
        </div>
      </div>
    </StyledHeroB2CSectionWrapper>
  )
}
