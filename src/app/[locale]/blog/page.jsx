import { performRequest } from '@/lib/datocms'
import BlogsPage from '@/views/BlogsPage'

async function Page({ searchParams, params }) {
  const PAGE_TAG_QUERY = `
  query Blog($locale: SiteLocale) {
    allTags(locale: $locale) {
      tag
      id
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

  const { allTags, blogHeroSection } = await performRequest({
    query: PAGE_TAG_QUERY,
    revalidate: 0,
    variables: {
      locale: params.locale,
    },
  })

  return (
    <BlogsPage
      searchParams={searchParams}
      heroSectionData={blogHeroSection}
      params={params}
      tags={allTags}
    />
  )
}

export default Page
