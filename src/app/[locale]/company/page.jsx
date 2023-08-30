import { performRequest } from '@/lib/datocms'
import CompanyPage from '@/views/CompanyPage'

const COMPANY_PAGE_QUERY = `  
query MyQuery {
  aboutUsPage {
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
  allTeams {
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

const getData = async (query) => {
  try {
    const data = await performRequest({
      query,
      revalidate: 0,
    })

    return data
  } catch (error) {
    return {}
  }
}

export default async function Page() {
  const data = await getData(COMPANY_PAGE_QUERY)

  return <CompanyPage data={data} />
}
