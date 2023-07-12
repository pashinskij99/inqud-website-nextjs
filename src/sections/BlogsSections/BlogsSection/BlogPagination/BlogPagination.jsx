import Link from 'next/link';
import clsx from 'clsx';
import {StyledBlogPagination} from '@/sections/BlogsSections/BlogsSection/BlogPagination/BlogPagination.styled';
import {DOTS, usePagination} from '@/sections/BlogsSections/BlogsSection/BlogPagination/usePagination';
import {StyledTypographyUrbanistBody} from '@/components/UI/Typography/Typography.styled';
import ArrowPrev from '@/assets/icons/arrow-prev.svg'
import ArrowNext from '@/assets/icons/arrow-next.svg'

function BlogPagination({page, total, pageSize}) {
  const paginationRange = usePagination({
    currentPage: page,
    totalCount: total,
    siblingCount: 1,
    pageSize,
  })

  if (page === 0 || paginationRange.length < 2) {
    return null
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <StyledBlogPagination>
      <Link
        className={page === 1 ? 'events-none' : ''}
        href={`/blog/page/${page - 1}`}>
        <li
          className={page === 1 ? 'events-none' : ''}
        >
          {/* <div className="prev"/> */}
          <ArrowPrev className="prev"/>
        </li>
      </Link>
      <div className="list-numbers">
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li className="dots number" key={Math.random()}>
                <StyledTypographyUrbanistBody>
                  ...
                </StyledTypographyUrbanistBody>
              </li>
            )
          }

          return (
            <Link
              key={pageNumber}
              href={`/blog/page/${pageNumber}`}
              scroll
            >
              <li
                className={clsx('number', {
                  ['active']: pageNumber === page
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
        href={`/blog/page/${page + 1}`}>
        <li
          className={page === lastPage ? 'events-none' : ''}
        >
          <ArrowNext className="next"/>
          {/* <div className="next"/> */}
        </li>
      </Link>
    </StyledBlogPagination>
  )
}

export default BlogPagination;