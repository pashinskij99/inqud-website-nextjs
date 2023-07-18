import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledBlogCartWrapper = styled.div`
  max-width: ${rem(440)};
  cursor: pointer;
  &:hover {
    .image {
      transform: scale(1.1);
    }
  }

  ${responsive.xxl`
    max-width: ${rem(380)};
  `}
  ${responsive.xl`
    max-width: ${rem(300)};
  `}
  ${responsive.lg`
    max-width: ${rem(332)};
  `}
  ${responsive.xs`
    text-align: center;
    max-width: 100%;
  `}
  .imageWrapper {
    overflow: hidden;
    border-radius: ${rem(30)};
    margin-bottom: ${rem(30)};
    height: fit-content;
    display: flex;
    ${responsive.xs`
      margin-bottom: ${rem(24)};
    `};
  }

  .image {
    max-width: ${rem(440)};
    height: ${rem(250)};
    transition: transform 0.3s ease-in-out;

    ${responsive.xxl`
      max-width: ${rem(380)};
      height: ${rem(260)};
    `};

    ${responsive.xl`
      max-width: ${rem(300)};
      height: ${rem(210)};
    `};
    ${responsive.lg`
      max-width: 100%;
      height: ${rem(250)};
      object-fit: cover;
    `};
    ${responsive.xs`
      max-width: 100%;
      height: auto;
      object-fit: contain;
    `};
  }

  .subTitle {
    border-radius: ${rem(50)};
    background: var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
    padding: ${rem(4)} ${rem(16)};

    color: rgba(81, 113, 133, 1);
    margin-bottom: ${rem(16)};
    width: fit-content;
    line-height: 1;
    ${responsive.xs`
      font-size: ${rem(14)};
      padding: ${rem(8)} ${rem(12)} ${rem(7)} ${rem(12)};
      margin: 0 auto ${rem(12)};
    `}
  }

  .title {
    text-align: start;
    font-weight: 700;
    margin-bottom: ${rem(16)};
    ${responsive.xs`
      font-size: ${rem(24)};
      margin-bottom: ${rem(12)};
      text-align: center;
    `}
  }

  button {
    padding: 0;
    height: fit-content;

    svg {
      width: ${rem(24)};
      height: ${rem(24)};
    }
  }

  .footer {
    display: flex;
    align-items: center;
    gap: ${rem(12)};
    ${responsive.xs`
      justify-content: center;
    `}
  }

  .date {
    color: rgba(81, 113, 133, 1);
  }

  svg {
  }

  .time {
    color: rgba(81, 113, 133, 1);
  }

  .show {
    animation: show 0.3s ease-in-out forwards;
  }

  .hide {
    animation: hide 0.3s ease-in-out forwards;
  }

  .delay {
    animation-delay: 0.3s;
  }

  @keyframes show {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes hide {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`

export const StyledBlogCartWrapper2 = styled(StyledBlogCartWrapper)`
  max-width: ${rem(440)};

  &:hover {
    .image {
      transform: scale(1);
    }
  }

  ${responsive.xxl`
    max-width: ${rem(440)};
    display: block;
  `};

  ${responsive.xl`
    max-width: ${rem(440)};
  `}
  ${responsive.lg`
    max-width: ${rem(440)};
  `}
  ${responsive.xs`
    text-align: center;
    max-width: 100%;
  `}
  .image {
    max-width: ${rem(440)};
    height: ${rem(250)};
    border-radius: ${rem(30)};
    margin-bottom: ${rem(30)};

    ${responsive.xxl`
      max-width: ${rem(440)};
      height: ${rem(250)};
    `};

    ${responsive.xl`
      max-width: ${rem(440)};
      height: ${rem(250)};
    `};
    ${responsive.lg`
      max-width: ${rem(440)};
      height: ${rem(250)};
    `};
    ${responsive.xs`
      max-width: 100%;
      height: 193px;
      object-fit: cover;
      margin-bottom: ${rem(24)};
    `};
  }
`

export const StyledRelatedBlogCartWrapper = styled(StyledBlogCartWrapper)`
  max-width: ${rem(440)};
  cursor: pointer;
  &:hover {
    .image {
      transform: scale(1.1);
    }
  }

  ${responsive.xxl`
    max-width: ${rem(380)};
  `}
  ${responsive.xl`
    max-width: ${rem(300)};
  `}
  ${responsive.lg`
    max-width: ${rem(332)};
  `}
  ${responsive.xs`
    text-align: center;
    max-width: 100%;
  `}
  .imageWrapper {
    overflow: hidden;
    border-radius: ${rem(30)};
    margin-bottom: ${rem(30)};
    height: fit-content;
    display: flex;
    ${responsive.xs`
      margin-bottom: ${rem(24)};
    `};
  }

  .image {
    max-width: ${rem(440)};
    height: ${rem(250)};
    transition: transform 0.3s ease-in-out;

    ${responsive.xxl`
      max-width: ${rem(380)};
      height: ${rem(260)};
    `};

    ${responsive.xl`
      max-width: ${rem(300)};
      height: ${rem(210)};
    `};
    ${responsive.lg`
      max-width: 100%;
      height: ${rem(250)};
      object-fit: cover;
    `};
    ${responsive.xs`
      max-width: 100%;
      height: auto;
      object-fit: contain;
    `};
  }
`
