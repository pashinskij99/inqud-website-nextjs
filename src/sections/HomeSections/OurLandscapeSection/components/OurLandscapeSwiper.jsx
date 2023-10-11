'use client'

import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line import/no-cycle
import Accordion from '../OurLandscapeSectionAccordion/Accordion'

export default function OurLandscapeSwiper({ accordionData, data }) {
  return (
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
  )
}
