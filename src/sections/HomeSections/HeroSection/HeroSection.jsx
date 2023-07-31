import Link from 'next/link'
import { Fragment } from 'react'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import {
  StyledHeroSectionWrapper,
  StyledMobileGridWrapper,
  StyledPaymentListWrapper,
} from './HeroSection.styled'
import Val1 from '@/assets/images/hero/val1.svg'
import Val2 from '@/assets/images/hero/val2.svg'
import Val3 from '@/assets/images/hero/val3.svg'
import Val4 from '@/assets/images/hero/val4.svg'
import Val5 from '@/assets/images/hero/val5.svg'
import Val6 from '@/assets/images/hero/val6.svg'
import Val7 from '@/assets/images/hero/val7.svg'
import Val8 from '@/assets/images/hero/val8.svg'
import Val9 from '@/assets/images/hero/val9.svg'
import Grid1 from '@/assets/images/hero/grid1.svg'
import Grid2 from '@/assets/images/hero/grid2.svg'
import Grid3 from '@/assets/images/hero/grid3.svg'
import Grid4 from '@/assets/images/hero/grid4.svg'
import Grid5 from '@/assets/images/hero/grid5.svg'
import Grid6 from '@/assets/images/hero/grid6.svg'
import HeroGraphic from '@/assets/images/hero/illustration.svg'
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
  {
    id: 1,
    text: (
      <>
        24/7 <span>expert &</span> caring support
      </>
    ),
  },
  { id: 2, text: 'Tailored payment options' },
  { id: 3, text: 'No hidden fees' },
]

const methodsPayment = [
  { id: 0, text: 'BTC', icon: <Val1 /> },
  { id: 1, text: 'ETH', icon: <Val2 /> },
  { id: 2, text: 'EUR', icon: <Val3 /> },
  { id: 3, text: 'USD', icon: <Val4 /> },
  { id: 4, text: 'USDT', icon: <Val5 /> },
  { id: 5, text: 'IDR', icon: <Val6 /> },
  { id: 6, text: 'KZT', icon: <Val7 /> },
  { id: 7, text: 'TRX', icon: <Val8 /> },
  { id: 8, text: 'TRY', icon: <Val9 /> },
]

export function PaymentList() {
  return (
    <StyledPaymentListWrapper className='payment'>
      <StyledTypographyUrbanistBody className='payment-descr'>
        Supported currencies
      </StyledTypographyUrbanistBody>

      <ul className='payment-list'>
        {methodsPayment.map(({ icon, text, id }) => (
          <li key={id}>
            <div className='icon-wrapper'>{icon}</div>
            <StyledTypographyUrbanistH5>{text}</StyledTypographyUrbanistH5>
          </li>
        ))}
      </ul>
    </StyledPaymentListWrapper>
  )
}

export default function HeroSection() {
  return (
    <StyledHeroSectionWrapper>
      <div className='container'>
        <div className='leftSide'>
          <MobileGrid />
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

          <PaymentList />
        </div>

        <div className='rightSide'>
          <HeroGraphic className='graphic' />
        </div>
      </div>
    </StyledHeroSectionWrapper>
  )
}

const gridItems = [
  { id: 0, icon: <Grid1 /> },
  { id: 1, icon: <Grid2 /> },
  { id: 2, icon: <Grid3 /> },
  { id: 3, icon: <Grid4 /> },
  { id: 4, icon: <Grid5 /> },
  { id: 5, icon: <Grid6 /> },
]

function MobileGrid() {
  return (
    <StyledMobileGridWrapper>
      {gridItems.map(({ id, icon }) => (
        <Fragment key={id}>{icon}</Fragment>
      ))}
    </StyledMobileGridWrapper>
  )
}
