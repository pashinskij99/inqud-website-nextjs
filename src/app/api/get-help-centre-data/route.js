import { NextResponse } from 'next/server'
import { getData } from '@/lib/datocms'

export const EXPLORE_PRODUCT_ID = '193424447'
export const EXPLORE_CATEGORY_ID = '193424450'
export const PERSONAL_ID = '193424445'
export const BUSSINESS_ID = '193424446'

const HELP_CENTRE_QUERY = `
  query MyQuery($locale: SiteLocale, $categoryId: ItemId) {
    products: allHelpCentres(locale: $locale, fallbackLocales: en, filter: {
      category: {eq: "${EXPLORE_PRODUCT_ID}"},
      typeContent: {eq: $categoryId}
    }) {
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
    categories: allHelpCentres(locale: $locale, fallbackLocales: en, filter: {
      category: {eq: "${EXPLORE_CATEGORY_ID}"},
      typeContent: {eq: $categoryId}
    }) {
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

export async function POST(req) {
  const { params, categoryId } = await req.json()

  const data = await getData(HELP_CENTRE_QUERY, {
    locale: params.locale,
    categoryId,
  })

  return NextResponse.json({
    data,
  })
}
