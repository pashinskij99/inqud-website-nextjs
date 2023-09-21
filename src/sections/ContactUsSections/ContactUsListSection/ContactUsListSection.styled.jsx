import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledContactUsListSectionWrapper = styled.section`
  padding-bottom: 160px;
  ${responsive.xl`
    padding-bottom: 96px;
  `}
  .container {
  }
  .listTitle {
    margin-bottom: 32px;
    ${responsive.xs`
        text-align: center;
    `}
  }
  .list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
`
