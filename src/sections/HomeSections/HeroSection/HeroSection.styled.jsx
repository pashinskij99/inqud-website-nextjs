import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledPaymentListWrapper = styled.div`
  overflow: hidden;
  width: 597px;
  ${responsive.xl`
    width: 100%; 
  `}
  .payment-descr {
    color: rgba(81, 113, 133, 0.800000011920929);
    margin-bottom: ${rem(24)};
    ${responsive.xl`
            margin-bottom: ${rem(13)};
          `}
    ${responsive.sm`
            text-align: start;
            margin-bottom: ${rem(16)};
          `};
  }
  .payment-list-wrapper {
    display: flex;
    align-items: center;
  }
  .payment-list {
    display: flex;
    align-items: center;
    gap: ${rem(32)};
    padding-left: 2.0625rem;
    /* overflow: auto; */
    animation: scrollText 10s infinite linear;
    /* -ms-overflow-style: none; Internet Explorer 10+ */
    /* scrollbar-width: none; Firefox */

    /* &.payment-list-2 {
      padding-left: 2.0625rem;
    } */

    ${responsive.xxl`
            gap: ${rem(33)};
          `}
    ${responsive.sm`
            gap: ${rem(25)};
          `}
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    li {
      display: flex;
      align-items: center;
      gap: ${rem(10)};

      /* &:nth-last-child(1),
      &:nth-last-child(2),
      &:nth-last-child(3),
      &:nth-last-child(4) {
        display: none;

        ${responsive.xl`
          display: flex;
        `}
      } */

      .icon-wrapper {
        position: relative;
        display: flex;

        img {
          position: relative;
          width: ${rem(32)};
          height: ${rem(32)};
          border-radius: 50%;

          z-index: 1;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;

          background-color: rgba(154, 177, 192, 0.2);
        }

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 95%;
          height: 95%;
          background-color: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      }

      p {
        color: rgba(129, 158, 176, 0.8);
        ${responsive.sm`
          font-size: 24px;
        `}
      }
    }
  }

  @keyframes scrollText {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`
