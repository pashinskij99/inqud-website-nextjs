import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Element } from 'react-scroll'
import { StyledBlogsSectionWrapper } from '@/sections/BlogsSections/BlogsSection/BlogsSection.styled'
import BlogCategoryNavigation from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation'
import { BlogCart } from '@/components/BlogCart'
import BlogPagination from '@/sections/BlogsSections/BlogsSection/BlogPagination'
import { StyledTypographyUrbanistH4 } from '@/components/UI/Typography/Typography.styled'
import Loader from '@/components/Loader'

function BlogsSection() {
  const { blogs, pagination, loading } = useSelector((state) => state.blog)

  return (
    <StyledBlogsSectionWrapper>
      <BlogCategoryNavigation />
      <Element
        offset={150}
        name='blog'
        className='blog-category-navigation-wrapper'
      >
        <div className='container'>
          {loading ? (
            <div className='loader-wrapper'>
              <Loader />
            </div>
          ) : (
            <>
              {blogs.length ? (
                <ul className='blog-grid'>
                  {blogs.map(
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
                </ul>
              ) : (
                <StyledTypographyUrbanistH4 className='error-message'>
                  Nothing was found for your request!
                </StyledTypographyUrbanistH4>
              )}
            </>
          )}

          <BlogPagination
            page={Math.floor(pagination.skip / pagination.first + 1 || 1)}
            pageSize={pagination.first}
            total={pagination.count}
          />
        </div>
      </Element>
    </StyledBlogsSectionWrapper>
  )
}

export default BlogsSection
