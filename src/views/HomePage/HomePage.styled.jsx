import styled from '@emotion/styled'

export const StyledHomeWrapper = styled.main`
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
    .pickPickButtonTablet {
      @media (max-width: 992px) {
        display: block;
      }
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }

  .pickSection2 {
    .pickPickButtonTablet {
      display: none;
    }
    @media (max-width: 992px) {
      .pickPickButton {
        display: none;
      }
      .pickPickButtonTablet {
        display: block;
      }
    }
    @media (max-width: 576px) {
      .pickPickButton {
        display: block;
      }
      .pickPickButtonTablet {
        display: none;
      }
    }
  }
`
