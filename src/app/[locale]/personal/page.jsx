import { toNextMetadata } from 'react-datocms'
import { getData, performRequest } from '@/lib/datocms'
import HomeB2CPage from '@/views/HomeB2CPage'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const PAGE_QUERY = `  
query MyQuery($locale: SiteLocale) {
  homePage(locale: $locale, fallbackLocales: en) {
    buttonBlog
  }
  allBlogs(locale: $locale, fallbackLocales: en, orderBy: _createdAt_DESC, first: 3) {
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

  blogSection(locale: $locale, fallbackLocales: en) {
    title
    buttonText
  }

  homeB2c(locale: $locale, fallbackLocales: en) {
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
        responsiveImage {
          sizes
          src
          width
          height
          alt
          title
          base64
        }
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
}`

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('homeB2c'),
    revalidate: 0,
  })

  return toNextMetadata([...response.homeB2c.seo])
}

async function Page({ params }) {
  const data = await getData(PAGE_QUERY, {
    locale: params.locale,
  })

  return <HomeB2CPage data={data} params={params} />
}

export default Page
