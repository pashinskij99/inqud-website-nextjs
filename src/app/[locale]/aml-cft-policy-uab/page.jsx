import { getData } from '@/lib/datocms'
import AmlCftPolicyUabPage from '@/views/AmlCftPolicyUabPage/AmlCftPolicyUabPage'

const AML_CFT_POLICY_UAB_PAGE_QUERY = `  
query MyQuery($locale: SiteLocale) {
    antiMoneyLaundering(locale: $locale) {
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
  const data = await getData(AML_CFT_POLICY_UAB_PAGE_QUERY, {
    locale: params.locale,
  })
  return <AmlCftPolicyUabPage data={data} />
}
