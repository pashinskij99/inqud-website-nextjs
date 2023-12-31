import HelpCenterPage from '@/views/HelpCenterPage'
import { getData } from '@/lib/datocms'

const HELP_CENTRE_QUERY = `
  query MyQuery($locale: SiteLocale) {
    helpCentreHero(locale: $locale, fallbackLocales: en) {
      breadcrumb
      title
      placeholder
      id
      button
      backButton
      titleByCategory
      titleByCategory
    }
  }
`

export default async function layout({ children, params }) {
  const data = await getData(HELP_CENTRE_QUERY, {
    locale: params.locale,
  })
  const page = ''
  return (
    <main className='layout'>
      <HelpCenterPage data={data} page={page}>
        {children}
      </HelpCenterPage>
    </main>
  )
}
