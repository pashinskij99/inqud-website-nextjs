import Link from 'next/link'
import clsx from 'clsx'
import { useContext } from 'react'
import { StyledBlogPagination } from '@/sections/BlogsSections/BlogsSection/BlogPagination/BlogPagination.styled'
import {
  DOTS,
  usePagination,
} from '@/sections/BlogsSections/BlogsSection/BlogPagination/usePagination'
import { StyledTypographyUrbanistBody } from '@/components/UI/Typography/Typography.styled'
import ArrowPrev from '@/assets/icons/arrow-prev.svg'
import ArrowNext from '@/assets/icons/arrow-next.svg'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'

function BlogPagination({ page, total, pageSize }) {
  const paginationRange = usePagination({
    currentPage: page,
    totalCount: total,
    siblingCount: 1,
    pageSize,
  })

  const { pagination, searchParams } = useContext(BlogContext)

  if (page === 0 || paginationRange.length < 2) {
    return null
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <StyledBlogPagination>
      <Link
        className={page === 1 ? 'events-none' : 'active'}
        href={{
          query: {
            ...searchParams,
            skip: pagination.skip - pagination.first,
          },
        }}
      >
        <li className={page === 1 ? 'events-none' : ''}>
          {/* <div className="prev"/> */}
          <ArrowPrev className='prev' />
        </li>
      </Link>
      <div className='list-numbers'>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li className='dots number' key={Math.random()}>
                <StyledTypographyUrbanistBody>...</StyledTypographyUrbanistBody>
              </li>
            )
          }

          return (
            <Link
              key={pageNumber}
              href={{
                query: {
                  ...searchParams,
                  skip: pagination.first * pageNumber - pagination.first,
                },
              }}
              scroll
            >
              <li
                className={clsx('number', {
                  ['active']: pageNumber === page,
                })}
              >
                <StyledTypographyUrbanistBody>
                  {pageNumber}
                </StyledTypographyUrbanistBody>
              </li>
            </Link>
          )
        })}
      </div>
      <Link
        className={page === lastPage ? 'events-none' : ''}
        href={{
          query: {
            ...searchParams,
            skip: pagination.skip + pagination.first,
          },
        }}
      >
        <li className={page === lastPage ? 'events-none' : 'active'}>
          <ArrowNext className='next' />
          {/* <div className="next"/> */}
        </li>
      </Link>
    </StyledBlogPagination>
  )
}

export default BlogPagination
