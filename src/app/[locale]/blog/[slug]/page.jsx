import { notFound } from 'next/navigation'
import { toNextMetadata } from 'react-datocms/seo'
import { getData, performRequest } from '@/lib/datocms'
import BlogPage from '@/views/BlogPage'
import { PAGE_DYNAMIC_SEO_QUERY } from '@/lib/datocmsQuery'

const PAGE_CONTENT_QUERY = `
query Blog($slug: String, $locale: SiteLocale) {
  blogHeroSection(locale: $locale, fallbackLocales: en) {
    breadcrumb
    title
    inputPlaceholder
    id
    description {
      value
    }
    buttonBack
    button
    buttonLoadMore
    relatedTitle
    relatedButtonText
  }
  blog(locale: $locale, fallbackLocales: en, filter: {slugPage: {eq: $slug}}) {
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

const PAGE_RELATED_CONTENT_QUERY = `
query Home($first: IntType = 3, $tagId: [ItemId], $slug: String, $locale: SiteLocale) {
    allBlogs(locale: $locale, fallbackLocales: en, orderBy: _createdAt_DESC, first: $first, filter: { slugPage: {neq: $slug}, mainTag: {in: $tagId} }) {
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

export async function generateMetadata({ params }) {
  const response = await performRequest({
    query: PAGE_DYNAMIC_SEO_QUERY('blog'),
    variables: {
      slug: params.slug,
      locale: params.locale,
    },
  })

  return toNextMetadata([...response.blog.seo])
}

export default async function page({ params }) {
  const { blog, blogHeroSection } = await getData(PAGE_CONTENT_QUERY, {
    slug: params.slug,
    locale: params.locale,
  })

  if (!blog) return notFound()

  const relatedData = await getData(PAGE_RELATED_CONTENT_QUERY, {
    tagId: blog.mainTag.id,
    locale: params.locale,
    slug: params.slug,
  })

  return (
    <BlogPage
      blog={blog}
      blogHeroSection={blogHeroSection}
      relatedData={relatedData}
    />
  )
}
