import { performRequest } from '@/lib/datocms'
import HomePage from '@/views/HomePage'

const HOME_PAGE_QUERY = `  
  query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale) {
      faqButton
      buttonBlog
      buttonHelp
      buttonLead1Book
      buttonLead2A
      buttonLead2B {
        url
      }
      buttonLead2C
      buttonLead3Book
      buttonScreen1ContactSales
      buttonScreen1GetStarted
      buttonScreen2
      buttonScreen3GetStarted
      buttonScreen3LearnMore
      buttonScreen4GetStarted
      buttonScreen4LearnMore
      description {
        value
      }
      feature {
        title
        id
        description
        image {
          url
        }
      }
      features
      id
      lead5Screen
      leadForm1List
      leadForm1ListTitle
      leadForm1Title
      leadForm2List {
        id
        image {
          url
        }
        title
      }
      leadForm2Title
      screen3Description
      screen3Image {
        url
      }
      screen3SubTitle
      screen4Description
      screen3Title
      screen4Features {
        id
        description
        title
        image {
          url
        }
      }
      screen4Image {
        url
      }
      screen4SubTitle
      screen4Title
      screen5Description
      screen5Features {
        id
        description
        title
        image {
          url
        }
      }
      screen5Image {
        url
      }
      screen5SubTitle
      screen5Title
      screen6Description
      screen6Features {
        title
        id
        description
        image {
          url
        }
      }
      screen6Title
      subTitle
      title
      heroImage1Gif {
        url
      }
      heroImage1Static {
        url
      }
      heroImage2Gif {
        url
      }
      heroImage2Static {
        url
      }
      lead5ButtonText
      lead5Description
      lead5FooterDescription {
        value
      }
      lead5Title
    }
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
    pickLeadForm(locale: $locale) {
      buttonText
      pickDescription
    }
  }
`

const getData = async (query, variables) => {
  try {
    const data = await performRequest({
      query,
      revalidate: 0,
      variables,
    })

    return data
  } catch (error) {
    return {}
  }
}

export default async function Home({ params }) {
  const data = await getData(HOME_PAGE_QUERY, {
    locale: params.locale,
  })

  console.log(data)

  return <HomePage data={data} />
}
