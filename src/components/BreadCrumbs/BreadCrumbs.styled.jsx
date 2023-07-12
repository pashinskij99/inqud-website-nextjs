import styled from '@emotion/styled';
import {Breadcrumbs} from '@mui/material';
import {rem} from '@/utils/rem';

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  padding: ${rem(10)} ${rem(60)};
  border-top: 1px solid rgba(0, 0, 0, 0.07);

  .breadCrumbLink {

  }

  .breadCrumbText {
    color: rgba(45, 52, 57, 1);
  }

  .css-4pdmu4-MuiBreadcrumbs-ol {

    li {
      font-size: ${rem(14)};
      color: rgba(45, 52, 57, 1);

      &:nth-last-child(2) {
        color: rgba(81, 113, 133, 1);
      }
    }

  }

  .last {
    pointer-events: none;
    touch-action: none;

    .breadCrumbText {
      color: rgba(81, 113, 133, 1);
    }
  }
`