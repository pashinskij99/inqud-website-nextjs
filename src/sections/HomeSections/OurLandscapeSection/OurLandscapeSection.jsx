'use client'

import { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import Image from 'next/image'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
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
import { TabsComponent } from '@/components/TabsComponent/TabsComponent'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { getPageData } from '@/lib/datocms'
import { HOME_B2B_LANDSCAPE } from '@/lib/datocmsQuery'

export default function OurLandscapeSection() {
  const [active, setActive] = useState(0)
  const [data, setData] = useState({})

  // const {
  //   dataPage: { ourLandscape: data },
  // } = useContext(PageContext);

  const { params } = useContext(PageContext)

  const tabs = [
    {
      id: 0,
      text: data.tabName1,
    },
    {
      id: 1,
      text: data.tabName2,
    },
  ]

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: HOME_B2B_LANDSCAPE,
      })

      setData(pageData.ourLandscape)
    }

    getData()
  }, [])

  const handleClick = (id) => {
    setActive(id)
  }

  const getContent = () => {
    switch (active) {
      case 0:
        return <IndustriesTab data={data} />
      case 1:
        return <CoverageTab data={data} />

      default:
        return <IndustriesTab data={data} />
    }
  }

  return (
    <StyledOurLandscapeSection className='our-landscape'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='ourLandscapeTitle'>
          {data.title}
        </StyledTypographyUrbanistH2>
        <TabsComponent
          tabs={tabs}
          className='ourLandscapeTabs'
          active={active}
          handleClick={handleClick}
        />

        {getContent()}
      </div>
    </StyledOurLandscapeSection>
  )
}

function CoverageTab({ data }) {
  // const {
  //   dataPage: { ourLandscape: data },
  // } = useContext(PageContext)

  return (
    <StyledCoverageWrapper>
      <div className='headerWrapper'>
        <StyledTypographyUrbanistH5 className='ourLandscapeDescription'>
          {data.description2}
        </StyledTypographyUrbanistH5>
        <ul className='list desktop'>
          {data.coverageFeatures.map(
            ({ id, description, image: { url, height, width }, title }) => (
              <li key={id}>
                <div className='coverageWrapper'>
                  <Image src={url} alt={title} width={width} height={height} />
                </div>
                <div className='descriptionWrapper'>
                  <StyledTypographyUrbanistBody className='name'>
                    {title}
                  </StyledTypographyUrbanistBody>
                  <StyledTypographyUrbanistBody className='description'>
                    {description}
                  </StyledTypographyUrbanistBody>
                </div>
              </li>
            )
          )}
        </ul>
      </div>

      <div className='coverageWrapper'>
        <Image
          src={data.coverageMap.url}
          width={775.02}
          height={400}
          alt={data.description2}
        />
      </div>
    </StyledCoverageWrapper>
  )
}

function IndustriesTab({ data }) {
  // const {
  //   dataPage: { ourLandscape: data },
  // } = useContext(PageContext)

  const accordionData = [
    {
      icon: <Icon1 />,
      columnColor: '255, 163, 163',
    },
    {
      icon: <Icon2 />,
      columnColor: '255, 196, 81',
    },
    {
      icon: <Icon3 />,
      columnColor: '129, 158, 176',
    },
  ]

  return (
    <StyledIndustriesWrapper>
      <StyledTypographyUrbanistH5 className='ourLandscapeDescription'>
        {data.description1}
      </StyledTypographyUrbanistH5>

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

      {/* mobile */}

      <Swiper
        className='ourLandscapeSwiper'
        slidesPerView={1}
        centeredSlides
        spaceBetween={8}
        initialSlide='1'
        loop
        height={500}
        scrollbar={{
          dragSize: 200 / 3,
          horizontalClass: 'listRequirementsSwiperScollbar',
          hide: true,
        }}
        modules={[Scrollbar]}
      >
        {data.industriesList?.map(({ id, list, listTitle: title }, i) => (
          <SwiperSlide className='listRequirementsSwiperItems' key={id}>
            <Accordion
              key={id}
              idColumn={i}
              icon={accordionData[i].icon}
              items={list}
              title={title}
              columnColor={accordionData[i].columnColor}
            />
          </SwiperSlide>
        ))}
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

function Accordion({ idColumn, icon, items, title, columnColor }) {
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
