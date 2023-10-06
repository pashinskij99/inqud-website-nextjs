'use client'

import { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { useWindowSize } from '@uidotdev/usehooks'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
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
import { responseBreakPoint } from '@/utils/response'

const DynamicCoverageTab = dynamic(() =>
  import('./components/CoverageTab').then((res) => res.CoverageTab)
)

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
        return <DynamicCoverageTab data={data} />

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

  const size = useWindowSize()

  return (
    <StyledIndustriesWrapper>
      <StyledTypographyUrbanistH5 className='ourLandscapeDescription'>
        {data.description1}
      </StyledTypographyUrbanistH5>

      {size.width && size.width > responseBreakPoint.mobile ? (
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
      ) : null}

      {/* mobile */}

      {size.width && size.width <= responseBreakPoint.mobile ? (
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
      ) : null}
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

// eslint-disable-next-line no-unused-vars
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
