'use client'

import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import CartRequirement from '@/components/CartRequirement'
import styles from '../YourNeedsSection.module.scss'

const DynamicYourNeedsSectionModalForm = dynamic(
  () => import('./YourNeedsSectionModalForm').then((mod) => mod.default),
  {
    ssr: false,
  }
)

function YourNeedsSectionSwiper({ data }) {
  const [openModalSendRequest, setOpenModalSendRequest] = useState(false)

  const handleOpen = () => {
    setOpenModalSendRequest(true)
  }

  const handleClose = () => {
    setOpenModalSendRequest(false)
  }
  return (
    <>
      <Swiper
        className={styles.listRequirementsSwiper}
        slidesPerView='auto'
        centeredSlides
        initialSlide={1}
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
            initialSlide: '0',
            spaceBetween: 24,
            loop: false,
            centeredSlides: false,
          },
          767: {
            spaceBetween: 24,
          },
        }}
        modules={[Scrollbar]}
      >
        {data.section2Content.map(
          ({ id, description, image, title, buttonText }) => (
            <SwiperSlide
              key={id}
              className={styles.listRequirementsSwiperItems}
            >
              <CartRequirement
                buttonText={buttonText}
                handleClick={handleOpen}
                description={description}
                href='#'
                imageSrc={image}
                title={title}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
      {openModalSendRequest ? (
        <DynamicYourNeedsSectionModalForm
          openModalSendRequest={openModalSendRequest}
          handleClose={handleClose}
        />
      ) : null}
    </>

    //   i !== 1 ? (
    //     <SwiperSlide key={id} className={styles.listRequirementsSwiperItems}>
    //       <CartRequirement
    //         buttonText=''
    //         description={description}
    //         href='#'
    //         imageSrc={image}
    //         title={title}
    //       />
    //     </SwiperSlide>
    //   ) : (
    //     <SwiperSlide key={id} className={styles.listRequirementsSwiperItems}>
    //       <YourNeedsSectionModalWithButton data={data} trans={trans} />
    //     </SwiperSlide>
    //   )
    // )}
  )
}

export default YourNeedsSectionSwiper
