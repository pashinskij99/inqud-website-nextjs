import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const StyledHomeWrapper = styled(Box)`
  height: 100%;
  .pickSection {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    @media (max-width: 1200px) {
      position: relative;
      transform: translateY(0%);
    }
  }
`
