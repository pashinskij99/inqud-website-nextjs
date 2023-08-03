'use client'

import { useState } from 'react'
import Image from 'next/image'
// import { useMediaQuery } from 'react-responsive'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledProductLineB2CSectionWrapper,
  StyledTabContentWrapper,
} from './ProductLineB2CSection.styled'
import { TabsComponent } from '@/components/TabsComponent'
import Icon1 from '@/assets/images/homeB2C/product-line/icon1.svg'
import Icon2 from '@/assets/images/homeB2C/product-line/icon2.svg'
import Icon3 from '@/assets/images/homeB2C/product-line/icon3.svg'
import Icon4 from '@/assets/images/homeB2C/product-line/icon4.svg'
import Icon5 from '@/assets/images/homeB2C/product-line/icon5.svg'
import Icon6 from '@/assets/images/homeB2C/product-line/icon6.svg'
import Icon7 from '@/assets/images/homeB2C/product-line/icon7.svg'
import picture1 from '@/assets/images/homeB2C/product-line/Picture1.png'
import picture1Tablet from '@/assets/images/homeB2C/product-line/Picture1-tablet.png'
import picture1Mobile from '@/assets/images/homeB2C/product-line/Picture1-mobile.png'
import picture2 from '@/assets/images/homeB2C/product-line/Picture2.png'
import picture3 from '@/assets/images/homeB2C/product-line/Picture3.png'
import picture3Tablet from '@/assets/images/homeB2C/product-line/Picture3-tablet.png'
import picture3Mobile from '@/assets/images/homeB2C/product-line/Picture3-mobile.png'
import { ButtonGetStarted } from '@/components/UI/Button'

const tabs = [
  {
    id: 'personal',
    text: 'Personal wallet',
    textMobie: 'Personal',
  },
  {
    id: 'exchange',
    text: 'Exchange',
    textMobie: 'Exchange',
  },
  {
    id: 'transfer',
    text: 'Transfer',
    textMobie: 'Transfer',
  },
]

const tabsMobile = [
  {
    id: 'personal',
    text: 'Personal',
  },
  {
    id: 'exchange',
    text: 'Exchange',
  },
  {
    id: 'transfer',
    text: 'Transfer',
  },
]

const gridPersonal = [
  {
    id: 0,
    icon: <Icon1 />,
    title: 'BTC, ETH, and other crypto',
    description:
      'Keep all your favorite cryptocurrencies in your wallet, ready to use anytime.',
  },
  {
    id: 1,
    icon: <Icon2 />,
    title: 'Multi-currency: crypto & fiat',
    description:
      'Enjoy the flexibility of managing various crypto and fiat currencies in one place.',
  },
  {
    id: 2,
    icon: <Icon3 />,
    title: 'Secure Storage',
    description:
      'Keep your digital assets safe, and protected by advanced encryption technology.',
  },
  {
    id: 3,
    icon: <Icon4 />,
    title: 'Real-Time Updates',
    description:
      'Stay informed with instant balance updates, transaction history, and notifications.',
  },
]

const gridExchange = [
  {
    id: 0,
    icon: <Icon5 />,
    title: 'Transparent pricing',
    description:
      'Stay informed with instant balance updates, transaction history, and notifications.',
  },
  {
    id: 1,
    icon: <Icon6 />,
    title: 'Swap in a snap',
    description: 'Instant currency conversion at your fingertips.',
  },
  {
    id: 2,
    icon: <Icon3 />,
    title: 'Robust security',
    description:
      'Your funds and personal information are protected by top-notch security measures.',
  },
  {
    id: 3,
    icon: <Icon7 />,
    title: 'Expert support',
    description:
      'Get dedicated assistance from our skilled team for all your inquiries and concerns.',
  },
]

const gridTransfer = [
  {
    id: 0,
    icon: <Icon5 />,
    title: 'Zero commissions',
    description: 'Experience cost-free transactions within the Inqud platform.',
  },
  {
    id: 1,
    icon: <Icon6 />,
    title: 'Send in a heartbeat',
    description: 'Benefit from swift fund transfers with lightning speed.',
  },
]

const content = {
  personal: {
    title: 'Personal wallet',
    description:
      'Experience hassle-free digital asset management with our secure personal wallet. Store, manage, and transact with popular cryptocurrencies, local currencies in just few clicks.',
    grid: gridPersonal,
    image: picture1.src,
    imageTablet: picture1Tablet.src,
    imageMobile: picture1Mobile.src,
  },
  exchange: {
    title: 'Exchange',
    description:
      'Experience seamless conversion between Bitcoin, other cryptocurrencies, and fiat currencies. Effortlessly trade and exchange digital and traditional currencies with our intuitive platform.',
    grid: gridExchange,
    image: picture2.src,
    imageTablet: picture1Tablet.src,
    imageMobile: picture1Mobile.src,
  },
  transfer: {
    title: 'Transfer',
    description:
      'Enjoy fee-free transfers of fiat and cryptocurrency within the Inqud community. Instant, secure, and hassle-free transactions for registered users.',
    grid: gridTransfer,
    image: picture3.src,
    imageTablet: picture3Tablet.src,
    imageMobile: picture3Mobile.src,
  },
}

export default function ProductLineB2CSection() {
  const [active, setActive] = useState(tabs[0].id)
  const handleClick = (id) => {
    setActive(id)
  }

  return (
    <StyledProductLineB2CSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          Our product line
        </StyledTypographyUrbanistH2>

        <Image
          className='image-tablet-or-mobile tablet'
          src={content[active].imageTablet}
          width={688}
          height={322}
          alt='Personal wallet'
        />

        <Image
          className='image-tablet-or-mobile mobile'
          src={content[active].imageMobile}
          width={343}
          height={273.392}
          alt='Personal wallet'
        />

        <TabsComponent
          className='tabs-wrapper desktopOrTablet'
          active={active}
          handleClick={handleClick}
          tabs={tabs}
        />

        <TabsComponent
          className='tabs-wrapper mobile'
          active={active}
          handleClick={handleClick}
          tabs={tabsMobile}
        />

        <TabContent
          title={content[active].title}
          description={content[active].description}
          grid={content[active].grid}
          picture={content[active].image}
        />
      </div>
    </StyledProductLineB2CSectionWrapper>
  )
}

// eslint-disable-next-line no-shadow
function TabContent({ title, description, grid, picture }) {
  return (
    <StyledTabContentWrapper>
      <div className='content-wrapper'>
        <div className='left-side'>
          <StyledTypographyUrbanistH3 className='content-title'>
            {title}
          </StyledTypographyUrbanistH3>

          <StyledTypographyUrbanistBody className='content-description'>
            {description}
          </StyledTypographyUrbanistBody>

          <div className='content-grid'>
            {/* eslint-disable-next-line no-shadow */}
            {grid.map(({ description, icon, id, title }) => (
              <li className='content-grid-item' key={id}>
                {icon}
                <StyledTypographyUrbanistH5 className='content-grid-item-title'>
                  {title}
                </StyledTypographyUrbanistH5>
                <StyledTypographyUrbanistBody className='content-grid-item-description'>
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </div>

          <ButtonGetStarted className='content-grid-item-button'>
            Get started
          </ButtonGetStarted>
        </div>
        <div className='right-side'>
          <Image src={picture} width={680} height={542} alt='Personal wallet' />
        </div>
      </div>
    </StyledTabContentWrapper>
  )
}
