import styled from '@emotion/styled'

export const StyledReasonsToTeamUp = styled.section`
  padding-top: 24rem;
  padding-bottom: 21.4rem;
  text-align: center;
  @media (max-width: 992px) {
    padding: 12rem 0;
  }
  @media (max-width: 576px) {
    padding: 9.6rem 0;
  }
  .reasonsToTeamUpTitle {
    margin-bottom: 2.4rem;
  }
  .reasonsToTeamUpSubTitle {
    color: #517185;
    margin-bottom: 6.4rem;
  }
  .reasonsToTeamUpGrid {
    display: grid;
    grid-template-columns: repeat(3, 320px);
    justify-content: space-between;
    row-gap: 3.8rem;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 320px);
      justify-items: center;
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
    }

    @media (max-width: 576px) {
      justify-items: start;
      justify-content: start;
      text-align: start;
      row-gap: 2.4rem;
    }
    li {
      @media (max-width: 576px) {
        display: flex;
        align-items: center;
        gap: 2.4rem;
      }
      svg {
        margin-bottom: 2.4rem;
        @media (max-width: 576px) {
          flex-shrink: 0;
          margin-bottom: 0;
        }
      }
      .reasonsToTeamUpGridItemTitle {
        font-weight: 700;
        margin-bottom: 1.6rem;
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
