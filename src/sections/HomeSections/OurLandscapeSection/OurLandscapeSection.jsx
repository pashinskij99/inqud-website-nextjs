'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { Tab, Tabs } from '@mui/material'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledCoverageWrapper,
  StyledIndustriesWrapper,
  StyledOurLandscapeSection,
} from './OurLandscapeSection.styled'
import Icon1 from '@/assets/images/our-landscape/1.svg'
import Icon2 from '@/assets/images/our-landscape/2.svg'
import Icon3 from '@/assets/images/our-landscape/3.svg'

import Coverage1 from '@/assets/images/our-landscape/coverage1.svg'
import Coverage2 from '@/assets/images/our-landscape/coverage2.svg'
import Coverage3 from '@/assets/images/our-landscape/coverage3.svg'
// import Coverage4 from '@/assets/images/our-landscape/coverage4.svg'
import Map from '@/assets/images/our-landscape/map.svg'

const tabs = [
  {
    id: 0,
    text: 'Industries',
  },
  {
    id: 1,
    text: 'Coverage',
  },
]

const accordionData = [
  {
    id: 0,
    title: 'High-risk',
    icon: <Icon1 />,
    columnColor: '255, 163, 163',
    defaultExpanded: '',
    items: [
      { id: 0, title: 'Igaming', description: '' },
      { id: 1, title: 'Betting', description: '' },
      { id: 2, title: 'Adult', description: '' },
      { id: 3, title: 'Crypto', description: '' },
      { id: 4, title: 'NFT', description: '' },
      { id: 5, title: 'Farmacy', description: '' },
    ],
  },
  {
    id: 1,
    title: 'Middle risk',
    icon: <Icon2 />,
    columnColor: '255, 196, 81',
    defaultExpanded: 'Gaming',
    items: [
      { id: 0, title: 'Fintech', description: '' },
      { id: 1, title: 'Medicine', description: '' },
      { id: 2, title: 'E-commerce', description: '' },
      { id: 3, title: 'Gaming', description: '' },
    ],
  },
  {
    id: 2,
    title: 'LoW risk',
    icon: <Icon3 />,
    columnColor: '129, 158, 176',
    defaultExpanded: 'Blogging',
    items: [
      { id: 0, title: 'Travel', description: '' },
      { id: 1, title: 'Horeca', description: '' },
      { id: 2, title: 'Education', description: '' },
      { id: 3, title: 'Blogging', description: '' },
    ],
  },
]

export default function OurLandscapeSection() {
  const [active, setActive] = useState(0)
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleClick = (id) => {
    setActive(id)
  }

  const getContent = () => {
    switch (active) {
      case 0:
        return <IndustriesTab />
      case 1:
        return <CoverageTab />

      default:
        return <IndustriesTab />
    }
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <StyledOurLandscapeSection>
      <div className='container'>
        <StyledTypographyUrbanistH1 className='ourLandscapeTitle'>
          Our landscape
        </StyledTypographyUrbanistH1>
        <div className='ourLandscapeTabs'>
          <Tabs value={value} onChange={handleChange}>
            {tabs.map(({ id, text }) => (
              <Tab
                label={text}
                className={clsx(
                  'ourLandscapeTabsButton ourLandscapeTabsButtonText',
                  {
                    ['active']: active === id,
                  }
                )}
                onClick={() => handleClick(id)}
                key={id}
                {...a11yProps(0)}
              />
            ))}
          </Tabs>
        </div>

        {getContent()}
      </div>
    </StyledOurLandscapeSection>
  )
}

const coverageList = [
  {
    id: 0,
    name: 'Worldwide',
    description: 'crypto coverage',
    icon: <Coverage1 className='coverage1' />,
  },
  {
    id: 1,
    name: 'European',
    description: 'license coverage',
    icon: <Coverage2 className='coverage2' />,
  },
  {
    id: 2,
    name: 'Focus 2023',
    description: 'Latin America, Africa, Asia',
    icon: <Coverage3 className='coverage3' />,
  },
  // {
  //   id: 3,
  //   name: 'Our Offices',
  //   description: 'Istanbul, Kyiv, Bogota, & Lisbon',
  //   icon: <Coverage4 className='coverage4' />,
  // },
]

