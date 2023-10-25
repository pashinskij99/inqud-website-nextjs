import { toNextMetadata } from 'react-datocms'
import { getData, performRequest } from '@/lib/datocms'
import ApiPage from '@/views/ApiPage'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const API_QUERY = `
  query MyQuery($locale: SiteLocale) {
    cryptoLeadForm(locale: $locale, fallbackLocales: en) {
      buttonText
      description
      footerDescription {
        value
      }
      industry
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
    homePage(locale: $locale, fallbackLocales: en){
      faqButton
    }
    cryptoLeadForm(locale: $locale, fallbackLocales: en) {
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
    apiPage(locale: $locale, fallbackLocales: en) {
      leadForm1Button
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
      buttonScreen1A
      buttonScreen1B
      buttonScreen4A
      buttonScreen4B
      buttonScreen5
      features
      id
      image {
        url
      }
      lead1TitleStructured {
        value
      }
      lead1Title
      leadForm1Button
      leadForm1List {
        id
        image {
          url
        }
        title
      }
      leadForm3Button
      leadForm3Features {
        id
        image {
          url
          width
        }
        title
      }
      leadForm3EmailLable
      leadForm3MessageLable
      leadForm3MessagePlaceholder
      leadForm3FooterText
      leadForm3Title {
        value
      }
      screen2Content {
        title
        id
        description
        image {
          url
        }
      }
      screen2Description
      screen2Title
      screen3Button
      screen3Steps {
        id
        cartId
        time
        title
      }
      screen3Title
      screen4Description
      screen4Features {
        id
        image {
          url
        }
        title
      }
      screen4Image {
        url
      }
      screen4Title
      screen5Description
      screen5Image {
        url
      }
      screen5Title
      subTitle
      title
      screen9Button
      screen9Title
    }
    supportedCurrency(locale: $locale, fallbackLocales: en) {
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
    feesYourBusiness(locale: $locale, fallbackLocales: en) {
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
    ourLandscape(locale: $locale, fallbackLocales: en) {
      title
      tabName2
      tabName1
      industriesList {
        listTitle
        list
        id
      }
      id
      description1
      description2
      coverageFeatures {
        id
        image {
          url
          height
          width
        }
        title
        description
      }
      coverageMap {
        url
      }
    }
    pickLeadForm(locale: $locale, fallbackLocales: en) {
      buttonText
      pickDescription
    }
    allIndustries {
      industry
      id
    }
  }
`

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('apiPage'),
    revalidate: 0,
  })

  return toNextMetadata([...response.apiPage.seo])
}

export default async function page({ params }) {
  const data = await getData(API_QUERY, {
    locale: params.locale,
  })

  return <ApiPage data={data} params={params} />
}
