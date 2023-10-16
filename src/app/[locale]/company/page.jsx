/* eslint-disable no-unused-vars */
import { toNextMetadata } from 'react-datocms'
import { getData, performRequest } from '@/lib/datocms'
import CompanyPage from '@/views/CompanyPage'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const COMPANY_PAGE_QUERY = `  
query MyQuery($locale: SiteLocale) {
  aboutUsPage(locale: $locale) {
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

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('aboutUsPage'),
    revalidate: 360,
  })

  return toNextMetadata([...response.aboutUsPage.seo])
}

export default async function Page({ params }) {
  const data = await getData(COMPANY_PAGE_QUERY, { locale: params.locale })

  return <CompanyPage data={data} />
  // return <>1</>
}
