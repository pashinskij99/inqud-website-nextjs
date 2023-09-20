import clsx from 'clsx'
import {
  useContext,
  // useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
// import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { StyledBlogCategoryNavigationWrapper } from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation/BlogCategoryNavigation.styled'
import { StyledTypographyIBMH5 } from '@/components/UI/Typography/Typography.styled'
import { removeActiveTag, setActiveTag } from '@/store/features/blog/blogSlice'
import { fetchBlogs } from '@/store/features/blog/blogAsyncThunk'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
// import { BlogContext } from '@/contexts/BlogContext/BlogContext'

function Tag({ tag, isActive, handleClick = () => {} }) {
  // console.log(tag)
  // const dispatch = useDispatch()
  // const { searchParams } = useContext(BlogContext)

  // eslint-disable-next-line no-nested-ternary
  // const tagQuery = searchParams.tag
  //   ? isActive
  //     ? searchParams.tag
  //         .split(',')
  //         .filter((currentTag) => currentTag !== tag.id)
  //         .join(',')
  //     : [].concat(searchParams.tag.split(','), tag.id).join(',')
  //   : tag.id

  // const handleClick = () => {
  //   dispatch(setActiveTag(tag))
  // }

  return (
    // <Link
    //   href={{
    //     query: {
    //       ...searchParams,
    //       tag: tagQuery,
    //       skip: 0,
    //       first: searchParams.first || 12,
    //     },
    //   }}
    //   scroll={false}
    // >
    <li className={clsx({ ['active']: isActive })}>
      <button onClick={() => handleClick(tag)}>
        <StyledTypographyIBMH5>{tag.tag}</StyledTypographyIBMH5>
      </button>
    </li>
    // </Link>
  )
}

function BlogCategoryNavigation() {
  const containerRef = useRef(null)
  const dispatch = useDispatch()
  const { params } = useContext(BlogContext)
  const [marginLeft, setMarginLeft] = useState('0px')
  const { tags, activeTags, pagination, searchValue } = useSelector(
    (state) => state.blog
  )

  const handleResize = () => {
    const ml = window.getComputedStyle(containerRef.current).marginLeft
    const pl = window.getComputedStyle(containerRef.current).paddingLeft

    setMarginLeft(`${parseInt(ml, 10) + parseInt(pl, 10)}px`)
  }

  const handleFetchBlog = ({ activeTags }) => {
    dispatch(
      fetchBlogs({
        params,
        paginationParams: pagination,
        tags: activeTags,
        searchValue,
      })
    )
  }

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleActiveTag = (tag) => {
    dispatch(setActiveTag(tag))
    const currentActiveTags = [...activeTags].concat([tag])
    console.log(currentActiveTags)

    // console.log({ tags1: [...activeTags].concat([tag.id]), tags2: activeTags })
    handleFetchBlog({ activeTags: currentActiveTags })
  }
  const handleRemoveTag = (tag) => {
    dispatch(removeActiveTag(tag))
    const currentActiveTags = [...activeTags].filter(
      (currentTag) => currentTag.id !== tag.id
    )
    console.log(currentActiveTags)
    handleFetchBlog({ activeTags: currentActiveTags })
  }

  return (
    <StyledBlogCategoryNavigationWrapper width={marginLeft}>
      <div ref={containerRef} className='container' />
      <div className='list-wrapper'>
        <ul style={{ paddingLeft: marginLeft }}>
          {activeTags.length === 0 && (
            <Tag isActive key='all' tag={{ tag: 'all' }} />
          )}
          {activeTags.map(
            (tag) => (
              // activeTags.indexOf(tag.id) > -1 && (
              <Tag
                handleClick={handleRemoveTag}
                isActive
                key={tag.id}
                tag={tag}
              />
            )
            // )
          )}
        </ul>
        <ul>
          {tags.map(
            (tag) =>
              activeTags.indexOf(tag.id) === -1 && (
                <Tag
                  handleClick={handleActiveTag}
                  key={tag.id}
                  tag={tag}
                  isActive={false}
                />
              )
          )}
        </ul>
      </div>
    </StyledBlogCategoryNavigationWrapper>
  )
}

export default BlogCategoryNavigation
