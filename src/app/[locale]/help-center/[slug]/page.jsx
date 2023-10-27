import { getData } from '@/lib/datocms'
import DetailsSection from '@/sections/HelpCenterSections/DetailsSection'

const QUERY = `
  query MyQuery($locale: SiteLocale) {
    formSendResponse(locale: $locale, fallbackLocales: en) {
      formTitle
      formMessagePlaceholder
      formLable2
      formLable1
      formFooterDescription
      formDescription
      formButtonText
    }
  }
`

async function Page({ params }) {
  const data = await getData(QUERY, {
    locale: params.locale,
  })

  return <DetailsSection formData={data.formSendResponse} params={params} />
}

export default Page
