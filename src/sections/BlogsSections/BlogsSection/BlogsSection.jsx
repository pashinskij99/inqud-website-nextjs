import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Element } from 'react-scroll'
import { CSSTransition } from 'react-transition-group'
import dynamic from 'next/dynamic'
import { StyledBlogsSectionWrapper } from '@/sections/BlogsSections/BlogsSection/BlogsSection.styled'
// import BlogCategoryNavigation from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation'
import { BlogCart } from '@/components/BlogCart'
// import BlogPagination from '@/sections/BlogsSections/BlogsSection/BlogPagination'
import { StyledTypographyUrbanistH4 } from '@/components/UI/Typography/Typography.styled'
import { FullScreenLoader } from '@/components/Loader'

const DynamicBlogPagination = dynamic(
  () =>
    import('@/sections/BlogsSections/BlogsSection/BlogPagination').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)

const DynamicBlogCategoryNavigation = dynamic(
  () =>
    import('@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)

function BlogsSection() {
  const { blogs, pagination, loading } = useSelector((state) => state.blog)

  return (
    <StyledBlogsSectionWrapper>
      <DynamicBlogCategoryNavigation />
      <Element name='blog' className='blog-category-navigation-wrapper'>
        <div className='container'>
          {blogs.length ? (
            <ul className='blog-grid'>
              {blogs.map(
                ({
                  id,
                  slugPage,
                  _createdAt,
                  timeToRead,
                  mainImage,
                  mainTag,
                  mainTitle,
                }) => (
                  <li key={id}>
                    <Link href={`/blog/${slugPage}`}>
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
            </ul>
          ) : (
            !loading && (
              <StyledTypographyUrbanistH4 className='error-message'>
                Nothing was found for your request!
              </StyledTypographyUrbanistH4>
            )
          )}

          <DynamicBlogPagination
            page={Math.floor(pagination.skip / pagination.first + 1 || 1)}
            pageSize={pagination.first}
            total={pagination.count}
          />

          <CSSTransition
            in={loading}
            timeout={350}
            unmountOnExit
            classNames='display'
          >
            <FullScreenLoader />
          </CSSTransition>
        </div>
      </Element>
    </StyledBlogsSectionWrapper>
  )
}

export default BlogsSection
