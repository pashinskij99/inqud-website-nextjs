import Link from 'next/link'
import { useContext } from 'react'
import { StyledBlogsSectionWrapper } from '@/sections/BlogsSections/BlogsSection/BlogsSection.styled'
import BlogCategoryNavigation from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation'
import { BlogCart } from '@/components/BlogCart'
import BlogPagination from '@/sections/BlogsSections/BlogsSection/BlogPagination'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { StyledTypographyUrbanistH4 } from '@/components/UI/Typography/Typography.styled'

function BlogsSection() {
  const { data, pagination } = useContext(BlogContext)

  return (
    <StyledBlogsSectionWrapper>
      <BlogCategoryNavigation />

      <div className='container'>
        {data.length ? (
          <ul className='blog-grid'>
            {data.map(
              ({
                id,
                _createdAt,
                timeToRead,
                mainImage: { url },
                mainTag,
                mainTitle,
                slugPage,
              }) => (
                <li key={id}>
                  <Link href={`/blog/${slugPage}`}>
                    <BlogCart
                      time={timeToRead}
                      date={_createdAt}
                      title={mainTitle}
                      imageSrc={url}
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

        <BlogPagination
          page={Math.floor(pagination.skip / pagination.first + 1 || 1)}
          pageSize={pagination.first}
          total={pagination.count}
        />
      </div>
    </StyledBlogsSectionWrapper>
  )
}

export default BlogsSection
