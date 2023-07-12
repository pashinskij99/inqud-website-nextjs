import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledPickSectionSection = styled.section`
  border-radius: ${rem(30)};
  background: var(--ambitious-green, #077453);
  padding-left: ${rem(64)};

  overflow: hidden;

  width: 100%;
  display: flex;
  justify-content: space-between;

  height: ${rem(344)};

  align-items: center;

  @media (max-width: 1200px) {
    padding: ${rem(96)} 0 !important;
    max-width: 100% !important;
    border-radius: 0;
    flex-direction: column;
    height: auto;
    text-align: center;
  }

  .pickTitle {
    color: white;
    flex-shrink: 0;
    @media (max-width: 1200px) {
      margin-bottom: ${rem(24)};
      font-weight: 400;
    }
    @media (max-width: 992px) {
      line-height: ${rem(74.5)};
      .pickTitle10Minutes {
        margin-bottom: ${rem(11.5)};
      }

    }
    @media (max-width: 576px) {
      font-weight: 700;
      line-height: ${rem(50)};
      margin-bottom: ${rem(30)};
      .pickTitle10Minutes {
        margin-bottom: ${rem(6)};
      }
    }
  }

  .pickListMobile {
    display: none;

    @media (max-width: 576px) {
      display: block;
    }
  }

  .pickListDontLose {
    @media (max-width: 576px) {
      display: none;
    }
  }

  .pickList {
    flex-shrink: 0;
    margin-left: ${rem(20)};

    @media (max-width: 1200px) {
      margin-bottom: ${rem(40)};
      margin-left: 0;
    }
    @media (max-width: 576px) {
      margin-bottom: ${rem(38)};
    }

    .pickListTitle {
      color: white;
      font-weight: 700;
      margin-bottom: ${rem(24)};
      @media (max-width: 1200px) {
        margin-bottom: ${rem(24)};
      }

      @media (max-width: 576px) {
        font-size: ${rem(24)};
        font-weight: 700;
        margin-bottom: ${rem(28)};
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      row-gap: ${rem(16)};
      @media (max-width: 1200px) {
        text-align: start;
      }
      @media (max-width: 992px) {
        row-gap: ${rem(6)};
      }
      @media (max-width: 576px) {
        row-gap: ${rem(11)};
      }

      li {
        display: flex;
        align-items: center;
        font-weight: 500;
        gap: ${rem(16)};

        .pickListItemText {
          color: white;
        }

        svg {
          flex-shrink: 0;
        }
      }
    }
  }

  .pickList10Minutes {
    @media (max-width: 992px) {
      ul {
        gap: ${rem(21)};
        @media (max-width: 576px) {
          row-gap: ${rem(20)};
        }
      }

    }
  }

  .pickPick {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    padding: 0 ${rem(72)};
    background: var(--ambitious-green, #0f674d);
    @media (max-width: 1200px) {
      background: #077453;
    }

    @media (max-width: 576px) {
      width: 100%;
      padding: 0 ${rem(16)};
    }

    svg {
      margin-bottom: ${rem(16)};
      @media (max-width: 1200px) {
        display: none;
      }
    }

    .pickPickDescription {
      color: white;
      margin-bottom: ${rem(32)};
      font-weight: 500;
      @media (max-width: 1200px) {
        display: none;
      }
    }

    .pickPickButton {
      /* @media (max-width: 992px) {
        display: none;
      } */
      width: 100%;
    }

  }
`
