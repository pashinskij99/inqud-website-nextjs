import { toNextMetadata } from 'react-datocms'
import { getData, performRequest } from '@/lib/datocms'
import WhoWeAreAndHowToContactUsPage from '@/views/WhoWeAreAndHowToContactUsPage'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const PRIVACY_NOTE_PAGE_QUERY = `  
  query MyQuery($locale: SiteLocale) {
    whoWeAreAndHowToContact(locale: $locale, fallbackLocales: en) {
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
    query: PAGE_SEO_QUERY('whoWeAreAndHowToContact'),
    revalidate: 0,
  })

  return toNextMetadata([...response.whoWeAreAndHowToContact.seo])
}

export default async function Page({ params }) {
  const data = await getData(PRIVACY_NOTE_PAGE_QUERY, { locale: params.locale })
  return <WhoWeAreAndHowToContactUsPage data={data.whoWeAreAndHowToContact} />
}
