import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { useTranslations } from 'next-intl'
import { useContext, useEffect, useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import { StyledBlogsSection } from './BlogsSection.styled'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { BlogCart, BlogCart2 } from '@/components/BlogCart'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { getPageData } from '@/lib/datocms'
import { HOME_B2B_BLOG, HOME_B2B_BLOGS_DATA } from '@/lib/datocmsQuery'
import { responseBreakPoint } from '@/utils/response'

export default function BlogsSection() {
  const t = useTranslations('blog_name_section')
  const [data, setData] = useState({})
  const [blogs, setBlogs] = useState([])

  const { params } = useContext(PageContext)

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: HOME_B2B_BLOG,
      })
      const blogsData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: HOME_B2B_BLOGS_DATA,
      })

      setBlogs(blogsData.allBlogs)
      setData(pageData.homePage)
    }

    getData()
  }, [])

  const size = useWindowSize()

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

        {size.width && size.width > responseBreakPoint.tablet ? (
          <div className='blogsGrid'>
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
                <Link href={`/blog/${slugPage}`} key={id}>
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
        ) : null}

        {/* mobile */}

        {size.width && size.width <= responseBreakPoint.tablet ? (
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
        ) : null}

        <Link href='/blog'>
          <StyledButtonGhost className='blogsHeaderButtonMobile'>
            Go to blog
          </StyledButtonGhost>
        </Link>
      </div>
    </StyledBlogsSection>
  )
}
