import PrivacyNoticePage from '@/views/PrivacyNoticePage/PrivacyNoticePage'
import { getData } from '@/lib/datocms'

const PRIVACY_NOTE_PAGE_QUERY = `  
query MyQuery($locale: SiteLocale) {
  privacyNotePage(locale: $locale) {
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
  const data = await getData(PRIVACY_NOTE_PAGE_QUERY, { locale: params.locale })
  return <PrivacyNoticePage data={data.privacyNotePage} />
}
