import { performRequest } from '@/lib/datocms'
import { SITEMAP_DYNAMIC_DATA_QUERY } from '@/lib/datocmsQuery'

const siteUrl = 'https://inqud.com'

export default async function sitemap() {
  const dynamicData = await performRequest({
    query: SITEMAP_DYNAMIC_DATA_QUERY,
  })
  const blogs = dynamicData.allBlogs.map(({ slugPage, _createdAt }) => ({
    url: `${siteUrl}/blog/${slugPage}`,
    lastModified: _createdAt,
    priority: 1,
  }))
  const helpCenterList = dynamicData.allHelpCentres.map(
    ({ slugPage, _createdAt }) => ({
      url: `${siteUrl}/help-center/${slugPage}`,
      lastModified: _createdAt,
      priority: 1,
    })
  )

  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/aml-cft-policy-uab`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/company`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/cookie-policy`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/crypto-widget`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/help-center`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/integration-api`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/modern-slavery-statement`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/personal`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy-notice`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/terms-of-use`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      priority: 1,
    },
    ...blogs,
    ...helpCenterList,
  ]
}
