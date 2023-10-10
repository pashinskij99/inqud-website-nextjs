import { getData } from '@/lib/datocms'
import ContactUsPage from '@/views/ContactUsPage'

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

export default async function Page() {
  const data = await getData(PAGE_QUERY, {})

  return <ContactUsPage data={data} />
}
