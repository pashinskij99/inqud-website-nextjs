import { StyledCryptoWidgetSection } from './CryptoWidgetSection.styled'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStartedLight } from '@/components/UI/Button/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import Widget from '@/assets/images/crypto-widget/widget.svg'
import WidgetMobile from '@/assets/images/crypto-widget/widget-mobile.svg'
import WidgetMobileSmaller from '@/assets/images/crypto-widget/widget-mob.svg'
import IconListItem1 from '@/assets/images/crypto-widget/list-item-icon1.svg'
import IconListItem2 from '@/assets/images/crypto-widget/list-item-icon2.svg'
import IconListItem3 from '@/assets/images/crypto-widget/list-item-icon3.svg'
import IconListItem4 from '@/assets/images/crypto-widget/list-item-icon4.svg'
import Check from '@/assets/icons/check-green-background.svg'
import Loading from '@/assets/icons/loading.svg'

const gridContent = [
  {
    id: 0,
    icon: <IconListItem1 className='icon1' />,
    title: 'BTC, ETH & other crypto',
    description:
      'Accept crypto seamlessly, crafting an effortless and user-friendly payment journey for your customers.',
  },
  {
    id: 1,
    icon: <IconListItem2 className='icon2' />,
    title: 'Fee flexibility',
    description: (
      <>
        Decide who covers the transaction <br /> fee - either the business
        itself or the customer.
      </>
    ),
  },
  {
    id: 2,
    icon: <IconListItem3 className='icon3' />,
    title: 'Auto-conversion',
    description: (
      <>
        Mitigate market volatility risks with <br /> our automatic conversion
        system.
      </>
    ),
  },
  {
    id: 3,
    icon: <IconListItem4 className='icon4' />,
    title: 'Widget customization',
    description: (
      <>
        Our SDK lets you shape your widget <br /> to align with your brand.
      </>
    ),
  },
]

export default function CryptoWidgetSection() {
  return (
    <StyledCryptoWidgetSection>
      <div className='container'>
        <div className='leftSide'>
          <StyledTypographyIBMH5 className='cryptoSubTitle cryptoSubTitle-desktop'>
            {' // '} Tailored for developers
          </StyledTypographyIBMH5>
          <StyledTypographyIBMH5 className='cryptoSubTitle cryptoSubTitle-mobile'>
            {' // '} Tailored for devs
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH1 className='cryptoTitle'>
            Crypto widget
          </StyledTypographyUrbanistH1>

          <div className='cryptoWidgetMobileWrapper'>
            <WidgetMobile className='cryptoWidgetMobile' />
            <WidgetMobileSmaller className='cryptoWidgetMobileSmaller' />
          </div>

          <StyledTypographyUrbanistH5 className='cryptoDescription'>
            Get on board with the future of payments — our <br /> embeddable
            crypto widget for your website makes it <br /> simple to accept
            cryptocurrency payments including <br /> Bitcoin, Ethereum and other
            crypto.
          </StyledTypographyUrbanistH5>

          <StyledTypographyUrbanistH5 className='cryptoDescriptionMobile'>
            Embrace crypto payments on your website with our seamless widget.
          </StyledTypographyUrbanistH5>

          <ul className='cryptoGrid'>
            {gridContent.map(({ description, id, icon, title }) => (
              <li className='cryptoGridItem' data-slug='comming soon' key={id}>
                <Check className='check' />
                <Loading className='loading' />
                <div className='icon-wrapper'>{icon}</div>
                <StyledTypographyUrbanistH5 className='cryptoGridItemTitle'>
                  {title}
                </StyledTypographyUrbanistH5>
                <StyledTypographyUrbanistBody className='cryptoGridItemDescription'>
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='cryptoButtonWrapper'>
            <ButtonGetStartedLight className='cryptoButtonGetStarted'>
              Get started
            </ButtonGetStartedLight>
            <StyledButtonGhost className='cryptoButtonGhost'>
              Learn more
            </StyledButtonGhost>
          </div>
        </div>

        <div className='rightSide'>
          <Widget />
        </div>
      </div>
    </StyledCryptoWidgetSection>
  )
}
