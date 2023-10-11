'use client'

import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import OurLandscapeTabContent from './OurLandscapeTabContent'
import { StyledTypographyUrbanistH5 } from '@/components/UI/Typography/Typography.styled'
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

const DynamicAccordion = dynamic(
  () => import('../OurLandscapeSectionAccordion/Accordion'),
  { ssr: false }
)

function IndustriesTab({ data }) {
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

  return (
    <StyledIndustriesWrapper>
      <StyledTypographyUrbanistH5 className='ourLandscapeDescription'>
        {data.description1}
      </StyledTypographyUrbanistH5>
      <Device device={TABLET_OR_DESKTOP}>
        <div className='ourLandscapeRisk'>
          {data.industriesList?.map(({ id, list, listTitle: title }, i) => (
            <DynamicAccordion
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
