import React from 'react'
import { StyledCryptoWidgetFlexibilityWrapper } from './CryptoWidgetFlexibility.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import Icon1 from '../../../assets/images/crypto-widget/page/flexibility/icon1.svg'
import Icon2 from '../../../assets/images/crypto-widget/page/flexibility/icon2.svg'
import Icon3 from '../../../assets/images/crypto-widget/page/flexibility/icon3.svg'

const grid = [
  {
    id: 0,
    icon: <Icon1 />,
    title: 'Zero chargebacks',
    titleOnlyTablet: 'Lightning-fast transactions',
    description:
      'Enjoy hassle-free transactions with no chargebacks. Our system guarantees finality in every transaction, freeing your business from potential disputes and losses.',
  },
  {
    id: 1,
    icon: <Icon2 />,
    title: 'No hidden fees',
    titleOnlyTablet: 'Full control of your money',
    description:
      'Embrace a fully transparent payment solution with our crypto widget. No hidden costs or surprise fees - just straightforward pricing for efficient financial planning.',
  },
  {
    id: 2,
    icon: <Icon3 />,
    title: 'Fee flexibility',
    titleOnlyTablet: 'Support that never sleeps',
    description:
      'Exercise your freedom to choose the fee setup that grants you the authority to designate whether the transaction fee is to be shouldered by your business or borne by the customer.',
  },
]

export default function CryptoWidgetFlexibility() {
  return (
    <StyledCryptoWidgetFlexibilityWrapper>
      <div className='container'>
        <ul className='grid'>
          {grid.map(({ description, icon, id, title }) => (
            <li className='grid-item' key={id}>
              {icon}
              <StyledTypographyUrbanistH4 className='grid-item-title grid-item-title-1'>
                {title}
              </StyledTypographyUrbanistH4>

              <StyledTypographyUrbanistBody className='grid-item-description grid-item-description-1'>
                {description}
              </StyledTypographyUrbanistBody>
            </li>
          ))}
        </ul>
      </div>
    </StyledCryptoWidgetFlexibilityWrapper>
  )
}
