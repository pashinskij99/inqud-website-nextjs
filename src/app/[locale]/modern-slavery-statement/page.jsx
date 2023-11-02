import { toNextMetadata } from 'react-datocms'
import ModernSlaveryStatementPage from '@/views/ModernSlaveryStatementPage/ModernSlaveryStatementPage'
import { getData, performRequest } from '@/lib/datocms'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const query = `
  query MyQuery($locale: SiteLocale) {
    modernSlaveryStatement(locale: $locale, fallbackLocales: en) {
      breadcrumb
      content {
        value
      }
    }
  }
`

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('modernSlaveryStatement'),
  })

  return toNextMetadata([...response.modernSlaveryStatement.seo])
}

export default async function Page({ params }) {
  const data = await getData(query, {
    locale: params.locale,
  })
  return <ModernSlaveryStatementPage data={data} />
}
