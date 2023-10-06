import styled from '@emotion/styled'
import { nunito } from '@/utils/font'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

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
      height: ${rem(48)};
      width: 100%;
      border-radius: ${rem(62)};
      border: 1px solid rgba(45, 52, 57, 0.20000000298023224);

      padding: 0 32px 0 24px;

      color: #2d3439;

      font-size: ${rem(18)};
      font-weight: 400;
      line-height: ${rem(26)};
      ${nunito.style}

      background-color: transparent;
      ${responsive.xl`
        padding: 0 ${rem(32)} 0 ${rem(22)};
      `}
      ${responsive.sm`
        padding: 0 ${rem(32)} 0 ${rem(24)};
      `}
      &::placeholder {
        color: rgba(81, 113, 133, 0.6000000238418579);
        opacity: 1;
      }

      &:focus-visible {
        outline: none;
      }

      .valid {
        border-color: rgba(7, 116, 83, 1);
      }
    }

    img {
      display: none;
    }
  }

  .inputTextHelperTextBottom {
    color: rgba(45, 52, 57, 0.6000000238418579);

    &.error {
      color: rgba(244, 92, 59, 1);
    }
  }
`

export const StyledInputSearchWrapper = styled.div`
  height: ${rem(48)};
  position: relative;

  button {
    display: contents;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${rem(13)};
    pointer-events: none;
    touch-action: none;
  }

  .close {
    display: none;
    position: absolute;
    right: 13.5px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    ${responsive.xl`
      right: 16.5px;
    `}
    ${responsive.sm`
      right: 16px;
    `}

    &.active {
      display: block;
    }
  }

  .input {
    padding: 0 ${rem(30)} 0 ${rem(45)};
    height: 100%;
    width: 100%;
    border-radius: ${rem(42)};
    background-color: rgba(243, 246, 248, 1);
    border: 1px solid rgba(243, 246, 248, 1);
    color: rgba(45, 52, 57, 1);
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: ${rem(26)};

    ${nunito.style}
    &::placeholder {
      color: rgba(81, 113, 133, 0.6000000238418579);
      opacity: 1;
    }

    &:focus {
      border-color: rgba(7, 116, 83, 1);
    }

    &:focus-visible {
      outline: none;
    }
  }
`

export const StyledInputSendRequestWrapper = styled(StyledInputSearchWrapper)`
  height: auto;

  .label {
    margin-bottom: ${rem(4)};
    font-weight: 700;
    line-height: 1;
    margin-left: ${rem(16)};
    color: rgba(45, 52, 57, 1) !important;
  }

  .input {
    height: ${rem(48)};
    padding: ${rem(11)} ${rem(16)};
    line-height: 1;
    color: rgba(45, 52, 57, 1);
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: ${rem(26)};

    ${nunito.style}
    &::placeholder {
      color: rgba(45, 52, 57, 0.6000000238418579);
      font-size: ${rem(18)};
      font-weight: 400;
      line-height: ${rem(26)};
      opacity: 1;
      ${nunito.style}
    }
  }
  .inputTextHelperTextBottom {
    margin-left: ${rem(16)};
    text-align: start;
    color: rgba(45, 52, 57, 0.6000000238418579);
    &.error {
      color: rgba(244, 92, 59, 1) !important;
    }
  }
`

export const StyledTextAreaSendRequest = styled(StyledInputSendRequestWrapper)`
  .input {
    //border: none;
    overflow: hidden;
    background: rgba(243, 246, 248, 1);
    width: 100%;
    border-radius: ${rem(22)};
    resize: none;
    height: ${rem(96)};

    &:focus {
      border-color: rgba(7, 116, 83, 1);
    }
  }

  .inputTextHelperTextBottom {
    color: rgba(45, 52, 57, 0.6000000238418579);
    text-align: start;
    margin-left: ${rem(16)};

    &.error {
      color: rgba(244, 92, 59, 1);
    }
  }
`
