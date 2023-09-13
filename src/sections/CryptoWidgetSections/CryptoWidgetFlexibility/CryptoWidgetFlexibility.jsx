import React, { useContext } from 'react'
// import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { StyledCryptoWidgetFlexibilityWrapper } from './CryptoWidgetFlexibility.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
// import Icon1 from '../../../assets/images/crypto-widget/page/flexibility/icon1.svg'
// import Icon2 from '../../../assets/images/crypto-widget/page/flexibility/icon2.svg'
// import Icon3 from '../../../assets/images/crypto-widget/page/flexibility/icon3.svg'
// import { keysForLocale } from '@/config/keysForLocale'

import { PageContext } from '@/contexts/PageContext/PageContext'

export default function CryptoWidgetFlexibility() {
  // const tTitles = useTranslations(
  //   'crypto_centre_page.features_section.items_title'
  // )
  // const tDescriptions = useTranslations(
  //   'crypto_centre_page.features_section.items_description'
  // )

  // const grid = [
  //   {
  //     id: 0,
  //     icon: <Icon1 />,
  //     title: tTitles(keysForLocale.keys3[0]),
  //     titleOnlyTablet: tTitles(keysForLocale.keys3[0]),
  //     description: tDescriptions(keysForLocale.keys3[0]),
  //   },
  //   {
  //     id: 1,
  //     icon: <Icon2 />,
  //     title: tTitles(keysForLocale.keys3[1]),
  //     titleOnlyTablet: tTitles(keysForLocale.keys3[1]),
  //     description: tDescriptions(keysForLocale.keys3[1]),
  //   },
  //   {
  //     id: 2,
  //     icon: <Icon3 />,
  //     title: tTitles(keysForLocale.keys3[2]),
  //     titleOnlyTablet: tTitles(keysForLocale.keys3[2]),
  //     description: tDescriptions(keysForLocale.keys3[2]),
  //   },
  // ]

  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  return (
    <StyledCryptoWidgetFlexibilityWrapper>
      <div className='container'>
        <ul className='grid'>
          {data.screen2Content.map(({ description, image, id, title }) => (
            <li className='grid-item' key={id}>
              <Image src={image.url} alt={title} width={64} height={64} />

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
