import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { StyledAPIFlexibilityWrapper } from './APIFlexibility.styled'
import Icon1 from '@/assets/images/api/flexibility/icon1.svg'
import Icon2 from '@/assets/images/api/flexibility/icon2.svg'
import Icon3 from '@/assets/images/api/flexibility/icon3.svg'
import Icon4 from '@/assets/images/api/flexibility/icon4.svg'
import Icon5 from '@/assets/images/api/flexibility/icon5.svg'
import Icon6 from '@/assets/images/api/flexibility/icon6.svg'

const grid = [
  {
    id: 0,
    icon: <Icon1 />,
    title: 'Wide payment options',
    titleOnlyTablet: 'Lightning-fast transactions',
    description:
      'Choose from credit cards, digital wallets, and cryptocurrencies to adapt to customer preferences and stay ahead of evolving payment trends.',
    descriptionOnlyTablet: (
      <>
        Choose from credit cards, <br /> digital wallets, and <br />{' '}
        cryptocurrencies to adapt to <br /> customer preferences and stay <br />{' '}
        ahead of evolving payment <br /> trends.
      </>
    ),
  },
  {
    id: 1,
    icon: <Icon2 />,
    title: 'Future-proof scalability',
    titleOnlyTablet: 'Full control of your money',
    description:
      'Effortlessly handle increased transaction volumes and stay ahead of the curve with the latest security standards and payment technologies',
    descriptionOnlyTablet:
      'Effortlessly handle increased transaction volumes and stay ahead of the curve with the latest security standards and payment technologies',
  },
  {
    id: 2,
    icon: <Icon3 />,
    title: 'Cut Expenses',
    titleOnlyTablet: 'Support that never sleeps',
    description:
      'Optimize your payment operations, automate processes, and eliminate manual tasks for streamlined efficiency and significant cost savings.',
    descriptionOnlyTablet: (
      <>
        Optimize your payment <br /> operations, automate processes, <br /> and
        eliminate manual tasks for <br /> streamlined efficiency and <br />{' '}
        significant cost savings.
      </>
    ),
  },
  {
    id: 3,
    icon: <Icon4 />,
    title: 'Enhanced Security',
    titleOnlyTablet: 'Location-specific currencies',
    description:
      'Your data and transactions are protected with advanced security measures like encryption and fraud detection.',
    descriptionOnlyTablet: (
      <>
        Your data and transactions are <br /> protected with advanced <br />{' '}
        security measures like encryption <br /> and fraud detection.
      </>
    ),
  },
  {
    id: 4,
    icon: <Icon5 />,
    title: 'Personalize Checkout',
    titleOnlyTablet: 'Unlock crypto with card',

    description:
      "Customize the payment process to reflect your brand's identity, creating a seamless and cohesive experience for customers.",
    descriptionOnlyTablet: (
      <>
        Customize the payment process <br /> to reflect your brand&apos;s
        identity, <br />
        creating a seamless and <br /> cohesive experience for <br /> customers.
      </>
    ),
  },
  {
    id: 5,
    icon: <Icon6 />,
    title: 'Boost Payment Efficiency',
    titleOnlyTablet: 'Hottest crypto currencies',
    description:
      'Monitor and analyze payment data, track transaction details, and gain valuable insights to optimize your payment strategy.',
    descriptionOnlyTablet: (
      <>
        Monitor and analyze payment <br /> data, track transaction details,{' '}
        <br /> and gain valuable insights to <br /> optimize your payment
        strategy.
      </>
    ),
  },
]

export default function APIFlexibility() {
  return (
    <StyledAPIFlexibilityWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          API flexibility
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistBody className='description'>
          Enjoy a wide array of options to tailor the integration to your
          specific needs and enhance the payment experience for your customers.
        </StyledTypographyUrbanistBody>

        <ul className='features-grid'>
          {grid.map(
            ({
              description,
              descriptionOnlyTablet,
              icon,
              id,
              title,
              titleOnlyTablet,
            }) => (
              <li className='features-grid-item' key={id}>
                {icon}
                <StyledTypographyUrbanistH4 className='features-grid-item-title features-grid-item-title-1'>
                  {title}
                </StyledTypographyUrbanistH4>
                <StyledTypographyUrbanistH4 className='features-grid-item-title features-grid-item-title-2'>
                  {titleOnlyTablet}
                </StyledTypographyUrbanistH4>
                <StyledTypographyUrbanistBody className='features-grid-item-description features-grid-item-description-1'>
                  {description}
                </StyledTypographyUrbanistBody>
                <StyledTypographyUrbanistBody className='features-grid-item-description features-grid-item-description-2'>
                  {descriptionOnlyTablet}
                </StyledTypographyUrbanistBody>
              </li>
            )
          )}
        </ul>
      </div>
    </StyledAPIFlexibilityWrapper>
  )
}
