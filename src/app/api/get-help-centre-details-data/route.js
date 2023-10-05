import { NextResponse } from 'next/server'
import { getData } from '@/lib/datocms'
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
  const helpCenterData = await getData(HELP_CENTRE_PAGE, {})

  return NextResponse.json({
    data: helpCenterData,
  })
}
