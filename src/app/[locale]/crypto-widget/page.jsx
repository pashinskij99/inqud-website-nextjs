/* eslint-disable no-unused-vars */
import { toNextMetadata } from 'react-datocms'
import { getData, performRequest } from '@/lib/datocms'
import CryptoWidget from '@/views/CryptoWidget'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const CRYPTO_WIDGET = `
  query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale){
      faqButton
    }
    cryptoWidgetPage(locale: $locale) {
      faqMainTitle
      faqMainTitleMobile
      faqDescription
      faqContent {
        description
        id
        title
      }
      faqButtonTextMobile
      buttonScreen10
      buttonScreen1A
      buttonScreen1B
      buttonScreen6
      description {
        value
      }
      id
      image {
        url
      }
      lead2Title
      lead3Title
      leadForm2Button
      leadForm2Description {
        value
      }
      leadForm3Description
      leadForm3MessagePlaceholder
      leadForm3MessageLabel
      leadForm3EmailLabel
      leadForm3FooterText
      leadForm3SubmitButton
      screen2Content {
        title
        id
        description
        image {
          url
        }
      }
      screen3List {
        id
        list
        listTitle
      }
      screen3Title
      screen4Features {
        id
        description
        cartId
        image {
          url
        }
        title
      }
      screen4Title
      screen5Features {
        title
        description
        cartId
        id
        image {
          url
        }
      }
      screen6Step {
        cartId
        id
        time
        title
      }
      screen6Title
      screen7Title
      subTitle
      title
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
    apiPage(locale: $locale) {
      screen9Button
      screen9Title
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
    ourLandscape(locale: $locale) {
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
    allIndustries {
      industry
      id
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
  }
`

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('cryptoWidgetPage'),
    revalidate: 0,
  })

  return toNextMetadata([...response.cryptoWidgetPage.seo])
}

export default async function page({ params }) {
  const data = await getData(CRYPTO_WIDGET, {
    locale: params.locale,
  })

  return <CryptoWidget data={data} params={params} />
}
