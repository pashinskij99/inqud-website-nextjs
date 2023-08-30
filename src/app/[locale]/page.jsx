import { performRequest } from '@/lib/datocms'
import HomePageWrapper from '@/views/HomePageWrapper'

const HOME_PAGE_QUERY = `  
  query MyQuery {
    homeB2c {
      title
      subTitle
      screen5Title
      screen5Step {
        id
        image {
          url
        }
        time
        title
      }
      screen5Description
      screen4Title
      screen4Step {
        id
        time
        title
        description
        cartId
      }
      screen3Title
      screen3Feature {
        title
        image {
          url
        }
        id
        feature {
          description
          id
          image {
            url
          }
          title
        }
        description
        button
      }
      screen2Content {
        title
        id
        description
        image {
          url
        }
      }
      image {
        url
      }
      id
      description {
        value
      }
      buttonScreen5
      buttonScreen1
    }
    homePage {
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
      heroImage {
        url
      }
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
    }
    ourLandscape {
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
    supportedCurrency {
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
    feesYourBusiness {
      title
      id
      cartButton
      cartDescription
      cartTitle
      description
      footerDescription {
        value
      }
      table {
        description
        id
        title
      }
    }
  }
`

const getData = async (query) => {
  try {
    const data = await performRequest({
      query,
      revalidate: 10,
    })

    return data
  } catch (error) {
    return {}
  }
}

export default async function Home() {
  const data = await getData(HOME_PAGE_QUERY)

  return <HomePageWrapper data={data} />
}
