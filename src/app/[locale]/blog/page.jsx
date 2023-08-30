import { draftMode } from 'next/headers'
import { performRequest } from '@/lib/datocms'
import BlogsPage from '@/views/BlogsPage'

async function Page({ searchParams }) {
  const { isEnabled } = draftMode()

  const PRODUCTS_QUERY = `
    query Products {
      allProducts (filter: {product: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}}) {
        id
      }
    }
  `

  const INDUSTRIES_QUERY = `
    query Industries {
      allIndustries (filter: {industry: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}}) {
        id
      }
    }
  `
  const { allProducts } = await performRequest({
    query: PRODUCTS_QUERY,
    includeDrafts: isEnabled,
    revalidate: 10,
  })
  const { allIndustries } = await performRequest({
    query: INDUSTRIES_QUERY,
    includeDrafts: isEnabled,
    revalidate: 10,
  })

  const idAllProducts = allProducts.map(({ id }) => id)
  const idAllIndustries = allIndustries.map(({ id }) => id)
  const tagIdArray = searchParams.tag ? searchParams.tag.split(',') : []

  const PAGE_CONTENT_QUERY = `
  query Blog($first: IntType = 6, $skip: IntType = 0) {
    allBlogs(
      orderBy: _createdAt_DESC,
      first: $first, 
      skip: $skip,
      filter: {
        OR: [
          ${
            searchParams.search
              ? `{mainTitle: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}},`
              : ''
          }
          ${
            idAllIndustries.length > 0
              ? `{industries: {anyIn: [${idAllIndustries}]}}`
              : ''
          }
          ${
            idAllIndustries.length > 0
              ? `{products: {anyIn: [${idAllIndustries}]}},`
              : ''
          }
          ${tagIdArray.length > 0 ? `{mainTag: {in: [${tagIdArray}]}},` : ''}
        ]}) {
        id
        mainTitle
        mainTag {
          tag
        }
        tags {
          tag
          id
        }
        slugPage
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
            searchParams.search
              ? `{mainTitle: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}},`
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
    allTags {
      id
      tag
    }
  }`

  const first = searchParams.first ? +searchParams.first : 12
  const skip = searchParams.skip ? +searchParams.skip : 0
  const { _allBlogsMeta, allBlogs, allTags } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    revalidate: 10,
    includeDrafts: isEnabled,
    variables: {
      first,
      skip,
      productId: idAllProducts.length > 0 ? idAllProducts : '',
      industryId: idAllIndustries.length > 0 ? idAllIndustries : '',
      tagId: tagIdArray.length > 0 ? tagIdArray : '',
    },
  })

  const tags = {
    allTags,
    activeTags: searchParams.tag ? searchParams.tag.split(',') : [],
  }

  const pagination = {
    first,
    skip,
    count: _allBlogsMeta.count,
  }

  return (
    <BlogsPage
      searchParams={searchParams}
      data={allBlogs}
      tags={tags}
      pagination={pagination}
    />
  )
}

export default Page
