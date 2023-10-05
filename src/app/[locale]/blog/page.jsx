import Script from 'next/script'
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
