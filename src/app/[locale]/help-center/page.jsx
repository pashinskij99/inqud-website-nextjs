import { toNextMetadata } from 'react-datocms/seo'
import { getData, performRequest } from '@/lib/datocms'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'
import { HelpCenterPageContent } from '@/views/HelpCenterPage/HelpCenterPage'

const HELP_CENTRE_QUERY = `
  query MyQuery($locale: SiteLocale) {
    helpCentreHero(locale: $locale, fallbackLocales: en) {
      titleByProduct
      titleByCategory
      documentationTitle
      documentationTitleCart
      documentationButtonText
      documentationDescriptionCart
    }
  }
`

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('helpCentreHero'),
  })

  return toNextMetadata([...response.helpCentreHero.seo])
}

async function Page({ params }) {
  const data = await getData(HELP_CENTRE_QUERY, {
    locale: params.locale,
  })

  return (
    <HelpCenterPageContent pageData={data.helpCentreHero} params={params} />
  )
}

export default Page
