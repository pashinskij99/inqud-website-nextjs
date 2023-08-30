import { performRequest } from '@/lib/datocms'
import DetailsSection from '@/sections/HelpCenterSections/DetailsSection'

const HELP_CENTRE_PRODUCT = `
  query MyQuery($itemId: ItemId) {
    helpCentreBlock(filter: {id: {eq: $itemId}}) {
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

const HELP_CENTRE_CATEGORY = `
query MyQuery($itemId: ItemId) {
  helpCentreBlockSecond(filter: {id: {eq: $itemId}}) {
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

const getData = async (id, type) => {
  try {
    const helpCentreData = await performRequest({
      query: type === 'product' ? HELP_CENTRE_PRODUCT : HELP_CENTRE_CATEGORY,
      revalidate: 10,

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
  const helpCenterData = await getData(params.slug, searchParams?.type)

  return <DetailsSection data={helpCenterData} type={searchParams?.type} />
}

export default Page
