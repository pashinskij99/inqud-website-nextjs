import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import { StyledBlogsSection } from './BlogsSection.styled'
import Image1 from '@/assets/images/blogs/image1.webp'
import Image2 from '@/assets/images/blogs/image2.webp'
import Image3 from '@/assets/images/blogs/image3.webp'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { BlogCart, BlogCart2 } from '@/components/BlogCart'
import { PageContext } from '@/contexts/PageContext/PageContext'

const blogs = [
  {
    id: 0,
    subTitle: 'cryptocurrency',
    title: 'Understanding Blockchain Technology',
    date: 'June 21, 2023',
    time: '5 min read',
    imageSrc: Image1.src,
  },
  {
    id: 1,
    subTitle: 'cryptocurrency',
    title: 'How to Sell Cryptocurrencies on Our Platform',
    date: 'June 21, 2023',
    time: '5 min read',
    imageSrc: Image2.src,
  },
  {
    id: 2,
    subTitle: 'cryptocurrency',
    title: 'Exploring the Most Promising Cryptocurrencies of 2023',
    date: 'June 21, 2023',
    time: '5 min read',
    imageSrc: Image3.src,
  },
]

export default function BlogsSection() {
  const t = useTranslations('blog_name_section')

  const {
    dataPage: { homePage: data, allBlogs: blogsData },
  } = useContext(PageContext)

  return (
    <StyledBlogsSection>
      <div className='container'>
        <div className='blogsHeader'>
          <StyledTypographyUrbanistH2 className='blogsHeaderTitle'>
            {t('title')}
          </StyledTypographyUrbanistH2>
          <Link href='/blog'>
            <StyledButtonGhost className='blogsHeaderButton'>
              {data.buttonBlog}
            </StyledButtonGhost>
          </Link>
        </div>

        <div className='blogsGrid'>
          {/* <ul className='blog-grid'>
            {data.map(
              ({
                id,
                _createdAt,
                timeToRead,
                mainImage,
                mainTag,
                mainTitle,
                // slugPage,
              }) => (
                <li key={id}>
                  <Link href={`/blog/${id}`}>
                    <BlogCart
                      time={timeToRead}
                      date={_createdAt}
                      title={mainTitle}
                      imageSrc={mainImage?.url || ''}
                      subTitle={mainTag?.tag}
                    />
                  </Link>
                </li>
              )
            )}
          </ul> */}
          {blogsData.map(
            ({ id, _createdAt, timeToRead, mainImage, mainTag, mainTitle }) => (
              <Link href={`/blog/${id}`} key={id}>
                <BlogCart
                  time={timeToRead}
                  date={_createdAt}
                  title={mainTitle}
                  imageSrc={mainImage?.url || ''}
                  subTitle={mainTag?.tag}
                />
              </Link>
            )
          )}
        </div>

        {/* mobile */}

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
          {blogsData.map(
            ({ id, _createdAt, timeToRead, mainImage, mainTag, mainTitle }) => (
              <SwiperSlide className='slide' key={id}>
                <Link href={`/blog/${id}`}>
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
        <Link href='/blog'>
          <StyledButtonGhost className='blogsHeaderButtonMobile'>
            Go to blog
          </StyledButtonGhost>
        </Link>
      </div>
    </StyledBlogsSection>
  )
}
