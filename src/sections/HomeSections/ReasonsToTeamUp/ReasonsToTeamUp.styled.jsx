import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledReasonsToTeamUp = styled.section`
  padding-top: ${rem(240)};
  padding-bottom: ${rem(214)};
  text-align: center;
  @media (max-width: 992px) {
    padding: ${rem(120)} 0 ${rem(97)};
  }
  @media (max-width: 576px) {
    padding: ${rem(96)} 0;
  }

  .reasonsToTeamUpTitle {
    margin-bottom: ${rem(24)};
    @media (max-width: 576px) {
      margin-bottom: ${rem(15)};
    }
  }

  .reasonsToTeamUpSubTitle {
    color: #517185;
    margin-bottom: ${rem(64)};
    @media (max-width: 576px) {
      margin-bottom: ${rem(39)};
    }
  }

  .reasonsToTeamUpGrid {
    display: grid;
    grid-template-columns: repeat(3, ${rem(390)});
    justify-content: space-between;
    justify-self: center;
    row-gap: ${rem(37)};
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, ${rem(320)});
      justify-items: center;
      row-gap: ${rem(48)};
      justify-content: center;
      column-gap: ${rem(48)};
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      column-gap: 0;
    }

    @media (max-width: 576px) {
      justify-items: start;
      justify-content: start;
      text-align: start;
      row-gap: ${rem(21)};
    }

    li {
      @media (max-width: 576px) {
        display: flex;
        align-items: center;
        gap: ${rem(24)};
      }

      svg {
        margin-bottom: ${rem(23)};
        @media (max-width: 576px) {
          flex-shrink: 0;
          margin-bottom: 0;
        }
      }

      .reasonsToTeamUpGridItemTitle {
        font-weight: 700;
        margin-bottom: ${rem(14)};
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
