import styled from '@emotion/styled'

export const StyledCartRequirement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .cartImageContainer {
    position: relative;
    width: 100%;
    height: 30rem;
  }

  .cartImage {
  }

  .cartBody {
    padding: 4rem 3.2rem 0;
    .cartTitle {
      font-weight: 700;
      margin-bottom: 1.6rem;
    }
    .cartDescription {
      color: #517185;
      margin-bottom: 3.2rem;
    }
    .cartBtn {
      margin: 0 auto;
    }
  }
`
