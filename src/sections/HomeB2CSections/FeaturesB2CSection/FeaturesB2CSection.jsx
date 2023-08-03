import { StyledFeaturesB2CSectionWrapper } from './FeaturesB2CSection.styled'
import Icon1 from '@/assets/images/homeB2C/features/icon1.svg'
import Icon2 from '@/assets/images/homeB2C/features/icon2.svg'
import Icon3 from '@/assets/images/homeB2C/features/icon3.svg'
import Icon4 from '@/assets/images/homeB2C/features/icon4.svg'
import Icon5 from '@/assets/images/homeB2C/features/icon5.svg'
import Icon6 from '@/assets/images/homeB2C/features/icon6.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'

const grid = [
  {
    id: 0,
    icon: <Icon1 />,
    title: 'Lightning-fast transactions',
    description: 'Say goodbye to snail-paced payments process.',
  },
  {
    id: 1,
    icon: <Icon2 />,
    title: 'Full control of your money',
    description:
      'Our solutions designed for ultimate flexibility and independence.',
  },
  {
    id: 2,
    icon: <Icon3 />,
    title: 'Support that never sleeps',
    description: "The top-notch support that's always by your side, 24/7.",
  },
  {
    id: 3,
    icon: <Icon4 />,
    title: 'Location-specific currencies',
    description:
      'Use your credit card to purchase local currencies: IDR, KZT, TRY, and others.',
  },
  {
    id: 4,
    icon: <Icon5 />,
    title: 'Unlock crypto with card',
    description:
      'Buy cryptocurrency effortlessly using your credit card in a few simple steps.',
  },
  {
    id: 5,
    icon: <Icon6 />,
    title: 'Hottest crypto currencies',
    description:
      'Embrace the most popular digital assets: BTC,  ETH, TRX, USDT, and more.',
  },
]

export default function FeaturesB2CSection() {
  return (
    <StyledFeaturesB2CSectionWrapper>
      <div className='container'>
        <ul className='features-grid'>
          {grid.map(({ description, icon, id, title }) => (
            <li className='features-grid-item' key={id}>
              {icon}
              <StyledTypographyUrbanistH4 className='title'>
                {title}
              </StyledTypographyUrbanistH4>
              <StyledTypographyUrbanistBody className='description'>
                {description}
              </StyledTypographyUrbanistBody>
            </li>
          ))}
        </ul>
      </div>
    </StyledFeaturesB2CSectionWrapper>
  )
}
