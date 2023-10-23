import { toNextMetadata } from 'react-datocms'
import HomePage from '@/views/HomePage'
import { getData, performRequest } from '@/lib/datocms'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const HOMEPAGE_QUERY = `
query MyQuery($locale: SiteLocale) {
  homePage(locale: $locale, fallbackLocales: en) {
    lead5Title
    lead5Description
    lead5ButtonText
    lead5FooterDescription {
      value
    }
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
    buttonScreen1ContactSales
    buttonScreen1GetStarted
    buttonBlog
    description {
      value
    }
    features
    id
    subTitle
    title
    buttonScreen2

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

  pickLeadForm(locale: $locale, fallbackLocales: en) {
    pickDescription
    buttonText
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

  ourLandscape(locale: $locale, fallbackLocales: en) {
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

  allBlogs(locale: $locale, fallbackLocales: en, orderBy: _createdAt_DESC, first: 3) {
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

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('homePage'),
    revalidate: 0,
  })

  return toNextMetadata([...response.homePage.seo])
}

export default async function Home({ params }) {
  const data = await getData(HOMEPAGE_QUERY, {
    locale: params.locale,
  })

  return <HomePage data={data} params={params} />
}
