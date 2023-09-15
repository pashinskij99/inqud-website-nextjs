'use client'

import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { capitalize } from '@mui/material'
import { useSelector } from 'react-redux'
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
  const breadcrumb = useSelector((state) => state.breadcrumb)

  const getCurrentPageName = (page) => {
    switch (page) {
      case 'blog':
        return 'insights'
      case 'crypto-widget':
        return 'crypto widget'
      case 'help-centre':
        return 'help centre'
      case 'inqud-api':
        return 'api'
      case 'modern-slavery-statement':
        return 'modern slavery statement'
      case 'privacy-notice':
        return 'privacy notice'
      case 'cookie-policy':
        return 'cookie policy'
      case 'aml-cft-policy-uab':
        return 'AML CFT Policy UAB'
      // for blog details page
      default:
        // eslint-disable-next-line no-nested-ternary
        return breadcrumb.blog
          ? breadcrumb.blog
          : page.split('-').length === 1
          ? page
          : null
      // : page
      // .split('-')
      // .map((word) => capitalize(word))
      // .join(' ')
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
  }, [pathname, breadcrumb])

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
