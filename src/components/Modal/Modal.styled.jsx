import styled from '@emotion/styled'
import { Dialog, Modal } from '@mui/material'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledModalSendRequestWrapper = styled(Modal)`
  background-color: rgba(45, 52, 57, 0.0000000298023224);

  .modalContainer {
    padding: ${rem(64)} ${rem(40)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${rem(498)};
    background-color: rgba(255, 255, 255, 1);
    border-radius: ${rem(30)};
    text-align: center;

    &:focus-visible {
      outline: none;
    }

    ${responsive.xs`
      max-width: 100%;
    `}
  }

  .closeButton {
    position: absolute;
    top: ${rem(32)};
    right: ${rem(32)};
  }

  .header {
    svg {
      margin-bottom: ${rem(16)};
    }

    h3 {
      font-weight: 700;
      margin-bottom: ${rem(8)};
    }

    p {
      color: #517185;
      margin-bottom: ${rem(32)};
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
    margin-bottom: ${rem(32)};

    .label {
      text-align: start;
      margin-left: ${rem(16)};
    }
  }

  .footer {
    button {
      width: 100%;
      margin-bottom: ${rem(16)};
    }

    p {
      color: rgba(81, 113, 133, 0.6000000238418579);
    }
  }
`

export const StyledModalSubmitEmailWrapper = styled(Modal)`
  background-color: rgba(45, 52, 57, 0.0000000298023224);

  .modalContainer {
    padding: ${rem(64)} ${rem(40)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${rem(498)};
    background-color: rgba(255, 255, 255, 1);
    border-radius: ${rem(30)};
    text-align: center;

    &:focus-visible {
      outline: none;
    }

    ${responsive.xs`
      max-width: 100%;
    `}
  }

  .closeButton {
    position: absolute;
    top: ${rem(32)};
    right: ${rem(32)};
  }

  .header {
    svg {
      margin-bottom: ${rem(16)};
    }

    h3 {
      font-weight: 700;
      margin-bottom: ${rem(8)};
    }

    p {
      color: #517185;
      margin-bottom: ${rem(32)};
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
    margin-bottom: ${rem(32)};

    .label {
      text-align: start;
      margin-left: ${rem(16)};
    }
  }

  .footer {
    button {
      width: 100%;
      margin-bottom: ${rem(16)};
    }

    p {
      color: rgba(81, 113, 133, 0.6000000238418579);
    }
  }
`

export const StyledFeeModalWrapper = styled(Dialog)`
  .MuiDialogContent-root.css-ypiqx9-MuiDialogContent-root,
  .MuiDialogContent-root.css-1ty026z {
    display: contents;
  }
  .css-2zwj5t-MuiPaper-root-MuiDialog-paper,
  .css-wpa0th {
    background-color: transparent;
    box-shadow: none;
  }
  .modalContainer {
    /* position: absolute; */
    border-radius: ${rem(30)};
    background: var(--clarity-white, #fff);
    padding: ${rem(40)};
    width: 100%;
    max-width: ${rem(498)};
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    &:focus-visible {
      outline: none;
    }

    ${responsive.xs`
      padding: ${rem(40)} ${rem(10)};
    `};
    .closeButton {
      position: absolute;
      right: ${rem(16)};
      top: ${rem(16)};
      svg {
      }
    }

    .header {
      margin-bottom: ${rem(24)};
      h4 {
        font-weight: 700;
      }
    }

    .body {
      .input-wrapper {
        margin-bottom: ${rem(32)};
      }
      .description {
        margin-bottom: ${rem(18)};
      }

      .tabs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        outline: 1px solid rgba(129, 158, 176, 0.2);
        outline-offset: ${rem(2)};
        border-radius: ${rem(72)};
        margin-bottom: ${rem(18)};

        button {
          height: ${rem(40)};
          flex: 0 0 auto;
          background-color: transparent;
          border-radius: ${rem(72)};
          /* transition: 0.1s ease-in-out; */
          p {
            color: rgba(81, 113, 133, 1);
            /* transition: 0.1s ease-in-out; */
          }
          &.active {
            background-color: rgba(7, 116, 83, 1);
            p {
              color: #fff;
              font-weight: 700;
            }
          }
        }
      }
      .tab-content {
        margin-bottom: ${rem(32)};
        .tabInput {
          p {
            color: rgba(45, 52, 57, 1) !important;
          }
        }
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: ${rem(16)};
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      row-gap: ${rem(16)};

      .submit-btn {
        height: ${rem(56)};
        display: inline-block;
        border-radius: 54px;
        background: #819eb0;
        transition: 0.3s ease-in-out;
        p {
          color: rgba(255, 255, 255, 1);
          font-weight: 700;
        }

        &:hover {
          background: #7fa8c2;
        }
      }

      .description {
        text-align: center;
        color: rgba(81, 113, 133, 0.6000000238418579);
      }
    }
  }
`
