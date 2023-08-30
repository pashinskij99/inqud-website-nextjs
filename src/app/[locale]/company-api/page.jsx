import { performRequest } from '@/lib/datocms'
import ApiPage from '@/views/ApiPage'

const API_QUERY = `
query MyQuery {
  apiPage {
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

export default async function page() {
  const data = await getData(API_QUERY)

  return <ApiPage data={data} />
}
