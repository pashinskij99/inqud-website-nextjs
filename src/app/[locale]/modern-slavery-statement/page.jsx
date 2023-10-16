import { toNextMetadata } from 'react-datocms'
import ModernSlaveryStatementPage from '@/views/ModernSlaveryStatementPage/ModernSlaveryStatementPage'
import { performRequest } from '@/lib/datocms'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('modernSlaveryStatement'),
    revalidate: 360,
  })

  return toNextMetadata([...response.modernSlaveryStatement.seo])
}

export default async function Page() {
  return <ModernSlaveryStatementPage />
}
