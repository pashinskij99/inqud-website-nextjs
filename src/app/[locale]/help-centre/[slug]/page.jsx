import { performRequest } from '@/lib/datocms'
import DetailsSection from '@/sections/HelpCenterSections/DetailsSection'

const HELP_CENTRE_PAGE = `
  query MyQuery($itemId: ItemId) {
    helpCentre(filter: {id: {eq: $itemId}}) {
      content {
        id
        title
        descriptions {
          description {
            value
          }
          id
        }
      }
      icon {
        url
      }
      id
      mainTitle
      category {
        id
        name
      }
      typeContent {
        name
        id
      }
    }
  }
`

const getData = async (id) => {
  try {
    const helpCentreData = await performRequest({
      query: HELP_CENTRE_PAGE,
      revalidate: 0,

      variables: {
        itemId: id,
      },
    })

    return helpCentreData
  } catch (error) {
    throw Error(error.message)
  }
}

async function Page({ params, searchParams }) {
  const helpCenterData = await getData(params.slug)

  return <DetailsSection data={helpCenterData} type={searchParams?.type} />
}

export default Page
