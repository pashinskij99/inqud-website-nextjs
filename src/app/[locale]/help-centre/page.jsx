import { performRequest } from '@/lib/datocms'
import { HelpCenterPageContent } from '@/views/HelpCenterPage/HelpCenterPage'

const HELP_CENTRE_QUERY = `
query MyQuery {
  allHelpCentres {
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

const getData = async () => {
  try {
    const helpCentreData = await performRequest({
      query: HELP_CENTRE_QUERY,
      revalidate: 0,
    })

    return helpCentreData
  } catch (error) {
    throw Error(error.message)
  }
}

async function Page({ searchParams }) {
  const data = await getData()

  return (
    <HelpCenterPageContent
      data={data}
      isSearch={!!searchParams.search}
      searchValue={searchParams.search || ''}
    />
  )
}

export default Page
