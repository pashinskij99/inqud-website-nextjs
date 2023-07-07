import styled from '@emotion/styled'

export const StyledPickSectionSection = styled.section`
  border-radius: 30px;
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
    @media (max-width: 576px) {
      font-weight: 700;
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

    @media (max-width: 1200px) {
      margin-bottom: 4rem;
    }

    .pickListTitle {
      color: white;
      font-weight: 700;
      margin-bottom: 2.2rem;
      @media (max-width: 1200px) {
        margin-bottom: 2.4rem;
      }
      @media (max-width: 576px) {
        font-size: 2.4rem;
        font-weight: 700;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      @media (max-width: 1200px) {
        text-align: start;
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
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }
`
