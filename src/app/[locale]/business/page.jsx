import { performRequest } from '@/lib/datocms'
import HomePage from '@/views/HomePage'

const HOME_PAGE_QUERY = `  
  query MyQuery($locale: SiteLocale) {
    homePage(locale: $locale) {
      buttonScreen1ContactSales
      buttonScreen1GetStarted
      description {
        value
      }
      features
      id
      subTitle
      title
      buttonScreen2
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

export default async function Home({ params }) {
  const data = await getData(HOME_PAGE_QUERY, {
    locale: params.locale,
  })

  return <HomePage data={data} params={params} />
}
