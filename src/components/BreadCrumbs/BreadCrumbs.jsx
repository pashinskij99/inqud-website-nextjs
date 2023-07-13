import Link from 'next/link';
import clsx from 'clsx';
import {StyledBreadcrumbs, StyledBreadCrumbsWrapper} from '@/components/BreadCrumbs/BreadCrumbs.styled';
import {StyledTypographyUrbanistSmallSpaces} from '@/components/UI/Typography/Typography.styled';

function BreadCrumbs({pages, className}) {
  return (
    <StyledBreadCrumbsWrapper>
      <hr/>
      
      <div className="containerHeader">

        <StyledBreadcrumbs className={className}>
          {pages.map(({name, href}, i) => (
            <Link
              key={name} href={href}
              className={clsx('breadCrumbLink', {
                ['last']: pages.length - 1 === i
              })}
            >
              <StyledTypographyUrbanistSmallSpaces className="breadCrumbText">
                {name}
              </StyledTypographyUrbanistSmallSpaces>
            </Link>
          ))}

        </StyledBreadcrumbs>
      </div>
    </StyledBreadCrumbsWrapper>


  );
}

export default BreadCrumbs;