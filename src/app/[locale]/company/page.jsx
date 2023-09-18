import { performRequest } from '@/lib/datocms'
import CompanyPage from '@/views/CompanyPage'

const COMPANY_PAGE_QUERY = `  
query MyQuery($locale: SiteLocale) {
  aboutUsPage(locale: $locale) {
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
    id
    screen1Description1
    screen1Description2
    screen1Image {
      url
    }
    screen1MainDescription
    screen1MainTitle
    screen1Title1
    screen1Title2
    screen2MainTitle
    screen3Description
    screen2Features {
      id
      cartTitle
      cartId
      cartDescription
    }
    screen3Image {
      url
    }
    screen3List {
      title
      image {
        url
        width
        height
      }
      id
      description
    }
    screen3Title
    screen4Description
    screen4Title
    buttonScreen4
    screen5Title
    screen5Features {
      title
      id
      description
      cartId
      image {
        url
      }
    }
  }
  allTeams(locale: $locale) {
    profession
    social {
      title
      id
      image {
        url
      }
    }
    name
    id
    image {
      url
    }
  }
}
`

const getData = async (query, variables) => {
  try {
    return await performRequest({
      query,
      revalidate: 0,
      variables,
    })
  } catch (error) {
    return {}
  }
}

export default async function Page({ params }) {
  const data = await getData(COMPANY_PAGE_QUERY, { locale: params.locale })

  return <CompanyPage data={data} />
}
