import { performRequest } from '@/lib/datocms'
import BlogPage from '@/views/BlogPage'

const PAGE_CONTENT_QUERY = `
query Blog($slug: ItemId) {
  blog(filter: {id: {eq: $slug}}) {
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
    timeToRead
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
    mainTag {
      tag
      id
    }
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
// twitterCard
// image {
//   url
// }
const PAGE_CONTENT_QUERY_SEO = `
query Blog($slug: ItemId) {
  blog(filter: {id: {eq: $slug}}) {
    slugPage
    seoMetaTag {
      description
      title
      
    }
  }
}`

const PAGE_RELATED_CONTENT_QUERY = `
query Home($first: IntType = 3, $tagId: [ItemId], $blogId: [ItemId]) {
    allBlogs(orderBy: _createdAt_DESC, first: $first, filter: { id: {notIn: $blogId}, mainTag: {in: $tagId} }) {
        id
        mainTitle
        mainTag {
          tag
          id
        }
        slugPage
        timeToRead
        _createdAt
        mainImage {
          url
        }
    }
}`

// const PAGE_CONTENT_QUERY_SLUG = `
// query Blog {
//   allBlogs {
//     slugPage
//   }
// }`

// export async function generateStaticParams() {
//   const { allBlogs } = await performRequest({ query: PAGE_CONTENT_QUERY_SLUG })

//   return allBlogs.map(({ slugPage }) => ({
//     slug: slugPage,
//   }))
// }

export async function generateMetadata({ params }) {
  const {
    blog: { seoMetaTag },
  } = await performRequest({
    query: PAGE_CONTENT_QUERY_SEO,
    revalidate: 0,
    variables: { slug: params.slug },
  })

  return {
    title: seoMetaTag.title,
    description: seoMetaTag.description,
  }
}

export default async function page({ params }) {
  const { blog } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    revalidate: 0,
    variables: { slug: params.slug },
  })

  const relatedData = await performRequest({
    query: PAGE_RELATED_CONTENT_QUERY,
    revalidate: 0,

    variables: {
      tagId: blog.mainTag.id,
      blogId: blog.id,
    },
  })

  return <BlogPage blog={blog} relatedData={relatedData} />
}
