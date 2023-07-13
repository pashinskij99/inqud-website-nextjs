import styled from '@emotion/styled'
import {responsive} from '@/utils/response';

export const StyledHomeWrapper = styled.main`
  height: 100%;

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
    .pickPickButtonTablet {
      ${responsive.lg`
        display: block;
      `}
      ${responsive.xs`
        width: 100%;
      `}
    }
  }

  .pickSection2 {
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

    ${responsive.xs`
      .pickPickButton {
        display: block;
      }

      .pickPickButtonTablet {
        display: none;
      }
    `}
  }
`
