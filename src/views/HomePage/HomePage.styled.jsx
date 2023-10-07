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
    .pickTitle {
      width: 365px;
      ${responsive.xl`
        width: 100%;
      `}
    }
    .pickList_dontLose {
      max-width: 335.33px;
      width: 100%;
      ${responsive.sm`
        max-width: 100%; 
      `}
    }
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
    ${responsive.xl`
      padding-bottom: 76px !important;
      grid-template-columns: 332px 312px;
      column-gap: 44px;
      
      .pickTitle {
        margin-bottom: 6px;
      }
      .pickPick {
        transform: translateY(-19px);
      }
      .pickList {
        ul {
          gap: 16px;
        }
      }
    `}
    ${responsive.sm`
      order: 9;
    `}
    .pickPickButtonTablet {
      display: none;
    }

    ${responsive.xl`
      // .pickPickButton {
      //   display: none;
      // }

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
