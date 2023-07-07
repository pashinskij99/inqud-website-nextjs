import Image from 'next/image'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCryptoWidget2Section } from './CryptoWidget2Section.styled'
import Widget from '@/assets/images/crypto-widget/widget2.svg'
import WidgetTablet from '@/assets/images/crypto-widget/widget2-tablet.png'
import Calendar from '@/assets/icons/calendar.svg'
import Check from '@/assets/icons/check-dark.svg'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { ButtonGhostCrypto } from '@/components/UI/Button'

const gridContent = [
  {
    id: 0,
    title: 'Zero chargebacks',
    description:
      'Say goodbye to chargebacks with our secure and reliable fiat onramp and off-ramp solutions.',
  },
  {
    id: 1,
    title: 'Boost sales',
    description:
      "Not missing out on customers in all your markets,regardless of your audience's geography.",
  },
  {
    id: 2,
    title: 'Enhance customer satisfaction',
    description:
      'Give your customers the ability to pay easily and conveniently using their preferred payment methods.',
  },
  {
    id: 3,
    title: 'Trustworthy payment partner',
    description:
      'Maximally involved in addressing your business needs and fostering its growth.',
  },
]

export default function CryptoWidget2Section() {
  return (
    <StyledCryptoWidget2Section>
      <div className='container'>
        <div className='leftSide'>
          <StyledTypographyIBMH5 className='crypto2SubTitle'>
            on-ramp
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH1 className='crypto2Title'>
            Card 2 Crypto
          </StyledTypographyUrbanistH1>

          <Image
            className='crypto2WidgetTablet'
            src={WidgetTablet}
            alt='widget'
          />

          <StyledTypographyUrbanistH5 className='crypto2Description'>
            Widget that seamlessly accepts local fiat payments for your products
            & services: Effortlessly elevate payments - our widget securely
            transitions between fiat and crypto, enhancing your financial
            flexibility.
          </StyledTypographyUrbanistH5>

          <ul className='crypto2Grid'>
            {gridContent.map(({ description, id, title }) => (
              <li className='crypto2GridItem' data-slug='comming soon' key={id}>
                <Check />
                <StyledTypographyUrbanistH5 className='crypto2GridItemTitle'>
                  {title}
                </StyledTypographyUrbanistH5>
                <StyledTypographyUrbanistBody className='crypto2GridItemDescription'>
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='crypto2Footer'>
            <StyledTypographyUrbanistH5 className='crypto2FooterTitle'>
              Be the first to use <br /> it upon launch
            </StyledTypographyUrbanistH5>
            <div className='crypto2FooterButtons'>
              <ButtonGhostCrypto className='crypto2FooterButtonCrypto'>
                Q4 2023
              </ButtonGhostCrypto>
              <ButtonGhostCrypto className='crypto2FooterButtonCryptoCalendar'>
                <Calendar />
              </ButtonGhostCrypto>
            </div>

            <StyledButtonSecondaryLight className='crypto2FooterApplyButton'>
              Apply now
            </StyledButtonSecondaryLight>
          </div>
        </div>

        <div className='rightSide'>
          <Widget />
        </div>
      </div>
    </StyledCryptoWidget2Section>
  )
}
