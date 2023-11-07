import Link from 'next-intl/link'
import { useSelector } from 'react-redux'
import { Element } from 'react-scroll'
import { CSSTransition } from 'react-transition-group'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { StyledBlogsSectionWrapper } from '@/sections/BlogsSections/BlogsSection/BlogsSection.styled'
import { BlogCart } from '@/components/BlogCart'
import { StyledTypographyUrbanistH4 } from '@/components/UI/Typography/Typography.styled'
import { FullScreenLoader } from '@/components/Loader'
import BlogPagination from '@/sections/BlogsSections/BlogsSection/BlogPagination'

const DynamicBlogCategoryNavigation = dynamic(
  () => import('@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation'),
  {
    ssr: false,
  }
)

function BlogsSection() {
  const screenLoaderRef = useRef(null)
  const { blogs, pagination, loading } = useSelector((state) => state.blog)
  const { activeTags, searchValue } = useSelector((state) => state.blog)

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

          <BlogPagination
            page={Math.floor(pagination.skip / pagination.first + 1 || 1)}
            pageSize={pagination.first}
            total={pagination.count}
            pagination={pagination}
            activeTags={activeTags}
            searchValue={searchValue}
          />

          <CSSTransition
            in={loading}
            timeout={350}
            unmountOnExit
            classNames='display'
            nodeRef={screenLoaderRef}
          >
            <FullScreenLoader ref={screenLoaderRef} />
          </CSSTransition>
        </div>
      </Element>
    </StyledBlogsSectionWrapper>
  )
}

export default BlogsSection
