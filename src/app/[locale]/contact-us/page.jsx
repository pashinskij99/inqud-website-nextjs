import { toNextMetadata } from 'react-datocms'
import { getData, performRequest } from '@/lib/datocms'
import ContactUsPage from '@/views/ContactUsPage'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

const PAGE_QUERY = `
  query MyQuery {
    contactUsPage {
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
    revalidate: 360,
  })

  return toNextMetadata([...response.contactUsPage.seo])
}

export default async function Page() {
  const data = await getData(PAGE_QUERY, {})
  console.log(data)
  return <ContactUsPage data={data} />
}
