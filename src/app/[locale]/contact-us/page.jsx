import { performRequest } from '@/lib/datocms'
import ContactUsPage from '@/views/ContactUsPage'

const PAGE_QUERY = `
    query MyQuery {
        contactUsPage {
        id
        listTitle
        mainButtonText
        mainSubTitle
        mainTitle
        listItems {
            title
            description {
            value
            }
            id
        }
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

export default async function Page() {
  const data = await getData(PAGE_QUERY, {})

  return <ContactUsPage data={data} />
}
