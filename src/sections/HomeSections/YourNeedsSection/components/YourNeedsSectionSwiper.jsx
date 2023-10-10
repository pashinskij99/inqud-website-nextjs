'use client'

import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CartRequirement from '@/components/CartRequirement'
import YourNeedsSectionModalWithButton from './YourNeedsSectionModalWithButton'
import styles from '../YourNeedsSection.module.scss'

function YourNeedsSectionSwiper({ list, data, trans }) {
  return (
    <Swiper
      className={styles.listRequirementsSwiper}
      slidesPerView='auto'
      centeredSlides
      initialSlide={1}
      updateOnWindowResize
      scrollbar={{
        dragSize: 200 / 3,
        horizontalClass: styles.listRequirementsSwiperScollbar,
        hide: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
          centeredSlides: true,
          loop: true,
          initialSlide: '1',
        },
        450: {
          slidesPerView: 'auto',
          spaceBetween: 8,
          initialSlide: '0',
          loop: false,
          centeredSlides: false,
        },
        767: {
          slidesPerView: 'auto',
          loop: false,
          centeredSlides: false,
          initialSlide: '0',
          spaceBetween: 24,
        },
      }}
      modules={[Scrollbar]}
    >
      {list.map(({ id, description, image, title }, i) =>
        i !== 1 ? (
          <SwiperSlide key={id} className={styles.listRequirementsSwiperItems}>
            <CartRequirement
              buttonText=''
              description={description}
              href='#'
              imageSrc={image}
              title={title}
            />
          </SwiperSlide>
        ) : (
          <SwiperSlide key={id} className={styles.listRequirementsSwiperItems}>
            <YourNeedsSectionModalWithButton data={data} trans={trans} />
          </SwiperSlide>
        )
      )}
    </Swiper>
  )
}

export default YourNeedsSectionSwiper
