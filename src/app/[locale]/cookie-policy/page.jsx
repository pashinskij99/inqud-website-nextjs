import { getData } from '@/lib/datocms'
import CookiePolicyPage from '@/views/CookiePolicyPage/CookiePolicyPage'

const COOKIE_POLICY_PAGE_QUERY = `  
query MyQuery($locale: SiteLocale) {
    cookiePolicy(locale: $locale) {
    content {
      value
    }
    title
    id
    _updatedAt
}
}
`

export default async function Page({ params }) {
  const data = await getData(COOKIE_POLICY_PAGE_QUERY, {
    locale: params.locale,
  })
  return <CookiePolicyPage data={data} />
}
