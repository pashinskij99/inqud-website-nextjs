'use client'

import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import OurLandscapeTabContent from './OurLandscapeTabContent'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import Device, { MOBILE, TABLET_OR_DESKTOP } from '@/components/Device/Device'
// eslint-disable-next-line import/no-cycle
import OurLandscapeSwiper from './OurLandscapeSwiper'
import { StyledIndustriesWrapper } from '../OurLandscapeSection.styled'
import Icon1 from '@/assets/images/our-landscape/1.svg'
import Icon2 from '@/assets/images/our-landscape/2.svg'
import Icon3 from '@/assets/images/our-landscape/3.svg'

const DynamicCoverageTab = dynamic(() =>
  import('./CoverageTab').then((res) => res.CoverageTab)
)

export default function OurLandscapeTabComponent({ data }) {
  const [active, setActive] = useState(0)

  const handleClick = (id) => {
    setActive(id)
  }

  const getContent = () => {
    switch (active) {
      case 0:
        return <IndustriesTab data={data} />
      case 1:
        return <DynamicCoverageTab data={data} />

      default:
        return <IndustriesTab data={data} />
    }
  }
  return (
    <>
      <OurLandscapeTabContent
        active={active}
        handleClick={handleClick}
        data={data}
      />

      {getContent()}
    </>
  )
}

function IndustriesTab({ data }) {
  // const {
  //   dataPage: { ourLandscape: data },
  // } = useContext(PageContext)

  const accordionData = [
    {
      icon: <Image src={Icon1} alt='icon' />,
      columnColor: '255, 163, 163',
    },
    {
      icon: <Image src={Icon2} alt='icon' />,
      columnColor: '255, 196, 81',
    },
    {
      icon: <Image src={Icon3} alt='icon' />,
      columnColor: '129, 158, 176',
    },
  ]

  // const size = useWindowSize()

  return (
    <StyledIndustriesWrapper>
      <StyledTypographyUrbanistH5 className='ourLandscapeDescription'>
        {data.description1}
      </StyledTypographyUrbanistH5>
      <Device device={TABLET_OR_DESKTOP}>
        <div className='ourLandscapeRisk'>
          {data.industriesList?.map(({ id, list, listTitle: title }, i) => (
            <Accordion
              key={id}
              idColumn={i}
              icon={accordionData[i].icon}
              items={list}
              title={title}
              columnColor={accordionData[i].columnColor}
            />
          ))}
        </div>
      </Device>

      {/* mobile */}
      <Device device={MOBILE}>
        <OurLandscapeSwiper accordionData={accordionData} data={data} />
      </Device>
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

export function Accordion({ idColumn, icon, items, title, columnColor }) {
  return (
    <div className='ourLandscapeAccordion'>
      <div className='ourLandscapeAccordionTitle'>
        {icon}
        <StyledTypographyIBMH5>{title}</StyledTypographyIBMH5>
      </div>
      {items.map((accordionTitle, i) => (
        <div
          style={{
            backgroundColor: `rgba(${columnColor}, ${
              i === items.length - 1
                ? stepsOpacity[idColumn][0]
                : stepsOpacity[idColumn][stepsOpacity[idColumn].length - 1 - i]
            })`,
            flex: i === items.length - 1 ? 1 : 0,
            alignItems: i === items.length - 1 ? 'start' : 'start',
          }}
          className='accordion-prob'
          key={accordionTitle}
        >
          <StyledTypographyUrbanistBody>
            {accordionTitle}
          </StyledTypographyUrbanistBody>
          <div />
        </div>
      ))}
    </div>
  )
}
