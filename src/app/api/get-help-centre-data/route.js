import { NextResponse } from 'next/server'
import { performRequest } from '@/lib/datocms'

export async function POST(req) {
  const { params } = await req.json()

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

  const getData = async (query, variables) => {
    try {
      return await performRequest({
        query,
        revalidate: 0,
        variables,
      })
    } catch (error) {
      throw Error(error.message)
    }
  }

  const data = await getData(HELP_CENTRE_QUERY, {
    locale: params.locale,
  })

  return NextResponse.json({
    data,
  })
}
