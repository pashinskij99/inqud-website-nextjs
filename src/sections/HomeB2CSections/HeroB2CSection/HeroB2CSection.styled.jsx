import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'
import { StyledTypographyIBMH5 } from '@/components/UI/Typography/Typography.styled'

export const StyledHeroB2CSectionWrapper = styled.section`
  padding-top: 120px;
  ${responsive.xxl`
    padding-top: 73.05px;
  `};
  ${responsive.xl`
    padding-top: 56px;
  `};
  ${responsive.sm`
    padding-top: 24px;
  `};
  .container {
    display: flex;
    justify-content: space-between;
    column-gap: 125.99px;
    ${responsive.xxl`
      column-gap: 34px;
    `}
    ${responsive.xl`
      column-gap: 34px;
    `}
  }
  .left-side {
    .sub-title {
      margin-bottom: 24px;
    }
    .title {
      margin-bottom: 24px;
    }
    .description {
      margin-bottom: 32px;
      color: rgba(81, 113, 133, 1);
    }
    .get-started-btn {
      margin-bottom: 80px;
    }
  }

  .right-side {
    display: flex;
    flex-shrink: 0;
    svg {
      max-width: 595.008px;
      width: 100%;
    }
  }
`

export const StyledSubTitle = styled(StyledTypographyIBMH5)`
  color: #517185;
  border-radius: 32px;
  background: conic-gradient(
    from -46deg at 31.64% 32.35%,
    #71bef6 0deg,
    #ffc451 99.25197958946228deg,
    #e1f664 212.1355676651001deg,
    #ff9a61 272.05706119537354deg,
    #cdacfe 360deg
  );
  width: fit-content;
  padding: ${rem(7)} ${rem(16)};
  line-height: 1;
  color: rgba(45, 52, 57, 1);

  ${responsive.sm`
    font-size: ${rem(24)};
    padding: ${rem(5)} ${rem(16)};
  `};
`
