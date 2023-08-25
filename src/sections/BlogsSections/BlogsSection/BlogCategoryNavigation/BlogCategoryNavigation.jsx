import clsx from 'clsx'
import { useContext, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { StyledBlogCategoryNavigationWrapper } from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation/BlogCategoryNavigation.styled'
import { StyledTypographyIBMH5 } from '@/components/UI/Typography/Typography.styled'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'

function Tag({ tag, isActive }) {
  const { searchParams } = useContext(BlogContext)

  // eslint-disable-next-line no-nested-ternary
  const tagQuery = searchParams.tag
    ? isActive
      ? searchParams.tag
          .split(',')
          .filter((currentTag) => currentTag !== tag.id)
          .join(',')
      : [].concat(searchParams.tag.split(','), tag.id).join(',')
    : tag.id

  return (
    <Link
      href={{
        query: { ...searchParams, tag: tagQuery, skip: 0, first: 3 },
      }}
    >
      <li className={clsx({ ['active']: isActive })}>
        <button>
          <StyledTypographyIBMH5>{tag.tag}</StyledTypographyIBMH5>
        </button>
      </li>
    </Link>
  )
}

function BlogCategoryNavigation() {
  const containerRef = useRef(null)
  const [marginLeft, setMarginLeft] = useState('0px')
  const { tags, activeTags } = useContext(BlogContext)

  const handleResize = () => {
    const ml = window.getComputedStyle(containerRef.current).marginLeft
    const pl = window.getComputedStyle(containerRef.current).paddingLeft

    setMarginLeft(`${parseInt(ml, 10) + parseInt(pl, 10)}px`)
  }

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <StyledBlogCategoryNavigationWrapper width={marginLeft}>
      <div ref={containerRef} className='container' />
      <div className='list-wrapper'>
        <ul style={{ paddingLeft: marginLeft }}>
          {activeTags.length === 0 && (
            <Tag isActive key='all' tag={{ tag: 'all' }} />
          )}
          {tags.map(
            (tag) =>
              activeTags.indexOf(tag.id) > -1 && (
                <Tag isActive key={tag.id} tag={tag} />
              )
          )}
        </ul>
        <ul>
          {tags.map(
            (tag) =>
              activeTags.indexOf(tag.id) === -1 && (
                <Tag key={tag.id} tag={tag} isActive={false} />
              )
          )}
        </ul>
      </div>
    </StyledBlogCategoryNavigationWrapper>
  )
}

export default BlogCategoryNavigation
