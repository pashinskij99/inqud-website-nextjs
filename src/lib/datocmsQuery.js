export const HOME_PAGE_QUERY = `
query MyQuery($locale: SiteLocale) {
  homePage(locale: $locale) {
    buttonScreen1ContactSales
    buttonScreen1GetStarted
    description {
      value
    }
    features
    id
    subTitle
    title
    buttonScreen2
  }
}
`
export const HOME_B2B_NEEDS = `
query MyQuery($locale: SiteLocale) {
  homePage(locale: $locale) {
    buttonScreen2
  }
}
`

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

export const HOME_B2B_HERO_LIST = `
  query MyQuery($locale: SiteLocale) {
    supportedCurrency(locale: $locale) {
      id
      title
      list {
        id
        supportedCurrenciesName
        supportedCurrenciesImage {
          url
        }
      }
    }
  }
`

export const HOME_B2B_SMOOTH_API = `
  query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale) {
      screen4SubTitle
      screen4Title
      screen4Description
      screen4Features {
        description
        id
        image { 
          url 
        } 
        title
      }
      buttonScreen4GetStarted
      buttonScreen4LearnMore
    }
  }
`

export const HOME_B2B_CRYPTO_WIDGET_2 = `
  query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale) {
      screen5SubTitle
      screen5Title
      screen5Description
      screen5Features {
        description 
        id 
        image { 
          url 
        } 
        title
      }
      lead5Screen
      buttonLead2A
      buttonLead2B {
        url
      }
      buttonLead2C
    }
  }
`

export const HOME_B2B_PICK_SECTION_DONT_LOSE = `
  query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale) {
       leadForm1Title
       leadForm2Title
       leadForm1List
       leadForm2List {
          id 
          title 
          image { 
            url 
          } 
       }
       leadForm1ListTitle
    }
    pickLeadForm(locale: $locale) {
      pickDescription
      buttonText
   }
  }
`

export const HOME_B2B_REASONS_TEAM_UP = `
 query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale) {
       screen6Title
       screen6Description
       screen6Features {
          id 
          description 
          image { 
            url 
          } 
          title 
       }
    }
  }
`

export const HOME_B2B_FEES = `
    query MyQuery($locale: SiteLocale) {
      feesYourBusiness(locale: $locale) {
      title
      id
      cartButton
      cartDescription
      cartTitle
      description
      footerDescription {
        value
      }
      tableHeader {
        title
        id
        description
      }
      table {
        description
        id
        title
      }
    }
  }
`

export const HOME_B2B_LANDSCAPE = `
  query MyQuery($locale: SiteLocale) {
    ourLandscape(locale: $locale) {
      title
      tabName2
      tabName1
      industriesList {
        list
        listTitle
        id
      }
      id
      description2
      description1
      coverageMap {
        url
      }
      coverageFeatures {
        title
        image {
          width
          height
          url
        }
        id
        description
      }
    }
  }
`

export const HOME_B2B_BLOG = `
  query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale) {
      buttonBlog
    }
    allBlogs(locale: $locale, orderBy: _createdAt_DESC, first: 3) {
      id
      mainTitle
      slugPage
      mainTag {
        tag
        id
      }
      timeToRead
      _createdAt
      mainImage {
        url
      }
    }
  }
`

export const FAQ_QUERY = ({ pageCMSName }) => `
  query MyQuery($locale: SiteLocale) {
    ${pageCMSName}(locale: $locale) {
      faqMainTitle
      faqMainTitleMobile
      faqDescription
      faqContent {
        description
        id
        title
      }
      faqButtonTextMobile
      faqButtonText
    }
  }
`

export const MODAL_1 = `
  query MyQuery($locale: SiteLocale) {
    cryptoLeadForm(locale: $locale) {
      buttonText
      description
      footerDescription {
        value
      }
      id
      labelCompany
      labelIndustry
      labelMessage
      labelWebsite
      placeholderMessage
      tabs
      title
      whatsappPlaceholder
    }
  }
`

export const MODAL_2 = `
  query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale) {
      lead5Title
      lead5Description
      lead5ButtonText
      lead5FooterDescription {
        value
      }
    }
  }
`
