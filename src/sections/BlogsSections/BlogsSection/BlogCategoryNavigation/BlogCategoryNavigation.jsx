import clsx from 'clsx'
import { useContext, useLayoutEffect, useRef, useState } from 'react'
import { StyledBlogCategoryNavigationWrapper } from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation/BlogCategoryNavigation.styled'
import { StyledTypographyIBMH5 } from '@/components/UI/Typography/Typography.styled'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'

function Tag({ tag, removeActiveTab, addActiveTag, isActive }) {
  return (
    <li className={clsx({ ['active']: isActive })}>
      <button
        onClick={() =>
          isActive ? removeActiveTab(tag.id) : addActiveTag(tag.id)
        }
      >
        <StyledTypographyIBMH5>{tag.tag}</StyledTypographyIBMH5>
      </button>
    </li>
  )
}

function BlogCategoryNavigation() {
  const containerRef = useRef(null)
  const [marginLeft, setMarginLeft] = useState('0px')
  const { tags, activeTags, removeActiveTab, addActiveTag } =
    useContext(BlogContext)

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
            <Tag
              removeActiveTab={removeActiveTab}
              addActiveTag={addActiveTag}
              isActive
              key='all'
              tag={{ tag: 'all' }}
            />
          )}
          {tags.map(
            (tag) =>
              activeTags.indexOf(tag.id) > -1 && (
                <Tag
                  removeActiveTab={removeActiveTab}
                  addActiveTag={addActiveTag}
                  isActive
                  key={tag.id}
                  tag={tag}
                />
              )
          )}
        </ul>
        <ul>
          {tags.map(
            (tag) =>
              activeTags.indexOf(tag.id) === -1 && (
                <Tag
                  key={tag.id}
                  tag={tag}
                  isActive={false}
                  removeActiveTab={removeActiveTab}
                  addActiveTag={addActiveTag}
                />
              )
          )}
        </ul>
      </div>
    </StyledBlogCategoryNavigationWrapper>
  )
}

export default BlogCategoryNavigation
