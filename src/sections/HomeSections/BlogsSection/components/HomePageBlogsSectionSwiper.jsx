'use client'

import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { BlogCart2 } from '@/components/BlogCart'

export default function HomePageBlogsSectionSwiper({ blogs }) {
  return (
    <Swiper
      className='blogsSwiper'
      slidesPerView='auto'
      spaceBetween={24}
      updateOnWindowResize
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
          initialSlide: 1,
          loop: true,
          centeredSlides: true,
        },
        500: {
          loop: false,
          slidesPerView: 'auto',
          initialSlide: 0,
          spaceBetween: 24,
          centeredSlides: false,
        },
      }}
      scrollbar={{
        dragSize: 200 / 3,
        horizontalClass: 'listRequirementsSwiperScollbar',
        hide: true,
      }}
      modules={[Scrollbar]}
    >
      {blogs?.map(
        ({
          id,
          _createdAt,
          timeToRead,
          slugPage,
          mainImage,
          mainTag,
          mainTitle,
        }) => (
          <SwiperSlide className='slide' key={id}>
            <Link href={`/blog/${slugPage}`}>
              <BlogCart2
                time={timeToRead}
                date={_createdAt}
                title={mainTitle}
                imageSrc={mainImage?.url || ''}
                subTitle={mainTag?.tag}
              />
            </Link>
          </SwiperSlide>
        )
      )}
    </Swiper>
  )
}
