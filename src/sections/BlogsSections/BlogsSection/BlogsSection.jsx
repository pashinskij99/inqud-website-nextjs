import Link from 'next/link'
import { useContext } from 'react'
import { StyledBlogsSectionWrapper } from '@/sections/BlogsSections/BlogsSection/BlogsSection.styled'
import BlogCategoryNavigation from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation'
import { BlogCart } from '@/components/BlogCart'
import BlogPagination from '@/sections/BlogsSections/BlogsSection/BlogPagination'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'

function BlogsSection() {
  const { data, pagination } = useContext(BlogContext)

  return (
    <StyledBlogsSectionWrapper>
      <BlogCategoryNavigation />

      <div className='container'>
        <ul className='blog-grid'>
          {/* eslint-disable-next-line no-use-before-define */}
          {data.map(
            ({
              id,
              _createdAt,
              mainImage: { url },
              tags,
              mainTitle,
              slugPage,
            }) => (
              <li key={id}>
                <Link href={`/blog/${slugPage}`}>
                  <BlogCart
                    time={_createdAt}
                    date={_createdAt}
                    title={mainTitle}
                    imageSrc={url}
                    subTitle={tags[0].tag}
                  />
                </Link>
              </li>
            )
          )}
        </ul>

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
