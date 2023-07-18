import Link from 'next/link'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { StyledHeroSectionWrapper } from './HeroSection.styled'
import Val1 from '@/assets/images/hero/val1.svg'
import Val2 from '@/assets/images/hero/val2.svg'
import Val3 from '@/assets/images/hero/val3.svg'
import Val4 from '@/assets/images/hero/val4.svg'
import Val5 from '@/assets/images/hero/val5.svg'
import HeroGraphic from '@/assets/icons/hero-graphic.svg'
import HeroGraphicMobile from '@/assets/icons/hero-graphic-mobile.svg'
import Check from '@/assets/icons/check-green-background.svg'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistDisplay,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'

const features = [
  { id: 0, text: 'Payments without refunds' },
  { id: 1, text: '24/7 expert & caring support' },
  { id: 2, text: 'Tailored payment options' },
  { id: 3, text: 'No hidden fees' },
]

const methodsPayment = [
  { id: 0, text: 'BTC', icon: <Val1 /> },
  { id: 1, text: 'ETH', icon: <Val2 /> },
  { id: 2, text: 'EUR', icon: <Val3 /> },
  { id: 3, text: 'USD', icon: <Val4 /> },
  { id: 4, text: 'USDT', icon: <Val5 /> },
]

export default function HeroSection() {
  return (
    <StyledHeroSectionWrapper>
      <div className='container'>
        <div className='leftSide'>
          <StyledTypographyIBMH5 className='subTitle'>
            For business
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistDisplay className='title'>
            Bespoke diversity crypto payments
          </StyledTypographyUrbanistDisplay>
          <StyledTypographyUrbanistH5 className='paragraph'>
            Inqud is the trusted partner and provider of tailored <br /> crypto
            & fiat payment solutions.
          </StyledTypographyUrbanistH5>

          <ul className='features'>
            {features.map(({ id, text }) => (
              <li key={id}>
                <Check />
                <StyledTypographyUrbanistBody key={id}>
                  {text}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                Get started
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='ghostButton'>
              Contact sales
            </StyledButtonGhost>
          </div>

          <div className='payment'>
            <StyledTypographyUrbanistBody className='payment-descr'>
              Supported currencies
            </StyledTypographyUrbanistBody>

            <ul className='payment-list'>
              {methodsPayment.map(({ icon, text, id }) => (
                <li key={id}>
                  {icon}
                  <StyledTypographyUrbanistH5>
                    {text}
                  </StyledTypographyUrbanistH5>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='rightSide'>
          <HeroGraphic className='graphic' />
          <HeroGraphicMobile className='graphic-mobile' />
        </div>
      </div>
    </StyledHeroSectionWrapper>
  )
}
