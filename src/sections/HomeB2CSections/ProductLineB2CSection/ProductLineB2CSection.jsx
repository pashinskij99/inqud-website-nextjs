'use client'

import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { useTranslations } from 'next-intl'
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
// import Icon1 from '@/assets/images/homeB2C/product-line/icon1.svg'
// import Icon2 from '@/assets/images/homeB2C/product-line/icon2.svg'
// import Icon3 from '@/assets/images/homeB2C/product-line/icon3.svg'
// import Icon4 from '@/assets/images/homeB2C/product-line/icon4.svg'
// import Icon5 from '@/assets/images/homeB2C/product-line/icon5.svg'
// import Icon6 from '@/assets/images/homeB2C/product-line/icon6.svg'
// import Icon7 from '@/assets/images/homeB2C/product-line/icon7.svg'
// import Icon8 from '@/assets/images/homeB2C/product-line/icon8.svg'
// import Icon9 from '@/assets/images/homeB2C/product-line/icon9.svg'
// import picture1 from '@/assets/images/homeB2C/product-line/Picture1.png'
// import picture1Tablet from '@/assets/images/homeB2C/product-line/Picture1-tablet.png'
// import picture1Mobile from '@/assets/images/homeB2C/product-line/Picture1-mobile.png'
// import picture2 from '@/assets/images/homeB2C/product-line/Picture2.png'
// import picture3 from '@/assets/images/homeB2C/product-line/Picture3.png'
// import picture3Tablet from '@/assets/images/homeB2C/product-line/Picture3-tablet.png'
// import picture3Mobile from '@/assets/images/homeB2C/product-line/Picture3-mobile.png'
import { ButtonGetStarted } from '@/components/UI/Button'
// import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function ProductLineB2CSection() {
  // const t = useTranslations('home_b2c_page.our_product_section')

  // const tTab1 = useTranslations('home_b2c_page.our_product_section.tabs1')
  // const tTab1TitleList = useTranslations(
  //   'home_b2c_page.our_product_section.tabs1.tabs_items_title'
  // )
  // const tTab1DescriptionList = useTranslations(
  //   'home_b2c_page.our_product_section.tabs1.tabs_items_description'
  // )

  // const tTab2 = useTranslations('home_b2c_page.our_product_section.tabs2')
  // const tTab2TitleList = useTranslations(
  //   'home_b2c_page.our_product_section.tabs2.tabs_items_title'
  // )
  // const tTab2DescriptionList = useTranslations(
  //   'home_b2c_page.our_product_section.tabs2.tabs_items_description'
  // )

  // const tTab3 = useTranslations('home_b2c_page.our_product_section.tabs3')
  // const tTab3TitleList = useTranslations(
  //   'home_b2c_page.our_product_section.tabs3.tabs_items_title'
  // )
  // const tTab3DescriptionList = useTranslations(
  //   'home_b2c_page.our_product_section.tabs3.tabs_items_description'
  // )

  const {
    dataPage: { homeB2c: data },
  } = useContext(PageContext)

  // const tabs = [
  //   {
  //     id: 'personal',
  //     text: tTab1('tabs_name'),
  //     textMobie: tTab1('tabs_name'),
  //   },
  //   {
  //     id: 'exchange',
  //     text: tTab2('tabs_name'),
  //     textMobie: tTab2('tabs_name'),
  //   },
  //   {
  //     id: 'transfer',
  //     text: tTab3('tabs_name'),
  //     textMobie: tTab3('tabs_name'),
  //   },
  // ]

  // const tabsMobile = [
  //   {
  //     id: 'personal',
  //     text: tTab1('tabs_name'),
  //   },
  //   {
  //     id: 'exchange',
  //     text: tTab2('tabs_name'),
  //   },
  //   {
  //     id: 'transfer',
  //     text: tTab3('tabs_name'),
  //   },
  // ]

  // const gridPersonal = [
  //   {
  //     id: 0,
  //     icon: <Icon1 />,
  //     title: tTab1TitleList(keysForLocale.keys4[0]),
  //     description: tTab1DescriptionList(keysForLocale.keys4[0]),
  //   },
  //   {
  //     id: 1,
  //     icon: <Icon2 />,
  //     title: tTab1TitleList(keysForLocale.keys4[1]),
  //     description: tTab1DescriptionList(keysForLocale.keys4[1]),
  //   },
  //   {
  //     id: 2,
  //     icon: <Icon3 />,
  //     title: tTab1TitleList(keysForLocale.keys4[2]),
  //     description: tTab1DescriptionList(keysForLocale.keys4[2]),
  //   },
  //   {
  //     id: 3,
  //     icon: <Icon4 />,
  //     title: tTab1TitleList(keysForLocale.keys4[3]),
  //     description: tTab1DescriptionList(keysForLocale.keys4[3]),
  //   },
  // ]

  // const gridExchange = [
  //   {
  //     id: 0,
  //     icon: <Icon5 />,
  //     title: tTab2TitleList(keysForLocale.keys4[0]),
  //     description: tTab2DescriptionList(keysForLocale.keys4[0]),
  //   },
  //   {
  //     id: 1,
  //     icon: <Icon6 />,
  //     title: tTab2TitleList(keysForLocale.keys4[1]),
  //     description: tTab2DescriptionList(keysForLocale.keys4[1]),
  //   },
  //   {
  //     id: 2,
  //     icon: <Icon3 />,
  //     title: tTab2TitleList(keysForLocale.keys4[2]),
  //     description: tTab2DescriptionList(keysForLocale.keys4[2]),
  //   },
  //   {
  //     id: 3,
  //     icon: <Icon7 />,
  //     title: tTab2TitleList(keysForLocale.keys4[3]),
  //     description: tTab2DescriptionList(keysForLocale.keys4[3]),
  //   },
  // ]

  // const gridTransfer = [
  //   {
  //     id: 0,
  //     icon: <Icon8 />,
  //     title: tTab3TitleList(keysForLocale.keys4[0]),
  //     description: tTab3DescriptionList(keysForLocale.keys4[0]),
  //   },
  //   {
  //     id: 1,
  //     icon: <Icon9 />,
  //     title: tTab3TitleList(keysForLocale.keys4[1]),
  //     description: tTab3DescriptionList(keysForLocale.keys4[1]),
  //   },
  // ]

  // const content = {
  //   personal: {
  //     title: tTab1('tabs_title'),
  //     description: tTab1('tabs_description'),
  //     grid: gridPersonal,
  //     image: picture1.src,
  //     imageTablet: picture1Tablet.src,
  //     imageMobile: picture1Mobile.src,
  //   },
  //   exchange: {
  //     title: tTab2('tabs_title'),
  //     description: tTab2('tabs_description'),
  //     grid: gridExchange,
  //     image: picture2.src,
  //     imageTablet: picture1Tablet.src,
  //     imageMobile: picture1Mobile.src,
  //   },
  //   transfer: {
  //     title: tTab3('tabs_title'),
  //     description: tTab3('tabs_description'),
  //     grid: gridTransfer,
  //     image: picture3.src,
  //     imageTablet: picture3Tablet.src,
  //     imageMobile: picture3Mobile.src,
  //   },
  // }

  const [active, setActive] = useState(0)
  const handleClick = (id) => {
    setActive(id)
  }

  return (
    <StyledProductLineB2CSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {/* {t('title')} */}
          {data.screen3Title}
        </StyledTypographyUrbanistH2>
        <div className='cart-wrapper'>
          <Image
            className='image-tablet-or-mobile tablet'
            src={data.screen3Feature[active].image.url}
            width={315}
            height={363}
            alt='Personal wallet'
          />
        </div>

        {/* <Image
          className='image-tablet-or-mobile mobile'
          src={content[active].imageMobile}
          width={343}
          height={273.392}
          alt='Personal wallet'
        /> */}

        <TabsComponent
          className='tabs-wrapper'
          active={active}
          handleClick={handleClick}
          tabs={data.screen3Feature.map(({ title, id }) => ({
            text: title,
            id,
          }))}
        />

        {/* <TabsComponent
          className='tabs-wrapper'
          active={active}
          handleClick={handleClick}
          tabs={tabsMobile}
        /> */}

        <TabContent
          title={data.screen3Feature[active].title}
          description={data.screen3Feature[active].description}
          grid={data.screen3Feature[active].feature}
          picture={data.screen3Feature[active].image.url}
          button={data.screen3Feature[active].button}
        />
      </div>
    </StyledProductLineB2CSectionWrapper>
  )
}

// eslint-disable-next-line no-shadow
function TabContent({ title, description, grid, picture, button }) {
  // const t = useTranslations('home_b2c_page.our_product_section')

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
            {grid.map(({ description, image: { url }, id, title }) => (
              <li className='content-grid-item' key={id}>
                <Image src={url} alt='' width={48} height={48} />
                <StyledTypographyUrbanistH5 className='content-grid-item-title'>
                  {title}
                </StyledTypographyUrbanistH5>
                <StyledTypographyUrbanistBody className='content-grid-item-description'>
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </div>

          <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
            <ButtonGetStarted className='content-grid-item-button'>
              {button}
            </ButtonGetStarted>
          </Link>
        </div>
        <div className='right-side'>
          <div className='image-wrapper'>
            <Image
              src={picture}
              width={315}
              height={363}
              alt='Personal wallet'
            />
          </div>
        </div>
      </div>
    </StyledTabContentWrapper>
  )
}
