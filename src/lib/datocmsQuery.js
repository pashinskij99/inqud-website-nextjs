export const HOME_B2B_CRYPTO_WIDGET = `
  query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale) {
      screen3SubTitle
      screen3Title
      screen3Description
      buttonScreen3GetStarted
      buttonScreen3LearnMore
      feature {
        title
        id
        description
        image {
          url
        }
      }
    }
  }
`
