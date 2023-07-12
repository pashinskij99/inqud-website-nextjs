import styled from '@emotion/styled'
import {rem} from '@/utils/rem';

export const StyledFooter = styled.footer`
  .footerSubscribeSectionMobile {
    display: none;
    @media (max-width: 1400px) {
      display: block;
      padding: ${rem(40)} 0;
      background-color: #242a2f;
    }
    @media (max-width: 576px) {
      text-align: center;
      padding: ${rem(80)} 0;
    }

    .footerSubscribeSectionTitle {
      font-weight: 700;
      color: var(--exciting-lime, #bfffc8);
      margin-bottom: ${rem(20)};
      max-width: ${rem(440)};
      @media (max-width: 767px) {
        margin-bottom: ${rem(18)};
      }
      @media (max-width: 576px) {
        font-size: ${rem(24)};
        line-height: ${rem(34)};
      }
    }

    .footerSubscribeSectionInputWrapper {
      display: flex;
      justify-content: space-between;
      gap: ${rem(16)};
      margin-bottom: ${rem(16)};
      max-width: ${rem(440)};
      @media (max-width: 576px) {
        flex-direction: column;
        gap: ${rem(8)};
      }

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
      }
    }

    .footerSubscribeSectionDescription {
      color: rgba(255, 255, 255, 0.6000000238418579);
      font-weight: 500;
      max-width: ${rem(440)};
    }
  }

  .top {
    padding: ${rem(120)} 0 ${rem(129)};
    background: var(--directness-black, #2d3439);
    @media (max-width: 767px) {
      padding: ${rem(80)} 0 ${rem(86)};
    }

    .container {
      display: flex;
      justify-content: space-between;
      @media (max-width: 1400px) {
        justify-content: start;
        gap: ${rem(52)};
      }
      @media (max-width: 992px) {
        gap: 0;
      }
      @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        gap: ${rem(32)};
      }

      .footerLogoSection {
        max-width: ${rem(320)};
        @media (max-width: 1400px) {
          margin-right: auto;
        }
        @media (max-width: 767px) {
          max-width: ${rem(320)};
          margin: 0 auto;
        }

        svg {
          margin-bottom: ${rem(34)};
          @media (max-width: 767px) {
            margin-bottom: ${rem(32)};
          }
        }

        .footerLogoSectionText {
          font-weight: 500;
          color: var(--clarity-white, #fff);
          opacity: 0.6000000238418579;
          @media (max-width: 767px) {
            font-size: ${rem(14)};
            line-height: ${rem(18)};
          }
        }
      }

      .footerLegalSection {
        margin-left: 0;
        @media (max-width: 992px) {
          margin-left: ${rem(35)};
        }
        @media (max-width: 767px) {
          margin-left: 0;
        }
      }

      .footerResourcesSection {
        margin-left: ${rem(55)};
        @media (max-width: 767px) {
          margin-left: 0;
        }
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
          @media (max-width: 576px) {
            font-size: ${rem(24)};
          }
        }

        .footerLegalSectionList,
        .footerResourcesSectionList {
          display: flex;
          flex-direction: column;
          gap: ${rem(14)};
          @media (max-width: 576px) {
            gap: ${rem(18)};
          }
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
        @media (max-width: 1400px) {
          display: none;
        }

        .footerSubscribeSectionTitle {
          font-weight: 700;
          color: var(--exciting-lime, #bfffc8);
          margin-bottom: ${rem(18)};
        }

        .footerSubscribeSectionInputWrapper {
          display: flex;
          justify-content: space-between;
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
    @media (max-width: 767px) {
      padding: ${rem(32)} 0;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 767px) {
        flex-direction: column;
        gap: ${rem(24)};
      }

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
