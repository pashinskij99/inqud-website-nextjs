import clsx from 'clsx'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scroller } from 'react-scroll'
import { StyledBlogPagination } from '@/sections/BlogsSections/BlogsSection/BlogPagination/BlogPagination.styled'
import {
  DOTS,
  usePagination,
} from '@/sections/BlogsSections/BlogsSection/BlogPagination/usePagination'
import { StyledTypographyUrbanistBody } from '@/components/UI/Typography/Typography.styled'
import ArrowPrev from '@/assets/icons/arrow-prev.svg'
import ArrowNext from '@/assets/icons/arrow-next.svg'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { ButtonLoadMoreLarge } from '@/components/UI/Button'
import { fetchBlogs } from '@/store/features/blog/blogAsyncThunk'
import { setIsLoadingRule, setPage } from '@/store/features/blog/blogSlice'
import { Loader } from '@/components/Loader'

function BlogPagination({ total, pageSize }) {
  const dispatch = useDispatch()
  const { page, pagination, activeTags, searchValue } = useSelector(
    (state) => state.blog
  )
  const { params } = useContext(BlogContext)

  const paginationRange = usePagination({
    currentPage: page,
    totalCount: total,
    siblingCount: 1,
    pageSize,
  })

  if (page === 0 || paginationRange.length < 2) {
    return null
  }

  const handlePage = ({ page, skip }) => {
    scroller.scrollTo('blog', {
      offset: -25,
      duration: 500,
      smooth: true,
    })
    dispatch(setPage(page))
    dispatch(
      fetchBlogs({
        params,
        paginationParams: {
          ...pagination,
          skip,
        },
        tags: activeTags,
        searchValue,
      })
    )
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <>
      <ButtonLoadMore pagination={pagination} lastPage={lastPage} page={page} />

      {page === 0 || paginationRange.length < 2 ? null : (
        <StyledBlogPagination>
          <button
            onClick={() =>
              handlePage({
                page: page - 1,
                skip: pagination.skip - pagination.first,
              })
            }
            className={page === 1 ? 'events-none' : 'active'}
            disabled={page === 1}
          >
            <ArrowPrev className='prev' />
          </button>

          <div className='list-numbers'>
            {paginationRange.map((pageNumber) => {
              if (pageNumber === DOTS) {
                return (
                  <li className='dots number' key={Math.random()}>
                    <StyledTypographyUrbanistBody>
                      ...
                    </StyledTypographyUrbanistBody>
                  </li>
                )
              }

              return (
                <button
                  onClick={() =>
                    handlePage({
                      page: pageNumber,
                      skip: pagination.first * pageNumber - pagination.first,
                    })
                  }
                  className={clsx('number', {
                    ['active']: pageNumber === page,
                  })}
                  disabled={pageNumber === page}
                >
                  <StyledTypographyUrbanistBody>
                    {pageNumber}
                  </StyledTypographyUrbanistBody>
                </button>
              )
            })}
          </div>
          {/* <LinkAnchor
            to='blog'
            onClick={() =>
              handlePage({
                page: page + 1,
                skip: pagination.skip + pagination.first,
              })
            }
            // spy
            smooth
            // duration={500}
          > */}
          <button
            onClick={() =>
              handlePage({
                page: page + 1,
                skip: pagination.skip + pagination.first,
              })
            }
            className={page === lastPage ? 'events-none' : 'active'}
            disabled={page === lastPage}
          >
            <ArrowNext className='next' />
          </button>
          {/* </LinkAnchor> */}
        </StyledBlogPagination>
      )}
    </>
  )
}

function ButtonLoadMore({ lastPage, page, pagination }) {
  const { heroSectionData, params } = useContext(BlogContext)
  const { activeTags, searchValue, isLoading } = useSelector(
    (state) => state.blog
  )
  const dispatch = useDispatch()

  const handleLoadMore = () => {
    dispatch(setIsLoadingRule(false))
    dispatch(
      fetchBlogs({
        params,
        paginationParams: {
          ...pagination,

          first: pagination.first + 3,
        },
        tags: activeTags,
        searchValue,
      })
    )
  }

  return lastPage === page ? null : (
    <>
      {Math.floor(pagination.skip / pagination.first + 1 || 1) && (
        <>
          {pagination.first >= pagination.count ? (
            <>
              {pagination.count >= 4 ? (
                <ButtonLoadMoreLarge className='loadMoreButton'>
                  Load less
                </ButtonLoadMoreLarge>
              ) : null}
            </>
          ) : (
            <ButtonLoadMoreLarge
              onClick={handleLoadMore}
              className='loadMoreButton'
            >
              {isLoading ? (
                heroSectionData.buttonLoadMore
              ) : (
                <Loader className='loadMoreButtonLoader' />
              )}
            </ButtonLoadMoreLarge>
          )}
        </>
      )}
    </>
  )
}

export default BlogPagination
