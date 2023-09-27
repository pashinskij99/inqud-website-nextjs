import styled from '@emotion/styled'
import { Breadcrumbs } from '@mui/material'
import { rem } from '@/utils/rem'
import { nunito } from '@/utils/font'

export const StyledBreadCrumbsWrapper = styled.div``
export const StyledBreadcrumbs = styled(Breadcrumbs)`
  padding: ${rem(10)} 0;
  ${nunito.style}

  .containerHeader {
  }

  .breadCrumbLink {
  }

  .breadCrumbText {
    color: rgba(45, 52, 57, 1);
  }

  ol {
    li {
      font-size: ${rem(14)};
      color: rgba(45, 52, 57, 1);
      cursor: pointer;
      a {
        display: inline-block;
      }
      p {
        transition: color 0.3s ease-in-out;
      }
      &:hover {
        p {
          color: #077453;
        }
      }

      &:nth-of-type(even) {
        color: rgba(81, 113, 133, 0.6000000238418579);
        pointer-events: none;
      }
      &:last-of-type {
        pointer-events: none;
        touch-action: none;
        .breadCrumbText {
          color: rgba(81, 113, 133, 0.6000000238418579);
        }
      }

      /* &:nth-last-child(2) {
        color: rgba(81, 113, 133, 1);
      } */
    }
  }
`
