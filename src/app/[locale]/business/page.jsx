/* eslint-disable no-unused-vars */
import HomePage from '@/views/HomePage'
import { getData } from '@/lib/datocms'

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
  }
`

export default async function Home({ params }) {
  // const data = await getData(HOME_PAGE_QUERY, {
  //   locale: params.locale,
  // })
  return (
    <HomePage
      // data={data}
      params={params}
    />
  )
}
