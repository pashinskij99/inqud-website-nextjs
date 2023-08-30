import { performRequest } from '@/lib/datocms'
import CryptoWidget from '@/views/CryptoWidget'

const CRYPTO_WIDGET = `
query MyQuery {
  cryptoWidgetPage {
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
  const data = await getData(CRYPTO_WIDGET)

  return <CryptoWidget data={data} />
}
