import { notFound } from 'next/navigation'
import { getData } from '@/lib/datocms'
import BlogPage from '@/views/BlogPage'

const PAGE_CONTENT_QUERY = `
query Blog($slug: String, $locale: SiteLocale) {
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
  blog(locale: $locale, filter: {slugPage: {eq: $slug}}) {
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
    titlesForNavigation
    timeToRead
    _createdAt
    seoMetaTag {
      description
      title
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

const PAGE_CONTENT_QUERY_SEO = `
query Blog($slug: String, $locale: SiteLocale) {
  blog(locale: $locale, filter: {slugPage: {eq: $slug}}) {
    seoMetaTag {
      description
      title
    }
  }
  allBlogs(locale: $locale, orderBy: _createdAt_DESC, first: $first, filter: { slugPage: {neq: $slug}, mainTag: {in: $tagId} }) {
    id
    mainTitle
    slugPage
    mainTag {
      tag
      id
    }
    timeToRead
    _createdAt
    mainImage {
      url
    }
  }
}`

// const PAGE_RELATED_CONTENT_QUERY = `
// query Home($first: IntType = 3, $tagId: [ItemId], $slug: String, $locale: SiteLocale) {
//
// }`

export async function generateMetadata({ params }) {
  try {
    const {
      blog: { seoMetaTag },
    } = await getData(PAGE_CONTENT_QUERY_SEO, {
      slug: params.slug,
      locale: params.locale,
    })

    return {
      title: seoMetaTag.title,
      description: seoMetaTag.description,
    }
  } catch (e) {
    return {}
  }
}

export default async function page({ params }) {
  const { blog, blogHeroSection, allBlogs } = await getData(
    PAGE_CONTENT_QUERY,
    {
      slug: params.slug,
      locale: params.locale,
    }
  )

  if (!blog) return notFound()

  // const relatedData = await getData(PAGE_RELATED_CONTENT_QUERY, {
  //   tagId: blog.mainTag.id,
  //   locale: params.locale,
  //   slug: params.slug,
  // })

  return (
    <BlogPage
      blog={blog}
      blogHeroSection={blogHeroSection}
      relatedData={allBlogs}
    />
  )
}
