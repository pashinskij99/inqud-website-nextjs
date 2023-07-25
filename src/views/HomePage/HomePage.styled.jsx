import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledHomeWrapper = styled.main`
  height: 100%;

  ${responsive.sm`
    display: grid;
  `}

  .pickSection {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    transform: translateY(-50%);

    ${responsive.xl`
      position: relative;
      transform: translateY(0%);
    `}
    ${responsive.sm`
      order: 6;
    `}
    .pickPickButtonTablet {
      ${responsive.lg`
        display: block;
      `}
      ${responsive.sm`
        width: 100%;
      `}
    }
  }

  .pickSection2 {
    ${responsive.sm`
      order: 9;
    `}
    .pickPickButtonTablet {
      display: none;
    }

    ${responsive.lg`
      .pickPickButton {
        display: none;
      }

      .pickPickButtonTablet {
        display: block;
      }
    `}

    ${responsive.sm`
      .pickPickButton {
        display: block;
      }

      .pickPickButtonTablet {
        display: none;
      }
    `}
  }
`
