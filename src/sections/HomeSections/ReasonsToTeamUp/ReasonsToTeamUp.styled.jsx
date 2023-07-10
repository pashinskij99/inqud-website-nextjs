import styled from '@emotion/styled'

export const StyledReasonsToTeamUp = styled.section`
  padding-top: 24rem;
  padding-bottom: 21.4rem;
  text-align: center;
  @media (max-width: 992px) {
    padding: 12rem 0 9.7rem;
  }
  @media (max-width: 576px) {
    padding: 9.6rem 0;
  }
  .reasonsToTeamUpTitle {
    margin-bottom: 2.4rem;
    @media (max-width: 576px) {
      margin-bottom: 1.5rem;
    }
  }
  .reasonsToTeamUpSubTitle {
    color: #517185;
    margin-bottom: 6.4rem;
    @media (max-width: 576px) {
      margin-bottom: 3.9rem;
    }
  }
  .reasonsToTeamUpGrid {
    display: grid;
    grid-template-columns: repeat(3, 390px);
    justify-content: space-between;
    justify-self: center;
    row-gap: 3.7rem;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 320px);
      justify-items: center;
      row-gap: 4.8rem;
      justify-content: center;
      column-gap: 4.8rem;
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      column-gap: 0rem;
    }

    @media (max-width: 576px) {
      justify-items: start;
      justify-content: start;
      text-align: start;
      row-gap: 2.1rem;
    }
    li {
      @media (max-width: 576px) {
        display: flex;
        align-items: center;
        gap: 2.4rem;
      }
      svg {
        margin-bottom: 2.3rem;
        @media (max-width: 576px) {
          flex-shrink: 0;
          margin-bottom: 0;
        }
      }
      .reasonsToTeamUpGridItemTitle {
        font-weight: 700;
        margin-bottom: 1.4rem;
        @media (max-width: 576px) {
          margin-bottom: 0;
          font-weight: 400;
          br {
            display: none;
          }
        }
      }
      .reasonsToTeamUpGridItemDescription {
        color: #517185;
        @media (max-width: 576px) {
          display: none;
        }
      }
    }
  }
`
