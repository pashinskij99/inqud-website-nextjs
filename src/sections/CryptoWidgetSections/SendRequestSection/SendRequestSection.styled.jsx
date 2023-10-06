import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'
import { StyledContactWrapper } from '@/sections/ApiSections/Contact/Contact.styled'

export const StyledSendRequestSectionWrapper = styled(StyledContactWrapper)`
  padding-top: 142.63px;
  padding-bottom: 143.37px;

  ${responsive.xxl`
    padding-top: 143px;
    padding-bottom: 147px;
  `}
  ${responsive.sm`
    padding-top: 96px;
    padding-bottom: 98px;
  `}

  .formContainer {
    padding: 40px 2.5rem;
    max-width: ${rem(498)};
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: ${rem(30)};
    text-align: center;

    &:focus-visible {
      outline: none;
    }

    ${responsive.sm`
      max-width: 100%;
      padding: 0;
    `}
  }

  .closeButton {
    position: absolute;
    top: ${rem(32)};
    right: ${rem(32)};
  }

  .header {
    img {
      margin-bottom: ${rem(15)};
    }

    h3 {
      font-weight: 700;
      margin-bottom: ${rem(8)};
      ${responsive.sm`
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
        letter-spacing: 0em;
      `}
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
    input,
    textarea {
      margin: 0;
    }

    input {
      ${responsive.sm`
        margin-bottom: 4px;
      `}
    }

    .label {
      text-align: start;
      margin-left: ${rem(16)};
    }
  }

  .footer {
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
    button {
      width: 100%;
      margin-bottom: ${rem(16)};
      cursor: pointer;
    }

    p {
      color: rgba(81, 113, 133, 0.6000000238418579);
    }
  }
`

export const StyledFormWrapper = styled.div``
