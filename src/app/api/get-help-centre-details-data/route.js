import { NextResponse } from 'next/server'
import { getData } from '@/lib/datocms'

export async function POST(req) {
  const { params } = await req.json()

  const HELP_CENTRE_PAGE = `
  query MyQuery(
      $slug: String = "${params.slug}",
      $locale: SiteLocale
    ) {
    formSendResponse(locale: $locale, fallbackLocales: en) {
      formTitle
      formMessagePlaceholder
      formLable2
      formLable1
      formFooterDescription
      formDescription
      formButtonText
    }  
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
