import { performRequest } from '@/lib/datocms'
import { HelpCenterPageContent } from '@/views/HelpCenterPage/HelpCenterPage'

const HELP_CENTRE_QUERY = `
  query MyQuery {
    allHelpCentreBlockSeconds {
      mainTitleBusiness
      mainTitlePersonal
      id
      iconPersonal {
        url
      }
      iconBusiness {
        url
      }
      contentPersonal {
        id
        title
        descriptions {
          id
          description {
            value
          }
        }
      }
      contentBusiness {
        id
        title
        descriptions {
          id
          description {
            value
          }
        }
      }
    }
    allHelpCentreBlocks {
      mainTitleBusiness
      mainTitlePersonal
      id
      iconPersonal {
        url
      }
      iconBusiness {
        url
      }
      contentPersonal {
        id
        title
        descriptions {
          id
          description {
            value
          }
        }
      }
      contentBusiness {
        id
        title
        descriptions {
          id
          description {
            value
          }
        }
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

  return <HelpCenterPageContent data={data} isSearch={!!searchParams.search} />
}

export default Page
