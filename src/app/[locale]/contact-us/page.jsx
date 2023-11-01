import { toNextMetadata } from 'react-datocms'
import { getData, performRequest } from '@/lib/datocms'
import ContactUsPage from '@/views/ContactUsPage'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const PAGE_QUERY = `
  query MyQuery($locale: SiteLocale) {
    contactUsPage(locale: $locale, fallbackLocales: en) {
      breadcrumb
      listTitle
      mainButtonText
      mainSubTitle
      mainTitle
      listItems {
        title
        description {
          value
        }
      }
    }
  }
`

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('contactUsPage'),
  })

  return toNextMetadata([...response.contactUsPage.seo])
}

export default async function Page({ params }) {
  const data = await getData(PAGE_QUERY, {
    locale: params.locale,
  })
  return <ContactUsPage data={data} />
}
