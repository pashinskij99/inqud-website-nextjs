import styled from '@emotion/styled'
import { IBM } from '@/utils/font'
import { responsive } from '@/utils/response'

export const StyledNotFoundPageWrapper = styled.section`
  position: relative;
  height: 808px;
  overflow: hidden;
  padding-top: 80px;
  ${responsive.xl`
    height: 768px;
    padding-top: 117px;
  `}
  ${responsive.sm`
    height: 748px;
    padding-top: 106px;
  `}

  .background-image {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: 0;
    ${responsive.xl`
      width: 956px;
      height: 400px;
      bottom: 117px;
    `}
  }
  .container {
    position: relative;
    text-align: center;
    z-index: 1;
  }
  .title-image {
    margin-bottom: 47px;
    ${responsive.xxl`
      margin-bottom: 42px;
    `}
    ${responsive.xl`
      margin-bottom: 46px;
    `}
    ${responsive.sm`
      width: 330.0252685546875px;
      height: 154.94000244140625px;
    `}
  }
  .sub-title {
    color: var(--independent-grey, #517185);
    ${IBM.style};
    font-size: 40px;
    font-weight: 400;
    line-height: 50px;
    margin-bottom: 37px;
    ${responsive.xxl`
      margin-bottom: 34px;
    `}
    ${responsive.xl`
      margin-bottom: 32px;
    `}
  }
  .btn {
    cursor: pointer;
  }
`
