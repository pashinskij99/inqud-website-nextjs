import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
  .footerSubscribeSectionMobile {
    display: none;
    @media (max-width: 1200px) {
      display: block;
      padding: 4rem 0;
      background-color: #242a2f;
    }
    @media (max-width: 576px) {
      text-align: center;
      padding: 8rem 0;
    }

    .footerSubscribeSectionTitle {
      font-weight: 700;
      color: var(--exciting-lime, #bfffc8);
      margin-bottom: 2rem;
      max-width: 440px;
      @media (max-width: 767px) {
        margin-bottom: 1.8rem;
      }
    }

    .footerSubscribeSectionInputWrapper {
      display: flex;
      justify-content: space-between;
      gap: 1.6rem;
      margin-bottom: 1.6rem;
      max-width: 440px;
      @media (max-width: 576px) {
        flex-direction: column;
        gap: 0.8rem;
      }
      .footerSubscribeSectionInput {
        flex: 1;
        .inputTextInput {
          border: 0.1rem solid rgba(255, 255, 255, 0.20000000298023224);
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
      max-width: 440px;
    }
  }
  .top {
    padding: 12rem 0;
    background: var(--directness-black, #2d3439);
    @media (max-width: 767px) {
      padding: 8rem 0;
    }
    .container {
      display: flex;
      justify-content: space-between;
      @media (max-width: 1200px) {
        justify-content: start;
        gap: 5.2rem;
      }
      @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        gap: 3.2rem;
      }
      .footerLogoSection {
        max-width: 32rem;
        @media (max-width: 1200px) {
          margin-right: auto;
        }
        @media (max-width: 767px) {
          max-width: 32rem;
          margin: 0 auto;
        }
        svg {
          margin-bottom: 3.6rem;
          @media (max-width: 767px) {
            margin-bottom: 3.2rem;
          }
        }
        .footerLogoSectionText {
          font-weight: 500;
          color: var(--clarity-white, #fff);
          opacity: 0.6000000238418579;
          @media (max-width: 767px) {
            font-size: 1.4rem;
            line-height: 1.8rem;
          }
        }
      }

      .footerLegalSection,
      .footerResourcesSection {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        .footerLegalSectionTitle,
        .footerResourcesSectionTitle {
          font-weight: 700;
          color: var(--exciting-lime, #bfffc8);
          margin-bottom: 1.4rem;
        }
        .footerLegalSectionList,
        .footerResourcesSectionList {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footerLegalSectionListItem,
        .footerResourcesSectionListItem {
        }
        .footerLegalSectionListItemText,
        .footerResourcesSectionListItemText {
          font-weight: 500;
          color: #ffffff;
        }
      }

      .footerSubscribeSection {
        max-width: 44rem;
        @media (max-width: 1200px) {
          display: none;
        }
        .footerSubscribeSectionTitle {
          font-weight: 700;
          color: var(--exciting-lime, #bfffc8);
          margin-bottom: 2rem;
        }
        .footerSubscribeSectionInputWrapper {
          display: flex;
          justify-content: space-between;
          gap: 1.6rem;
          margin-bottom: 1.6rem;
          .footerSubscribeSectionInput {
            flex: 1;
            .inputTextInput {
              border: 0.1rem solid rgba(255, 255, 255, 0.20000000298023224);
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
    padding: 3.4rem 0;
    @media (max-width: 767px) {
      padding: 3.2rem 0;
    }
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 767px) {
        flex-direction: column;
        gap: 2.4rem;
      }
      .footerSocialWrapper {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        .footerSocialLink {
        }
      }
      .footerSocialAllRights {
        color: rgba(255, 255, 255, 0.6000000238418579);
      }
    }
  }
`
