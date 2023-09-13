import { performRequest } from '@/lib/datocms';
import BlogsPage from '@/views/BlogsPage';

async function Page({ searchParams, params }) {
  const PRODUCTS_QUERY = `
    query Products {
      allProducts (filter: {product: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}}) {
        id
      }
    }
  `;

  const INDUSTRIES_QUERY = `
    query Industries {
      allIndustries (filter: {industry: {matches: {pattern: "^(?=.*${searchParams.search}).*"}}}) {
        id
      }
    }
  `;
  const { allProducts } = await performRequest({
    query: PRODUCTS_QUERY,
    revalidate: 0,
    variables: {
      locale: params.locale,
    },
  });
  const { allIndustries } = await performRequest({
    query: INDUSTRIES_QUERY,
    revalidate: 0,
    variables: {
      locale: params.locale,
    },
  });

  const idAllProducts = allProducts.map(({ id }) => id);
  const idAllIndustries = allIndustries.map(({ id }) => id);
  const tagIdArray = searchParams.tag ? searchParams.tag.split(',') : [];

  const PAGE_CONTENT_QUERY = `
  query Blog($first: IntType = 6, $skip: IntType = 0, $locale: SiteLocale) {
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
    allBlogs(
      orderBy: _createdAt_DESC,
      locale: $locale,
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
    allTags(locale: $locale) {
      id
      tag
    }
  }`;

  const first = searchParams.first ? +searchParams.first : 12;
  const skip = searchParams.skip ? +searchParams.skip : 0;
  const { _allBlogsMeta, allBlogs, allTags, blogHeroSection } =
    await performRequest({
      query: PAGE_CONTENT_QUERY,
      revalidate: 0,
      // includeDrafts: isEnabled,
      variables: {
        first,
        skip,
        locale: params.locale,
        productId: idAllProducts.length > 0 ? idAllProducts : '',
        industryId: idAllIndustries.length > 0 ? idAllIndustries : '',
        tagId: tagIdArray.length > 0 ? tagIdArray : '',
      },
    });

  const tags = {
    allTags,
    activeTags: searchParams.tag ? searchParams.tag.split(',') : [],
  };

  const pagination = {
    first,
    skip,
    count: _allBlogsMeta.count,
  };

  return (
    <BlogsPage
      searchParams={searchParams}
      data={allBlogs}
      heroSectionData={blogHeroSection}
      tags={tags}
      pagination={pagination}
    />
  );
}

export default Page;
