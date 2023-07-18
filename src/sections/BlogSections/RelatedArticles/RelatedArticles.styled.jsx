import styled from '@emotion/styled'
import { StyledBlogsSection } from '@/sections/HomeSections/BlogsSection/BlogsSection.styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledRelatedArticlesSection = styled(StyledBlogsSection)`
  padding-top: 0;
  padding-bottom: ${rem(140)};
  ${responsive.xl`
    padding-bottom: ${rem(138)};
    padding-top: 0;
  `}
  ${responsive.xs`
    padding-top: 0;
  `};
  .blogsHeader {
    ${responsive.xs`
      padding-top: 0;
    `}
    .blogsHeaderTitle {
      ${responsive.xl`
        font-size: ${rem(40)};
        font-weight: 700;
        line-height: ${rem(46)};
      `}
    }
  }
`
