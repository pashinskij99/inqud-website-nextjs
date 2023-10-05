import { NextResponse } from 'next/server'
import { getData } from '@/lib/datocms'

export async function POST(req) {
  const { params, paginationParams, tags, searchValue } = await req.json()

  const PRODUCTS_QUERY = `
    query Products {
      allProducts (filter: {product: {${
        searchValue ? 'matches' : 'notMatches'
      } : {pattern: "^(?=.*${searchValue}).*"}}}) {
        id
      }
    }
  `

  const INDUSTRIES_QUERY = `
    query Industries {
      allIndustries (filter: {industry: {${
        searchValue ? 'matches' : 'notMatches'
      }: {pattern: "^(?=.*${searchValue}).*"}}}) {
        id
      }
    }
  `
  const { allProducts } = await getData(PRODUCTS_QUERY, {
    locale: params.locale,
  })
  const { allIndustries } = await getData(INDUSTRIES_QUERY, {
    locale: params.locale,
  })
  // const { allProducts } = await performRequest({
  //   query: PRODUCTS_QUERY,
  //   revalidate: 0,
  //   variables: {
  //     locale: params.locale,
  //   },
  // })
  // const { allIndustries } = await performRequest({
  //   query: INDUSTRIES_QUERY,
  //   revalidate: 0,
  //   variables: {
  //     locale: params.locale,
  //   },
  // })

  const idAllProducts = allProducts.map(({ id }) => id)
  const idAllIndustries = allIndustries.map(({ id }) => id)
  const tagIdArray = tags.length > 0 ? tags.map((tag) => tag.id) : []

  const PAGE_CONTENT_QUERY = `
  query Blog($first: IntType = 6, $skip: IntType = 0, $locale: SiteLocale) {
    allBlogs(
      orderBy: _createdAt_DESC,
      locale: $locale,
      first: $first,
      skip: $skip,
      filter: {
        OR: [
          ${
            searchValue
              ? `{mainTitle: {matches: {pattern: "^(?=.*${searchValue}).*"}}},`
              : ''
          }
          ${
            idAllIndustries.length > 0
              ? `{industries: {anyIn: [${idAllIndustries}]}}`
              : ''
          }
          ${
            idAllProducts.length > 0
              ? `{products: {anyIn: [${idAllProducts}]}},`
              : ''
          }
          ${tagIdArray.length > 0 ? `{mainTag: {in: [${tagIdArray}]}},` : ''}
        ]}) {
        id
        mainTitle
        slugPage
        mainTag {
          tag
        }
        tags {
          tag
          id
        }
        _createdAt
        timeToRead
        mainImage {
        url
        }
    }
    _allBlogsMeta (
      filter: {
        OR: [
          ${
            searchValue
              ? `{mainTitle: {matches: {pattern: "^(?=.*${searchValue}).*"}}},`
              : ''
          }
          ${
            idAllIndustries.length > 0
              ? `{industries: {anyIn: [${idAllIndustries}]}}`
              : ''
          }
          ${
            idAllProducts.length > 0
              ? `{products: {anyIn: [${idAllProducts}]}},`
              : ''
          }
          ${tagIdArray.length > 0 ? `{mainTag: {in: [${tagIdArray}]}},` : ''}
        ]}) {
      count
    }
  }`

  const first = paginationParams.first ? +paginationParams.first : 12
  const skip = paginationParams.skip ? +paginationParams.skip : 0
  const { _allBlogsMeta, allBlogs } = await getData(PAGE_CONTENT_QUERY, {
    first,
    skip,
    locale: params.locale,
  })
  // const { _allBlogsMeta, allBlogs } = await performRequest({
  //   query: PAGE_CONTENT_QUERY,
  //   revalidate: 0,
  //   variables: {
  //     first,
  //     skip,
  //     locale: params.locale,
  //   },
  // })

  const pagination = {
    first,
    skip,
    count: _allBlogsMeta.count,
  }

  return NextResponse.json({
    data: allBlogs,
    tags,
    pagination,
  })
}
