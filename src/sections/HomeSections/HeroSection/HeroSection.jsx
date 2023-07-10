import Link from 'next/link'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { StyledHeroSectionWrapper } from './HeroSection.styled'
import Visa from '@/assets/icons/visa.svg'
import Sepa from '@/assets/icons/sepa.svg'
import MasterCard from '@/assets/icons/master-card.svg'
import Pix from '@/assets/icons/pix.svg'
import Upi from '@/assets/icons/upi.svg'
import Imp5 from '@/assets/icons/imp5.svg'
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
  { id: 0, icon: <Visa /> },
  { id: 1, icon: <Sepa /> },
  { id: 2, icon: <MasterCard /> },
  { id: 3, icon: <Pix /> },
  { id: 4, icon: <Upi /> },
  { id: 5, icon: <Imp5 /> },
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
            Bespoke diversity payments
          </StyledTypographyUrbanistDisplay>
          <StyledTypographyUrbanistH5 className='paragraph'>
            Inqud is the trusted partner and provider of tailored <br /> crypto & fiat
            payment solutions.
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
              Payment methods we work with
            </StyledTypographyUrbanistBody>

            <ul className='payment-list'>
              {methodsPayment.map(({ icon, id }) => (
                <li key={id}>{icon}</li>
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
