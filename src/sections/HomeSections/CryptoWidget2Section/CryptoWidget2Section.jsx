import Image from 'next/image'
import { useState } from 'react'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCryptoWidget2Section } from './CryptoWidget2Section.styled'
import Widget from '@/assets/images/crypto-widget/widget2.svg'
import WidgetTablet from '@/assets/images/crypto-widget/widget2-tablet.png'
import Icon1 from '@/assets/images/crypto-widget/list-item-icon1-widget2.svg'
import Icon2 from '@/assets/images/crypto-widget/list-item-icon2-widget2.svg'
import Icon3 from '@/assets/images/crypto-widget/list-item-icon3-widget2.svg'
import Icon4 from '@/assets/images/crypto-widget/list-item-icon4-widget2.svg'
import Calendar from '@/assets/icons/calendar.svg'
import Check from '@/assets/icons/check-dark.svg'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { ModalSubmitEmail } from '@/components/Modal'
import { ButtonGhostCrypto } from '@/components/UI/Button'

const gridContent = [
  {
    id: 0,
    icon: <Icon1 className='icon' />,
    title: 'Zero chargebacks',
    description:
      'Say goodbye to chargebacks with our secure and reliable fiat onramp and off-ramp solutions.',
  },
  {
    id: 1,
    icon: <Icon2 className='icon' />,
    title: 'Boost sales',
    description:
      "Not missing out on customers in all your markets,regardless of your audience's geography.",
  },
  {
    id: 2,
    icon: <Icon3 className='icon' />,
    title: 'Enhance customer satisfaction',
    description:
      'Give your customers the ability to pay easily and conveniently using their preferred payment methods.',
  },
  {
    id: 3,
    icon: <Icon4 className='icon' />,
    title: 'Trustworthy payment partner',
    description:
      'Maximally involved in addressing your business needs and fostering its growth.',
  },
]

export default function CryptoWidget2Section() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <StyledCryptoWidget2Section>
      <div className='container'>
        <div className='leftSide'>
          <StyledTypographyIBMH5 className='crypto2SubTitle'>
            on-ramp
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='crypto2Title'>
            Card 2 Crypto
          </StyledTypographyUrbanistH2>

          <Image
            className='crypto2WidgetTablet'
            src={WidgetTablet}
            alt='widget'
          />

          <StyledTypographyUrbanistBody className='crypto2Description crypto2Description-desktop'>
            Widget that seamlessly accepts local fiat payments for your products
            & services: Effortlessly elevate payments - our widget securely
            transitions between fiat and crypto, enhancing your financial
            flexibility.
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH5 className='crypto2Description crypto2Description-mobile'>
            Widget that seamlessly accepts local fiat payments for your products
            & services.
          </StyledTypographyUrbanistH5>

          <ul className='crypto2Grid'>
            {gridContent.map(({ description, id, icon, title }) => (
              <li className='crypto2GridItem' data-slug='comming soon' key={id}>
                <Check className='check' />
                {icon}
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

            <StyledButtonSecondaryLight
              onClick={handleOpen}
              className='crypto2FooterApplyButton'
            >
              Apply now
            </StyledButtonSecondaryLight>

            <ModalSubmitEmail open={open} handleClose={handleClose} />
          </div>
        </div>
        <div className='rightSide'>
          <Widget />
        </div>
      </div>
    </StyledCryptoWidget2Section>
  )
}
