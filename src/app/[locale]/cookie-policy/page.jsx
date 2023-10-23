import { toNextMetadata } from 'react-datocms'
import { getData, performRequest } from '@/lib/datocms'
import CookiePolicyPage from '@/views/CookiePolicyPage/CookiePolicyPage'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const COOKIE_POLICY_PAGE_QUERY = `  
  query MyQuery($locale: SiteLocale) {
    cookiePolicy(locale: $locale, fallbackLocales: en) {
      content {
        value
      }
      title
      id
      _updatedAt
    }
  }
`

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('cookiePolicy'),
    revalidate: 0,
  })

  return toNextMetadata([...response.cookiePolicy.seo])
}

export default async function Page({ params }) {
  const data = await getData(COOKIE_POLICY_PAGE_QUERY, {
    locale: params.locale,
  })
  return <CookiePolicyPage data={data} />
}
