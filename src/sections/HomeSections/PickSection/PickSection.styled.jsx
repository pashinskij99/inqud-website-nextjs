import styled from '@emotion/styled'

export const StyledPickSectionSection = styled.section`
  border-radius: 3rem;
  background: var(--ambitious-green, #077453);
  padding-left: 6.4rem;

  overflow: hidden;

  width: 100%;
  display: flex;
  justify-content: space-between;

  height: 34.4rem;

  align-items: center;

  @media (max-width: 1200px) {
    padding: 9.6rem 0 !important;
    max-width: 100% !important;
    border-radius: 0px;
    flex-direction: column;
    height: auto;
    text-align: center;
  }
  .pickTitle {
    color: white;
    flex-shrink: 0;
    @media (max-width: 1200px) {
      margin-bottom: 2.4rem;
      font-weight: 400;
    }
    @media (max-width: 992px) {
      line-height: 7.45rem;
      .pickTitle10Minutes {
        margin-bottom: 1.15rem;
      }

    }
    @media (max-width: 576px) {
      font-weight: 700;
      line-height: 5rem;
      margin-bottom: 3rem;
      .pickTitle10Minutes {
        margin-bottom: .6rem;
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
    margin-left: 2rem;

    @media (max-width: 1200px) {
      margin-bottom: 4rem;
      margin-left: 0rem;
    }
    @media (max-width: 576px) {
      margin-bottom: 3.8rem;
    }

    .pickListTitle {
      color: white;
      font-weight: 700;
      margin-bottom: 2.4rem;
      @media (max-width: 1200px) {
        margin-bottom: 2.4rem;
      }

      @media (max-width: 576px) {
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: 2.8rem;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 1.6rem;
      @media (max-width: 1200px) {
        text-align: start;
      }
      @media (max-width: 992px) {
        row-gap: 0.6rem;
      }
      @media (max-width: 576px) {
        row-gap: 1.1rem;
      }
      li {
        display: flex;
        align-items: center;
        font-weight: 500;
        gap: 1.6rem;
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
        gap: 2.1rem;
        @media (max-width: 576px) {
          row-gap: 2rem;
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
    padding: 0 7.2rem;
    background: var(--ambitious-green, #0f674d);
    @media (max-width: 1200px) {
      background: #077453;
    }

    @media (max-width: 576px) {
      width: 100%;
      padding: 0 1.6rem;
    }

    svg {
      margin-bottom: 1.6rem;
      @media (max-width: 1200px) {
        display: none;
      }
    }

    .pickPickDescription {
      color: white;
      margin-bottom: 3.2rem;
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
