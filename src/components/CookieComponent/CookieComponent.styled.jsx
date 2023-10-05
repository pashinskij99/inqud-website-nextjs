import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledCookieComponentWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 24px;
  z-index: 102;
  ${responsive.sm`
    padding: 16px;
  `}
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    background-color: #077453;
    padding: 44px 48px;
    border-radius: 24px;
    ${responsive.sm`
      flex-direction: column;
    `}

    .text {
      display: flex;
      align-items: center;
      gap: 24px;
      ${responsive.sm`
        flex-direction: column;
      `}
      .icon-wrapper {
        flex-shrink: 0;
        width: 64px;
        height: 64px;
        border-radius: 16px;
        background-color: #bfffc81a;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          width: 35.39px;
          height: 32px;
        }
      }

      .text-content {
        display: flex;
        flex-direction: column;
        ${responsive.sm`
          text-align: center;
        `}
        .title {
          font-size: 24px;
          font-weight: 700;
          line-height: 32px;
          letter-spacing: 0em;
          color: #ffffff;
        }
        .description {
          color: #ffffff;

          .link {
            display: inline-flex;
            color: #bfffc8;
            text-decoration: underline !important;
          }
        }
      }
    }
  }

  .btn-wrapper {
    ${responsive.sm`
      width: 100%;
    `}
    .btn {
      ${responsive.sm`
        width: 100%;
      `}
    }
  }
`
