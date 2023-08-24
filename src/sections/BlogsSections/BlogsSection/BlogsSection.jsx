import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import { StyledBlogsSectionWrapper } from '@/sections/BlogsSections/BlogsSection/BlogsSection.styled'
import BlogCategoryNavigation from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation'
import { BlogCart } from '@/components/BlogCart'
import { ButtonLoadMoreLarge } from '@/components/UI/Button'
import BlogPagination from '@/sections/BlogsSections/BlogsSection/BlogPagination'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'

function BlogsSection() {
  const { data, searchParams, pagination } = useContext(BlogContext)

  const t = useTranslations('insights_page.blogs')
  return (
    <StyledBlogsSectionWrapper>
      {/* eslint-disable-next-line no-use-before-define */}
      <BlogCategoryNavigation />

      <div className='container'>
        <ul className='blog-grid'>
          {/* eslint-disable-next-line no-use-before-define */}
          {data.map(
            ({
              id,
              dateAndTime,
              mainImage: { url },
              tags,
              mainTitle,
              slugPage,
            }) => (
              <li key={id}>
                <Link href={`/blog/${slugPage}`}>
                  <BlogCart
                    time={dateAndTime}
                    date={dateAndTime}
                    title={mainTitle}
                    imageSrc={url}
                    subTitle={tags[0].tag}
                  />
                </Link>
              </li>
            )
          )}
        </ul>

        {pagination.first >= pagination.count ? (
          <Link
            href={{
              query: {
                ...searchParams,
                first: 3,
              },
            }}
          >
            <ButtonLoadMoreLarge className='loadMoreButton'>
              Load less
            </ButtonLoadMoreLarge>
          </Link>
        ) : (
          <Link
            href={{
              query: {
                ...searchParams,
                first: pagination.first + 3,
              },
            }}
          >
            <ButtonLoadMoreLarge className='loadMoreButton'>
              {t('button_text')}
            </ButtonLoadMoreLarge>
          </Link>
        )}

        {/* 
        {console.log(
          Math.floor(pagination.count / pagination.skip),
          pagination.first,
          pagination.count
        )} */}

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
