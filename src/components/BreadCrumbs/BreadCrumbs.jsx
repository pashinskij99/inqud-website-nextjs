'use client'

import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { capitalize } from '@mui/material'
import {
  StyledBreadcrumbs,
  StyledBreadCrumbsWrapper,
} from '@/components/BreadCrumbs/BreadCrumbs.styled'
import { StyledTypographyUrbanistSmallSpaces } from '@/components/UI/Typography/Typography.styled'
import { getUrlForBreadCrumbs } from '@/utils/getUrlForBreadCrumbs'
import { NotFoundContext } from '@/contexts/NotFoundContext/NotFoundContext'

function BreadCrumbs() {
  const [pages, setPages] = useState([])
  const pathname = usePathname()

  const { isNotFound } = useContext(NotFoundContext)

  const getCurrentPageName = (page) => {
    switch (page) {
      case 'blog':
        return 'insights'
      case 'crypto-widget':
        return 'crypto widget'
      case 'help-centre':
        return 'help centre'

      default:
        return page
    }
  }

  useEffect(() => {
    const path = getUrlForBreadCrumbs(pathname)

    const pagesArray = path.map((page, i) => ({
      id: i,
      name: page ? capitalize(getCurrentPageName(page)) : 'Home page',
      href: page ? `/${page}` : '/',
    }))
    setPages(pagesArray)
  }, [pathname])

  return isNotFound ? null : (
    <StyledBreadCrumbsWrapper>
      <div className='containerHeader'>
        <StyledBreadcrumbs>
          {pages.map(({ name, href }) => (
            <Link key={name} href={href} className='breadCrumbLink'>
              <StyledTypographyUrbanistSmallSpaces className='breadCrumbText'>
                {name}
              </StyledTypographyUrbanistSmallSpaces>
            </Link>
          ))}
        </StyledBreadcrumbs>
      </div>
    </StyledBreadCrumbsWrapper>
  )
}

export default BreadCrumbs
