import styled from '@emotion/styled'
import { responsive } from '@/utils/response'

export const StyledContactUsHeroSectionWrapper = styled.section`
  padding-top: 64px;
  padding-bottom: 100px;
  text-align: center;
  ${responsive.xl`
        padding-top: 48px;
        padding-bottom: 48px;
    `}
  ${responsive.xs`
        padding-top: 48px;
        padding-bottom: 96px;
    `}
  .container {
  }
  .mainTitle {
    line-height: 70px;
    margin-bottom: 16px;
    letter-spacing: -1.28px;
    ${responsive.xl`
        margin-bottom: 10px;
    `}
    ${responsive.xs`
        line-height: 30px;
    `}
  }
  .mainSubTitle {
    font-weight: 400;
    line-height: 32px;
    color: #517185;
    margin-bottom: 40px;
    ${responsive.xl`
        margin-bottom: 20px;
    `}
    ${responsive.xs`
        line-height: 30px;
        margin-bottom: 16px;
    `}
  }
  .mainButton {
    p {
      color: #fff;
      font-weight: 700;
      line-height: 27px;
    }

    ${responsive.xs`
        height: 48px
    `}
  }
`
