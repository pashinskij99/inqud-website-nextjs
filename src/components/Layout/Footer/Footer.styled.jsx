'use client'

import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledFooter = styled.footer`
  .footerSubscribeSectionMobile {
    display: none;
    ${responsive.xl`
      display: block;
      padding: ${rem(40)} 0;
      background-color: #242a2f;
    `};
    ${responsive.xs`
      text-align: center;
      padding: ${rem(80)} 0;
    `};

    .footerSubscribeSectionTitle {
      font-weight: 700;
      color: var(--exciting-lime, #bfffc8);
      margin-bottom: ${rem(20)};
      max-width: ${rem(440)};
      ${responsive.xl`
        line-height: 32px;
        margin-bottom: 19px;
      `}
      ${responsive.sm`
        max-width: 100%;
        text-align: center;
        margin-bottom: ${rem(18)};
      `};
      ${responsive.xs`
        font-size: ${rem(24)};
        line-height: ${rem(34)};
      `};
    }

    .footerSubscribeSectionInputWrapper {
      display: flex;
      justify-content: space-between;
      gap: ${rem(16)};
      margin-bottom: ${rem(16)};
      max-width: ${rem(440)};
      ${responsive.xl`
        align-items: center;
        margin-bottom: ${rem(14)};
      `}
      ${responsive.sm`
        align-items: normal;
        max-width: 100%;
      `}
      ${responsive.xs`
        flex-direction: column;
        gap: ${rem(8)};
      `};

      .footerSubscribeSectionInput {
        flex: 1;

        .inputTextInput {
          border: 1px solid rgba(255, 255, 255, 0.20000000298023224);
          color: rgba(255, 255, 255, 1);

          &::placeholder {
            color: rgba(255, 255, 255, 0.6000000238418579);
          }
        }
      }

      .footerSubscribeSectionButton {
        height: 56px;
        ${responsive.sm`
          height: 48px;
        `}
      }
    }

    .footerSubscribeSectionDescription {
      color: rgba(255, 255, 255, 0.6000000238418579);
      font-weight: 500;
      max-width: ${rem(440)};
      ${responsive.sm`
        max-width: 100%;
      `}
    }
  }

  .top {
    padding: ${rem(120)} 0 ${rem(129)};
    background: var(--directness-black, #2d3439);
    ${responsive.xxl`
      padding: ${rem(120)} 0 ${rem(129)};
    `};
    ${responsive.sm`
      padding: ${rem(80)} 0 ${rem(86)};
    `};

    .container {
      display: flex;
      justify-content: space-between;
      ${responsive.xxl`
        gap: ${rem(0)};
      `};
      ${responsive.xl`
        justify-content: start;
        gap: 0;
      `};
      ${responsive.sm`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        gap: ${rem(32)};
      `};

      .footerLogoSection {
        max-width: ${rem(320)};
        ${responsive.xxl`
          margin-right: 0;
        `};
        ${responsive.sm`
          max-width: ${rem(320)};
          margin: 0 auto;
        `};

        img {
          margin-bottom: ${rem(34)};
          ${responsive.sm`
            margin-bottom: ${rem(32)};
          `};
        }

        .footerLogoSectionText {
          font-weight: 500;
          color: var(--clarity-white, #fff);
          opacity: 0.6000000238418579;
          ${responsive.sm`
            font-size: ${rem(14)};
            line-height: ${rem(18)};
          `};
        }
      }

      .footerLegalSection {
        max-width: 150px;
        margin-left: 0;
        ${responsive.xxl`
          margin-right: 79px;
        `}
        ${responsive.xl`
          margin-left: ${rem(35)};
          margin-right: 0;
        `};
        ${responsive.sm`
          max-width: 100%;
          margin-left: 0;
        `};
      }

      .footerResourcesSection {
        max-width: 150px;
        margin-left: ${rem(55)};
        ${responsive.xxl`
          margin-right: 40px;
        `}
        ${responsive.xl`
          margin-left: ${rem(55)};
          margin-right: 0px;
        `}
        ${responsive.sm`
          max-width: 100%;
          margin-left: 0;
        `};
      }

      .footerLegalSection,
      .footerResourcesSection {
        margin-top: ${rem(17)};
        flex-shrink: 0;
        display: flex;
        flex-direction: column;

        .footerLegalSectionTitle,
        .footerResourcesSectionTitle {
          font-weight: 700;
          color: var(--exciting-lime, #bfffc8);
          margin-bottom: ${rem(20)};
          ${responsive.xs`
            font-size: ${rem(24)};
          `};
        }

        .footerLegalSectionList,
        .footerResourcesSectionList {
          display: flex;
          flex-direction: column;
          gap: ${rem(14)};
          ${responsive.xs`
            gap: ${rem(18)};
          `};
        }

        .footerLegalSectionListItem,
        .footerResourcesSectionListItem {
        }

        .footerLegalSectionListItemText,
        .footerResourcesSectionListItemText {
          font-weight: 500;
          line-height: 1;

          color: #ffffff;
        }
      }

      .footerSubscribeSection {
        margin-top: ${rem(20)};
        max-width: ${rem(440)};
        ${responsive.xxl`
          margin-top: 15px;
        `}
        ${responsive.xl`
          display: none;
        `};

        .footerSubscribeSectionTitle {
          font-weight: 700;
          color: var(--exciting-lime, #bfffc8);
          margin-bottom: ${rem(18)};
        }

        .footerSubscribeSectionInputWrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: ${rem(16)};
          margin-bottom: ${rem(16)};

          .footerSubscribeSectionInput {
            flex: 1;

            .inputTextInput {
              border: 1px solid rgba(255, 255, 255, 0.20000000298023224);
              color: rgba(255, 255, 255, 1);

              &::placeholder {
                color: rgba(255, 255, 255, 0.6000000238418579);
              }
            }
          }

          .footerSubscribeSectionButton {
            ${responsive.sm`
              height: 48px;
            `}
          }
        }

        .footerSubscribeSectionDescription {
          color: rgba(255, 255, 255, 0.6000000238418579);
          font-weight: 500;
        }
      }
    }
  }

  .bottom {
    background: var(--double-black, #242a2f);
    padding: ${rem(34)} 0;
    ${responsive.sm`
      padding: ${rem(32)} 0;
    `};

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${responsive.sm`
        flex-direction: column;
        gap: ${rem(24)};
      `};

      .footerSocialWrapper {
        display: flex;
        align-items: center;
        gap: ${rem(8)};

        .footerSocialLink {
        }
      }

      .footerSocialAllRights {
        color: rgba(255, 255, 255, 0.6000000238418579);
      }
    }
  }
`
