import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledBlogsPageMainSection = styled.section`
  padding: ${rem(29)} 0 ${rem(61)};

  ${responsive.xxl`
    padding: ${rem(29)} 0 ${rem(56)};
  `}
  ${responsive.xl`
    padding: ${rem(29)} 0 ${rem(32)};
  `}
  ${responsive.sm`
    padding: ${rem(23)} 0 ${rem(40)};
  `}

  .blogsPageTitle {
    color: rgba(45, 52, 57, 1);
    margin-bottom: ${rem(4)};
    ${responsive.sm`
      font-size: 56px;
      line-height: 62px;
      letter-spacing: 0em;
      font-size: 56px;
      font-weight: 400;
      margin-bottom: ${rem(7)};
    `}
  }

  .blogsPageDescription {
    color: rgba(81, 113, 133, 0.800000011920929);
    margin-bottom: ${rem(32)};

    ${responsive.sm`
      margin-bottom: ${rem(24)};
      line-height: ${rem(24)};
    `}
  }

  .blogsPageSearchWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${rem(464)};
    column-gap: ${rem(16)};
    margin: 0 auto;
    ${responsive.sm`
      flex-direction: column;
      column-gap: 0;
      max-width: 100%;
      width: 100%;
      row-gap: ${rem(8)};
    `}

    .inputWrapper {
      flex: 1;
      ${responsive.sm`
        flex: auto;
        max-width: 100%;
        width: 100%;
      `}
    }

    button {
      ${responsive.sm`
        width: 100%;
      `}
    }

    .blogsPageSearchButton {
      height: ${rem(48)};
    }
  }
`
