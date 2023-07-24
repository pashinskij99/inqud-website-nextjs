const fs = require('fs')

function getIndexUrl(name) {
  return `
      <sitemap>
        <loc>https://admiral-studios.com/${name}</loc>
      </sitemap>
    `
}

function createAndWriteFile(pathWithFileName, content) {
  fs.writeFileSync(pathWithFileName, content)
}

function createSubSitemap(fileName, data) {
  const sitemapSubStart =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const sitemapSubEnd = '</urlset>'

  createAndWriteFile(
    fileName,
    [sitemapSubStart, data.join(' '), sitemapSubEnd].join(' ')
  )
}

function createIndexSitemap(fileName, data) {
  const sitemapIndexStart = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`
  const sitemapIndexEnd = '</sitemapindex>'

  createAndWriteFile(
    fileName,
    [sitemapIndexStart, data.join(' '), sitemapIndexEnd].join(' ')
  )
}

function getUrl(name) {
  return `
    <url>
      <loc>https://admiral-studios.com/${name}</loc>
      <lastmod>2023-04-18T12:27:40.152Z</lastmod>
      <priority>1</priority>
    </url>
  `
}

function getStaticPath() {
  const staticPath = fs
    .readdirSync('src/app')
    .filter(
      (staticPage) =>
        ![
          'api',
          '_app.js',
          '_document.js',
          '404.jsx',
          'favicon.ico',
          'registry.jsx',
          'thank.jsx',
          '[slug]',
          'layout.jsx',
        ].includes(staticPage)
    )
    .map((staticPagePath) =>
      staticPagePath !== 'page.jsx' ? staticPagePath.split('.')[0] : ''
    )

  return staticPath
}

;(async () => {
  const newSitemapPagesData = getStaticPath().map((name) => getUrl(name))
  const sitemapSubData = [
    { name: 'sitemap-pages.xml', data: newSitemapPagesData },
  ]
  const newSitemapIndexData = sitemapSubData.map(({ name }) =>
    getIndexUrl(name)
  )
  sitemapSubData.forEach(({ name, data }) => {
    createSubSitemap(`public/${name}`, data)
  })
  createIndexSitemap('public/sitemap.xml', newSitemapIndexData)
})()
