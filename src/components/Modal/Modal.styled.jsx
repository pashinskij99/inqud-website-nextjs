import styled from '@emotion/styled';
import {Modal} from '@mui/material';
import {rem} from '@/utils/rem';
import {responsive} from '@/utils/response';

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
      color: rgba(81, 113, 133, 0.6000000238418579)
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
      color: rgba(81, 113, 133, 0.6000000238418579)
    }
  }

`