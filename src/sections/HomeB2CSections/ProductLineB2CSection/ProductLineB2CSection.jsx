'use client'

import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
import { ButtonGetStarted } from '@/components/UI/Button'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function ProductLineB2CSection() {
  const {
    dataPage: { homeB2c: data },
  } = useContext(PageContext)

  const [active, setActive] = useState(0)
  const handleClick = (id) => {
    setActive(id)
  }

  return (
    <StyledProductLineB2CSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
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
        <TabsComponent
          className='tabs-wrapper'
          active={active}
          handleClick={handleClick}
          tabs={data.screen3Feature.map(({ title, id }) => ({
            text: title,
            id,
          }))}
        />

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
