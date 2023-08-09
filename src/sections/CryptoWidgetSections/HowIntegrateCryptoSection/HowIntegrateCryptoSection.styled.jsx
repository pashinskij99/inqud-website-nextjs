import styled from '@emotion/styled'
import { StyledHowIntegrateWrapper } from '@/sections/ApiSections/HowIntegrate/HowIntegrate.styled'
import { responsive } from '@/utils/response'

export const StyledHowIntegrateCryptoSectionWrapper = styled(
  StyledHowIntegrateWrapper
)`
  .steps-wrapper {
    ${responsive.sm`
      margin-bottom: 36px;
    `}
  }
  .get-started-button {
    ${responsive.sm`
      width: fit-content;
      svg {
        position: static;
      }
    `}
  }
`
