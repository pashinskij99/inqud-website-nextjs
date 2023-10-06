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

    ${responsive.sm`
      width: 95%;
      padding: 56px 16px;
    `}
  }

  .closeButton {
    position: absolute;
    top: ${rem(32)};
    right: ${rem(32)};
  }

  .header {
    img {
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

export const StyledModalGetPersonalizedFormWrapper = styled(Modal)`
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

    /* ${responsive.sm`
    padding: 2.5rem 0.625rem;
      max-width: 100%;
    `} */
  }
  .form {
    border-radius: 30px;
    background: var(--clarity-white, #fff);
    padding: 40px;
    max-width: 498px;
    width: 100%;
    text-align: start;
    ${responsive.sm`
      width: 95%;
      padding: 56px 16px;
    `}

    .closeButton {
      position: absolute;
      right: ${rem(16)};
      top: ${rem(16)};
    }
  }
  .title {
    color: var(--directness-black, #2d3439);
    text-align: center;
    line-height: 42px; /* 131.25% */
    margin-bottom: 32px;
    ${responsive.xxl`
      margin-bottom: 24px;
    `}
    ${responsive.sm`
      color: var(--directness-black, #2D3439);
      font-size: 32px;
      line-height: 42px;
      text-align: start;
    `}
    span {
      display: contents;
      font-weight: 700;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 200px);
    justify-content: center;
    text-align: center;
    column-gap: 16px;
    margin-bottom: 34px;
    ${responsive.sm`
      grid-template-columns: 100%;
      text-align: start;
      row-gap: 16px;
      margin-bottom: 22px;
    `}
    li {
      ${responsive.sm`
        display: flex;
        align-items: center;
        column-gap: 16px;
      `}
      img {
        margin-bottom: 12px;
        flex-shrink: 0;
      }
      .grid-title {
        color: rgba(81, 113, 133, 1);
        line-height: 24px;
        letter-spacing: 0em;
      }
    }
  }

  .input-wrapper {
    margin-bottom: 22px;
    p {
      color: rgba(45, 52, 57, 1);
      margin-left: 16px;
    }
    input {
      padding-left: 16px !important;
    }
  }
  .textarea {
    textarea {
      margin-bottom: 0px;
    }
    margin-bottom: 32px;
  }
  .submit-btn {
    width: 100%;
    margin-bottom: 16px;

    &.submit-btn-1 {
      ${responsive.xxl`
        display: none;
      `}
    }
    &.submit-btn-2 {
      display: none;
      ${responsive.xxl`
        display: block;
      `}
    }
  }
  .description {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;

    color: #517185;
  }

  .submit-btn {
    height: 56px;
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
    ${responsive.sm`
      margin: 32px auto;
      max-width: 95%!important;
    `}
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

    ${responsive.sm`
      margin: 0;
      padding: 56px 16px;
    `}

    .closeButton {
      position: absolute;
      right: ${rem(16)};
      top: ${rem(16)};
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
        border: 1px solid rgba(129, 158, 176, 0.2);
        padding: 2px;
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
        .hide {
          display: none;
        }
        .tabInput {
          p {
            color: rgba(45, 52, 57, 1);
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
