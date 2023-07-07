import clsx from 'clsx'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledOurLandscapeSection } from './OurLandscapeSection.styled'
import OurLandscapeSectionAccordion from './OurLandscapeSectionAccordion'
import Icon1 from '@/assets/images/our-landscape/1.svg'
import Icon2 from '@/assets/images/our-landscape/2.svg'
import Icon3 from '@/assets/images/our-landscape/3.svg'

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

  const handleClick = (id) => setActive(id)

  return (
    <StyledOurLandscapeSection>
      <div className='container'>
        <StyledTypographyUrbanistH1 className='ourLandscapeTitle'>
          Our landscape
        </StyledTypographyUrbanistH1>
        <div className='ourLandscapeTabs'>
          {tabs.map(({ id, text }) => (
            <button
              className={clsx('ourLandscapeTabsButton', {
                ['active']: active === id,
              })}
              onClick={() => handleClick(id)}
              key={id}
            >
              <StyledTypographyUrbanistBody className='ourLandscapeTabsButtonText'>
                {text}
              </StyledTypographyUrbanistBody>
            </button>
          ))}
        </div>
        <StyledTypographyUrbanistH5 className='ourLandscapeDescription'>
          Always on the hustle, we&apos;re leveling up <br /> and broadening our
          reach, nonstop.
        </StyledTypographyUrbanistH5>

        <div className='ourLandscapeRisk'>
          {accordionData.map(({ icon, id, items, title, columnColor }) => (
            <Accordion
              key={id}
              icon={icon}
              items={items}
              title={title}
              columnColor={columnColor}
            />
          ))}
        </div>

        {/* mobile */}

        <Swiper
          className='ourLandscapeSwiper'
          slidesPerView={1.1}
          centeredSlides
          spaceBetween={10}
          scrollbar={{
            dragSize: 200 / 3,
            // dragClass: 'listRequirementsSwiperDrag',
            horizontalClass: 'listRequirementsSwiperScollbar',
            hide: true,
          }}
          modules={[Scrollbar]}
        >
          {accordionData.map(({ icon, id, items, title, columnColor }) => (
            <SwiperSlide className='listRequirementsSwiperItems' key={id}>
              <Accordion
                key={id}
                icon={icon}
                items={items}
                title={title}
                columnColor={columnColor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledOurLandscapeSection>
  )
}

function Accordion({ icon, items, title, columnColor }) {
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className='ourLandscapeAccordion'>
      <div className='ourLandscapeAccordionTitle'>
        {icon}
        <StyledTypographyIBMH5>{title}</StyledTypographyIBMH5>
      </div>
      {items.map(({ id, description, title: accordionTitle }) => (
        <OurLandscapeSectionAccordion
          key={id}
          id={id}
          description={description}
          expanded={expanded}
          handleChange={handleChange}
          title={accordionTitle}
          columnColor={columnColor}
          lastChild={items.length - 1 === id}
        />
      ))}
    </div>
  )
}
