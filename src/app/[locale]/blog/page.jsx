import { performRequest } from '@/lib/datocms'
import BlogsPage from '@/views/BlogsPage'

async function Page({ searchParams }) {
  const PRODUCTS_QUERY = `
    query Products {
      allProducts (filter: {product: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}}) {
        id
        product
      }
    }
  `

  const INDUSTRIES_QUERY = `
    query Industries {
      allIndustries (filter: {industry: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}}) {
        id
        industry
      }
    }
  `

  const TAGS_QUERY = `
    query Tags {
      allTags {
        id
        tag
      }
    }
  `

  const { allProducts } = await performRequest({
    query: PRODUCTS_QUERY,
  })
  const { allIndustries } = await performRequest({
    query: INDUSTRIES_QUERY,
  })
  const { allTags } = await performRequest({
    query: TAGS_QUERY,
  })

  const productIdArray = allProducts.map(({ id }) => id)
  const industryIdArray = allIndustries.map(({ id }) => id)
  const tagIdArray = searchParams.tag ? searchParams.tag.split(',') : []

  const PAGE_CONTENT_QUERY = `
  query Home($first: IntType = 6, $skip: IntType = 0) {
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
            industryIdArray.length > 0
              ? `{industries: {anyIn: [${industryIdArray}]}}`
              : ''
          }
          ${
            productIdArray.length > 0
              ? `{products: {anyIn: [${productIdArray}]}},`
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
            industryIdArray.length > 0
              ? `{industries: {anyIn: [${industryIdArray}]}}`
              : ''
          }
          ${
            productIdArray.length > 0
              ? `{products: {anyIn: [${productIdArray}]}},`
              : ''
          }
          ${tagIdArray.length > 0 ? `{mainTag: {in: [${tagIdArray}]}},` : ''}
        ]}) {
      count
    }
  }`

  const first = searchParams.first ? +searchParams.first : 3
  const skip = searchParams.skip ? +searchParams.skip : 0

  const { _allBlogsMeta, allBlogs } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: {
      first,
      skip,
      productId: productIdArray.length > 0 ? productIdArray : '',
      industryId: industryIdArray.length > 0 ? industryIdArray : '',
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
