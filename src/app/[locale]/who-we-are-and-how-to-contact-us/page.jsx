import { performRequest } from '@/lib/datocms'
import WhoWeAreAndHowToContactUsPage from '@/views/WhoWeAreAndHowToContactUsPage'

const PRIVACY_NOTE_PAGE_QUERY = `  
    query MyQuery($locale: SiteLocale) {
        whoWeAreAndHowToContact(locale: $locale) {
            content {
                value
            }
            title
            id
            _updatedAt
        }
    }
`

const getData = async (query, variables) => {
  try {
    const data = await performRequest({
      query,
      revalidate: 0,
      variables,
    })

    return data
  } catch (error) {
    return {}
  }
}

export default async function Page({ params }) {
  const data = await getData(PRIVACY_NOTE_PAGE_QUERY, { locale: params.locale })
  return <WhoWeAreAndHowToContactUsPage data={data.whoWeAreAndHowToContact} />
}
