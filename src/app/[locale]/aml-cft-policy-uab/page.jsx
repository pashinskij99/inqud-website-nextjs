import { toNextMetadata } from 'react-datocms'
import { getData, performRequest } from '@/lib/datocms'
import AmlCftPolicyUabPage from '@/views/AmlCftPolicyUabPage/AmlCftPolicyUabPage'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const AML_CFT_POLICY_UAB_PAGE_QUERY = `  
  query MyQuery($locale: SiteLocale) {
    antiMoneyLaundering(locale: $locale, fallbackLocales: en) {
      breadcrumb
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
    query: PAGE_SEO_QUERY('antiMoneyLaundering'),
    revalidate: 0,
  })

  return toNextMetadata([...response.antiMoneyLaundering.seo])
}

export default async function Page({ params }) {
  const data = await getData(AML_CFT_POLICY_UAB_PAGE_QUERY, {
    locale: params.locale,
  })
  return <AmlCftPolicyUabPage data={data} />
}
