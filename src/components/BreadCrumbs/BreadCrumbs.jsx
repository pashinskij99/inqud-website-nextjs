'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next-intl/client'
import { useSelector } from 'react-redux'
import { StyledBreadcrumbs } from '@/components/BreadCrumbs/BreadCrumbs.styled'
import { StyledTypographyUrbanistSmallSpaces } from '@/components/UI/Typography/Typography.styled'

function BreadCrumbs() {
  const pathname = usePathname()

  // const getCurrentPageName = (page) => {
  //   switch (page) {
  //     case 'blog':
  //       return 'insights'
  //     case 'crypto-widget':
  //       return 'crypto widget'
  //     case 'help-center':
  //       return 'help centre'
  //     case 'integration-api':
  //       return 'api'
  //     case 'company':
  //       return 'Company'
  //     case 'modern-slavery-statement':
  //       return 'modern slavery statement'
  //     case 'privacy-notice':
  //       return 'privacy notice'
  //     case 'cookie-policy':
  //       return 'cookie policy'
  //     case 'aml-cft-policy-uab':
  //       return 'AML CFT Policy UAB'
  //     case 'terms-of-use':
  //       return 'Terms of use'
  //     case 'contact-us':
  //       return 'Contact us'
  //     default:
  //       return breadcrumb.blog || ''
  //   }
  // }

  const { breadcrumb } = useSelector((state) => state.breadcrumb)

  return pathname !== '/' && pathname !== '/personal' ? (
    <div className='containerHeader'>
      <StyledBreadcrumbs visible={Boolean(breadcrumb.length)}>
        <Link href='/' className='breadCrumbLink'>
          <StyledTypographyUrbanistSmallSpaces className='breadCrumbText'>
            Home page
          </StyledTypographyUrbanistSmallSpaces>
        </Link>
        {breadcrumb.map(({ name, href }) => (
          <Link key={name} href={href} className='breadCrumbLink'>
            <StyledTypographyUrbanistSmallSpaces className='breadCrumbText'>
              {name}
            </StyledTypographyUrbanistSmallSpaces>
          </Link>
        ))}
      </StyledBreadcrumbs>
    </div>
  ) : null
}

export default BreadCrumbs
