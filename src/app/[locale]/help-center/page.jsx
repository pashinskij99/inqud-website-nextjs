import { getData } from '@/lib/datocms'
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

async function Page({ params }) {
  const data = await getData(HELP_CENTRE_QUERY, {
    locale: params.locale,
  })

  return (
    <HelpCenterPageContent pageData={data.helpCentreHero} params={params} />
  )
}

export default Page
