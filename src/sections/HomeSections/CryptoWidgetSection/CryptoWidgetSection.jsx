import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { StyledCryptoWidgetSection } from './CryptoWidgetSection.styled'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStartedLight } from '@/components/UI/Button/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import Widget from '@/assets/images/crypto-widget/widget.svg'
import WidgetMobileSmaller from '@/assets/images/crypto-widget/widget-mob.svg'
import IconListItem1 from '@/assets/images/crypto-widget/list-item-icon1.svg'
import IconListItem2 from '@/assets/images/crypto-widget/list-item-icon2.svg'
import IconListItem3 from '@/assets/images/crypto-widget/list-item-icon3.svg'
import IconListItem4 from '@/assets/images/crypto-widget/list-item-icon4.svg'
import Check from '@/assets/icons/check-green-background.svg'
import Loading from '@/assets/icons/loading.svg'
import { keysForLocale } from '@/config/keysForLocale'

export default function CryptoWidgetSection() {
  const t = useTranslations('home_page.crypto_widget_section')
  const t2 = useTranslations('home_page.hero_section')
  const tList = useTranslations(
    'home_page.crypto_widget_section.list_item_title'
  )
  const tList2 = useTranslations(
    'home_page.crypto_widget_section.list_item_description'
  )

  const gridContent = [
    {
      id: 0,
      icon: <IconListItem1 className='icon1' />,
      title: tList(keysForLocale.keys4[0]),
      description: tList2(keysForLocale.keys4[0]),
    },
    {
      id: 1,
      icon: <IconListItem2 className='icon2' />,
      title: tList(keysForLocale.keys4[1]),
      description: tList2(keysForLocale.keys4[1]),
    },
    {
      id: 2,
      icon: <IconListItem3 className='icon3' />,
      title: tList(keysForLocale.keys4[2]),
      description: tList2(keysForLocale.keys4[2]),
    },
    {
      id: 3,
      icon: <IconListItem4 className='icon4' />,
      title: tList(keysForLocale.keys4[3]),
      description: tList2(keysForLocale.keys4[3]),
    },
  ]

  return (
    <StyledCryptoWidgetSection>
      <div className='container'>
        <div className='leftSide'>
          <StyledTypographyIBMH5 className='cryptoSubTitle cryptoSubTitle-desktop'>
            {' // '} {t('sub_title')}
          </StyledTypographyIBMH5>
          <StyledTypographyIBMH5 className='cryptoSubTitle cryptoSubTitle-mobile'>
            {' // '} {t('sub_title_mobile')}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='cryptoTitle'>
            {t('title')}
          </StyledTypographyUrbanistH2>

          <div className='cryptoWidgetMobileWrapper'>
            <Widget className='cryptoWidgetDesktop' />
            <WidgetMobileSmaller className='cryptoWidgetMobileSmaller' />
          </div>

          <StyledTypographyUrbanistBody className='cryptoDescription'>
            {t('paragraph')}
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH5 className='cryptoDescriptionMobile'>
            {t('paragraph_mobile')}
          </StyledTypographyUrbanistH5>

          <ul className='cryptoGrid'>
            {gridContent.map(({ description, id, icon, title }) => (
              <li
                className='cryptoGridItem'
                data-slug={t('comming_soon')}
                key={id}
              >
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
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStartedLight className='cryptoButtonGetStarted'>
                {t2('button_text_get_started')}
              </ButtonGetStartedLight>
            </Link>
            {/* <Link target='_blank' href='https://cabinet.inqud.com/#/signup'> */}
            <StyledButtonGhost className='cryptoButtonGhost'>
              {t('button_text_learn_more')}
            </StyledButtonGhost>
            {/* </Link> */}
          </div>
        </div>

        <div className='rightSide'>
          <Widget />
        </div>
      </div>
    </StyledCryptoWidgetSection>
  )
}
