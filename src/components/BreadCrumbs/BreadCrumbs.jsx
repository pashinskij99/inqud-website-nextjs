'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { capitalize } from '@mui/material'
import { useSelector } from 'react-redux'
import { usePathname } from 'next-intl/client'
import {
  StyledBreadcrumbs,
  StyledBreadCrumbsWrapper,
} from '@/components/BreadCrumbs/BreadCrumbs.styled'
import { StyledTypographyUrbanistSmallSpaces } from '@/components/UI/Typography/Typography.styled'
import { getUrlForBreadCrumbs } from '@/utils/getUrlForBreadCrumbs'

function BreadCrumbs() {
  const [pages, setPages] = useState([])
  const pathname = usePathname()
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
      case 'company':
        return 'Company'
      case 'modern-slavery-statement':
        return 'modern slavery statement'
      case 'privacy-notice':
        return 'privacy notice'
      case 'cookie-policy':
        return 'cookie policy'
      case 'aml-cft-policy-uab':
        return 'AML CFT Policy UAB'
      case 'terms-of-use':
        return 'Terms of use'
      case 'contact-us':
        return 'Contact us'
      // for blog details page
      default:
        return breadcrumb.blog || ''
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

  return pathname !== '/' && pathname !== '/personal' ? (
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
  ) : null
}

export default BreadCrumbs
