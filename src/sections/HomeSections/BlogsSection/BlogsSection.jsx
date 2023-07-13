import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Scrollbar} from 'swiper/modules'
import {
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import {StyledBlogsSection} from './BlogsSection.styled'
import Image1 from '@/assets/images/blogs/image1.png'
import Image2 from '@/assets/images/blogs/image2.png'
import Image3 from '@/assets/images/blogs/image3.png'
import {StyledButtonGhost} from '@/components/UI/Button/Button.styled'
import {BlogCart, BlogCart2} from '@/components/BlogCart';

const blogs = [
  {
    id: 0,
    subTitle: 'cryptocurrency',
    title: 'Understanding Blockchain Technology',
    date: 'June 21, 2023',
    time: '5 min',
    imageSrc: Image1.src,
  },
  {
    id: 1,
    subTitle: 'cryptocurrency',
    title: 'How to Sell Cryptocurrencies on Our Platform',
    date: 'June 21, 2023',
    time: '5 min',
    imageSrc: Image2.src,
  },
  {
    id: 2,
    subTitle: 'cryptocurrency',
    title: 'Exploring the Most Promising Cryptocurrencies of 2023',
    date: 'June 21, 2023',
    time: '5 min',
    imageSrc: Image3.src,
  },
]

export default function BlogsSection() {
  return (
    <StyledBlogsSection>
      <div className="container">
        <div className="blogsHeader">
          <StyledTypographyUrbanistH1 className="blogsHeaderTitle">
            Insights
          </StyledTypographyUrbanistH1>
          <Link href="/blog">
            <StyledButtonGhost className="blogsHeaderButton">
              Go to blog
            </StyledButtonGhost>
          </Link>
        </div>

        <div className="blogsGrid">
          {blogs.map(({id, date, imageSrc, subTitle, time, title}) => (
            <BlogCart
              time={time}
              title={title}
              date={date}
              imageSrc={imageSrc}
              subTitle={subTitle}
              key={id}
            />
          ))}
        </div>

        {/* mobile */}

        <Swiper
          className="blogsSwiper"
          slidesPerView="auto"
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
              initialSlide: 1,
              centeredSlides: true
            },
            470: {
              slidesPerView: 1,
              spaceBetween: 8,
              initialSlide: 1,
              centeredSlides: true,
            },
            576: {
              slidesPerView: 'auto',
              initialSlide: 0,
              spaceBetween: 24
            },
          }}
          scrollbar={{
            dragSize: 200 / 3,
            horizontalClass: 'listRequirementsSwiperScollbar',
            hide: true,
          }}
          modules={[Scrollbar]}
        >
          {blogs.map(({id, date, imageSrc, subTitle, time, title}) => (
            <SwiperSlide className="slide" key={id}>
              <BlogCart2
                date={date}
                imageSrc={imageSrc}
                subTitle={subTitle}
                time={time}
                title={title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link href="/blog">
          <StyledButtonGhost className="blogsHeaderButtonMobile">
            Go to blog
          </StyledButtonGhost>
        </Link>
      </div>
    </StyledBlogsSection>
  )
}