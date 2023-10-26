'use client'

import Link from 'next/link'
import { usePathname } from 'next-intl/client'
import { useSelector } from 'react-redux'
import { StyledBreadcrumbs } from '@/components/BreadCrumbs/BreadCrumbs.styled'
import { StyledTypographyUrbanistSmallSpaces } from '@/components/UI/Typography/Typography.styled'

function BreadCrumbs({ data }) {
  const pathname = usePathname()
  const { breadcrumb } = useSelector((state) => state.breadcrumb)

  return pathname !== '/' && pathname !== '/personal' ? (
    <div className='containerHeader'>
      <StyledBreadcrumbs visible={Boolean(breadcrumb.length)}>
        <Link href='/' className='breadCrumbLink'>
          <StyledTypographyUrbanistSmallSpaces className='breadCrumbText'>
            {data.breadcrumb}
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
