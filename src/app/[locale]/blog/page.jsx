// import Script from 'next/script'
import { toNextMetadata } from 'react-datocms'
import Script from 'next/script'
import { getData, performRequest } from '@/lib/datocms'
import BlogsPage from '@/views/BlogsPage'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('blogHeroSection'),
  })

  return toNextMetadata([...response.blogHeroSection.seo])
}

async function Page({ searchParams, params }) {
  const PAGE_TAG_QUERY = `
  query Blog($locale: SiteLocale) {
    allTags(locale: $locale, fallbackLocales: en) {
      tag
      id
    }
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
    }
  }`

  const { allTags, blogHeroSection } = await getData(PAGE_TAG_QUERY, {
    locale: params.locale,
  })

  return (
    <>
      <Script strategy='afterInteractive' id='use-credentials'>
        {`
           (function(m, o, n, t, e, r, _){ 
             m['__GetResponseAnalyticsObject'] = e;m[e] = m[e]  function() {(m[e].q = m[e].q  []).push(arguments)}; 
             r = o.createElement(n);_ = o.getElementsByTagName(n)[0];r.async = 1;r.src = t;r.setAttribute('crossorigin', 'use-credentials');_.parentNode .insertBefore(r, _); 
           })(window, document, 'script', 'https://ga.getresponse.com/script/522a2f6d-21bd-4727-8289-745ec04ad008/ga.js', 'GrTracking'); 
         `}
      </Script>

      <BlogsPage
        searchParams={searchParams}
        heroSectionData={blogHeroSection}
        params={params}
        tags={allTags}
      />
    </>
  )
}

export default Page
