import Link from 'next/link'
import {
  StyledBreadcrumbs,
  StyledBreadCrumbsWrapper,
} from '@/components/BreadCrumbs/BreadCrumbs.styled'
import { StyledTypographyUrbanistSmallSpaces } from '@/components/UI/Typography/Typography.styled'

function BreadCrumbs({ pages, className }) {
  return (
    <StyledBreadCrumbsWrapper>
      <div className='containerHeader'>
        <StyledBreadcrumbs className={className}>
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
