import { performRequest } from '@/lib/datocms'
import HomeB2CPage from '@/views/HomeB2CPage'

const PAGE_QUERY = `  
query MyQuery($locale: SiteLocale) {
  homePage(locale: $locale) {
    buttonBlog
  }
  allBlogs(locale: $locale, orderBy: _createdAt_DESC, first: 3) {
    id
    mainTitle
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

  homeB2c(locale: $locale) {
    faqMainTitle
    faqMainTitleMobile
    faqDescription
    faqContent {
      description
      id
      title
    }
    faqButtonText
    faqButtonTextMobile
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
}`

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

async function Page({ params }) {
  const data = await getData(PAGE_QUERY, {
    locale: params.locale,
  })

  return <HomeB2CPage data={data} />
}

export default Page
