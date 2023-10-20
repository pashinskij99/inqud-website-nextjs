import { NextResponse } from 'next/server'
import { getData } from '@/lib/datocms'

// filter: {mainTitle: {matches: {pattern: "${helpCentreLinkTransformToNormal(
//   decodeURIComponent(params.slug)
// )}"}}}

export async function POST(req) {
  const { params } = await req.json()

  const HELP_CENTRE_PAGE = `
  query MyQuery(
      $slug: String = "${params.slug}",
      $locale: SiteLocale
    ) {
    helpCentre(
        locale: $locale,
        filter: {
          slugPage: {eq: $slug}
        }
      ) {
      slugPage
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
