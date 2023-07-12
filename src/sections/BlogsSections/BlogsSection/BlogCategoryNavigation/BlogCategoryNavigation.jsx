import clsx from 'clsx';
import {useLayoutEffect, useRef, useState} from 'react';
import {
  StyledBlogCategoryNavigationWrapper
} from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation/BlogCategoryNavigation.styled';
import {StyledTypographyIBMH5} from '@/components/UI/Typography/Typography.styled';

function BlogCategoryNavigation({category}) {
  const containerRef = useRef(null)
  const [marginLeft, setMarginLeft] = useState('0px')

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
      <div ref={containerRef} className="container"/>

      <ul style={{paddingLeft: marginLeft}}>
        {category.map(({name}) =>
          <li
            key={name}
            className={clsx({
              ['active']: name === 'ALL'
            })}
          >
            <button>
              <StyledTypographyIBMH5>
                {name}
              </StyledTypographyIBMH5>
            </button>
          </li>
        )}
      </ul>
      {/* </div> */}
    </StyledBlogCategoryNavigationWrapper>
  );
}

export default BlogCategoryNavigation;