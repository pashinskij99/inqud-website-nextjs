import { toNextMetadata } from 'react-datocms'
import PrivacyNoticePage from '@/views/PrivacyNoticePage/PrivacyNoticePage'
import { getData, performRequest } from '@/lib/datocms'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const PRIVACY_NOTE_PAGE_QUERY = `  
query MyQuery($locale: SiteLocale) {
  privacyNotePage(locale: $locale, fallbackLocales: en) {
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
    query: PAGE_SEO_QUERY('privacyNotePage'),
  })

  return toNextMetadata([...response.privacyNotePage.seo])
}

export default async function Page({ params }) {
  const data = await getData(PRIVACY_NOTE_PAGE_QUERY, { locale: params.locale })
  return <PrivacyNoticePage data={data.privacyNotePage} />
}
