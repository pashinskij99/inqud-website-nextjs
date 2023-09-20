import { performRequest } from '@/lib/datocms'
import BlogsPage from '@/views/BlogsPage'

async function Page({ searchParams, params }) {
  // const PRODUCTS_QUERY = `
  //   query Products {
  //     allProducts (filter: {product: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}}) {
  //       id
  //     }
  //   }
  // `

  // const INDUSTRIES_QUERY = `
  //   query Industries {
  //     allIndustries (filter: {industry: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}}) {
  //       id
  //     }
  //   }
  // `
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

  // const idAllProducts = allProducts.map(({ id }) => id)
  // const idAllIndustries = allIndustries.map(({ id }) => id)
  // const tagIdArray = searchParams.tag ? searchParams.tag.split(',') : []

  const PAGE_TAG_QUERY = `
  query Blog($locale: SiteLocale) {
    allTags(locale: $locale) {
      id
      tag
    }
    blogHeroSection(locale: $locale) {
      title
      inputPlaceholder
      id
      description {
        value
      }
      buttonBack
      button
      buttonLoadMore
    }
  }`

  // const first = searchParams.first ? +searchParams.first : 12
  // const skip = searchParams.skip ? +searchParams.skip : 0
  const { allTags, blogHeroSection } = await performRequest({
    query: PAGE_TAG_QUERY,
    revalidate: 0,
    variables: {
      locale: params.locale,
    },
  })

  // const tags = {
  //   allTags,
  //   activeTags: searchParams.tag ? searchParams.tag.split(',') : [],
  // }

  // const pagination = {
  //   first,
  //   skip,
  //   count: _allBlogsMeta.count,
  // }

  // console.log(_allBlogsMeta.count)

  return (
    <BlogsPage
      searchParams={searchParams}
      // data={allBlogs}
      heroSectionData={blogHeroSection}
      params={params}
      tags={allTags}
      // pagination={pagination}
    />
  )
}

export default Page
