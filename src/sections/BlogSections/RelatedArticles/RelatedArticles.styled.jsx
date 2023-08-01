import styled from '@emotion/styled'
import { StyledBlogsSection } from '@/sections/HomeSections/BlogsSection/BlogsSection.styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledRelatedArticlesSection = styled(StyledBlogsSection)`
  padding-top: 0;
  padding-bottom: ${rem(140)};
  ${responsive.xxl`
    padding-bottom: ${rem(144)};
    padding-top: 0;
  `}
  ${responsive.xl`
    padding-bottom: ${rem(126)};
    padding-top: 0;
  `}
  ${responsive.xs`
    padding-top: 0;
    padding-bottom: 95px;
  `};

  .relatedBlogsHeader {
    ${responsive.xl`
      margin-bottom: 40px;
    `}
    ${responsive.xs`
      padding-top: 0;
      margin-bottom: 42px;
    `}
    .relatedBlogsHeaderTitle {
      ${responsive.xxl`
        font-size: 56px;
        font-weight: 400;
        line-height: 62px;
        letter-spacing: 0em;
      `}
      ${responsive.xl`
        font-size: 56px;
        font-weight: 400;
        line-height: 62px;
        letter-spacing: 0em;
      `}
      ${responsive.sm`
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
        letter-spacing: 0em;
      `}
    }
    .relatedBlogsHeaderButton {
      display: none;
      ${responsive.xl`
        margin-top: 7px;
        display: block;
      `}
      ${responsive.sm`
        display: none;
      `}
    }
  }

  .relatedBlogsGrid {
    .imageWrapper {
      ${responsive.xxl`
        height: 221px!important;
        margin-bottom: 32px;
      `}
      ${responsive.xl`
        height: 193px!important;
        margin-bottom: 25px;
      `}
      ${responsive.sm`
        height: 193px !important;
      `}
      .image {
        ${responsive.xxl`
          height: 221px!important;
        `}
        ${responsive.xl`
          height: 193px!important;
        `}
        ${responsive.sm`
          height: 193px!important;
        `}
      }
    }
  }

  .relatedBlogsSwiper {
    ${responsive.sm`
      margin-bottom: 79px;
    `}
    .subTitle {
      ${responsive.xl`
        margin-bottom: 12px;
      `}
      ${responsive.sm`
        margin-bottom: 8px;
      `}
    }
    .title {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      ${responsive.xl`
        margin-bottom: 11px;
      `}
    }
    .imageWrapper {
      ${responsive.xxl`
        height: 221px!important;
      `}
      ${responsive.xl`
        height: 193px!important;
        margin-bottom: 25px;
      `}
      ${responsive.sm`
        height: 193px !important;
      `}
      .image {
        ${responsive.xxl`
          height: 221px!important;
        `}
        ${responsive.xl`
          height: 193px!important;
        `}
        ${responsive.sm`
          object-fit: cover;
          height: 193px!important;
        `}
      }
    }
    .listRequirementsSwiperScollbar {
      ${responsive.xl`
        display: none;
      `}
      ${responsive.sm`
        display: block;
      `}
    }
  }

  .relatedBlogsHeaderButtonMobile {
    ${responsive.sm`
      height: 48px;    
    `}
  }
`
