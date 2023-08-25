import { performRequest } from '@/lib/datocms'
import BlogPage from '@/views/BlogPage'

const PAGE_CONTENT_QUERY = `
query Blog($slug: String) {
  allBlogs(filter: {slugPage: {eq: $slug}}) {
    id
    nameAuthor
    industries {
      industry
      id
    }
    products {
      id
      product
    }
    professionAuthor
    slugPage
    titlesForNavigation
    _createdAt
    seoMetaTag {
      description
      title
      twitterCard
      image {
        url
      }
    }
    mainTitle
    mainImage {
      url
    }
    authorImage {
      url
    }
    bodyContent {
      id
      selectedText
      title
      descriptions {
        description {
          blocks
          links
          value
        }
        id
      }
      descriptions2 {
        description {
          blocks
          links
          value
        }
        id
      }
      image {
        url
      }
    }
    tags {
      tag
      id
    }
  }
}`

const PAGE_CONTENT_QUERY_SEO = `
query Blog($slug: String) {
  allBlogs(filter: {slugPage: {eq: $slug}}) {
    slugPage
    seoMetaTag {
      description
      title
      twitterCard
      image {
        url
      }
    }
  }
}`

const PAGE_RELATED_CONTENT_QUERY = `
query Home($first: IntType = 3, $tagId: [ItemId], $blogId: [ItemId]) {
    allBlogs(orderBy: _createdAt_DESC, first: $first, filter: { id: {notIn: $blogId}, tags: {anyIn: $tagId} }) {
        id
        mainTitle
        tags {
          tag
          id
        }
        slugPage
        _createdAt
        mainImage {
          url
        }
    }
}`

const PAGE_CONTENT_QUERY_SLUG = `
query Blog {
  allBlogs {
    slugPage
  }
}`

export async function generateStaticParams() {
  const { allBlogs } = await performRequest({ query: PAGE_CONTENT_QUERY_SLUG })

  return allBlogs.map(({ slugPage }) => ({
    slug: slugPage,
  }))
}

export async function generateMetadata({ params }) {
  const {
    allBlogs: [{ seoMetaTag }],
  } = await performRequest({
    query: PAGE_CONTENT_QUERY_SEO,
    variables: { slug: params.slug },
  })

  return {
    title: seoMetaTag.title,
    description: seoMetaTag.description,
  }
}

export default async function page({ params }) {
  const { allBlogs } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { slug: params.slug },
  })

  const relatedData = await performRequest({
    query: PAGE_RELATED_CONTENT_QUERY,
    variables: {
      tagId: allBlogs[0].tags.map(({ id }) => id),
      blogId: allBlogs[0].id,
    },
  })

  return <BlogPage blog={allBlogs[0]} relatedData={relatedData} />
}