function CoverageTab() {
  return (
    <StyledCoverageWrapper>
      <div className='headerWrapper'>
        <StyledTypographyUrbanistH5 className='ourLandscapeDescription'>
          With our clients, we grow and advance every day,
          <br className='br-desktop' /> pushing boundaries
          <br className='br-tablet' /> and achieving new heights.
        </StyledTypographyUrbanistH5>
        <ul className='list desktop'>
          {coverageList.map(({ id, description, icon, name }) => (
            <li key={id}>
              <div className='coverageWrapper'>{icon}</div>
              <div className='descriptionWrapper'>
                <StyledTypographyUrbanistBody className='name'>
                  {name}
                </StyledTypographyUrbanistBody>
                <StyledTypographyUrbanistBody className='description'>
                  {description}
                </StyledTypographyUrbanistBody>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className='coverageWrapper'>
        <Map className='map' />
      </div>

      <ul className='list mobile'>
        {coverageList.map(({ id, description, icon, name }) => (
          <li key={id}>
            <div className='coverageWrapper'>{icon}</div>
            <div className='descriptionWrapper'>
              <StyledTypographyUrbanistBody className='name'>
                {name}
              </StyledTypographyUrbanistBody>
              <StyledTypographyUrbanistBody className='description'>
                {description}
              </StyledTypographyUrbanistBody>
            </div>
          </li>
        ))}
      </ul>
    </StyledCoverageWrapper>
  )
}

function IndustriesTab() {
  return (
    <StyledIndustriesWrapper>
      <StyledTypographyUrbanistH5 className='ourLandscapeDescription'>
        Always on the hustle, we&apos;re leveling up
        <br className='br-desktop' /> and broadening{' '}
        <br className='br-tablet' /> our reach, nonstop.
      </StyledTypographyUrbanistH5>

      <div className='ourLandscapeRisk'>
        {accordionData.map(
          ({ icon, id, defaultExpanded, items, title, columnColor }) => (
            <Accordion
              key={id}
              idColumn={id}
              icon={icon}
              items={items}
              title={title}
              defaultExpanded={defaultExpanded}
              columnColor={columnColor}
            />
          )
        )}
      </div>

      {/* mobile */}

      <Swiper
        className='ourLandscapeSwiper'
        slidesPerView={1.1}
        centeredSlides
        spaceBetween={10}
        initialSlide='1'
        height={500}
        scrollbar={{
          dragSize: 200 / 3,
          // dragClass: 'listRequirementsSwiperDrag',
          horizontalClass: 'listRequirementsSwiperScollbar',
          hide: true,
        }}
        modules={[Scrollbar]}
      >
        {accordionData.map(
          ({ icon, id, items, title, columnColor, defaultExpanded }) => (
            <SwiperSlide className='listRequirementsSwiperItems' key={id}>
              <Accordion
                key={id}
                idColumn={id}
                icon={icon}
                items={items}
                title={title}
                defaultExpanded={defaultExpanded}
                columnColor={columnColor}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </StyledIndustriesWrapper>
  )
}

const stepsOpacity = [
  [
    '0.20000000298023224',
    '0.4000000059604645',
    '0.6000000238418579',
    '0.800000011920929',
    '0.8999999761581421',
    '1',
  ],
  ['0.20000000298023224', '0.4000000059604645', '0.6000000238418579', '1'],
  ['0.20000000298023224', '0.4000000059604645', '0.6000000238418579', '1'],
]

function Accordion({
  idColumn,
  icon,
  items,
  title,
  columnColor,
  defaultExpanded,
}) {
  // eslint-disable-next-line no-unused-vars
  const [expanded, setExpanded] = useState(defaultExpanded || '')

  // eslint-disable-next-line no-unused-vars
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className='ourLandscapeAccordion'>
      <div className='ourLandscapeAccordionTitle'>
        {icon}
        <StyledTypographyIBMH5>{title}</StyledTypographyIBMH5>
      </div>
      {/* eslint-disable-next-line no-unused-vars */}
      {items.map(({ id, description, title: accordionTitle }) => (
        <div
          style={{
            backgroundColor: `rgba(${columnColor}, ${
              id === items.length - 1
                ? stepsOpacity[idColumn][0]
                : stepsOpacity[idColumn][stepsOpacity[idColumn].length - 1 - id]
            })`,
            flex: id === items.length - 1 ? 1 : 0,
            alignItems: id === items.length - 1 ? 'start' : 'start',
          }}
          className='accordion-prob'
          key={id}
        >
          <StyledTypographyUrbanistBody>
            {accordionTitle}
          </StyledTypographyUrbanistBody>
          <div />
        </div>
        // <OurLandscapeSectionAccordion
        //   key={id}
        //   id={id}
        //   description={description}
        //   expanded={expanded}
        //   handleChange={handleChange}
        //   title={accordionTitle}
        //   columnColor={columnColor}
        //   lastchild={items.length - 1 === id}
        // />
      ))}
    </div>
  )
}

/* <button
    className={clsx('ourLandscapeTabsButton', {
      ['active']: active === id,
    })}
    onClick={() => handleClick(id)}
    key={id}
  >
    <StyledTypographyUrbanistBody className='ourLandscapeTabsButtonText'>
      {text}
    </StyledTypographyUrbanistBody>
  </button> */
