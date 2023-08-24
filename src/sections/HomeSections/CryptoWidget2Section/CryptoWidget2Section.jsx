import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
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
import { useTextByBreakPoint } from '@/hooks/useTextByBreakPoint'
import { keysForLocale } from '@/config/keysForLocale'

export default function CryptoWidget2Section() {
  const [open, setOpen] = useState(false)

  const t = useTranslations('home_page.crypto_card2_section')
  const tListTitle = useTranslations(
    'home_page.crypto_card2_section.list_item_title'
  )
  const tListDescription = useTranslations(
    'home_page.crypto_card2_section.list_item_description'
  )
  const tListDescriptionMobile = useTranslations(
    'home_page.crypto_card2_section.list_item_description_mobile'
  )

  const text1 = useTextByBreakPoint({
    contentDesktop: tListDescription(keysForLocale.keys4[0]),
    contentLaptop: tListDescription(keysForLocale.keys4[0]),
    contentTablet: tListDescriptionMobile(keysForLocale.keys4[0]),
    contentMobile: '',
  })
  const text2 = useTextByBreakPoint({
    contentDesktop: tListDescription(keysForLocale.keys4[1]),
    contentLaptop: tListDescription(keysForLocale.keys4[1]),
    contentTablet: tListDescriptionMobile(keysForLocale.keys4[1]),
    contentMobile: '',
  })
  const text3 = useTextByBreakPoint({
    contentDesktop: tListDescription(keysForLocale.keys4[2]),
    contentLaptop: tListDescription(keysForLocale.keys4[2]),
    contentTablet: tListDescriptionMobile(keysForLocale.keys4[2]),
    contentMobile: '',
  })
  const text4 = useTextByBreakPoint({
    contentDesktop: tListDescription(keysForLocale.keys4[3]),
    contentLaptop: tListDescription(keysForLocale.keys4[3]),
    contentTablet: tListDescriptionMobile(keysForLocale.keys4[3]),
    contentMobile: '',
  })

  const gridContent = [
    {
      id: 0,
      icon: <Icon1 className='icon' />,
      title: tListTitle(keysForLocale.keys4[0]),
      description: text1,
    },
    {
      id: 1,
      icon: <Icon2 className='icon' />,
      title: tListTitle(keysForLocale.keys4[1]),
      description: text2,
    },
    {
      id: 2,
      icon: <Icon3 className='icon' />,
      title: tListTitle(keysForLocale.keys4[2]),
      description: text3,
    },
    {
      id: 3,
      icon: <Icon4 className='icon' />,
      title: tListTitle(keysForLocale.keys4[3]),
      description: text4,
    },
  ]

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
            {t('sub_title')}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='crypto2Title'>
            {t('title')}
          </StyledTypographyUrbanistH2>

          <Image
            className='crypto2WidgetTablet'
            src={WidgetTablet}
            alt='widget'
          />

          <StyledTypographyUrbanistBody className='crypto2Description crypto2Description-desktop'>
            {t('paragraph')}
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH5 className='crypto2Description crypto2Description-mobile'>
            {t('paragraph_mobile')}
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
              {t('alert_title')}
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
              {t('alert_button_text')}
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
