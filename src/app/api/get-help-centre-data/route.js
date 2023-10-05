import { NextResponse } from 'next/server'
import { getData } from '@/lib/datocms'

const HELP_CENTRE_QUERY = `
  query MyQuery($locale: SiteLocale) {
    allHelpCentres(locale: $locale) {
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

export async function POST(req) {
  const { params } = await req.json()

  const data = await getData(HELP_CENTRE_QUERY, {
    locale: params.locale,
  })

  return NextResponse.json({
    data,
  })
}
