import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CartRequirement } from '@/components/CartRequirement'

function YourNeedsSectionSwiper({ list, data }) {
  return (
    <Swiper
      className='listRequirementsSwiper'
      slidesPerView='auto'
      centeredSlides
      initialSlide={1}
      updateOnWindowResize
      scrollbar={{
        dragSize: 200 / 3,
        horizontalClass: 'listRequirementsSwiperScollbar',
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
      {list.map(({ id, description, image, title, handleClick }) => (
        <SwiperSlide className='listRequirementsSwiperItems' key={id}>
          <CartRequirement
            buttonText={id === 1 && data.buttonScreen2}
            description={description}
            href='#'
            handleClick={handleClick}
            imageSrc={image}
            title={title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default YourNeedsSectionSwiper
