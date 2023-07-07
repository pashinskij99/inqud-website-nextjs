import styled from '@emotion/styled'
import { urbanist } from '@/utils/font'

export const StyledInputTextWrapper = styled.div`
  .inputTextLabel {
    display: flex;
    justify-content: space-between;
    .inputTextLabelText {
      font-weight: 700;
    }
    .inputTextHelperTextTop {
      color: rgba(45, 52, 57, 0.6000000238418579);
    }
  }

  .inputTextInputWrapper {
    position: relative;
    .inputTextInput {
      height: 4.8rem;
      width: 100%;
      border-radius: 6.2rem;
      border: 0.1rem solid rgba(45, 52, 57, 0.20000000298023224);

      padding: 0 3.2rem 0 1.6rem;

      color: #2d3439;

      font-size: 1.8rem;
      font-weight: 400;
      line-height: 2.6rem;
      ${urbanist.style}

      background-color: transparent;

      &::placeholder {
        color: rgba(81, 113, 133, 0.6000000238418579);
      }

      &:focus-visible {
        outline: none;
      }

      .valid {
        border-color: rgba(7, 116, 83, 1);
      }
    }

    svg {
      display: none;
    }
  }

  .inputTextHelperTextBottom {
    color: rgba(45, 52, 57, 0.6000000238418579);
    .error {
      color: rgba(244, 92, 59, 1);
    }
  }
`
