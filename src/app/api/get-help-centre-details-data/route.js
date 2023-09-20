import { NextResponse } from 'next/server'
import { performRequest } from '@/lib/datocms'
import { helpCentreLinkTransformToNormal } from '@/utils/helpCentreLinkTransform'

export async function POST(req) {
  const { params } = await req.json()

  const HELP_CENTRE_PAGE = `
  query MyQuery(
    $locale: SiteLocale,
    ) {
    helpCentre(
        locale: $locale,
        filter: {mainTitle: {matches: {pattern: "${helpCentreLinkTransformToNormal(
          decodeURIComponent(params.slug)
        )}"}}} 
      ) {
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

  const getData = async ({ query }) => {
    try {
      const helpCentreData = await performRequest({
        query,
        revalidate: 0,
      })

      return helpCentreData
    } catch (error) {
      throw Error(error.message)
    }
  }
  const helpCenterData = await getData({ query: HELP_CENTRE_PAGE })

  return NextResponse.json({
    data: helpCenterData,
  })
}
