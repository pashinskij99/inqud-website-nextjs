/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'
const withNextIntl = require('next-intl/plugin')('./i18n.js')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
}

// module.exports = withPlugins([withBundleAnalyzer, withNextIntl], nextConfig)
module.exports = withNextIntl(nextConfig)
