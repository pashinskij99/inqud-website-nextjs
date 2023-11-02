import { toNextMetadata } from 'react-datocms/seo'
import { getData, performRequest } from '@/lib/datocms'
import { PAGE_DYNAMIC_SEO_QUERY, PAGE_SEO_QUERY } from '@/lib/datocmsQuery'
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

export async function generateMetadata({ params }) {
  const response = await performRequest({
    query: PAGE_DYNAMIC_SEO_QUERY('helpCentre'),
    variables: {
      slug: params.slug,
      locale: params.locale,
    },
  })

  return toNextMetadata([...response.helpCentre.seo])
}

async function Page({ params }) {
  const data = await getData(QUERY, {
    locale: params.locale,
  })

  return <DetailsSection formData={data.formSendResponse} params={params} />
}

export default Page
