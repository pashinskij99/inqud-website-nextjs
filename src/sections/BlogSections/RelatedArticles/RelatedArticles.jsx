import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { useContext } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import { BlogCart } from '@/components/BlogCart'
import { StyledRelatedArticlesSection } from './RelatedArticles.styled'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { responseBreakPoint } from '@/utils/response'

export default function RelatedArticles() {
  const { relatedData } = useContext(BlogContext)
  const size = useWindowSize()

  return (
    <StyledRelatedArticlesSection>
      <div className='container'>
        <div className='relatedBlogsHeader blogsHeader'>
          <StyledTypographyUrbanistH2 className='relatedBlogsHeaderTitle blogsHeaderTitle'>
            Related articles
          </StyledTypographyUrbanistH2>
          <Link href='/blog'>
            <StyledButtonGhost className='relatedBlogsHeaderButton blogsHeaderButton'>
              Go to blog
            </StyledButtonGhost>
          </Link>
        </div>
        {size.width && size.width > responseBreakPoint.tablet ? (
          <div className='relatedBlogsGrid blogsGrid'>
            {relatedData.map(
              ({
                id,
                _createdAt,
                mainImage,
                slugPage,
                timeToRead,
                mainTag,
                mainTitle,
              }) => (
                <Link href={`/blog/${slugPage}`}>
                  <BlogCart
                    time={timeToRead}
                    title={mainTitle}
                    date={_createdAt}
                    imageSrc={mainImage?.url || ''}
                    subTitle={mainTag?.tag}
                    key={id}
                  />
                </Link>
              )
            )}
          </div>
        ) : null}

        {/* mobile */}
        {size.width && size.width <= responseBreakPoint.tablet ? (
          <Swiper
            className='relatedBlogsSwiper blogsSwiper'
            slidesPerView='auto'
            spaceBetween={24}
            updateOnWindowResize
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 8,
                initialSlide: 1,
                centeredSlides: true,
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
            {relatedData.map(
              ({
                id,
                _createdAt,
                mainImage,
                slugPage,
                timeToRead,
                mainTag,
                mainTitle,
              }) => (
                <SwiperSlide className='slide' key={id}>
                  <Link href={`/blog/${slugPage}`}>
                    <BlogCart
                      time={timeToRead}
                      title={mainTitle}
                      date={_createdAt}
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
          <StyledButtonGhost className='relatedBlogsHeaderButtonMobile blogsHeaderButtonMobile'>
            Go to blog
          </StyledButtonGhost>
        </Link>
      </div>
    </StyledRelatedArticlesSection>
  )
}
