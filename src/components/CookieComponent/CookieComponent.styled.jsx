'use client'

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
    padding: 28px 48px;
    border-radius: 24px;
    ${responsive.sm`
      flex-direction: column;
      padding: 20px;
    `}

    .text {
      display: flex;
      align-items: center;
      gap: 24px;
      ${responsive.sm`
        flex-direction: row;
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
          font-size: 22px;
          font-weight: 700;
          line-height: 32px;
          letter-spacing: 0em;
          color: #ffffff;
          ${responsive.sm`
            font-size: 16px;
          `}
        }
        .description {
          font-size: 18px;
          color: #ffffff;
          ${responsive.sm`
            font-size: 14px;
          `}
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
      font-size: 18px;
      height: 46px;
      ${responsive.sm`
        width: 100%;
      `}
    }
  }
`
